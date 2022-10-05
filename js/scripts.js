const body = document.querySelector('body');
const containerDiv = document.getElementById('gallery');
let employeesArr = [];

// ------------------------------------------
//  FETCH FUNCTIONS
// ------------------------------------------
//Get and display 12 random users
//1. Fetch function
function fetchData(url) {
    return fetch(url)
        .then(response => response.json())
        .catch(error => console.log('Looks like there was an error: ', error));
}

fetchData("https://randomuser.me/api/?results=12")
    .then(data => {
    employeesArr = data.results;
    displayUserInfo(employeesArr);
})


// ------------------------------------------
//  HELPER FUNCTIONS
// ------------------------------------------
/**
 * Create, gallery items
 * and modal to function as main components of app 
 */
//2. Gallery Items
const displayUserInfo = (data) => {
    const users =  data.forEach((user, index) => {
           const html = `
           <div class="card" data-index=${index}>
           <div class="card-img-container">
               <img class="card-img" src="${user.picture.large}" alt="profile picture">
           </div>
           <div class="card-info-container">
               <h3 id="name" class="card-name cap">${user.name.first} ${user.name.last}</h3>
               <p class="card-text">${user.email}</p>
               <p class="card-text cap">${user.location.city}, ${user.location.state}</p>
           </div>
           </div>
             `;
        containerDiv.insertAdjacentHTML("beforeend", html);
    })
    //Call function to open modal
    openModal(); 
}



//Function to open modal when a gallery item is clicked
const openModal = () => {
    [...document.getElementsByClassName('card')].forEach(card =>{
        card.addEventListener("click", (e) => {
        const index = card.getAttribute("data-index");
        generateModal(employeesArr[index]);
        })
    })
}

//Function to close modal when the button is clicked
const closeModal = () => {
    const button = document.getElementById('modal-close-btn');
    const modalContainer = document.querySelector('.modal-container');
    button.addEventListener("click", (e) => {
        modalContainer.remove(); 
    })  
}

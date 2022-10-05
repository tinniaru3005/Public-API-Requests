const body = document.querySelector('body');
const containerDiv = document.getElementById('gallery');
let employeesArr = [];

// ------------------------------------------
//  FETCH FUNCTIONS
// ------------------------------------------
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



// ------------------------------------------
//  EVENT LISTENERS
// ------------------------------------------



// ------------------------------------------
//  POST DATA
// ------------------------------------------



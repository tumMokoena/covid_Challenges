// get all DOM elements needed for validation
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

// add event listener for button submit
form.addEventListener('submit', function(e) {
    e
    console.log(username.value);
})
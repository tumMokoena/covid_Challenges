// get all DOM elements needed for validation
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

//functions for handling inputs
function showError(input, message){
    const formControl = input.parentElement;
    formControl.className = 'form-control error';

    const small = formControl.querySelector('small');
    small.innerText = message;
}

function showSuccess (input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

//check email is valid
function isValidEmail(email){
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

// check if input are empty

function checkInput(inputArr){
    inputArr.forEach(input => {

        if(input.value.trim() === ''){
            showError(input, `${input.id} is required`);
        } else {
            showSuccess(input);
        }
    });
}

// add event listener for button submit
form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    checkInput([username,email,password,password2]);
})
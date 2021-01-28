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
function isValidEmail(input){
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const emailTest =  re.test(String(input.value).toLowerCase());
    console.log(emailTest);

    if(!emailTest){
        showError(input , 'please enter a valid email');
    } else {
         showSuccess(input);
    }
         
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

function checkLength(input, min, max){
    if(input.value.trim().length  < min){
        showError(input,`${input.id} should be more than ${min} characters`);
    } else if(input.value.trim().length > max) {
        console.log(`${input.id} ${input.value.trim()}`)
        showError(input, `${input.id} should not have characters more than ${max}`);
    } else {
        showSuccess(input);
    }
}

function checkPasswordMatch(input1 , input2){
    if(input1.value !== input2.value ){
        showError(input2, 'passwords does not match!');
    } else {
        showSuccess(input2);
    }
}

// add event listener for button submit
form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    checkInput([username,email,password,password2]);
    checkLength(username, 3, 15);
    checkLength(password, 6 , 20);
    isValidEmail(email);
    checkPasswordMatch(password, password2);
})
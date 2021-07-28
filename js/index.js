let textInput = document.getElementById('text-input');
let sendEmailBttn = document.getElementById('send-email-bttn');
let emailRegexPattern = /(\w|\.)+@(\w)+\.(\D|\.)+/;
let inputErrorIcon = document.getElementById('input-error-icon');

let sendEmail = function(){
    console.log('button clicked');
}
let validateEmail = function(){
    console.log(emailRegexPattern.test(textInput.value));
    if((textInput.value != '') && (!emailRegexPattern.test(textInput.value))){
        textInput.classList.add('border--red');
        inputErrorIcon.classList.remove('hidden');
    }
    else{
        textInput.classList.remove('border--red');
        inputErrorIcon.classList.add('hidden');
    }
}

textInput.addEventListener('change', validateEmail);
sendEmailBttn.addEventListener('click', validateEmail);
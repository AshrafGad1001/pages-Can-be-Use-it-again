var nameError = document.getElementById   ('name-error');
var phoneError = document.getElementById  ('phone-error');
var emailError = document.getElementById  ('email-error');
var messageError = document.getElementById('message-error');
var submitError = document.getElementById('submit-error');



function validateName() {
    let name = document.getElementById('contact-name').value;

    if (name.length==0) {
        nameError.innerHTML = 'Name Is Required';
        return false;
    }
    //`^`: Asserts the start of the string.
    //`[A-Za-z]*`: Matches zero or more occurrences of uppercase or lowercase letters.
    //`\s{1}`: Matches exactly one whitespace character.
    // - Starts with zero or more alphabetical characters (uppercase or lowercase).

    //- Followed by exactly one whitespace character.
    //- Followed by zero or more alphabetical characters (uppercase or lowercase).
    //- Ends with the character "&".
    if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
        nameError.innerHTML = 'Write FullName';
        return false;
    }

    nameError.innerHTML = '<i class="fa-regular fa-circle-check"></i>';
    return true;

}

function validatePhoneNumber() {
    let phone = document.getElementById('contact-phone').value;


    if (phone.length == 0) {
        phoneError.innerHTML = 'Phone Number Is Required';
        return false;
    }
    if (phone.length !== 11) {
        phoneError.innerHTML = 'Phone Number Mustbe 11 digit';
        return false;
    }
    if (!phone.match(/^(010|012|011|015)\d{8}$/)) {
        phoneError.innerHTML = 'only Digit Please';
        return false;
    }
    phoneError.innerHTML = '<i class="fa-regular fa-circle-check"></i>';
    return true;

}

function validateEmail() {
    let email = document.getElementById('contact-Email').value;


    if (email.length == 0) {
        emailError.innerHTML='Email Is Required'
        return false;
    }
    //Can be Use It for Exsaample
    //\b[A-Za-z0-9._%+-]+@(?:gmail|hotmail|yahoo)\.(?:com|org|edu)\b

    if (!email.match(/^[\w-]+(\.[\w-]+)*@[a-zA-Z0-9]+(\.[a-zA-Z0-9]+)*(\.[a-zA-Z]{2,})$/)) {
        emailError.innerHTML = 'Not valid Email';
        return false;
    }

    emailError.innerHTML = '<i class="fa-regular fa-circle-check"></i>';
    return true;
}

function validatemessage(){
    let message = document.getElementById('contact-message').value;
    let Required = 30;
    let left = Required - message.length;

    if (left> 0) {
        messageError.innerHTML=left +'More Charcters Required'
        return false;
    }
 
    messageError.innerHTML = '<i class="fa-regular fa-circle-check"></i>';
    return true;
    
}
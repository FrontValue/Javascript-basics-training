const form = document.getElementById('myForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirm-password');
const submitBtn = document.getElementById('submitBtn');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (validateForm()) {
        // Form submission successful
        alert('Form submitted successfully!');
        form.reset();
    }
});

function validateForm() {
    let isValid = true;

    if (!validateName()) {
        isValid = false;
    }

    if (!validateEmail()) {
        isValid = false;
    }

    if (!validatePassword()) {
        isValid = false;
    }

    if (!validateConfirmPassword()) {
        isValid = false;
    }

    return isValid;
}

function validateName() {
    const nameValue = nameInput.value.trim();
    const nameRegex = /^[a-zA-Z]+$/;

    if (nameValue.length < 2 || !nameRegex.test(nameValue)) {
        displayError(nameInput, 'Name should contain at least 2 alphabetic characters');
        return false;
    }

    clearError(nameInput);
    return true;
}

function validateEmail() {
    const emailValue = emailInput.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(emailValue)) {
        displayError(emailInput, 'Enter a valid email address');
        return false;
    }

    clearError(emailInput);
    return true;
}

function validatePassword() {
    const passwordValue = passwordInput.value;

    if (passwordValue.length < 8) {
        displayError(passwordInput, 'Password should have at least 8 characters');
        return false;
    }

    clearError(passwordInput);
    return true;
}

function validateConfirmPassword() {
    const confirmPasswordValue = confirmPasswordInput.value;
    const passwordValue = passwordInput.value;

    if (confirmPasswordValue !== passwordValue) {
        displayError(confirmPasswordInput, 'Passwords do not match');
        return false;
    }

    clearError(confirmPasswordInput);
    return true;
}

function displayError(inputElement, errorMessage) {
    const errorElement = document.createElement('span');
    errorElement.className = 'error';
    errorElement.innerText = errorMessage;

    inputElement.parentNode.insertBefore(errorElement, inputElement.nextSibling);
}

function clearError(inputElement) {
    if (inputElement.nextSibling && inputElement.nextSibling.className === 'error') {
        inputElement.parentNode.removeChild(inputElement.nextSibling);
    }
}

// Enable or disable the submit button based on form validity
function updateSubmitButton() {
    submitBtn.disabled = !form.checkValidity();
}

form.addEventListener('input', updateSubmitButton);

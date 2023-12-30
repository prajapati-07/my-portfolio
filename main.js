// script.js

// Function for form validation
function validateForm() {
    var email = document.getElementById('email').value;
    
    // Simple email validation
    if (!isValidEmail(email)) {
        alert('Please enter a valid email address.');
        return false;
    }
    
    // You can add more validation logic here if needed
    
    return true;
}

// Function to check if the email is valid
function isValidEmail(email) {
    var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

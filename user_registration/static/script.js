document.getElementById('registration-form').addEventListener('submit', function(event) {
    const email = document.getElementById('id_email');
    const password = document.getElementById('id_password');
    const confirmPassword = document.getElementById('id_confirm_password');
    const errorMessage = document.getElementById('error-message');

    // Clear previous error messages
    errorMessage.textContent = '';
    email.style.borderColor = '';
    password.style.borderColor = '';
    confirmPassword.style.borderColor = '';

    let valid = true;

    // Validate email format
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email.value)) {
        email.style.borderColor = 'red';
        errorMessage.textContent = 'Please enter a valid email address.';
        valid = false;
    }

    // Validate password match
    if (password.value !== confirmPassword.value) {
        password.style.borderColor = 'red';
        confirmPassword.style.borderColor = 'red';
        errorMessage.textContent = 'Passwords do not match.';
        valid = false;
    }
    
    if (!valid) {
        event.preventDefault(); // Prevent form submission if validation fails
    }
});

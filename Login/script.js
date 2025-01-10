const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});
// Get the login button and form fields
const loginButton = document.getElementById('login-button');
const signUpButton = document.getElementById('sign-up-button');
const emailField = document.getElementById('email');
const passwordField = document.getElementById('password');
const nameField = document.getElementById('name');

// Add an event listener to the login button
loginButton.addEventListener('click', (e) => {
    e.preventDefault();

    // Get the email and password values
    const email = emailField.value;
    const password = passwordField.value;

    // Validate the email and password
    if (email && password) {
        // Use a secure protocol to send the credentials to the server
        const xhr = new XMLHttpRequest();
        xhr.open('POST', '/login', true);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.send(JSON.stringify({ email, password }));

        // Handle the response from the server
        xhr.onload = () => {
            if (xhr.status === 200) {
                // Redirect to the welcome page
                window.location.href = 'welcome.html';
            } else {
                alert('Invalid email or password');
            }
        };
    } else {
        alert('Please enter both email and password');
    }
});

// Add an event listener to the sign up button
signUpButton.addEventListener('click', (e) => {
    e.preventDefault();

    // Get the name, email, and password values
    const name = nameField.value;
    const email = emailField.value;
    const password = passwordField.value;

    // Validate the name, email, and password
    if (name && email && password) {
        // Use a secure protocol to send the credentials to the server
        const xhr = new XMLHttpRequest();
        xhr.open('POST', '/sign-up', true);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.send(JSON.stringify({ name, email, password }));

        // Handle the response from the server
        xhr.onload = () => {
            if (xhr.status === 200) {
                // Redirect to the welcome page
                window.location.href = 'welcome.html';
            } else {
                alert('Failed to sign up');
            }
        };
    } else {
        alert('Please enter all fields');
    }
});

// Function to hash the password
function hashPassword(password) {
    const salt = 'your_salt_here';
    const hashedPassword = crypto.subtle.digest('SHA-256', new TextEncoder('utf-8').encode(password + salt));
    return hashedPassword;
}

// Function to validate the input
function validateInput(input) {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (regex.test(input)) {
        return true;
    } else {
        return false;
    }
}

// Function to handle the login logic
function loginLogic(email, password) {
    // Replace this with your actual login logic
    // For example, you can use a database or an API to verify the email and password
    return email === 'example@example.com' && password === 'password123';
}

// Function to handle the sign up logic
function signUpLogic(name, email, password) {
    // Replace this with your actual sign up logic
    // For example, you can use a database or an API to create a new user
    return true;
}

// Function to handle the error
function handleError(error) {
    console.error(error);
    alert('An error occurred');
}

// Function to handle the code exceptions
function handleException(exception) {
    console.error(exception);
    alert('An exception occurred');
}
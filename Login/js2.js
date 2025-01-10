// script.js
const loginButton = document.getElementById('login');

loginButton.addEventListener('click', () => {
    // Assuming you have a function to handle the login logic
    if (loginLogic()) {
        window.location.href = 'welcome.html';
    }
});

// Replace 'welcome.html' with the actual path to the welcome page
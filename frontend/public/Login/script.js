const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');
const loginButton = document.getElementById('loginButton');

// Event listener for the register button to show the registration form
registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

// Event listener for the login button to show the login form
loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

// Event listener for the actual login button
loginButton.addEventListener('click', () => {
    // Here you would typically validate the input and handle authentication

    // Redirect to Roadmap.html after a successful login
    window.location.href = 'file:///C:/Users/user/OneDrive/Desktop/SE%20mini%20Project/Roadmap.html'; // Change this to your actual roadmap URL
});


// script.js
document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById("signup-form");
  
  form.addEventListener("submit", function(event) {
    event.preventDefault();
    
    // You can add form validation and submission logic here
    // For a simple example, you can access form fields like this:
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    
    // Validate and process the form data as needed
    
    // For a basic demonstration, you can log the form data to the console:
    console.log("Name: " + nameInput.value);
    console.log("Email: " + emailInput.value);
    console.log("Password: " + passwordInput.value);
  });
});

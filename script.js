document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("registration-form");
    const feedbackDiv = document.getElementById("form-feedback");


    form.addEventListener("submit", function(event) {
        event.preventDefault();
        feedbackDiv.style.display = "block";
    });
});

const username = document.getElementById("username").value.trim();
const email = document.getElementById("email").value.trim();
const password = document.getElementById("password").value.trim();

let isValid = true;
let errorMessage = "";
let messages = "";
feedbackDiv.textContent = "Registration successful!";
feedbackDiv.style.color = "#28a745";

feedbackDiv.innerHTML = "";
feedbackDiv.style.color = "#dc3545";

if(username.length < 3) {
    isValid = false;
    message += "Username must be at least 3 characters long.<br>";
}
if(email === " " || !email.includes("@") || !email.includes(".")) {
    isValid = false;
    message += "Please enter a valid email address.<br>";
}
if(password.length < 8) {
    isValid = false;
    message += "Password must be at least 8 characters long.<br>";
}

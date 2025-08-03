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
let errorMessages = [];

if(username.length < 3) {
    isValid = false;
    errorMessages.push("Username must be at least 3 characters long.<br>");
}
if(email === " " || !email.includes("@") || !email.includes(".")) {
    isValid = false;
    errorMessages.push("Please enter a valid email address.<br>");
}
if(password.length < 8) {
    isValid = false;
    errorMessages.push("Password must be at least 8 characters long.<br>");
}

if (isValid) {
    feedbackDiv.textContent = "Registration successful!";
    feedbackDiv.style.color = "#28a745";
} else {
    feedbackDiv.innerHTML = messages.join ("<br>");
    feedbackDiv.style.color = "#dc3545";
}

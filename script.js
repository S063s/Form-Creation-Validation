document.addEventListener("DOMContentLoaded", function() {
    const registrationForm = document.getElementById("form");
    registrationForm.addEventListener("submit", function(e) {
        e.preventDefault();
        if (validateForm()) {
            registrationForm.submit();
        }

        const feedbackDiv = document.getElementById("form-feedback");
        feedbackDiv.addEventListener("click", function() {
            feedbackDiv.style.display = "block";
        });
    });
});

function validateForm() {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const age = document.getElementById("age").value.trim();


    if (name.length < 3) {
        alert("Name must be at least 3 characters long.");
        return false;
    }

    if (!email.includes("@") || !email.includes(".")) {
        alert("Email must contain '@' and '.' characters.");
        return false;
    }

    if (name === "" || email === "" || age === "") {
        alert("All fields are required.");
        return false;
    }

    if (!validateEmail(email)) {
        alert("Invalid email format.");
        return false;
    }

    if (password.length < 8) {
        alert("Password must be at least 8 characters long.");
        return false;
    }

    if (isNaN(age) || age <= 0) {
        alert("Invalid age. Age must be a positive number.");
        return false;
    }

    return true;
}


function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}



document.addEventListener("DOMContentLoaded", () => {
    // Select the form and feedback division
    const form = document.getElementById("registration-form");
    const feedbackDiv = document.getElementById("form-feedback");

    // Add form submission event listener
    form.addEventListener("submit", (event) => {
        event.preventDefault(); // Prevent form from submitting

        // Retrieve user inputs and trim whitespace
        const username = document.getElementById("username").value.trim();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();

        // Initialize validation variables
        let isValid = true;
        const messages = [];

        // Username validation: must be at least 3 characters
        if (username.length < 3) {
            isValid = false;
            messages.push("Username must be at least 3 characters.");
        }

        // Email validation: must contain '@' and '.'
        if (!email.includes('@') || !email.includes('.')) {
            isValid = false;
            messages.push("Invalid email address.");
        }

        // Password validation: must be at least 8 characters
        if (password.length < 8) {
            isValid = false;
            messages.push("Password must be at least 8 characters.");
        }

        // Display feedback
        feedbackDiv.style.display = "block"; // Show the feedback div

        if (isValid) {
            feedbackDiv.textContent = "Registration successful!";
            feedbackDiv.style.color = "#28a745"; // Success color
            feedbackDiv.style.backgroundColor = "#d4edda";
        } else {
            feedbackDiv.innerHTML = messages.join("<br>");
            feedbackDiv.style.color = "#d8000c"; // Error color
            feedbackDiv.style.backgroundColor = "#ffbaba";
        }
    });
});

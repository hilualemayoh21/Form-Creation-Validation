
document.addEventListener("DOMContentLoaded", () => {
  // Form and Feedback Selection
  const form = document.getElementById("registration-form");
  const feedbackDiv = document.getElementById("form-feedback");

  // Form Submission Event Listener
  form.addEventListener("submit", (event) => {
    event.preventDefault(); 

    // Retrieve and Trim Input Values
    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    // Validation Variables
    let isValid = true;
    const messages = [];

    // Username Validation: Minimum 3 characters
    if (username.length < 3) {
      isValid = false;
      messages.push("Username must be at least 3 characters long.");
    }

    // Email Validation: Must contain '@' and '.'
    if (!email.includes("@") || !email.includes(".")) {
      isValid = false;
      messages.push("Please enter a valid email address.");
    }

    // Password Validation: Minimum 8 characters
    if (password.length < 8) {
      isValid = false;
      messages.push("Password must be at least 8 characters long.");
    }

    
    feedbackDiv.style.display = "block"; 

    if (isValid) {
     
      feedbackDiv.textContent = "Registration successful!";
      feedbackDiv.style.color = "#28a745"; 
    } else {
     
      feedbackDiv.innerHTML = messages.join("<br>"); 
      feedbackDiv.style.color = "#dc3545"; 
    }
  });
});


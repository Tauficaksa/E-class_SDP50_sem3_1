// Function to handle form submission
function loginUser(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get the email and password values
    const email = document.getElementById("email").value;
    const password = document.getElementById("pwd").value;

    // Validate the email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    // Check if the password meets minimum requirements (e.g., length >= 6)
    if (password.length < 6) {
        alert("Password must be at least 6 characters long.");
        return;
    }

    // Determine which API to call
    const loginData = {
        emailId: email,
        pwd: password
    };

    // Default API for user login
    let apiUrl = "http://localhost:8080/userlogin";

    // Check if the email starts with "admin" before the @ symbol
    

    // Send a POST request to the backend API
    fetch(apiUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(loginData)
    })
    .then(response => response.text()) // Process the response as plain text
    .then(result => {
        if (result === "user block") {
            alert("you are BLOCKED by admin");
            
        } else if (result === "Login Successful!") {
            alert("User Login Successful!");
            window.location.href = "/src/userfiles/userdashboard.html"; // Redirect to user dashboard
        } else {
            alert("Invalid email or password. Please try again.");
            // Optionally redirect to failure page
            // window.location.href = "/frontend/testing/logintesting/failure.html"; 
        }
    })
    .catch(error => {
        console.error("Error:", error);
        alert("Something went wrong. Please try again later.");
        alert("Looks like our servers are on leave.");
        alert("Don't worry, tauficaksa-admin will fire the servers and hire new ones!");
    });
}

// Attach the form submit event listener
document.getElementById("loginForm").addEventListener("submit", loginUser);

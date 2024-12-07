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

    // Create an object to send to the backend
    const loginData = {
        emailId: email,
        pwd: password
    };

    // Send a POST request to the backend API
    fetch("http://localhost:8080/adimnlogin", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(loginData)
    })
    .then(response => response.text()) // Process the response as plain text
    .then(result => {
        if (result === "Login Successful!") {
            alert("Login Successful!");
            window.location.href = "/src/adminfiles/admindashboard.html"; // Redirect on success
        } else {
            
            alert("Invalid email or password. Please try again.");
            // window.location.href = "/frontend/testing/logintesting/failure.html"; // Redirect on failure
        }
    })
    .catch(error => {
        console.error("Error:", error);
        alert("Something went wrong. Please try again later.");
        alert("looks like our servers are on leave ,");
        alert("don't worry tauficaksa-admin will fire the servers and hire a new servers,");

    });
}

// Attach the form submit event listener
document.getElementById("loginForm").addEventListener("submit", loginUser);

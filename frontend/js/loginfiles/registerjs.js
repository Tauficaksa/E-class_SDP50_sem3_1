// Function to handle form submission
function registerUser(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get the form values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("pwd").value;

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    // Check if password meets the minimum length
    if (password.length < 6) {
        alert("Password must be at least 6 characters long.");
        return;
    }

    // Create an object to send to the backend
    const userData = {
        name: name,
        emailId: email,
        pwd: password
    };

    // Send a POST request to the API
    fetch("http://localhost:8080/PostUserData", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userData)
    })
    .then(response => {
        if (response.ok) {
            alert("Registration Successful!");
            window.location.href = "/src/loginfiles/login.html"; // Redirect on success
        } else {
            return response.text().then(errorMessage => {
                alert("Registration Failed: " + errorMessage);
            });
        }
    })
    .catch(error => {
        console.error("Error:", error);
        alert("Something went wrong. Please try again later.");
    });
}

// Attach the form submit event listener
document.getElementById("registerForm").addEventListener("submit", registerUser);

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
    fetch("http://localhost:8080/userlogin", {
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
            window.location.href = "/src/userfiles/userdashboard.html"; // Redirect on success
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


// // Function to handle form submission
// function loginUser(event) {
//     event.preventDefault(); // Prevent the default form submission

//     // Get the email and password values
//     const email = document.getElementById("email").value;
//     const password = document.getElementById("pwd").value;

//     // Validate the email format
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailRegex.test(email)) {
//         alert("Please enter a valid email address.");
//         return;
//     }

//     // Check if the password meets minimum requirements (e.g., length >= 6)
//     if (password.length < 6) {
//         alert("Password must be at least 6 characters long.");
//         return;
//     }

//     // Determine which API to call (admin or user)
//     const loginData = {
//         emailId: email,
//         pwd: password
//     };

//     // Default API for user login
//     let apiUrl = "http://localhost:8080/userlogin";

//     // If email contains a specific admin keyword (or another criterion), use the admin login API
//     if (email.includes('@admin.com')) {  // Example admin domain, modify as needed
//         apiUrl = "http://localhost:8080/adminlogin";
//     }

//     // Send a POST request to the backend API
//     fetch(apiUrl, {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json"
//         },
//         body: JSON.stringify(loginData)
//     })
//     .then(response => response.text()) // Process the response as plain text
//     .then(result => {
//         if (result === "Login Successful!") {
//             if (apiUrl === "http://localhost:8080/adminlogin") {
//                 alert("Admin Login Successful!");
//                 window.location.href = "/admin/dashboard"; // Redirect to admin portal
//             } else {
//                 alert("User Login Successful!");
//                 window.location.href = "/src/userfiles/userdashboard.html"; // Redirect to user dashboard
//             }
//         } else {
//             alert("Invalid email or password. Please try again.");
//             // Optionally redirect to failure page
//             // window.location.href = "/frontend/testing/logintesting/failure.html"; 
//         }
//     })
//     .catch(error => {
//         console.error("Error:", error);
//         alert("Something went wrong. Please try again later.");
//     });
// }

// // Attach the form submit event listener
// document.getElementById("loginForm").addEventListener("submit", loginUser);

// Function to handle OTP form submission
function verifyOTP(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get the OTP value entered by the user
    const otp = document.getElementById("otp").value;

    // Validate OTP format (6-digit numeric code)
    const otpRegex = /^\d{6}$/;
    if (!otpRegex.test(otp)) {
        alert("Please enter a valid 6-digit OTP.");
        return;
    }

    // Create an object to send to the backend
    const otpData = {
        otp: otp
    };

    // Send a POST request to the OTP verification API
    fetch("http://localhost:8080/validateMailOTP", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(otpData)
    })
    .then(response => {
        if (response.ok) {
            alert("OTP Verified Successfully! Your registration is now complete.");
            window.location.href = "/src/loginfiles/login.html"; // Redirect to the login page on success
        } else {
            return response.text().then(errorMessage => {
                alert("OTP Verification Failed: " + errorMessage);
            });
        }
    })
    .catch(error => {
        console.error("Error:", error);
        alert("Something went wrong. Please try again later.");
    });
}

// Attach the form submit event listener
document.getElementById("otpForm").addEventListener("submit", verifyOTP);

// Function to handle Resend OTP
function resendOTP() {
    fetch("http://localhost:8080/resendOTP", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(response => {
        if (response.ok) {
            alert("A new OTP has been sent to your email.");
        } else {
            return response.text().then(errorMessage => {
                alert("Resend OTP Failed: " + errorMessage);
            });
        }
    })
    .catch(error => {
        console.error("Error:", error);
        alert("Something went wrong. Please try again later.");
    });
}

// Attach the Resend OTP event listener
document.querySelector(".resend-otp").addEventListener("click", (event) => {
    event.preventDefault(); // Prevent default link behavior
    resendOTP();
});

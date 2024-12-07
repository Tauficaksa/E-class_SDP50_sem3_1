// Fetch and render users from the backend
function fetchAndRenderUsers() {
    fetch('http://localhost:8080/GetAllUserData')
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(users => {
            console.log("Fetched users:", users);
            const userTable = document.querySelector('#userTable tbody');
            userTable.innerHTML = ""; // Clear the table

            users.forEach(user => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${user.id}</td>
                    <td>${user.name}</td>
                    <td>${user.emailId}</td>
                    <td id="status-${user.id}">${user.status ? 'Active' : 'Blocked'}</td>
                    <td>
                        <button 
                            class="btn btn-primary btn-toggle-status" 
                            data-user-id="${user.id}" 
                            data-user-status="${user.status}">
                            Toggle Status
                        </button>
                    </td>
                `;
                userTable.appendChild(row);
            });

            // Attach event listeners to the buttons
            attachToggleListeners();
        })
        .catch(error => {
            console.error('Error fetching user data:', error);
        });
}

// Function to attach click listeners to toggle buttons
function attachToggleListeners() {
    const toggleButtons = document.querySelectorAll('.btn-toggle-status');
    toggleButtons.forEach(button => {
        button.addEventListener('click', event => {
            const userId = parseInt(button.getAttribute('data-user-id'));
            const currentStatus = button.getAttribute('data-user-status') === 'true';
            toggleStatus(userId, currentStatus);
        });
    });
}

// Function to toggle user status
function toggleStatus(userId, currentStatus) {
    const newStatus = !currentStatus; // Toggle status
    const statusCell = document.getElementById(`status-${userId}`);
    const originalText = statusCell.textContent; // Save the current state for rollback

    // Update the UI optimistically
    statusCell.textContent = newStatus ? 'Active' : 'Blocked';

    // Call the API to update the status in the backend
    fetch('http://localhost:8080/updateuserbyID', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            id: userId,
            status: newStatus,
        }),
    })
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            console.log(`Status for user ${userId} updated to ${newStatus}`);
            // Update the button's data attribute to reflect the new status
            const button = document.querySelector(`button[data-user-id="${userId}"]`);
            button.setAttribute('data-user-status', newStatus);
            
            // Show success alert
            alert('User status updated successfully');
        })
        .catch(error => {
            console.error('Error updating user status:', error);
            alert('Failed to update user status');
            // Revert the UI back to its original state
            statusCell.textContent = originalText;
        });
}

// Initial fetch of users when the page loads
fetchAndRenderUsers();

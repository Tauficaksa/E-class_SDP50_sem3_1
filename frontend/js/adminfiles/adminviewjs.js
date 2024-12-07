fetch('http://localhost:8080/GetAllUserData')
    .then(response => response.json())
    .then(users => {
        const userTable = document.querySelector('#userTable tbody');
        users.forEach(user => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${user.id}</td>
                <td>${user.name}</td>
                <td>${user.emailId}</td> <!-- Change to emailId -->
                <td id="status-${user.id}">${user.status ? 'Active' : 'Blocked'}</td>
                <td><button class="btn btn-primary btn-toggle-status" onclick="toggleStatus(${user.id}, ${user.status})">Toggle Status</button></td>
            `;
            userTable.appendChild(row);
        });
    })
    .catch(error => {
        console.error('Error fetching user data:', error);
    });

// Function to toggle user status
function toggleStatus(userId, currentStatus) {
    const newStatus = currentStatus ? false : true; // Toggle between true and false
    
    // Update the UI immediately
    const statusCell = document.getElementById(`status-${userId}`);
    statusCell.textContent = newStatus ? 'Active' : 'Blocked';

    // Make the API call to update the status in the Spring Boot backend
    fetch('http://localhost:8080/updateuserbyID', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id: userId, status: newStatus }),
    })
    .then(response => response.json())
    .then(data => {
        alert("user status changed");
        console.log('User status updated:', data);
    })
    .catch(error => {
        alert("error");
        console.error('Error updating user status:', error);
        // Revert the status change in case of error
        statusCell.textContent = currentStatus ? 'Active' : 'Blocked';
    });
}

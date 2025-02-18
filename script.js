//your JS code here. If required.
// Function to display current date and time
function displayDateTime() {
    // Create a new Date object
    const currentDateTime = new Date();

    // Format the date and time as "YYYY-MM-DD HH:MM:SS"
    const date = currentDateTime.toLocaleDateString();
    const time = currentDateTime.toLocaleTimeString();

    // Combine date and time
    const dateTimeString = `${date}, ${time}`;

    // Display the formatted date and time in the div with id 'datetime'
    document.getElementById('timer').textContent = dateTimeString;
}

// Call the function to display the current date and time when the page loads
displayDateTime();

// Optionally, you can update the time every second
setInterval(displayDateTime, 1000);

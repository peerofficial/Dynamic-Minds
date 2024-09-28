document.getElementById('Book').addEventListener('click', function() {
    // Redirect to the cards page when the button is clicked
    window.location.href = '2ndpage.html'; // Change to the name of your cards page
});
// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', function () {
    // Select all date buttons
    const dateButtons = document.querySelectorAll('.date');

    // Loop through each date button and add a click event
    dateButtons.forEach(button => {
        button.addEventListener('click', function () {
            // Remove the 'active' class from all buttons
            dateButtons.forEach(btn => btn.classList.remove('active'));

            // Add the 'active' class to the clicked button
            this.classList.add('active');
        });
    });
});




document.addEventListener("DOMContentLoaded", function() {
    // Select all showtime buttons
    const showtimeButtons = document.querySelectorAll(".showtime");

    // Add a click event listener to each button
    showtimeButtons.forEach(button => {
        button.addEventListener("click", function() {
            // Display the confirmation alert
            const confirmation = confirm("Confirm booking?");
            
            // If user clicks "OK" in the alert
            if (confirmation) {
                // Change the text to "Booked"
                button.textContent = "Booked";
                // Disable the button to prevent further clicks
                button.disabled = true;
            }
        });
    });
});

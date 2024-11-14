document.addEventListener("DOMContentLoaded", function() {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Form validation and login simulation
    document.querySelector('form').addEventListener('submit', function(e) {
        const email = document.getElementById('email').value;
        const password = document.getElementById('pwd').value;

        if (!validateEmail(email)) {
            alert('Please enter a valid email address.');
            e.preventDefault();
        }

        if (password.length < 6) {
            alert('Password must be at least 6 characters long.');
            e.preventDefault();
        }

        // Simulate successful login and show modal
        if (validateEmail(email) && password.length >= 6) {
            e.preventDefault(); // Prevent actual form submission for simulation
            $('#successModal').modal('show'); // Show success modal
        }
    });

    function validateEmail(email) {
        const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return re.test(String(email).toLowerCase());
    }
});
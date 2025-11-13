document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contact-form');
    const emailInput = document.getElementById('email');
    const emailError = document.getElementById('email-error');

    // Function to check if the email format is valid
    function validateEmail(email) {
        // Basic regex for email format
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }

    form.addEventListener('submit', function(event) {
        let isValid = true;

        // Reset error messages
        emailError.textContent = '';
        
        // 1. Basic Email Validation
        if (!validateEmail(emailInput.value)) {
            emailError.textContent = 'Please enter a valid email address (e.g., name@domain.com).';
            isValid = false;
        }

        // 2. Simple Check for required fields (already handled by HTML 'required', but good for confirmation)
        if (document.getElementById('name').value.trim() === '') {
            isValid = false;
        }
        
        if (document.getElementById('service').value === '') {
            isValid = false;
        }

        if (document.getElementById('message').value.trim() === '') {
            isValid = false;
        }
        
        // If validation fails, prevent form submission
        if (!isValid) {
            event.preventDefault();
            // Optional: Scroll to the first error
            alert('Please check the required fields and correct any errors.');
        }

        // IMPORTANT: The 'action="submit_form.php"' in the HTML is for the SERVER side. 
        // This client-side JS validation only improves the user experience; 
        // you still need a backend script (PHP, Node, Python, etc.) to securely receive and process the data.
    });
});
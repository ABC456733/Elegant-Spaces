document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navList = document.querySelector('.nav-list');

    // Toggles the mobile navigation menu visibility
    menuToggle.addEventListener('click', function() {
        navList.classList.toggle('active');
        
        // Change icon (optional: bars to times/close)
        const icon = menuToggle.querySelector('i');
        if (navList.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });

    // You would add more JavaScript here for:
    // 1. Portfolio Image Lightbox/Modal functionality
    // 2. Client Testimonial Slider/Carousel
    // 3. Contact Form Validation
    
    // Example of simple form validation (on a contact page):
    /*
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            const emailInput = document.getElementById('email');
            if (!emailInput.value.includes('@')) {
                alert('Please enter a valid email address.');
                event.preventDefault(); // Stop form submission
            }
        });
    }
    */
});
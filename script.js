document.addEventListener("DOMContentLoaded", function() {
    // Smooth scroll for navigation links
    const navLinks = document.querySelectorAll('header nav ul li a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            window.scrollTo({
                top: targetElement.offsetTop - 50,
                behavior: 'smooth'
            });

            if (window.innerWidth <= 768) {
                header.classList.remove('nav-active');
            }
        });
    });

    // Contact form submission handling
    const contactForm = document.getElementById('contact-form');
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const formData = new FormData(contactForm);
        const formObject = {};
        
        formData.forEach((value, key) => {
            formObject[key] = value;
        });
        
        // Replace with actual form submission logic
        console.log('Form submitted:', formObject);
        
        alert('Thank you for reaching out! Your message has been sent.');
        contactForm.reset();
    });

    // Mobile menu toggle
    const menuIcon = document.querySelector('.menu-icon');
    const header = document.querySelector('header');

    menuIcon.addEventListener('click', function() {
        header.classList.toggle('nav-active');
    });
});





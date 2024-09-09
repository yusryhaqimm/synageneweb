// filename: script.js
document.addEventListener('DOMContentLoaded', function() {
    // Menu toggle functionality
    const menuToggle = document.getElementById('nav-toggle');
    const nav = document.querySelector('nav');

    menuToggle.addEventListener('change', function() {
        if (this.checked) {
            nav.style.display = 'flex';
        } else {
            nav.style.display = 'none';
        }
    });

    // Fade-in sections on scroll functionality
    const sections = document.querySelectorAll('.fade-in-section');

    // Create an IntersectionObserver instance
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1'; // Make the element fully visible
                entry.target.style.transform = 'translateY(0)'; // Reset transform
                observer.unobserve(entry.target); // Stop observing after animation
            }
        });
    }, {
        root: null, // Use the viewport as the root
        rootMargin: '0px', // No margin around the root
        threshold: 0.1 // Trigger when 10% of the section is visible
    });

    // Observe each section
    sections.forEach(section => {
        observer.observe(section);
    });
});

// scripts.js

// Form Submission Handling
document.addEventListener("DOMContentLoaded", function() {
    const contactForm = document.querySelector(".contact form");

    contactForm.addEventListener("submit", function(e) {
        e.preventDefault(); // Prevents the page from reloading

        // Collect form data
        const name = contactForm.querySelector('input[type="text"]').value;
        const email = contactForm.querySelector('input[type="email"]').value;
        const message = contactForm.querySelector('textarea').value;

        // Display the form data (for now, we just log it to the console)
        console.log("Form Submitted:");
        console.log("Name:", name);
        console.log("Email:", email);
        console.log("Message:", message);

        // Optionally, you can add more code to send this data to a server

        // Show a confirmation message (can be replaced with a modal or alert)
        alert("Your message has been sent! We will get back to you soon.");

        // Reset form after submission
        contactForm.reset();
    });
});
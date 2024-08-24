// Basic form validation
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    // Validate form fields
    const name = document.querySelector('#contact-form input[type="text"]').value;
    const email = document.querySelector('#contact-form input[type="email"]').value;
    const subject = document.querySelector('#contact-form input[type="text"]').value;
    const message = document.querySelector('#contact-form textarea').value;

    if (name && email && subject && message) {
        alert('Thank you for your message!');
        this.reset(); // Reset the form fields
    } else {
        alert('Please fill out all fields.');
    }
});

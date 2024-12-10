document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const successMessage = document.getElementById('success-message');
    const errorMessage = document.getElementById('error-message');
    const submitButton = this.querySelector('button[type="submit"]');
    
    // Disable the submit button and hide any previous messages
    submitButton.disabled = true;
    successMessage.classList.add('hidden');
    errorMessage.classList.add('hidden');

    // Get form data
    const templateParams = {
        to_name: 'Stefan',  // Add your name here as the recipient
        from_name: document.getElementById('name').value,
        from_email: document.getElementById('email').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value,
        reply_to: document.getElementById('email').value
    };

    // Send email using EmailJS
    emailjs.send('service_htr8lps', 'template_xu8sxwe', templateParams)
        .then(function() {
            successMessage.classList.remove('hidden');
            document.getElementById('contact-form').reset();
        })
        .catch(function(error) {
            console.error('Error:', error);
            errorMessage.classList.remove('hidden');
        })
        .finally(function() {
            submitButton.disabled = false;
        });
});

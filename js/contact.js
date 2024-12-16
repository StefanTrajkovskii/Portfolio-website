document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const successMessage = document.getElementById('success-message');
    const errorMessage = document.getElementById('error-message');
    const submitButton = this.querySelector('button[type="submit"]');
    
    // Disable the submit button and hide any previous messages
    submitButton.disabled = true;
    if (successMessage) successMessage.classList.add('hidden');
    if (errorMessage) errorMessage.classList.add('hidden');

    // Get form data
    const templateParams = {
        from_name: document.getElementById('name').value,
        from_email: document.getElementById('email').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value,
        to_name: 'Stefan Trajkovski',
        reply_to: document.getElementById('email').value
    };

    // Send email using EmailJS
    emailjs.send('service_7bo0j0l', 'template_xu8sxwe', templateParams)
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            if (successMessage) {
                successMessage.classList.remove('hidden');
            } else {
                alert('Message sent successfully!');
            }
            document.getElementById('contact-form').reset();
        })
        .catch(function(error) {
            console.error('FAILED...', error);
            if (errorMessage) {
                errorMessage.classList.remove('hidden');
            } else {
                alert('Failed to send message. Please try again.');
            }
        })
        .finally(function() {
            submitButton.disabled = false;
        });
});

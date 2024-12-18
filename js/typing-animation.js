document.addEventListener('DOMContentLoaded', function() {
    const text = "Trajkovski";
    let index = 0;
    const typingDelay = 150; // Delay between each character
    const startDelay = 500; // Initial delay before typing starts

    // Create the typing text element
    const typingText = document.createElement('span');
    typingText.className = 'gradient-text';
    
    // Get the container and cursor
    const nameContainer = document.querySelector('.typing-container div:nth-child(2)');
    const cursor = document.querySelector('.typing-cursor');
    
    // Insert typing text before cursor
    if (nameContainer && cursor) {
        nameContainer.insertBefore(typingText, cursor);
    }

    // Start typing animation after delay
    setTimeout(() => {
        const typeNextChar = () => {
            if (index < text.length) {
                typingText.textContent += text.charAt(index);
                index++;
                setTimeout(typeNextChar, typingDelay);
            }
        };
        typeNextChar();
    }, startDelay);
});

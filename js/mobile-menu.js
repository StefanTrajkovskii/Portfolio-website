document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    let isAnimating = false;

    function toggleMenu(shouldOpen) {
        if (isAnimating) return;
        isAnimating = true;

        if (!shouldOpen) {
            // Close menu
            mobileMenu.classList.remove('opacity-100', 'scale-100');
            mobileMenu.classList.add('opacity-0', 'scale-95');
            mobileMenuButton.classList.remove('mobile-menu-open');
            
            setTimeout(() => {
                mobileMenu.classList.add('hidden');
                isAnimating = false;
            }, 300);
        } else {
            // Open menu
            mobileMenu.classList.remove('hidden');
            // Force browser reflow
            mobileMenu.offsetHeight;
            
            requestAnimationFrame(() => {
                mobileMenu.classList.remove('opacity-0', 'scale-95');
                mobileMenu.classList.add('opacity-100', 'scale-100');
                mobileMenuButton.classList.add('mobile-menu-open');
                
                setTimeout(() => {
                    isAnimating = false;
                }, 300);
            });
        }
    }

    mobileMenuButton.addEventListener('click', function() {
        const isOpen = mobileMenu.classList.contains('opacity-100');
        toggleMenu(!isOpen);
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        const isClickInside = mobileMenuButton.contains(event.target) || mobileMenu.contains(event.target);
        
        if (!isClickInside && mobileMenu.classList.contains('opacity-100')) {
            toggleMenu(false);
        }
    });
});

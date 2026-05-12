// Navigation functionality
class Navigation {
    constructor() {
        this.navToggle = document.querySelector('.nav-toggle');
        this.navMenu = document.querySelector('.nav-menu');
        this.init();
    }

    init() {
        if (this.navToggle && this.navMenu) {
            this.navToggle.addEventListener('click', () => this.toggleMenu());
            this.setupKeyboardNavigation();
            this.setupSmoothScrolling();
        }
    }

    toggleMenu() {
        const isActive = this.navMenu.classList.contains('active');
        this.navMenu.classList.toggle('active');
        this.navToggle.classList.toggle('active');

        // Update ARIA attributes for accessibility
        this.navToggle.setAttribute('aria-expanded', !isActive);
        this.navMenu.setAttribute('aria-hidden', isActive);
    }

    setupKeyboardNavigation() {
        // Close menu on Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.navMenu.classList.contains('active')) {
                this.toggleMenu();
            }
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!this.navToggle.contains(e.target) && !this.navMenu.contains(e.target)) {
                this.navMenu.classList.remove('active');
                this.navToggle.classList.remove('active');
                this.navToggle.setAttribute('aria-expanded', 'false');
                this.navMenu.setAttribute('aria-hidden', 'true');
            }
        });
    }

    setupSmoothScrolling() {
        // Smooth scroll for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                const target = document.querySelector(anchor.getAttribute('href'));
                if (target) {
                    e.preventDefault();
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }
}

// Initialize navigation when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new Navigation();
});
document.addEventListener("DOMContentLoaded", function () {
    // 1. Scroll Reveal Animation for all main sections and cards
    const animatedElements = document.querySelectorAll('.profile-card-classic, .project-card, .card, .contact-form');

    // Set initial state for animation
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)';
    });

    const revealOnScroll = () => {
        const triggerBottom = window.innerHeight * 0.85;

        animatedElements.forEach(el => {
            const boxTop = el.getBoundingClientRect().top;

            if (boxTop < triggerBottom) {
                el.style.opacity = '1';
                el.style.transform = 'translateY(0)';
            }
        });
    };

    // Trigger on scroll and initial load
    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll();

    // 2. Interactive Click Effect for Project Cards
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.borderColor = 'var(--accent-gold)';
        });
        card.addEventListener('mouseleave', () => {
            card.style.borderColor = 'var(--border-color)';
        });
    });

    // 3. Contact Form Submission Real Feedback
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            const submitBtn = contactForm.querySelector('.submit-btn');
            if (submitBtn) {
                submitBtn.textContent = 'Sending Message...';
                submitBtn.style.opacity = '0.7';
            }
        });
    }
});
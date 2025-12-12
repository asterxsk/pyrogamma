// ==========================================
// PYROGAMMA GROUP - ANIMATIONS (SNAPPY)
// Anime.js powered interactions - Fast & Responsive
// ==========================================

// Wait for anime.js to load
document.addEventListener('DOMContentLoaded', () => {

    // ===========================
    // LOADING SCREEN ANIMATION
    // ===========================
    const loadingScreen = document.querySelector('.loading-screen');
    const loadingText = document.querySelector('.loading-text');

    if (loadingScreen && loadingText) {
        // Animate text in - VERY FAST
        anime({
            targets: '.loading-text',
            opacity: [0, 1],
            scale: [0.95, 1],
            duration: 300,
            easing: 'easeOutCubic',
            complete: () => {
                // Brief glow pulse
                anime({
                    targets: '.loading-text',
                    textShadow: [
                        '0 0 30px rgba(255, 107, 26, 0.6)',
                        '0 0 50px rgba(255, 107, 26, 0.9)',
                        '0 0 30px rgba(255, 107, 26, 0.6)'
                    ],
                    duration: 400,
                    easing: 'easeInOutQuad',
                    complete: () => {
                        // Fade out loading screen - FAST
                        anime({
                            targets: '.loading-screen',
                            opacity: [1, 0],
                            duration: 300,
                            easing: 'easeOutCubic',
                            complete: () => {
                                loadingScreen.classList.add('hidden');
                                initPageAnimations();
                            }
                        });
                    }
                });
            }
        });
    } else {
        // If no loading screen, just init animations
        initPageAnimations();
    }

    // ===========================
    // PAGE LOAD ANIMATIONS
    // ===========================
    function initPageAnimations() {
        // Hero logo glow (if present) - FASTER
        const heroLogo = document.querySelector('.hero-logo');
        if (heroLogo) {
            anime({
                targets: '.hero-logo',
                opacity: [0, 1],
                scale: [0.9, 1],
                duration: 500, // Was 1000
                easing: 'easeOutCubic'
            });

            // Continuous subtle glow - FASTER LOOP
            anime({
                targets: '.hero-logo img',
                filter: [
                    'drop-shadow(0 0 30px rgba(255, 107, 26, 0.6))',
                    'drop-shadow(0 0 45px rgba(255, 107, 26, 0.4))',
                    'drop-shadow(0 0 30px rgba(255, 107, 26, 0.6))'
                ],
                duration: 2000, // Was 3000
                easing: 'easeInOutSine',
                loop: true
            });
        }

        // Fade in sections sequentially - FASTER
        const sections = document.querySelectorAll('section');
        if (sections.length > 0) {
            anime({
                targets: sections,
                opacity: [0, 1],
                translateY: [20, 0], // Was 30
                delay: anime.stagger(60, { start: 150 }), // Was 100/300
                duration: 500, // Was 800
                easing: 'easeOutCubic'
            });
        }

        // Hero content animation - FASTER
        const heroContent = document.querySelectorAll('.tagline, .slogan, .hero h1, .hero p, .hero .btn');
        if (heroContent.length > 0) {
            anime({
                targets: heroContent,
                opacity: [0, 1],
                translateY: [15, 0], // Was 20
                delay: anime.stagger(80, { start: 250 }), // Was 150/500
                duration: 400, // Was 600
                easing: 'easeOutCubic'
            });
        }
    }

    // ===========================
    // PHILOSOPHY FLAME ANIMATION
    // ===========================
    const philosophyText = document.querySelector('.philosophy-text');
    if (philosophyText) {
        anime({
            targets: '.philosophy-text',
            opacity: [0.7, 1, 0.7],
            textShadow: [
                '0 0 10px rgba(255, 107, 26, 0.5)',
                '0 0 20px rgba(255, 107, 26, 0.8)',
                '0 0 10px rgba(255, 107, 26, 0.5)'
            ],
            duration: 2000, // Was 3000
            easing: 'easeInOutQuad',
            loop: true
        });
    }

    // ===========================
    // BUTTON HOVER ANIMATIONS
    // ===========================
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(btn => {
        btn.addEventListener('mouseenter', () => {
            anime({
                targets: btn,
                scale: 1.05,
                duration: 150, // Was 200
                easing: 'easeOutCubic'
            });
        });

        btn.addEventListener('mouseleave', () => {
            anime({
                targets: btn,
                scale: 1,
                duration: 150, // Was 200
                easing: 'easeOutCubic'
            });
        });
    });

    // ===========================
    // CARD ENTRANCE ANIMATIONS
    // ===========================
    const cards = document.querySelectorAll('.card');
    if (cards.length > 0) {
        anime({
            targets: cards,
            opacity: [0, 1],
            translateY: [30, 0], // Was 40
            delay: anime.stagger(60), // Was 100
            duration: 400, // Was 600
            easing: 'easeOutCubic'
        });
    }

    // ===========================
    // NAVIGATION LINK ANIMATIONS
    // ===========================
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.addEventListener('mouseenter', function () {
            // const underline = this.querySelector('::after'); // Removed unused variable and invalid selector
            anime({
                targets: this,
                color: ['#F5F5F5', '#FF6B1A'],
                duration: 200, // Was 300
                easing: 'easeOutCubic'
            });
        });

        link.addEventListener('mouseleave', function () {
            anime({
                targets: this,
                color: ['#FF6B1A', '#F5F5F5'],
                duration: 200, // Was 300
                easing: 'easeOutCubic'
            });
        });
    });

    // ===========================
    // SCROLL REVEAL ANIMATIONS
    // ===========================
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px' // Was -100px, triggers sooner
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                anime({
                    targets: entry.target,
                    opacity: [0, 1],
                    translateY: [30, 0], // Was 50
                    duration: 500, // Was 800
                    easing: 'easeOutCubic'
                });
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe elements with fade-in class
    document.querySelectorAll('.fade-in').forEach(el => {
        el.style.opacity = '0';
        observer.observe(el);
    });

    // ===========================
    // LOGO ICON ANIMATIONS
    // ===========================
    const logoIcons = document.querySelectorAll('.logo-icon, .footer-logo-icon');
    logoIcons.forEach(icon => {
        icon.addEventListener('mouseenter', () => {
            anime({
                targets: icon,
                rotate: [0, 360],
                duration: 400, // Was 600
                easing: 'easeOutCubic'
            });
        });
    });

    // ===========================
    // FORM FOCUS ANIMATIONS
    // ===========================
    const formInputs = document.querySelectorAll('.form-input, .form-textarea, .form-select');
    formInputs.forEach(input => {
        input.addEventListener('focus', () => {
            anime({
                targets: input.previousElementSibling,
                translateX: [-10, 0],
                color: ['#A0A0A0', '#FF6B1A'],
                duration: 200, // Was 300
                easing: 'easeOutCubic'
            });
        });

        input.addEventListener('blur', () => {
            if (!input.value) {
                anime({
                    targets: input.previousElementSibling,
                    color: ['#FF6B1A', '#A0A0A0'],
                    duration: 200, // Was 300
                    easing: 'easeOutCubic'
                });
            }
        });
    });

    // ===========================
    // PAGE TRANSITION (for SPA feel)
    // ===========================
    const internalLinks = document.querySelectorAll('a[href^="/"]:not([target="_blank"]), a[href$=".html"]');
    internalLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            // Only animate if it's a different page
            if (href && !href.includes('#') && href !== window.location.pathname) {
                e.preventDefault();

                anime({
                    targets: 'body',
                    opacity: [1, 0],
                    duration: 200, // Was 300
                    easing: 'easeOutCubic',
                    complete: () => {
                        window.location.href = href;
                    }
                });
            }
        });
    });

    // Fade in on page load - FASTER
    anime({
        targets: 'body',
        opacity: [0, 1],
        duration: 250, // Was 400
        easing: 'easeOutCubic'
    });

});

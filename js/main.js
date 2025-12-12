// ==========================================
// PYROGAMMA GROUP - MAIN JAVASCRIPT
// Core functionality and interactivity
// ==========================================

document.addEventListener('DOMContentLoaded', () => {

    // ===========================
    // MOBILE NAVIGATION TOGGLE
    // ===========================
    const mobileToggle = document.querySelector('.mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (mobileToggle && navLinks) {
        mobileToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            mobileToggle.textContent = navLinks.classList.contains('active') ? '✕' : '☰';
        });

        // Close menu when clicking a link
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                mobileToggle.textContent = '☰';
            });
        });
    }

    // ===========================
    // ACTIVE NAVIGATION LINK
    // ===========================
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-links a').forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });

    // ===========================
    // STORY FILTERING
    // ===========================
    const filterButtons = document.querySelectorAll('.filter-btn');
    const storyCards = document.querySelectorAll('.story-card');

    if (filterButtons.length > 0 && storyCards.length > 0) {
        filterButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                // Update active state
                filterButtons.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');

                const filter = btn.getAttribute('data-filter');

                // Filter cards
                storyCards.forEach(card => {
                    const category = card.getAttribute('data-category');

                    if (filter === 'all' || category === filter) {
                        card.style.display = 'block';
                        // Animate in
                        card.style.animation = 'fadeIn 0.5s ease forwards';
                    } else {
                        card.style.display = 'none';
                    }
                });
            });
        });
    }

    // ===========================
    // SMOOTH SCROLL FOR ANCHOR LINKS
    // ===========================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // ===========================
    // FORM VALIDATION
    // ===========================
    const forms = document.querySelectorAll('form');

    forms.forEach(form => {
        form.addEventListener('submit', (e) => {
            let isValid = true;
            const inputs = form.querySelectorAll('input[required], textarea[required]');

            inputs.forEach(input => {
                if (!input.value.trim()) {
                    isValid = false;
                    input.style.borderColor = '#ff4444';

                    // Reset border after 2 seconds
                    setTimeout(() => {
                        input.style.borderColor = '';
                    }, 2000);
                }
            });

            // Email validation
            const emailInput = form.querySelector('input[type="email"]');
            if (emailInput && emailInput.value) {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(emailInput.value)) {
                    isValid = false;
                    emailInput.style.borderColor = '#ff4444';
                    alert('Please enter a valid email address');
                    e.preventDefault();
                }
            }

            if (!isValid) {
                e.preventDefault();
                console.log('Form validation failed');
            }
        });
    });

    // ===========================
    // NEWSLETTER SUBSCRIPTION
    // ===========================
    const newsletterForms = document.querySelectorAll('.newsletter-form');

    newsletterForms.forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            const emailInput = form.querySelector('input[type="email"]');
            const submitBtn = form.querySelector('button[type="submit"]');

            if (emailInput && submitBtn) {
                const originalText = submitBtn.textContent;
                submitBtn.textContent = 'Subscribing...';
                submitBtn.disabled = true;

                // Simulate submission (replace with actual Formspree/service integration)
                setTimeout(() => {
                    submitBtn.textContent = 'Subscribed! ✓';
                    submitBtn.style.backgroundColor = '#4CAF50';
                    emailInput.value = '';

                    setTimeout(() => {
                        submitBtn.textContent = originalText;
                        submitBtn.disabled = false;
                        submitBtn.style.backgroundColor = '';
                    }, 3000);
                }, 1000);
            }
        });
    });

    // ===========================
    // LAZY LOADING IMAGES
    // ===========================
    const images = document.querySelectorAll('img[data-src]');

    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.getAttribute('data-src');
                img.removeAttribute('data-src');
                observer.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));

    // ===========================
    // CURRENT YEAR FOR FOOTER
    // ===========================
    const yearElement = document.querySelector('.current-year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

    // ===========================
    // READING TIME CALCULATOR
    // ===========================
    const articles = document.querySelectorAll('.article-content');

    articles.forEach(article => {
        const text = article.textContent || article.innerText;
        const wordCount = text.trim().split(/\s+/).length;
        const readingTime = Math.ceil(wordCount / 200); // Average reading speed

        const timeElement = article.querySelector('.reading-time');
        if (timeElement) {
            timeElement.textContent = `${readingTime} min read`;
        }
    });

    // ===========================
    // BACK TO TOP BUTTON
    // ===========================
    const backToTopButton = document.createElement('button');
    backToTopButton.innerHTML = '↑';
    backToTopButton.className = 'back-to-top';
    backToTopButton.style.cssText = `
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 50px;
    height: 50px;
    background-color: var(--color-ember);
    color: var(--color-black);
    border: none;
    border-radius: 50%;
    font-size: 24px;
    cursor: pointer;
    display: none;
    z-index: 1000;
    transition: all 0.3s ease;
    box-shadow: 0 4px 12px rgba(255, 107, 26, 0.4);
  `;

    document.body.appendChild(backToTopButton);

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTopButton.style.display = 'block';
        } else {
            backToTopButton.style.display = 'none';
        }
    });

    backToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    backToTopButton.addEventListener('mouseenter', () => {
        backToTopButton.style.transform = 'scale(1.1)';
    });

    backToTopButton.addEventListener('mouseleave', () => {
        backToTopButton.style.transform = 'scale(1)';
    });

    // ===========================
    // CONSOLE EASTER EGG
    // ===========================
    console.log('%c🔥 Pyrogamma Group', 'color: #FF6B1A; font-size: 24px; font-weight: bold;');
    console.log('%cBuilding the future. Telling its story.', 'color: #F5F5F5; font-size: 14px;');
    console.log('%cInterested in joining our team? Contact us!', 'color: #A0A0A0; font-size: 12px;');

});

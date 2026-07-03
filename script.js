document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const mobileMenuIcon = document.getElementById('mobile-menu-icon');
    const navLinks = document.querySelector('.nav-links');
    
    if (mobileMenuIcon) {
        mobileMenuIcon.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }
    
    // Close mobile menu on link click
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });

    // Sticky Header
    const header = document.getElementById('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Hero Slider
    const slides = document.querySelectorAll('.slide');
    const sliderBtns = document.querySelectorAll('.slider-btn');
    
    if (slides.length > 0 && sliderBtns.length > 0) {
        sliderBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                // Remove active classes
                slides.forEach(s => s.classList.remove('active'));
                sliderBtns.forEach(b => b.classList.remove('active'));
                
                // Add active class to clicked
                const slideIndex = btn.getAttribute('data-slide');
                btn.classList.add('active');
                slides[slideIndex].classList.add('active');
            });
        });
    }

    // Scroll Animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.animate-on-scroll').forEach(el => {
        observer.observe(el);
    });
});

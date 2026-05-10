document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-menu a');

    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    document.addEventListener('click', function(event) {
        const isClickInsideNav = navMenu.contains(event.target);
        const isClickOnHamburger = hamburger.contains(event.target);
        
        if (!isClickInsideNav && !isClickOnHamburger && navMenu.classList.contains('active')) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });
});

window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY;
    const heroVideo = document.querySelector('.hero-video');
    
    if (heroVideo) {
        heroVideo.style.transform = `translateY(${scrollPosition * 0.5}px)`;
    }
});

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'slideInUp 0.8s ease forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.gallery-item').forEach(item => {
    observer.observe(item);
});

document.querySelectorAll('.step').forEach(step => {
    observer.observe(step);
});
document.querySelectorAll('.testimonio-card').forEach(card => {
    observer.observe(card);
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            document.querySelector(href).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            message: document.getElementById('message').value
        };

        console.log('Formulário enviado:', formData);
        showNotification('Mensagem enviada com sucesso!', 'success');
        contactForm.reset();
    });
}

function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 16px 24px;
        background-color: ${type === 'success' ? '#25d366' : '#c5a059'};
        color: white;
        border-radius: 0px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
        z-index: 9999;
        animation: slideInRight 0.3s ease;
        font-weight: 500;
        max-width: 300px;
    `;
    notification.textContent = message;
    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 3000);
}

function loadVideos() {
    const videos = document.querySelectorAll('video[data-src]');
    
    videos.forEach(video => {
        if (!video.src) {
            video.src = video.getAttribute('data-src');
            video.load();
        }
    });
}

window.addEventListener('load', loadVideos);

window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-menu a');

    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (window.scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

const style = document.createElement('style');
style.textContent = `
    .nav-menu a.active {
        color: var(--primary-dark);
    }

    .nav-menu a.active::after {
        width: 100% !important;
    }

    @keyframes slideInRight {
        from {
            opacity: 0;
            transform: translateX(30px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }

    @keyframes slideOutRight {
        from {
            opacity: 1;
            transform: translateX(0);
        }
        to {
            opacity: 0;
            transform: translateX(30px);
        }
    }
`;
document.head.appendChild(style);


function prefetchResources() {
    const links = document.querySelectorAll('a[href]');
    
    links.forEach(link => {
        link.addEventListener('mouseenter', () => {
            if (link.href && !link.href.startsWith('#')) {
                const prefetchLink = document.createElement('link');
                prefetchLink.rel = 'prefetch';
                prefetchLink.href = link.href;
                document.head.appendChild(prefetchLink);
            }
        });
    });
}

prefetchResources();

document.querySelectorAll('button, a').forEach(element => {
    element.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' && this.tagName === 'A') {
            this.click();
        }
    });
});

let lastScrollTop = 0;
const header = document.querySelector('.header');

window.addEventListener('scroll', function() {
    let scrollTop = window.scrollY;

    if (scrollTop > 100) {
        header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.3)';
    } else {
        header.style.boxShadow = 'none';
    }

    lastScrollTop = scrollTop;
});

document.querySelectorAll('img').forEach(img => {
    img.addEventListener('load', function() {
        this.style.opacity = '1';
    });

    img.style.opacity = '0.7';
    img.style.transition = 'opacity 0.3s ease';
});

function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function validatePhone(phone) {
    const phoneRegex = /^\+?[\d\s\-()]+$/;
    return phoneRegex.test(phone) || phone === '';
}

document.getElementById('email')?.addEventListener('blur', function() {
    if (this.value && !validateEmail(this.value)) {
        this.style.borderBottomColor = '#ffb4ab';
    } else {
        this.style.borderBottomColor = 'var(--outline-variant)';
    }
});

document.getElementById('phone')?.addEventListener('blur', function() {
    if (this.value && !validatePhone(this.value)) {
        this.style.borderBottomColor = '#ffb4ab';
    } else {
        this.style.borderBottomColor = 'var(--outline-variant)';
    }
});


function trackEvent(category, action, label) {
    if (window.gtag) {
        gtag('event', action, {
            'event_category': category,
            'event_label': label
        });
    }
}

document.querySelectorAll('.btn, a[href^="https://"]').forEach(element => {
    element.addEventListener('click', function() {
        const label = this.textContent || this.href;
        trackEvent('engagement', 'click', label);
    });
});

document.addEventListener('visibilitychange', function() {
    if (document.hidden) {
        document.querySelectorAll('video').forEach(video => {
            video.pause();
        });
    } else {
        document.querySelectorAll('video').forEach(video => {
            video.play();
        });
    }
});

let konami = [];
const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

document.addEventListener('keydown', function(e) {
    konami.push(e.key);
    konami = konami.slice(-10);

    if (konami.join(',') === konamiCode.join(',')) {
        showNotification('🎨 Você descobriu o código secreto! 🎨', 'success');
        document.body.style.filter = 'hue-rotate(20deg)';
        setTimeout(() => {
            document.body.style.filter = 'none';
        }, 1000);
    }
});
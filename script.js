// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const section = document.querySelector(this.getAttribute('href'));
        section.scrollIntoView({ behavior: 'smooth' });
    });
});

// Add active class to navigation items when scrolling
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 60) {
            current = section.getAttribute('id');
        }
    });

    document.querySelectorAll('nav a').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === current) {
            link.classList.add('active');
        }
    });
});

// Popup functionality for education section
document.querySelectorAll('.info-button').forEach(button => {
    button.addEventListener('click', (e) => {
        const popup = button.closest('.education-item').querySelector('.degree-popup');
        popup.classList.add('active');
        e.stopPropagation();
    });
});

document.querySelectorAll('.close-popup').forEach(button => {
    button.addEventListener('click', () => {
        const popup = button.closest('.degree-popup');
        popup.classList.remove('active');
    });
});

// Close popup when clicking outside
document.querySelectorAll('.degree-popup').forEach(popup => {
    popup.addEventListener('click', (e) => {
        if (e.target === popup) {
            popup.classList.remove('active');
        }
    });
});

// Close popup with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        document.querySelectorAll('.degree-popup.active').forEach(popup => {
            popup.classList.remove('active');
        });
    }
});

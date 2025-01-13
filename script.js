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
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('degree-popup')) {
        e.target.classList.remove('active');
    }
});

// Image popup functionality
const imagePopupTemplate = `
    <div class="image-popup">
        <button class="close-image">×</button>
        <img class="popup-image" src="" alt="Full size image">
    </div>
`;
document.body.insertAdjacentHTML('beforeend', imagePopupTemplate);

const imagePopup = document.querySelector('.image-popup');
const popupImage = document.querySelector('.popup-image');
const closeImageButton = document.querySelector('.close-image');

document.querySelectorAll('.chef-image').forEach(image => {
    image.addEventListener('click', () => {
        const fullImagePath = image.dataset.full;
        popupImage.src = fullImagePath;
        imagePopup.classList.add('active');
    });
});

closeImageButton.addEventListener('click', () => {
    imagePopup.classList.remove('active');
});

imagePopup.addEventListener('click', (e) => {
    if (e.target === imagePopup) {
        imagePopup.classList.remove('active');
    }
});

// Close image popup with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && imagePopup.classList.contains('active')) {
        imagePopup.classList.remove('active');
    }
});

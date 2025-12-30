// Mobile menu toggle
const mobileMenuButton = document.querySelector('.mobile-menu-button');
const mobileMenu = document.querySelector('.mobile-menu');
const mobileMenuLinks = document.querySelectorAll('.mobile-menu-link');

mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
    feather.replace();
});

// Hide mobile menu when a link is clicked
mobileMenuLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
    });
});

// YouTube video player function
function playYouTubeVideo(videoId) {
    window.open(`https://www.youtube.com/watch?v=${videoId}`, '_blank');
}

// Initialize AOS
AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: true
});

// Feather icons
feather.replace();

// Headshot modal functionality
const headshotImages = [
    'assets/headshots (5).jpg',
    'assets/headshots (6).jpg',
    'assets/headshots (2).jpg',
    'assets/headshots (1).jpg',
    'assets/headshots (3).jpg',
    'assets/headshots (4).jpg'
];

let currentHeadshotIndex = 0;

function openHeadshotModal(index) {
    currentHeadshotIndex = index;
    const modal = document.getElementById('headshotModal');
    const modalImage = document.getElementById('modalHeadshotImage');
    const counter = document.getElementById('headshotCounter');
    
    modalImage.src = headshotImages[currentHeadshotIndex];
    counter.textContent = `${currentHeadshotIndex + 1} / ${headshotImages.length}`;
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

function closeHeadshotModal() {
    const modal = document.getElementById('headshotModal');
    modal.classList.add('hidden');
    document.body.style.overflow = 'auto';
}

function nextHeadshot() {
    currentHeadshotIndex = (currentHeadshotIndex + 1) % headshotImages.length;
    const modalImage = document.getElementById('modalHeadshotImage');
    const counter = document.getElementById('headshotCounter');
    modalImage.src = headshotImages[currentHeadshotIndex];
    counter.textContent = `${currentHeadshotIndex + 1} / ${headshotImages.length}`;
}

function previousHeadshot() {
    currentHeadshotIndex = (currentHeadshotIndex - 1 + headshotImages.length) % headshotImages.length;
    const modalImage = document.getElementById('modalHeadshotImage');
    const counter = document.getElementById('headshotCounter');
    modalImage.src = headshotImages[currentHeadshotIndex];
    counter.textContent = `${currentHeadshotIndex + 1} / ${headshotImages.length}`;
}

// Gallery modal functionality
const galleryImages = {
    theatre: [
        { src: 'assets/1.jpeg', title: 'Never Everglades', role: 'Dudley R. Spoonbill', company: 'Fantasy Theatre Factory', date: 'March – April 2025' },
        { src: 'assets/2.jpg', title: 'Cinderella, A Fractured Fairytale', role: 'Salmonella, Step Sister', company: 'Fantasy Theatre Factory', date: 'May-July 2024' },
        { src: 'assets/3.jpg', title: 'Gordon, A Fairytale Detective', role: 'Goldilocks & Others', company: 'Fantasy Theatre Factory', date: 'January-February 2024' },
        { src: 'assets/4.jpg', title: 'Bob Marley\'s Three Little Birds', role: 'Tacoomah/ Dr. Bird', company: 'Understudy City Theatre', date: 'June-July 2022' },
        { src: 'assets/5.jpg', title: 'Eco Challenge', role: 'Host Wendy Weathers', company: 'Fantasy Theatre Factory', date: 'April 2022' },
        { src: 'assets/6.jpg', title: 'Little Monster Tales', role: 'Queen Sussifruss & Others', company: 'Fantasy Theatre Factory', date: 'October 2021-23' },
        { src: 'assets/7.jpg', title: 'Polar Express', role: '', company: 'Bailey Railway Productions', date: 'December 2021' },
        { src: 'assets/8.jpg', title: 'In The Hyphen', role: 'One Person Show Thesis', company: '', date: 'May 2021' }
    ],
    film: [
        { src: 'assets/9.jpg', title: 'Mc Donald\'s & Minecraft', role: 'Social Media Commercial', company: '', date: 'January 2025' },
        { src: 'assets/10.jpeg', title: 'Dingdoor Commercial', role: 'Principal Role', company: '', date: 'January 2024' },
        { src: 'assets/11.jpg', title: 'Paradise Cuban Restaurant', role: '', company: '', date: 'May 2023' },
        { src: 'assets/12.jpg', title: 'Pepcid "Keep the Love Coming"', role: 'Principal SAG Commercial', company: '', date: 'August 2022' },
        { src: 'assets/13.jpg', title: 'Downtown Homestead Commercial', role: '', company: '', date: '' }
    ]
};

let currentGalleryCategory = 'theatre';
let currentGalleryIndex = 0;

// Reel category functionality
function showReelCategory(category) {
    // Hide all reel categories
    const reelCategories = document.querySelectorAll('.reel-category');
    reelCategories.forEach(cat => cat.classList.add('hidden'));
    
    // Show selected category
    const selectedCategory = document.getElementById(category + 'Reels');
    if (selectedCategory) {
        selectedCategory.classList.remove('hidden');
    }
    
    // Update button styles
    const buttons = ['commercialBtn', 'theatreReelBtn', 'vocalBtn', 'danceBtn', 'voiceoverBtn'];
    buttons.forEach(btnId => {
        const btn = document.getElementById(btnId);
        if (btn) {
            if ((category === 'theatre' && btnId === 'theatreReelBtn') || (category !== 'theatre' && btnId === category + 'Btn')) {
                btn.classList.add('bg-premium-blue', 'text-white');
                btn.classList.remove('border', 'border-premium-blue', 'text-premium-blue');
            } else {
                btn.classList.remove('bg-premium-blue', 'text-white');
                btn.classList.add('border', 'border-premium-blue', 'text-premium-blue');
            }
        }
    });
}

function showGalleryCategory(category) {
    currentGalleryCategory = category;
    const theatreGallery = document.getElementById('theatreGallery');
    const filmGallery = document.getElementById('filmGallery');
    const theatreBtn = document.getElementById('theatreBtn');
    const filmBtn = document.getElementById('filmBtn');
    
    if (category === 'theatre') {
        theatreGallery.classList.remove('hidden');
        filmGallery.classList.add('hidden');
        theatreBtn.classList.add('bg-premium-blue', 'text-white');
        theatreBtn.classList.remove('border', 'border-premium-blue', 'text-premium-blue');
        filmBtn.classList.remove('bg-premium-blue', 'text-white');
        filmBtn.classList.add('border', 'border-premium-blue', 'text-premium-blue');
    } else {
        theatreGallery.classList.add('hidden');
        filmGallery.classList.remove('hidden');
        filmBtn.classList.add('bg-premium-blue', 'text-white');
        filmBtn.classList.remove('border', 'border-premium-blue', 'text-premium-blue');
        theatreBtn.classList.remove('bg-premium-blue', 'text-white');
        theatreBtn.classList.add('border', 'border-premium-blue', 'text-premium-blue');
    }
}

function openGalleryModal(category, index) {
    currentGalleryCategory = category;
    currentGalleryIndex = index;
    const modal = document.getElementById('galleryModal');
    const modalImage = document.getElementById('modalGalleryImage');
    const counter = document.getElementById('galleryCounter');
    
    const images = galleryImages[category];
    modalImage.src = images[currentGalleryIndex].src;
    modalImage.alt = images[currentGalleryIndex].title;
    counter.innerHTML = `<span id="currentGalleryNumber">${currentGalleryIndex + 1}</span> / <span id="totalGalleryImages">${images.length}</span>`;
    
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

function closeGalleryModal() {
    const modal = document.getElementById('galleryModal');
    modal.classList.add('hidden');
    document.body.style.overflow = 'auto';
}

function nextGallery() {
    const images = galleryImages[currentGalleryCategory];
    currentGalleryIndex = (currentGalleryIndex + 1) % images.length;
    const modalImage = document.getElementById('modalGalleryImage');
    const counter = document.getElementById('galleryCounter');
    
    modalImage.src = images[currentGalleryIndex].src;
    modalImage.alt = images[currentGalleryIndex].title;
    counter.innerHTML = `<span id="currentGalleryNumber">${currentGalleryIndex + 1}</span> / <span id="totalGalleryImages">${images.length}</span>`;
}

function previousGallery() {
    const images = galleryImages[currentGalleryCategory];
    currentGalleryIndex = (currentGalleryIndex - 1 + images.length) % images.length;
    const modalImage = document.getElementById('modalGalleryImage');
    const counter = document.getElementById('galleryCounter');
    
    modalImage.src = images[currentGalleryIndex].src;
    modalImage.alt = images[currentGalleryIndex].title;
    counter.innerHTML = `<span id="currentGalleryNumber">${currentGalleryIndex + 1}</span> / <span id="totalGalleryImages">${images.length}</span>`;
}

// Event listeners for headshot modal
document.addEventListener('DOMContentLoaded', function() {
    const headshotModal = document.getElementById('headshotModal');
    const closeHeadshotBtn = document.getElementById('closeHeadshotModal');
    const prevHeadshotBtn = document.getElementById('prevHeadshot');
    const nextHeadshotBtn = document.getElementById('nextHeadshot');
    
    // Close modal when clicking close button
    closeHeadshotBtn.addEventListener('click', closeHeadshotModal);
    
    // Navigation buttons
    prevHeadshotBtn.addEventListener('click', previousHeadshot);
    nextHeadshotBtn.addEventListener('click', nextHeadshot);
    
    // Close modal when clicking outside the image
    headshotModal.addEventListener('click', function(e) {
        if (e.target === headshotModal) {
            closeHeadshotModal();
        }
    });
    
    // Gallery modal event listeners
    const galleryModal = document.getElementById('galleryModal');
    const closeGalleryBtn = document.getElementById('closeGalleryModal');
    const prevGalleryBtn = document.getElementById('prevGallery');
    const nextGalleryBtn = document.getElementById('nextGallery');
    
    // Close gallery modal when clicking close button
    if (closeGalleryBtn) closeGalleryBtn.addEventListener('click', closeGalleryModal);
    
    // Gallery navigation buttons
    if (prevGalleryBtn) prevGalleryBtn.addEventListener('click', previousGallery);
    if (nextGalleryBtn) nextGalleryBtn.addEventListener('click', nextGallery);
    
    // Close gallery modal when clicking outside the image
    galleryModal.addEventListener('click', function(e) {
        if (e.target === galleryModal) {
            closeGalleryModal();
        }
    });
    
    // Keyboard navigation for both modals
    document.addEventListener('keydown', function(e) {
        if (!headshotModal.classList.contains('hidden')) {
            if (e.key === 'ArrowLeft') {
                previousHeadshot();
            } else if (e.key === 'ArrowRight') {
                nextHeadshot();
            } else if (e.key === 'Escape') {
                closeHeadshotModal();
            }
        } else if (!galleryModal.classList.contains('hidden')) {
            if (e.key === 'ArrowLeft') {
                previousGallery();
            } else if (e.key === 'ArrowRight') {
                nextGallery();
            } else if (e.key === 'Escape') {
                closeGalleryModal();
            }
        }
    });
});

// Scroll to Top Button Functionality
const scrollToTopBtn = document.getElementById('scrollToTop');

// Show/hide button based on scroll position
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollToTopBtn.classList.add('show');
    } else {
        scrollToTopBtn.classList.remove('show');
    }
});

// Smooth scroll to top when button is clicked
scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
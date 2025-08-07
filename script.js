// Rotating hero title text
const rotatingText = () => {
    const heroTitle = document.querySelector('.hero-title');
    if (!heroTitle) return;

    const textOptions = [
        { text: 'Creative Designer', class: 'creative-designer' },
        { text: 'Vibe Coder', class: 'vibe-coder' },
        { text: 'Start-up Founder', class: 'startup-founder' },
        { text: 'T-Shape Developer', class: 'tshape-developer' },
        { text: 'Product Engineer', class: 'product-engineer' }
    ];

    let currentIndex = 0;

    const updateText = () => {
        const currentOption = textOptions[currentIndex];
        
        // Remove all previous classes
        heroTitle.className = 'hero-title';
        
        // Add new class and update text
        heroTitle.classList.add(currentOption.class);
        heroTitle.textContent = currentOption.text;
        
        // Move to next option
        currentIndex = (currentIndex + 1) % textOptions.length;
    };

    // Set initial text
    updateText();
    
    // Start rotation
    setInterval(updateText, 500); // Change every 0.5 seconds
};

// Initialize rotating text when DOM is loaded
document.addEventListener('DOMContentLoaded', rotatingText);

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerOffset = 80;
            const elementPosition = target.offsetTop;
            const offsetPosition = elementPosition - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Add active class to navigation links based on scroll position
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const scrollPos = window.scrollY + 100;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`a[href="#${sectionId}"]`);

        if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.remove('active');
            });
            if (navLink) {
                navLink.classList.add('active');
            }
        }
    });
});

// Add scroll effect to navbar
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// Fade in animation for sections
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Add fade-in effect to sections
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        // Skip sections with documentation content to prevent layout issues
        if (section.querySelector('.documentation-content')) {
            return;
        }
        
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });
});

// Email protection
document.addEventListener('DOMContentLoaded', () => {
    const emailLinks = document.querySelectorAll('a[href^="mailto:"]');
    emailLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            // Add any email tracking or analytics here if needed
            console.log('Email link clicked');
        });
    });
});

// Carousel functionality
document.addEventListener('DOMContentLoaded', () => {
    const track = document.querySelector('.carousel-track');
    if (!track) return;
    const slides = Array.from(track.children);
    const nextButton = document.querySelector('.next-button');
    const prevButton = document.querySelector('.prev-button');
    
    let slidesPerView = 3;
    const getSlidesPerView = () => {
        if (window.innerWidth <= 768) {
            return 1;
        }
        return 3;
    }

    // Calculate slide width dynamically, considering padding/margin
    const getSlideWidth = () => slides[0].getBoundingClientRect().width;
    let slideWidth = getSlideWidth();

    let currentIndex = 0;

    const moveToSlide = () => {
        track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
    }

    const updateButtons = () => {
        if (prevButton) {
            prevButton.style.display = (currentIndex === 0) ? 'none' : 'block';
        }
        if (nextButton) {
            // Show next button only if there are more slides to show
            nextButton.style.display = (currentIndex >= slides.length - slidesPerView) ? 'none' : 'block';
        }
    }

    // Recalculate slide width on window resize
    window.addEventListener('resize', () => {
        slidesPerView = getSlidesPerView();
        slideWidth = getSlideWidth();
        moveToSlide(); // Adjust position after resize
        updateButtons();
    });

    if (nextButton) {
        nextButton.addEventListener('click', e => {
            if (currentIndex < slides.length - slidesPerView) { 
                currentIndex++;
                moveToSlide();
                updateButtons();
            }
        });
    }

    if (prevButton) {
        prevButton.addEventListener('click', e => {
            if (currentIndex > 0) {
                currentIndex--;
                moveToSlide();
                updateButtons();
            }
        });
    }

    updateButtons();

    // Automatic scrolling
    setInterval(() => {
        if (currentIndex < slides.length - slidesPerView) { // Check if there are more slides to scroll to
            currentIndex++;
        } else {
            currentIndex = 0; // Loop back to the beginning
        }
        moveToSlide();
        updateButtons();
    }, 5000); // Change slide every 5 seconds
});

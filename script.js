// Toggle Read More content
function toggleReadMore() {
    const content = document.getElementById('expandableContent');
    const btn = event.target;
    
    if (content.classList.contains('active')) {
        content.classList.remove('active');
        btn.textContent = 'Read More →';
    } else {
        content.classList.add('active');
        btn.textContent = 'Show Less ←';
    }
}

// Update active nav link on scroll
function updateActiveNav() {
    const sections = ['home', 'about', 'products', 'why-us', 'contact'];
    
    sections.forEach(sectionId => {
        const section = document.getElementById(sectionId);
        const link = document.querySelector(`a[href="#${sectionId}"]`);
        
        if (section && link) {
            const rect = section.getBoundingClientRect();
            if (rect.top <= 150 && rect.bottom >= 150) {
                // Remove active class from all links
                document.querySelectorAll('.nav-links a').forEach(a => {
                    a.classList.remove('active');
                });
                // Add active class to current link
                link.classList.add('active');
            }
        }
    });
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    updateActiveNav();
    
    // Hamburger menu toggle
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');
    
    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            menuToggle.classList.toggle('active');
        });
        
        // Close menu when a link is clicked
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                menuToggle.classList.remove('active');
            });
        });
    }
    
    // Add scroll event listener for nav updates
    window.addEventListener('scroll', updateActiveNav);
    
    // Add click handlers to nav links
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            if (href.startsWith('#')) {
                e.preventDefault();
                const sectionId = href.substring(1);
                const section = document.getElementById(sectionId);
                if (section) {
                    section.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });

});

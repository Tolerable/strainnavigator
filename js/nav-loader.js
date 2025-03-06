document.addEventListener('DOMContentLoaded', function() {
    // Function to load the navigation bar
    function loadNav() {
        fetch('nav.html')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to load navigation bar');
                }
                return response.text();
            })
            .then(data => {
                document.getElementById('nav-placeholder').innerHTML = data;
                
                // Initialize the navigation toggle functionality
                const hamburger = document.getElementById('hamburger');
                const navLinks = document.getElementById('navLinks');
                
                if (hamburger && navLinks) {
                    hamburger.addEventListener('click', () => {
                        navLinks.classList.toggle('active');
                    });
                    
                    // Close mobile menu when clicking a link
                    const links = document.querySelectorAll('.nav-links a');
                    links.forEach(link => {
                        link.addEventListener('click', () => {
                            navLinks.classList.remove('active');
                        });
                    });
                }
                
                // Highlight the current page in the navigation
                const currentPage = window.location.pathname.split('/').pop();
                const navLinks = document.querySelectorAll('.nav-links a');
                
                navLinks.forEach(link => {
                    const linkHref = link.getAttribute('href');
                    if (linkHref === currentPage || (currentPage === '' && linkHref === 'index.html')) {
                        link.classList.add('active');
                    }
                });
            })
            .catch(error => {
                console.error('Error loading navigation:', error);
            });
    }
    
    // Call the function to load the navigation
    loadNav();
});
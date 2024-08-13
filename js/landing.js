
document.addEventListener('DOMContentLoaded', () => {
    function handleNavClick() {
        const links = document.querySelectorAll('nav ul li a');

        links.forEach(link => {
            link.addEventListener('click', (e) => {

                links.forEach(link => link.classList.remove('active'));

                e.target.classList.add('active');
            });
        });
    }

    function isInViewport(element) {
        if (!element) {
            console.error('Element is null');
            return false;
        }
        const rect = element.getBoundingClientRect();
        return (
            rect.top < window.innerHeight &&
            rect.bottom > 0 &&
            rect.left < window.innerWidth &&
            rect.right > 0
        );
    }

    function applyFadeInOnScroll() {
        const aboutUs = document.querySelector('.about-us');
        const map = document.querySelector('.address');
        const menu = document.querySelector('.menu');
        const testimonial = document.querySelector('.testimonial-slider');

        if (isInViewport(aboutUs)) {
            aboutUs.classList.add('fade-in');
        } else {
            aboutUs.classList.remove('fade-in');
        }

        if (isInViewport(map)) {
            map.classList.add('show');
        } else {
            map.classList.remove('show');
        }

        if (isInViewport(menu)) {
            menu.classList.add('show');
        } else {
            menu.classList.remove('show');
        }

        if (isInViewport(testimonial)) {
            testimonial.classList.add('show');
        } else {
            testimonial.classList.remove('show');
        }
    }


    function initScrollEffect() {
        window.addEventListener('scroll', applyFadeInOnScroll);
        applyFadeInOnScroll(); // Check on initial load
    }

    function showSideBar() {
        const sidebar = document.getElementById('sidebar');
        const horizontalbar = document.getElementById('horizontalbar');

        if (sidebar.style.transform === "translateX(0%)") {
            sidebar.style.transform = "translateX(100%)";
        } else {
            sidebar.style.transform = "translateX(0%)";
        }
        horizontalbar.style.display = "none";
    }

    handleNavClick();
    initScrollEffect();

    const sidebarToggle = document.querySelector('.sidebar-toggle');
    if (sidebarToggle) {
        sidebarToggle.addEventListener('click', showSideBar);
    }

    
});

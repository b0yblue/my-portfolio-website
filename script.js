document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll("a[href^='#']");

    links.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();

            const href = this.getAttribute("href");
            const targetSection = document.querySelector(href);

            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 50, // Adjust for nav height
                    behavior: "smooth"
                });
            }
        });
    });

    // Fade-out effect for external links
    const externalLinks = document.querySelectorAll("a[target='_blank']");
    externalLinks.forEach(link => {
        link.addEventListener("click", function (e) {
            document.body.classList.add("fade-out");
            setTimeout(() => {
                window.location.href = this.href;
            }, 500);
        });
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const scrollArrow = document.querySelector(".scroll-arrow");

    // Subtle scroll effect on load
    window.scrollTo({
        top: 100, // Scroll down slightly
        behavior: "smooth"
    });

    // Show arrow after the scroll
    setTimeout(() => {
        scrollArrow.classList.add("show");
    }, 1000); // Delay for effect (1s)
});

// Select all elements with the class 'reveal'
const reveals = document.querySelectorAll('.reveal');

function revealOnScroll() {
    for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = reveals[i].getBoundingClientRect().top;
        const elementVisible = 150; // Adjust for earlier or later reveal

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add('visible');
        } else {
            reveals[i].classList.remove('visible'); // Optionally hide again when scrolling up
        }
    }
}

// Add event listener for scroll
window.addEventListener('scroll', revealOnScroll);

// Initial check in case elements are already in view
revealOnScroll();

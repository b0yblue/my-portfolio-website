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

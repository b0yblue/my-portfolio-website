document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll("a");
    links.forEach(link => {
        link.addEventListener("click", function (e) {
            const href = this.getAttribute("href");
            if (href.startsWith("#")) return; // Ignore internal links
            e.preventDefault();

            document.body.classList.add("fade-out");
            setTimeout(() => {
                window.location.href = href;
            }, 500); // Adjust timing to match CSS fade-out
        });
    });
});

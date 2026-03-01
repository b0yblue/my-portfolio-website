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

    // Fade-out effect for external links (open in new tab)
    // IMPORTANT: do NOT change window.location for links with target="_blank" —
    // the browser will open them in a new tab by default. Changing window.location
    // here causes the current tab to also navigate to the same URL (duplicate).
    const externalLinks = document.querySelectorAll("a[target='_blank']");
    externalLinks.forEach(link => {
        link.addEventListener("click", function () {
            // Let the browser open the URL in a new tab. Only apply a visual effect
            // to the current page; do NOT navigate the current tab.
            document.body.classList.add("fade-out");
            // No window.location change here.
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

// Hide nav bar on scroll down, show on scroll up
let lastScrollY = window.scrollY;
const nav = document.querySelector('nav');

window.addEventListener('scroll', function () {
  const currentScrollY = window.scrollY;
  
  if (currentScrollY > lastScrollY && currentScrollY > 100) {
    // Scrolling down
    nav.classList.add('nav-hidden');
  } else {
    // Scrolling up
    nav.classList.remove('nav-hidden');
  }
  
  lastScrollY = currentScrollY;
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

(function(){ 
  const navbar = document.getElementById('navbar'); 
  if (!navbar) return; 
 
  let lastScrollY = window.scrollY; 
  let ticking = false; 
  const THROTTLE_MS = 100;    // check at most every 100ms 
  const DELTA = 10;           // minimum px to treat as meaningful scroll 
  let lastExec = 0; 
 
  function onScroll(){ 
    const now = Date.now(); 
    if (now - lastExec < THROTTLE_MS) { 
      if (!ticking) { 
        ticking = true; 
        requestAnimationFrame(() => { 
          handleScroll(); 
          ticking = false; 
        }); 
      } 
      return; 
    } 
    lastExec = now; 
    handleScroll(); 
  } 
 
  function handleScroll(){ 
    const currentY = window.scrollY; 
    const diff = currentY - lastScrollY; 
 
    // if near top, always show 
    if (currentY <= 0) { 
      navbar.classList.remove('navbar--hidden'); 
      lastScrollY = currentY; 
      return; 
    } 
 
    if (Math.abs(diff) <= DELTA) { 
      // ignore tiny moves 
      return; 
    } 
 
    if (diff > 0) { 
      // scrolled down -> hide navbar 
      navbar.classList.add('navbar--hidden'); 
    } else { 
      // scrolled up -> show navbar 
      navbar.classList.remove('navbar--hidden'); 
    } 
 
    lastScrollY = currentY; 
  } 
 
  window.addEventListener('scroll', onScroll, {passive:true}); 
})(); 

const $bigBall = document.querySelector('.cursor__ball--big');
const $smallBall = document.querySelector('.cursor__ball--small');
const $hoverables = document.querySelectorAll('.hoverable');

// Listeners
document.body.addEventListener('mousemove', onMouseMove);
for (let i = 0; i < $hoverables.length; i++) {
  $hoverables[i].addEventListener('mouseenter', onMouseHover);
  $hoverables[i].addEventListener('mouseleave', onMouseHoverOut);
}

// Move the cursor
function onMouseMove(e) {
  gsap.to($bigBall, {
    duration: 0.15,
    x: e.clientX - 15,
    y: e.clientY - 15
  })
  gsap.to($smallBall, {
    duration: 0.05,
    x: e.clientX - 5,
    y: e.clientY - 7
  })
}

// Hover an element
function onMouseHover() {
  gsap.to($bigBall, {
    duration: 0.3,
    scale: 4
  })
  $bigBall.classList.add('hovering')
}
function onMouseHoverOut() {
  gsap.to($bigBall, {
    duration: 0.3,
    scale: 1
  })
  $bigBall.classList.remove('hovering')
}

// Add event listener for scroll
window.addEventListener('scroll', revealOnScroll);

// Initial check in case elements are already in view
revealOnScroll();

const toggleBTN = document.querySelector(".toggle-links");
const listLinks = document.querySelector(".list-links");

// When Click on toggle menu check if it's toggled then remove toggled class else add it
toggleBTN.addEventListener("click", (e) => {
  listLinks.classList.contains("toggled")
    ? listLinks.classList.remove("toggled")
    : listLinks.classList.add("toggled");
});

// When Click out menu close it
document.addEventListener("click", (e) => {
  if (!listLinks.contains(e.target) && !toggleBTN.contains(e.target)) {
    listLinks.classList.remove("toggled");
  }
});

const revealElements = document.querySelectorAll(".reveal");

const reveal = () => {
  revealElements.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top;
    const elementVisible = 150; // Adjust this value to change when the animation triggers

    if (elementTop < window.innerHeight - elementVisible) {
      element.classList.add("active");
    }
  });
};

window.addEventListener("DOMContentLoaded", reveal);
window.addEventListener("scroll", reveal);
// Trigger once to reveal elements that are already visible
reveal();

// Change href On click on toggle Language
const language = document.querySelector(".language");
language.addEventListener("click", () => {
  const currentLocation = location.pathname;
  if (currentLocation.includes("/ar/")) {
    location.href = location.href + currentLocation.replace("/ar/", "/");
  } else {
    location.href = location.href + "ar" + currentLocation;
  }
});

// Add Class scrolled when scroll 40px to bottom to add blur to navbar
const nav = document.querySelector("nav");

window.addEventListener("scroll", () => {
  if (window.scrollY >= 40) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
});

// Scale centered image based on scroll position
const centeredImage = document.querySelector(".centered-image img");
const banner = document.querySelector(".banner");

window.addEventListener("scroll", () => {
  if (banner && centeredImage) {
    const bannerRect = banner.getBoundingClientRect();
    const scrollPercentage = Math.max(
      0,
      Math.min(1, -bannerRect.top / bannerRect.height)
    );

    // Scale from 1 to 0.8 as user scrolls
    const scale = 1 + scrollPercentage * 2;
    const opacity = 1 - scrollPercentage * 2;

    // Only apply transform if image is still in view
    if (bannerRect.bottom > 0) {
      centeredImage.style.transform = `scale(${scale})`;
      centeredImage.style.opacity = opacity;
    }
  }
});

const listDescription = document.querySelectorAll(
  ".about .list-description .description"
);
const descriptionTaps = document.querySelectorAll(
  ".about .description-taps .tab-link"
);
descriptionTaps.forEach((tapBTN) => {
  tapBTN.addEventListener("click", () => {
    listDescription.forEach((e) => {
      if (e.id.includes(tapBTN.getAttribute("data-tap"))) {
        e.classList.add("active");
      } else {
        e.classList.remove("active");
      }
    });
    descriptionTaps.forEach((e) => {
      e.classList.remove("active");
    });
    tapBTN.classList.add("active");
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector(".site-header");
  const heroSection = document.querySelector(".about-hero");
  const handleScrollHeader = () => {
    if (!header) return;

    const threshold = heroSection ? heroSection.offsetHeight * 0.35 : 80;
    if (window.scrollY > threshold) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  };

  handleScrollHeader();
  window.addEventListener("scroll", handleScrollHeader, { passive: true });
});

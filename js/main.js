document.addEventListener("DOMContentLoaded", () => {
  const siteHeader = document.querySelector(".site-header");

  if (siteHeader) {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        siteHeader.classList.add("scrolled");
      } else {
        siteHeader.classList.remove("scrolled");
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
  }

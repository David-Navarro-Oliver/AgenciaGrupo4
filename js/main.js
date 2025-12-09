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

    const video = document.getElementById("hero-video");
  const overlay = document.getElementById("hero-overlay");
  const playButton = document.getElementById("hero-play-button");

  if (video && overlay && playButton) {
    const introSrc = "../media/videos/VerticeTravelNarracion.mp4";
    const loopSrc = "../media/videos/VerticeTravelBucle.mp4";

    video.src = introSrc;
    video.loop = false;
    video.muted = false;

    function startIntro() {
      overlay.classList.add("is-hidden");
      video.currentTime = 0;
      video.play().catch(() => {});
    }

    playButton.addEventListener("click", startIntro);

    video.addEventListener("ended", () => {
      video.src = loopSrc;
      video.loop = true;
      video.muted = true;
      video.currentTime = 0;
      video.play().catch(() => {});
    });
  }

   const shells = document.querySelectorAll(".continent-gallery-shell");

  shells.forEach((shell) => {
    const gallery = shell.querySelector(".continent-gallery");
    const prevBtn = shell.querySelector(".gallery-arrow--prev");
    const nextBtn = shell.querySelector(".gallery-arrow--next");

    if (!gallery) return;

    const images = Array.from(gallery.querySelectorAll("img"));
    images.forEach((img) => {
      img.draggable = false;
      img.addEventListener("dragstart", (e) => e.preventDefault());
    });

    const getScrollAmount = () => gallery.clientWidth || 400;

    if (prevBtn) {
      prevBtn.addEventListener("click", () => {
        gallery.scrollBy({
          left: -getScrollAmount(),
          behavior: "smooth",
        });
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener("click", () => {
        gallery.scrollBy({
          left: getScrollAmount(),
          behavior: "smooth",
        });
      });
    }

    let isDown = false;
    let startX = 0;
    let startScrollLeft = 0;

    gallery.addEventListener("mousedown", (e) => {
      isDown = true;
      gallery.classList.add("is-dragging");
      startX = e.pageX - gallery.offsetLeft;
      startScrollLeft = gallery.scrollLeft;
    });

    gallery.addEventListener("mouseleave", () => {
      isDown = false;
      gallery.classList.remove("is-dragging");
    });

    gallery.addEventListener("mouseup", () => {
      isDown = false;
      gallery.classList.remove("is-dragging");
    });

    gallery.addEventListener("mousemove", (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - gallery.offsetLeft;
      const walk = (x - startX) * 1.2; 
      gallery.scrollLeft = startScrollLeft - walk;
    });

    let touchStartX = 0;
    let touchStartScrollLeft = 0;

    gallery.addEventListener(
      "touchstart",
      (e) => {
        const touch = e.touches[0];
        touchStartX = touch.pageX - gallery.offsetLeft;
        touchStartScrollLeft = gallery.scrollLeft;
      },
      { passive: true }
    );

    gallery.addEventListener(
      "touchmove",
      (e) => {
        const touch = e.touches[0];
        const x = touch.pageX - gallery.offsetLeft;
        const walk = (x - touchStartX) * 1.2;
        gallery.scrollLeft = touchStartScrollLeft - walk;
      },
      { passive: true }
    );
  });

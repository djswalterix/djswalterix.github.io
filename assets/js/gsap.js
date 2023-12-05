document.addEventListener("DOMContentLoaded", function () {
  // Registra ScrollTrigger nel tuo progetto GSAP
  gsap.registerPlugin(ScrollTrigger);

  // Creiamo l'animazione con GSAP
  gsap.to("header", {
    scrollTrigger: {
      trigger: "header",
      start: "top center-=10%",
      end: "bottom top",
      toggleActions: "play none none reverse",
    },
    top: "0%", // Anima da 50% a 0%
    duration: 1,
  });

  // Cambia la visibility di un altro elemento da hidden a visible
  gsap.to("#subtitle", {
    scrollTrigger: {
      trigger: "header",
      start: "top center-=10%", // Inizia la transizione insieme all'altro elemento
      end: "bottom top",
      toggleActions: "play none none reverse",
    },

    autoAlpha: 1, // autoAlpha gestisce sia l'opacità che la proprietà visibility
    duration: 1,
  });

  gsap.from("#photo", {
    scrollTrigger: {
      trigger: "#subtitle",
      start: "top center",
      end: "bottom top",
      toggleActions: "play none none reverse",
    },

    autoAlpha: 0,
    duration: 1,
  });
});

// Opzione di animazione comune
const techAnimation = {
  opacity: 1,
  y: 0,
  duration: 1,
  ease: "power1.out",
};

// Anima ogni elemento tecnologico individualmente
gsap.to("#html-css", { ...techAnimation, scrollTrigger: "#html-css" });
gsap.to("#javascript", {
  ...techAnimation,
  scrollTrigger: "#javascript",
  delay: 0.2,
});
gsap.to("#node", { ...techAnimation, scrollTrigger: "#node", delay: 0.4 });
gsap.to("#react", { ...techAnimation, scrollTrigger: "#react", delay: 0.6 });
gsap.to("#mysql", { ...techAnimation, scrollTrigger: "#mysql", delay: 0.8 });
/*
document.querySelectorAll(".tech").forEach((tech) => {
  tech.addEventListener("mouseenter", () => {
    // Inizia l'animazione quando il mouse entra sull'elemento
    gsap.to(tech, { scale: 1.1, duration: 0.3, ease: "power1.out" });
  });

  tech.addEventListener("mouseleave", () => {
    // Ritorna allo stato originale quando il mouse lascia l'elemento
    gsap.to(tech, { scale: 1, duration: 0.3, ease: "power1.out" });
  });
});
*/
document.querySelectorAll(".tech").forEach((tech) => {
  let hoverTween = gsap.to(tech, {
    scale: 1.1,
    duration: 0.3,
    paused: true,
    ease: "power1.out",
    transformOrigin: "center center", // Mantiene l'animazione centrata
  });

  tech.addEventListener("mouseenter", () => {
    hoverTween.play();
  });

  tech.addEventListener("mouseleave", () => {
    hoverTween.reverse();
  });
});

document.querySelectorAll(".project-card").forEach((card) => {
  gsap.from(card, {
    scrollTrigger: card,
    duration: 0.5,
    opacity: 1,
    y: 50,
    stagger: 0.2, // Per un effetto a cascata se hai più card
  });
});

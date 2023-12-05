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

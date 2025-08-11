document.addEventListener("DOMContentLoaded", () => {
  console.log("GSAP animation loaded");

  // Load GSAP from CDN dynamically
  const gsapScript = document.createElement("script");
  gsapScript.src = "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js";
  gsapScript.onload = () => {
    const scrollTriggerScript = document.createElement("script");
    scrollTriggerScript.src = "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js";
    scrollTriggerScript.onload = () => {
      gsap.registerPlugin(ScrollTrigger);

      // Your animation
      const splitWords = (el) => {
        const words = el.textContent.split(" ");
        el.innerHTML = words
          .map((w, i) => `<span class="word-wrapper"><span class="word">${i === words.length - 1 ? w : `${w} `}</span></span>`)
          .join("");
      };

      document.querySelectorAll(".js-split").forEach((el) => {
        splitWords(el);
        const words = el.querySelectorAll(".word");

        gsap.set(words, { yPercent: 100, opacity: 0, filter: "blur(10px)" });

        gsap.to(words, {
          scrollTrigger: {
            trigger: el,
            start: "top 98%",
            toggleActions: "play none none none",
            once: true,
          },
          yPercent: 0,
          opacity: 1,
          filter: "blur(0px)",
          duration: 0.5,
          stagger: { amount: 0.1 },
        });
      });
    };
    document.body.appendChild(scrollTriggerScript);
  };
  document.body.appendChild(gsapScript);
});

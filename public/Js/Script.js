const header = document.getElementById("scroll-header");
const hero = document.querySelector("#hero"); // Make sure your hero section has id="hero"

const observer = new IntersectionObserver(
  ([entry]) => {
    if (!entry.isIntersecting) {
      header.classList.add("opacity-100", "translate-y-[5px]");
    } else {
      header.classList.remove("opacity-100", "translate-y-[5px]");
    }
  },
  {
    root: null,
    threshold: 0,
  },
);

if (hero) observer.observe(hero);

document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".card");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Array.from(cards).indexOf(entry.target);
            setTimeout(() => {
              entry.target.classList.remove("opacity-0", "translate-y-10");
              entry.target.classList.add("opacity-100", "translate-y-0");
            }, index * 80); // 150ms delay between each card
            observer.unobserve(entry.target); // run only once
          }
        });
      },
      { threshold: 0.1 }
    );

    cards.forEach((card) => observer.observe(card));
  });

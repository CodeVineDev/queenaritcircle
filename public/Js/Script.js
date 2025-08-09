 <script src="https://code.iconify.design/iconify-icon/1.0.8/iconify-icon.min.js"></script>
 
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
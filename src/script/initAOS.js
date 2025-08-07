import AOS from "aos";
import "aos/dist/aos.css";


window.addEventListener("DOMContentLoaded", () => {
  AOS.init({
  once: true,
  easing: "ease-out",
  duration: 100,
});
});

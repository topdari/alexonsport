
document.addEventListener("DOMContentLoaded", () => {
  const fadeElements = document.querySelectorAll('.fade-in');
  fadeElements.forEach((el, i) => {
    el.style.animationDelay = `${i * 0.2}s`;
  });
});

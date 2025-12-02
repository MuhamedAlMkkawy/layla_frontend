export default defineNuxtPlugin(() => {
  let target = 0;
  let current = 0;

  // Update target on native scroll
  window.addEventListener("scroll", () => {
    target = window.scrollY;
  });

  function animate() {
    current += (target - current) * 0.3; // adjust 0.1 for speed
    window.scrollTo(0, current);
    requestAnimationFrame(animate);
  }

  animate();
});

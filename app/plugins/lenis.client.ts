import Lenis from "@studio-freight/lenis";

export default defineNuxtPlugin(() => {
  const lenis = new Lenis({
    duration: 1,
    easing: (t: number) => t,
    smoothWheel: true,
    smoothTouch: true,
    gestureDirection: "vertical", // force vertical-only scroll
    wheelMultiplier: 1,           // prevent fast native jumps
    touchMultiplier: 1,
    normalizeWheel: true,         // makes wheel inputs consistent
    infinite: false,              // do not allow loop scroll
  });

  // Prevent browser from snapping or jumping
  document.documentElement.style.overscrollBehavior = "smooth";

  function raf(time: number) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

  useNuxtApp().hooks.hook("page:finish", () => {
    lenis.resize();
  });
});

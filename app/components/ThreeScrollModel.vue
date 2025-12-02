<template>
  <div ref="container" class="three-canvas"></div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import * as THREE from "three";
import { GLTFLoader } from "three-stdlib";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const container = ref(null);

onMounted(() => {
  const scene = new THREE.Scene();

  // ⭐ FIXED CAMERA
  const camera = new THREE.PerspectiveCamera(
    55,   // wider FOV
    window.innerWidth / window.innerHeight,
    20,
    500
  );
  camera.position.set(150, -10, 200);   // pull it back

  // ⭐ FIXED RENDERER SIZE
  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true  });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  container.value.appendChild(renderer.domElement);

  // Light
  const light = new THREE.DirectionalLight(0xffffff, 3);
  light.position.set(0, 100, 100);
  scene.add(light);

  const loader = new GLTFLoader();
  let mixer; // animation mixer
  loader.load("/models/butterfly.glb", (gltf) => {
    const model = gltf.scene;
    model.scale.set(50, 50, 50);   // ⭐ bigger so visible
    scene.add(model);
    if (gltf.animations && gltf.animations.length) {
      mixer = new THREE.AnimationMixer(model);
      gltf.animations.forEach((clip) => {
        const action = mixer.clipAction(clip);
        action.loop = THREE.LoopRepeat; // loop infinitely
        action.play();
      });
    }
    // SCROLL TIMELINE
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "body",
        start: "top top",
        end: "bottom bottom",
        scrub:2,
      }
    });

    // Floating movement
    tl.to(model.position, { x: 300, y : 120 , duration: 20  })
    // tl.to(model.rotation, { y : -30 , duration: 1  })
    tl.to(model.position, { x : 150 ,  y: 60, duration: 10 })
    tl.to(model.position, { x: -30, y: 20, duration: 10 });

    // Rotation
    tl.to(model.position, {
      // x : 100 ,
      y: 0,
      duration: 10,
      ease: "none"
    });
    tl.to(model.position, {
      x : 300 ,
      y: -50,
      duration: 10,
      scale : 3 ,
      ease: "none"
    });
    tl.to(model.position , {
      y : -40,
      duration: 10,
      ease: "none"
    })

    tl.to(model.position, {
      // x : 160 ,
      // y: -15,
      z : 110,
      duration: 15,
      ease: "none"
    });


    // --- Animate loop ---
    const clock = new THREE.Clock();

    function animate() {
      requestAnimationFrame(animate);

      const delta = clock.getDelta();
      if (mixer) mixer.update(delta * 0.5); // update animation each frame, slowed down

      renderer.render(scene, camera);
    }
    animate();
  });

  // Resize Fix
  window.addEventListener("resize", () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize(window.innerWidth, window.innerHeight);
  });
});
</script>

<style scoped>
.three-canvas {
  position: fixed;
  top: 0;
  left: 0;
  width: 400px !important;
  height: 400px !important;
  pointer-events: none;
  z-index: 9999;
}
</style>

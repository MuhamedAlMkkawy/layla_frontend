<template>
  <Carousel v-bind="config" class="home_main_slider">
    <Slide v-for="image in images" :key="image.id" class="image">
      <Image :src="image.url" alt="image" preview/>
    </Slide>

    <!-- <template #addons>
      <Navigation />
      <Pagination />
    </template> -->
  </Carousel>
</template>


<script setup>
  import 'vue3-carousel/carousel.css'
  import { Carousel, Slide } from 'vue3-carousel'

  const images = Array.from({ length: 10 }, (_, index) => ({
    id: index + 1,
    url: `https://picsum.photos/seed/${Math.random()}/800/600`,
  }))

  const config = {
    height: 800,
    itemsToShow: 1,
    gap: 5,
    wrapAround: true,
    slideEffect: 'fade',
    autoplay: 2000, // Enables autoplay
    transition: 3000, // Time interval between slides
  }
</script>


<style lang="scss" scoped>
  .home_main_slider{
    margin-top: -200px;
    position: relative;
    padding: 0;
    z-index: 3;
    filter: brightness(0.8 ) !important;
  } 
</style>
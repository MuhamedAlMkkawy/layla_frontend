<template>
  <Carousel v-bind="config" class="home_main_slider">
    <Slide v-for="image in images" :key="image.id" class="image">
      <img :src="image.url" alt="image" />
    </Slide>

    <!-- <template #addons>
      <Navigation />
      <Pagination />
    </template> -->
  </Carousel>
</template>


<script setup>
  import 'vue3-carousel/carousel.css'
  import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

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
    duration: 3000, // Time interval between slides
  }
</script>


<style lang="scss" scoped>
  .home_main_slider{
    margin-top: -200px;
    position: relative;
    z-index: 1;
    padding: 0 ;
    &::after{
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background: rgba($color: #000 , $alpha: 0.6);
      // z-index: -1;
    }
  }
</style>
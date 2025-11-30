<template>
  <Carousel v-bind="config">
    <Slide v-for="image in images" :key="image.id">
      <NuxtLink :to="'/products/' + image.id" class="product_item">
        <div class="image">
          <img :src="image.url" alt="image" loading="lazy">
          <div class="rating">
            <p>4.5</p>
            <i class="pi pi-star-fill"></i>
          </div>
        </div>
        <div class="product_info">
          <h5>Product_{{ image.id }}</h5>
          <p class="price">Price : <span> 100$  <del>150$</del></span></p>
          <ul class="colors">
            <p>
              Colors : 
            </p>
            <li><span style="background-color: #007BFF"></span></li>
            <li><span style="background-color: #FFD60A"></span></li>
            <li><span style="background-color: #28C76F"></span></li>
            <li><span style="background-color: #FF66B3"></span></li>
          </ul>
        </div>
        <button class="main-btn">
          <span>مشاهدة المنتج</span>
          <i class="pi pi-eye"></i>
        </button>
      </NuxtLink>
    </Slide>
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
    // height: 200,
    itemsToShow: 5,
    gap: 5,
    autoplay : 3000, // Enables autoplay
    autoplaySpeed: 0,  
    transition : 5000, // Time interval between slides
    wrapAround: true,
    breakpoints: {
      // 300px and up
      400: {
        itemsToShow: 2,
        snapAlign: 'center',
      },
      // 600px and up
      600: {
        itemsToShow: 3,
        snapAlign: 'center',
      },
      // 1024px and up
      1024: {
        itemsToShow: 5,
        snapAlign: 'center',
      },
    },
  }
</script>

<style lang="scss" scoped>
  .carousel__track {
    transition-timing-function: linear-ease !important; /* smooth continuous */
  }
</style>

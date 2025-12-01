<template>
  <Carousel v-bind="config" class="home_main_slider">
    <Slide v-for="item in images" :key="item.id" class="image">
      <div class="head">
        <img :src="item.url" alt="image" loading="lazy">
        <div class="container head_content">
          <h3 class="title" data-aos="fade-up">{{ item.title }}</h3>
          <p class="text"  data-aos="fade-up" data-aos-delay="200">{{ item.text }}</p>
          <NuxtLink :to="$localeRoute('/products')" class="main-btn" data-aos="fade-up" data-aos-delay="400">Shop Now</NuxtLink>
        </div>
      </div>
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

  const images = ref([
    {
      id : 1 ,
      url : 'https://nokshi-3.myshopify.com/cdn/shop/files/home-1-slider-1.jpg?v=1615378396',
      title : 'Slider 1 Title',
      text : 'lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.'
    },
    {
      id : 2 ,
      url : 'https://nokshi-3.myshopify.com/cdn/shop/files/home-1-slider-2.jpg?v=1615378396',
      title : 'Slider 2 Title',
      text : 'lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.'
    },
  ])

  const config = {
    height: 900,
    itemsToShow: 1,
    gap: 5,
    wrapAround: true,
    slideEffect: 'fade',
    autoplay: 1500, // Enables autoplay
    transition: 3000, // Time interval between slides
    pauseAutoplayOnHover: true, // Pauses autoplay on hover
  }
</script>


<style lang="scss" scoped>
  .home_main_slider{
    // margin-top: -200px;
    position: relative;
    padding: 0;
    z-index: 3;
    padding: 0;
    .head{
      width: 100%;
      height: 100%;
      @include displayFlex($direction : column , $align : flex-start , $justify : center);
      img{
        position: absolute;
        inset-block-start: 0;
        top: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        z-index: -1;
      }
      h3.title{
        font-size: clamp(30px , 5vw , 80px);
        font-weight: 500;
        // margin-bottom: 20px;
        // font-family: "Playwrite US Trad Guides", cursive;
          font-family: "Lavishly Yours", cursive;
      }
      p.text{
        font-size: clamp(12px , 2.5vw , 16px);
        font-weight: 400;
        max-width: 600px;
        font-family: "Playwrite US Trad Guides", cursive;
      }
      a{
        max-width: 250px;
        margin: 30px 0 0;
        margin-inline-end: auto;
      }
    }
  } 
</style>
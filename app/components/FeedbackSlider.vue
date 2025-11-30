<template>
  <Carousel v-bind="config" class="feedbacks_content">
    <Slide v-for="i in 10" :key="i">
      <div class="feedbacks_item">
        <div class="feedback_header">
          <h3 class="title">User 1</h3>
          <Rating class="feedback_rating" :modelValue="4" readonly/>
        </div>
        <p class="text">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem numquam distinctio, architecto quae ad animi quaerat dicta vitae corrupti doloribus laborum fugiat magnam, suscipit inventore, maiores quas quia repellendus error.
        </p>
      </div>
    </Slide>
  </Carousel>
</template>


<script setup>
  import 'vue3-carousel/carousel.css'
  import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

  const config = {
    itemsToShow: 3,
    gap: 20,
    wrapAround: true,
    // slideEffect: 'fade',
    autoplay: 2000, // Enables autoplay
    duration: 3000, // Time interval between slides
    snapAlign : 'start' ,
    breakpoints: {
      // 300px and up
      300: {
        itemsToShow: 1,
      },
      // 500px and up
      600: {
        itemsToShow: 2,
      },
      // 500px and up
      // 992: {
      //   itemsToShow: 3,
      // },
    },
  }
</script>

<style lang="scss" scoped>
  .feedbacks_content{
    width: 100%;
    .feedbacks_item{
      border: 1px solid ;
      padding: 25px clamp(14px , 2.5vw , 24px);
      border-radius: 0 50px 0 50px;
      .feedback_header{
        @include displayFlex($justify : space-between);
        margin-bottom: 14px;
        h3{
          font-size: 20px;
        }
      }
      .text{
        font-size: 14px;
      }
    }
  }
</style>
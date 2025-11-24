<template>
  <div class="product_slider">
    <Carousel id="product_gallery" v-bind="galleryConfig" v-model="currentSlide">
      <Slide v-for="image in props.images" :key="image.id">
        <Image :src="image.url" alt="Gallery Image" class="gallery_image" preview/>
      </Slide>
    </Carousel>

    <Carousel id="product_thumbnails" v-bind="thumbnailsConfig" v-model="currentSlide">
      <Slide v-for="image in props.images" :key="image.id">
        <template #default="{ currentIndex, isActive }">
          <div
            :class="['thumbnail', { 'is-active': isActive }]"
            @click="slideTo(currentIndex)"
          >
            <img :src="image.url" alt="Thumbnail Image" class="thumbnail-image" />
          </div>
        </template>
      </Slide>

    </Carousel>
  </div>
</template>


<script setup>
  import 'vue3-carousel/carousel.css';
  import { Carousel, Slide, Navigation } from 'vue3-carousel';
  
  const currentSlide = ref(0);

  const slideTo = (nextSlide) => (currentSlide.value = nextSlide);

  const galleryConfig = {
    itemsToShow: 1,
    wrapAround: true,
    slideEffect: 'fade',
    height : '480px',
    mouseDrag: false,
    touchDrag: false,
    transition	:1500,
    autoplay: 1000, // Enables autoplay
  };

  // define props
  const props = defineProps({
    images : Object
  })

  const thumbnailsConfig = {
    // height: 100,
    itemsToShow: 4,
    wrapAround: false,
    // touchDrag: true,
    gap: 5,
    // vertical : false
  };
</script>

<style lang="scss" scoped>
//  ################# Customize the carousel of product ################
.product_slider {
  @include displayFlex($direction : column ,$align: stretch , $gap : 8px  , $justify : stretch);
  width: 100%;
  max-height: 700px;
  // height: 100%;
  overflow: hidden;
  max-width: 40%;
  @media (max-width: 992px){
    max-width: 100%;
  }
}

.gallery_image{
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
}

#product_thumbnails{
  img{
    border-radius: 5px;
    overflow: hidden;
    height: 100px;
    cursor: pointer;
  }
  @media (max-width : 567px){
    display: none;
  }
}

.carousel__slide{
  filter: brightness(0.2);
  &:hover , 
  &.carousel__slide--active{
    filter: brightness(1);
  }
}

section{
  padding: 0;
}

</style>
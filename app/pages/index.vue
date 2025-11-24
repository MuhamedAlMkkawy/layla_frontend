<template>
  <div class="page home_page"> 
    <MainSlider />
    <div class="container">
      <!-- CATEGORIES -->
      <section class="categories">
        <h3 class="title centered">
          Categories
        </h3>
        <div class="categories_content">
          <NuxtLink :to="$localeRoute('/products')" class="category_item" v-for="i in 2" :key="i" :style="{ 'background-image': `url(https://c4.wallpaperflare.com/wallpaper/175/524/956/digital-digital-art-artwork-fantasy-art-drawing-hd-wallpaper-thumb.jpg)` }">
            <h4>Lorem ipsum dolor</h4>
            <p class="text">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam aspernatur quia quo tempore quibusdam commodi unde vero perferendis numquam quam dolorem, dicta eaque consectetur sapiente alias porro illum itaque soluta?
            </p>
          </NuxtLink>
        </div>
      </section>
      <!-- CATEGORIES -->
      <!-- BEST SALE -->
      <section class="best_sale">
        <h3 class="title centered">Best Sale</h3>
        <div class="best_sale_content">
          <NuxtLink class="best_sale_item" v-for="i in 5" :key="i">
            <div class="image">
              <img src="https://c4.wallpaperflare.com/wallpaper/911/205/312/artwork-digital-art-landscape-river-wallpaper-preview.jpg" alt="image" loading="lazy">
            </div>
            <h5>Product_1</h5>
          </NuxtLink>
        </div>
      </section>
      <!-- BEST SALE -->
      <!-- FEEDBACKS -->
      <section class="feedbacks">
        <h3 class="title centered">Feedbacks</h3>
        <FeedbackSlider />
      </section>
      <!-- FEEDBACKS -->
      <!-- FAQ -->
      <section class="faq">
        <h3 class="title centered">FAQ</h3>
        <Faq />
      </section>
      <!-- FAQ -->
    </div>
  </div>
</template>

<script setup>
import FeedbackSlider from '~/components/FeedbackSlider.vue';


</script>

<style lang="scss" scoped>
  // STYLE THE CATEGORIES
  .categories{
    .categories_content{
      @include displayFlex();
      width: 100%;
      .category_item{
        flex-grow: 1;
        padding: 100px clamp(10px , 2.5vw , 40px);
        width: 100%;
        border-radius: 8px;
        color: #fff;
        position: relative;
        z-index: 3;
        overflow: hidden;
        h4{
          font-size: clamp(18px , 2.5vw , 20px);
          margin-bottom: 10px;
        }
        p.text{
          font-size: clamp(12px , 2.5vw , 16px) !important;
          font-weight: 400;
        }
        &::after{
          content: '';
          position: absolute;
          left: 0;
          top:0;
          width: 100%;
          height: 100%;
          background: rgba(0,0,0,0.6);
          z-index: -1;
        }
      }
      @media (max-width : 567px){
        flex-direction: column;
        .category_item{
          padding-block: 30px;
        }
      }
    }
  }


  // STYLE THE BEST SALE ITEMS
  .best_sale{
    .best_sale_content{
      @include displayGrid(200px , $gap : 30px 20px);
      .best_sale_item{
        text-align: center;
        .image{
          @include circle(150px);
          margin: 0 auto 20px;
        }
      }
    }
  }

</style>
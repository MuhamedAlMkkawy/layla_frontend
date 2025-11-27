<template>
  <div class="page home_page"> 
    <MainSlider />
    <div class="container">
      <!-- CATEGORIES -->
      <section class="categories">
        <h3 class="flowers_header">
          Categories
        </h3>
        <div class="categories_content">
          <NuxtLink :to="$localeRoute('/products')" class="category_item" :style="{ 'background': `url(https://c4.wallpaperflare.com/wallpaper/175/524/956/digital-digital-art-artwork-fantasy-art-drawing-hd-wallpaper-thumb.jpg)` }">
            <h4>Lorem ipsum dolor</h4>
            <p class="text">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam aspernatur quia quo tempore quibusdam commodi unde vero perferendis numquam quam dolorem, dicta eaque consectetur sapiente alias porro illum itaque soluta?
            </p>
          </NuxtLink>
          <NuxtLink :to="$localeRoute('/products')" class="category_item" :style="{ 'background': `url(https://cdn.pixabay.com/photo/2024/11/25/10/40/margaritas-9223058_1280.jpg)` }">
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
        <h3 class="flowers_header">Best Sale</h3>
        <div class="best_sale_content">
          <NuxtLink :to="$localeRoute('/products/' + i)" class="best_sale_item" v-for="i in 5" :key="i">
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
        <h3 class="flowers_header">Feedbacks</h3>
        <FeedbackSlider />
      </section>
      <!-- FEEDBACKS -->
      <!-- FAQ -->
      <section class="faq">
        <!-- <img src="@/assets/images/1.png" alt="image" loading="lazy" class="img_1"> -->
        <img src="@/assets/images/2.png" alt="image" loading="lazy" class="img_2">
        <!-- <img src="@/assets/images/3.png" alt="image" loading="lazy" class="img_3"> -->
        <h3 class="flowers_header">FAQ</h3>
        <Faq />
      </section>
      <!-- FAQ -->
    </div>
  </div>
</template>

<script setup>

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
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
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
      @include displayFlex($wrap : wrap , $justify : space-evenly);
      .best_sale_item{
        text-align: center;
        max-width: 300px;
        .image{
          @include circle(clamp(120px , 20vw , 200px));
          margin: 0 auto 20px;
          img{
            transform: scale(1.5);
            transition: 1s;
          }
        }
        h5{
          font-size: clamp(18px , 2.5vw , 25px);
          font-weight: 500;
          transition: 0.31s;
        }
        &:hover{
          .image{
            img{
              transform: scale(1);
            }
          }
          h5{
            color: $mainColor;
          }
        }
      }
    }
  }

  // STYLE THE FAQ SECTION
  .faq{
    position: relative;
    z-index: 3;
    img{
      width: 300px;
      height: fit-content;
      object-fit: contain;
      position: absolute;
      z-index: -1;
      &.img_1{
        top: 0;
        left: 0px;
        animation: move-down 3s infinite alternate-reverse;
      }
      &.img_2{
        bottom: 0;
        right: 0px;
        animation: move-up 3s infinite alternate-reverse;
      }
    }

    @keyframes move-down {
      0% {
        top: 0;
      }
      100% {
        top: 50px;
      }
    }

    @keyframes move-up {
      0% {
        bottom: 0;
      }
      100% {
        bottom: 50px;
      }
    }
  }
</style>
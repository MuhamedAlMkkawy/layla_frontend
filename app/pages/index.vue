<template>
  <div class="page home_page"> 
    <!-- <div class="logo_image">
      <img src="../assets/images/logo.png" alt="img" loading="lazy">
    </div> -->
    <MainSlider />
    <div class="container">
      <!-- CATEGORIES -->
      <section class="categories">
        <h3 class="flowers_header">
          Categories
        </h3>
        <div class="categories_content">
          <NuxtLink :to="$localeRoute('/products')" class="category_item" data-aos="fade-right">
            <img src="../assets/images/poque.png" alt="image" loading="lazy">
            <h4>Poque</h4>
          </NuxtLink>
          <NuxtLink :to="$localeRoute('/products')" class="category_item" data-aos="fade-left" >
            <img src="../assets/images/decoration.png" alt="image" loading="lazy">
            <h4>Decoration</h4>
          </NuxtLink>
        </div>
      </section>
      <!-- CATEGORIES -->
      <!-- BEST SALE -->
      <section class="best_sale">
        <h3 class="flowers_header">Best Sale</h3>
        <div class="best_sale_content">
          <NuxtLink :to="$localeRoute('/products/' + i)" class="best_sale_item" v-for="i in 4" :key="i">
            <div class="image">
              <img src="../assets/images/11.png" alt="image" data-aos="fade-up" :data-aos-delay="i * 200" loading="lazy">
              <div class="badge">
                <span>20% Off</span>
              </div>
            </div>
            <div class="product_info">
              <h4><span></span> Poque</h4>
              <h5>Product_1</h5>
              <div class="price">
                <del>60.00$</del>
                <span>39.00$</span>
              </div>
            </div>
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
        <h3 class="flowers_header">FAQ</h3>
        <Faq />
      </section>
      <!-- FAQ -->
    </div>
    <ClientOnly>
      <LazyThreeScrollModel />
    </ClientOnly>
  </div>
</template>

<script setup>
  const route = useRoute()


  onMounted(() => {
    const { $gsap } = useNuxtApp()

    // FIRST ANIMATION OF THE LOGO IMAGE BASED ON THE TRIGGER HEADER
    const header = $gsap.timeline({
      scrollTrigger: {
        trigger: ".header",            // Animate across the whole page
        start: "top top",
        end: "bottom top",
        scrub: 2,                // Smooth follow-scroll animation
      }
    })
    if(route.path == "/" || route.path == "/ar"){
      header.to(".logo_image", {
        x : 50,
        y: 350,                       // Move down as the user scrolls
        scale: 2,                   // Grow bigger
        // rotate: 180,                  // Rotate smoothly
        ease: "none",
        pin: true,
        scrub: 2
      })
    }
  
  })
</script>


<style lang="scss">
  @keyframes floatImg {
    0%   { margin-bottom: 0;}
    50%  { margin-bottom: 20px; }
    100% { margin-bottom: 0;}
  }
    @keyframes typing {
      from { width: 0; }
      to   { width: 100%; }
    }

    @keyframes blinkCursor {
      from { border-right-color: currentColor; }
      to   { border-right-color: transparent; }
    }


  .home_page{
    padding-top: 0;
    // STYLE THE CATEGORIES
    .categories{
      .categories_content{
        @include displayFlex();
        width: 100%;
        .category_item{
          flex-grow: 1;
          padding: 30px clamp(10px , 2.5vw , 25px);
          width: 100%;
          border-radius: 8px;
          color: #000;
          position: relative;
          z-index: 3;
          overflow: hidden;
          background-color: $secColor;
          min-height: 350px;
          img{
            position: absolute;
            right: 50%;
            bottom: 50%;
            transform: translate(50% ,50%);
            width: 40%;
            height: fit-content;
            object-fit: contain;
            transition: all 1s ease;
            animation: floatImg 4s ease-in-out infinite;
          }
          
          &:hover img {
            // transform: unset;
            right: 25%;
            bottom: 40%;
          }
          h4{
            font-size: 60px;
            margin-bottom: 10px;
            display: inline-block;
            overflow: hidden;
            white-space: nowrap;
            border-right: 2px solid transparent; // cursor hidden when not hovering
            width: 0;
            transition: all 1s ease;
            @include textTruncate(1);
            font-family: "Lavishly Yours", cursive;
          }
          &:hover h4 {
            // animation: typing 2s steps(30, end) infinite alternate, blinkCursor 1s step-end infinite;
            animation: typing 2s infinite alternate, blinkCursor 1s step-end infinite;
          }
          p.text{
            font-size: clamp(12px , 2.5vw , 16px) !important;
            font-weight: 400;
          }
          &:first-of-type{
            h4{
              max-width: 120px;
            }
          }
          &:last-of-type{
            h4{
              max-width: 205px;
            }
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
        @include displayGrid($fit : auto-fill);
        .best_sale_item{
          border: 1px solid #e4e4e4;
          .image{ 
            width: 100%;
            height: 300px;
            @include displayFlex();
            background: #e4e4e4;
            position: relative;
            .badge{
              position: absolute;
              top: -15px;
              right: 5px;
              background-color: gold;
              color: #fff;
              padding: 8px 15px;
              font-size: 14px;
              font-weight: 500;
              opacity: 0;
              // transform: translate(30%, -30%) rotate(30deg);
              transform-origin: 100% 0; /* Rotate around the top-right corner */
              box-shadow: 0 0 5px rgba(255, 215, 0, 0.4);
              border-radius: 5px; /* Slight curve at the bottom */
              transition: 0.6s;
            }

            img{
              width: 120px;
              height: 120px;
            }
          }

          .product_info{
            padding: 20px 15px 30px;
            h4{
              @include displayFlex($justify : flex-start ,$align : center , $gap : 8px);
              font-size: 18px;
              span{
                width: 15px;
                height: 2px;
                background: $mainColor;
                display: inline-block;
                transition: 0.5s;
              }
            }
            h5{
              font-size: 40px;
              font-family: "Lavishly Yours", cursive;
              margin-block: 15px;
            }
            .price{
              @include displayFlex($justify : space-between);
              font-size: 20px;
              del{
                color: grey;
                font-weight: 300;
              }
              span{
                font-weight: 600;
                color: $mainColor;
              }
            }
          }
          &:hover .product_info{
            h4{
              span{
                width: 30px;
              }
            }
          }
          h5{
            font-size: clamp(18px , 2.5vw , 25px);
            font-weight: 500;
            transition: 0.31s;
          }
          &:hover{
            .image{
              .badge{
                opacity: 1;
                top: 10px;
                z-index: 3;
              }
            }
          }
        }
      }
    }
  
    // STYLE THE FAQ SECTION
    .faq{
      position: relative;
      z-index: 3;
      // img{
      //   width: 300px;
      //   height: fit-content;
      //   object-fit: contain;
      //   position: absolute;
      //   z-index: -1;
      //   &.img_1{
      //     top: 0;
      //     left: 0px;
      //     animation: move-down 3s infinite alternate-reverse;
      //   }
      //   &.img_2{
      //     bottom: 0;
      //     right: 0px;
      //     animation: move-up 3s infinite alternate-reverse;
      //   }
      // }
  
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
  }
</style>
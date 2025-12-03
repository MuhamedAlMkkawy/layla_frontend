<template>
  <div class="page product_page">
    <div class="container">
      <section class="product_content">
        <ProductSlider 
          :images = productImages
        />
        <div class="product_info">
          <div class="product_header">
            <h1>Product Name</h1>
            <div class="category">Boque</div>
          </div>
          <p class="text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae magnam sit tenetur. Omnis asperiores hic qui totam adipisci deleniti laborum laboriosam consectetur nemo dolore obcaecati officia, mollitia repellat, ad necessitatibus?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae magnam sit tenetur. Omnis asperiores hic qui totam adipisci deleniti laborum laboriosam consectetur nemo dolore obcaecati officia, mollitia repellat, ad necessitatibus?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae magnam sit tenetur. Omnis asperiores hic qui totam adipisci deleniti laborum laboriosam consectetur nemo dolore obcaecati officia, mollitia repellat, ad necessitatibus?
          </p>
          <ul class="product_details">
            <li>
              <h4>Rating : </h4>
              <Rating readonly :modelValue="4" />
            </li>
            <li>
              <h4>Price : </h4>
              <h5>100$ <del>150$</del></h5>
            </li>
            <li>
              <h4>Stock : </h4>
              <h5>5</h5>
            </li>
          </ul>
          <ul class="colors">
            <h4>
              Colors : 
            </h4>
            <li><span style="background-color: #007BFF"></span></li>
            <li><span style="background-color: #FFD60A"></span></li>
            <li><span style="background-color: #28C76F"></span></li>
            <li><span style="background-color: #FF66B3"></span></li>
          </ul>
          <div class="flex_buttons">
            <button class="main-btn" @click="ToggleShowPopup">
              <span>Add to Cart</span>
              <!-- <i class="pi pi-shopping-cart"></i> -->
            </button>
            <button class="main-btn reversed" @click="$router.push($localeRoute('/'))">
              Go to Home
            </button>
          </div>
        </div>
      </section>
      <section class="recommended Products">
        <h1 class="underline_header">Recommened Products</h1>
        <RecommendedProducts />
      </section>
    </div>
    <CartProduct v-if="showAddToCartPopup" @ToggleShowPopup="ToggleShowPopup"/>
  </div>
</template>

<script setup>
  const productImages = ref([
    {
      id : 1,
      url : 'https://c4.wallpaperflare.com/wallpaper/365/244/884/uchiha-itachi-naruto-shippuuden-anbu-silhouette-wallpaper-thumb.jpg'
    },
    {
      id : 2,
      url : 'https://c4.wallpaperflare.com/wallpaper/126/117/95/quote-motivational-digital-art-typography-wallpaper-thumb.jpg'
    },
    {
      id : 3,
      url : 'https://c4.wallpaperflare.com/wallpaper/133/969/139/artwork-nature-landscape-fantasy-art-wallpaper-thumb.jpg'
    },
    {
      id : 4,
      url : 'https://c4.wallpaperflare.com/wallpaper/611/838/413/spiderman-hd-4k-superheroes-wallpaper-thumb.jpg'
    },
  ])

  // define add to cart popup
  const showAddToCartPopup = ref(false)
  const ToggleShowPopup = () => {
    showAddToCartPopup.value = !showAddToCartPopup.value
  }
</script>

<style lang="scss" scoped>
  .product_content{
    @include displayFlex($align : center);
    .product_info{
      max-width: 60%;
      .product_header{
        @include displayFlex($justify : space-between , $align : center);
        margin-bottom: 25px;
        h1{
          font-size: 40px;
          font-weight: 700;
          @media (max-width : 567px){
            font-size: 25px;
          }
        }

        .category{
          background-color: $mainColor;
          color: #fff;
          padding: 8px 16px;
          border-radius: 8px;
          font-size: 14px;
          font-weight: 500;
        }
      }

      p.text{
        font-size: 14px;
        font-weight: 400;
        color: $textColor;
        margin-bottom: 30px;
      }

      ul.product_details{
        li{
          @include displayFlex($justify : flex-start , $gap : 10px);
          margin-bottom: 30px;
          h4{
            font-size: 16px;
            font-weight: 400;
          }
          h5{
            font-size: 20px;
            font-weight: 600;
            color: $mainColor;
            del{
              color: $textColor;
              font-weight: 200;
              margin-inline-start: 20px;
            }
          }
        }
      }
      .colors{
        li{
          cursor: default;
        }
      }
      .flex_buttons{
        justify-content: flex-start;
      }
    }
    @media (max-width: 992px){
      flex-direction: column;
      .product_info{
        max-width: 100%;
        margin-top: 30px;
      }
    }
  }
</style>
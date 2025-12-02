<template>
  <div class="page products_page">
    <div class="container">
      <div class="flowers_header">
        <h1>Category 1</h1>
      </div>
      <div class="products_content">
        <NuxtLink class="product_item" :to="'/products/' + i" v-for="i in 8" :key="i">
          <div class="image">
            <img src="../../assets/images/11.png" alt="image" loading="lazy">
            <div class="rating">
              <p>4.5</p>
              <i class="pi pi-star-fill"></i>
            </div>
          </div>
          <div class="product_info">
            <h5>Product_1</h5>
            <p class="price">Price : <span> 100$  <del>150$</del></span></p>
            <ul class="colors">
              <p>
                Colors : 
              </p>
              <li data-aos="fade-up"><span style="background-color: #007BFF"></span></li>
              <li data-aos="fade-up" data-aos-delay="100"><span style="background-color: #FFD60A"></span></li>
              <li data-aos="fade-up" data-aos-delay="200"><span style="background-color: #28C76F"></span></li>
              <li data-aos="fade-up" data-aos-delay="300"><span style="background-color: #FF66B3"></span></li>
            </ul>
          </div>
          <button class="main-btn cart_btn"  @click.stop.prevent="ToggleShowPopup">
            <span></span>
            <i class="pi pi-shopping-cart"></i>
          </button>
        </NuxtLink>
      </div>
    </div>
    <CartProduct v-if="showAddToCartPopup" @ToggleShowPopup="ToggleShowPopup"/>
  </div>
</template>

<script setup>
  // define add to cart popup
  const showAddToCartPopup = ref(false)
  const ToggleShowPopup = () => {
    showAddToCartPopup.value = !showAddToCartPopup.value
  }
</script>

<style lang="scss" scoped>
  .products_content{
    @include displayGrid();
  }
</style>
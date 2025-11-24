<template>
  <div class="popup">
    <div class="content">
      <button class="close_btn pi pi-times" @click="$emit('ToggleShowPopup')"></button>
      <h3>Add Product To Cart</h3>
      <div class="product_item">
        <div class="image">
          <Image src="https://c4.wallpaperflare.com/wallpaper/911/205/312/artwork-digital-art-landscape-river-wallpaper-preview.jpg" alt="Product Image" preview />
        </div>
        <div class="product_info">
          <div class="row_item">
            <h6>Product Name</h6>
            <p class="price">Price : <span> 100$  <del>150$</del></span></p>
          </div>
          <div class="row_item">
            <div class="quantity_control">
              <!-- <h6>Quantity</h6> -->
              <div class="control_quantity">
                <button @click="quantity > 1 ? quantity-- : null" :disabled="quantity === 1">-</button>
                <span>{{ quantity }}</span>
                <button @click="quantity < 5 ? quantity++ : null" :disabled="quantity === 5">+</button>
              </div>
            </div>
            <ul class="colors">
              <p>
                Colors : 
              </p>
              <li :class="{'active' : color === 'color_1'}" @click="color = 'color_1'">
                <input hidden type="radio" name="color" id="color_1">
                <span style="background-color: #007BFF"></span>
              </li>
              <li :class="{'active' : color === 'color_2'}" @click="color = 'color_2'">
                <input hidden type="radio" name="color" id="color_2">
                <span style="background-color: #FFD60A"></span>
              </li>
              <li :class="{'active' : color === 'color_3'}" @click="color = 'color_3'">
                <input hidden type="radio" name="color" id="color_3">
                <span style="background-color: #28C76F"></span>
              </li>
              <li :class="{'active' : color === 'color_4'}" @click="color = 'color_4'">
                <input hidden type="radio" name="color" id="color_4">
                <span style="background-color: #FF66B3"></span>
              </li>
            </ul>
          </div>
          <button class="main-btn add_to_cart_btn">
            <span>إضافة إلي السلة</span>
            <i class="pi pi-shopping-cart"></i>
          </button>
        </div>
      </div>
    </div>  
  </div>
</template>

<script setup>
  const color = ref()
  const quantity = ref(1)
</script>

<style lang="scss" scoped>
  .popup{
    .content{
      h3{
        font-size: 18px;
        font-weight: 600;
        margin-bottom: 20px;
      }
      .product_item{
        border: unset;
        text-align: start;
        .image{
          max-width: unset;
          border-radius: 4px;
          overflow: hidden;
          margin-bottom: 0;
        }
        .row_item{
          @include displayFlex($justify : space-between);

        }
        .main-btn{
          border-radius: 5px;
        }
      }
    }
  }
</style>
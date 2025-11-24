<template>
  <div class="page cart_page">
    <div class="container cart_content">
      <!-- <PageBreadcrumb pageName="Cart"/> -->
      <h1 class="underline_header">Products</h1>
      <div class="cart_items">
        <div class="cart_item" v-for="i in 3" :key="i">
          <div class="product_info product_details">
            <div class="image">
              <Image src="https://cdn.pixabay.com/photo/2025/02/18/21/14/sea-onion-9416402_1280.jpg" alt="image" loading="lazy" preview/>
            </div>
            <div class="details">
              <p>Color : <span>Red</span></p>
              <p>Size : <span>XL</span></p>
            </div>
          </div>
          <div class="product_info product_price">
            <h4>Price</h4>
            <h6>100$</h6>
          </div>
          <div class="product_info product_quantity">
            <h4>Quantity</h4>
            <div class="control_quantity">
              <button>-</button>
              <span>1</span>
              <button>+</button>
            </div>
          </div>
          <div class="product_info product_subtotal">
            <h4>Subtotal</h4>
            <h6>100$</h6>
          </div>
          <div class="product_info product_remove">
            <button class="pi pi-trash"></button>
          </div>
        </div>
      </div>

    </div>
    <div class="discount_details">
      <div class="discount_coupon">
        <h4>Discount Codes</h4>
        <p>Enter your coupon code if you have one</p>
        <VeeForm
          :validation-schema="couponSchema" 
          class="form" 
          v-slot="{ meta }"
        >
          <CustomField 
            name="coupon_code"
            type="text"
            placeholder="Coupon code"
            class="coupon_input"
            @updateInputField="handleSubmitCoupon($event)"
          />
          <button class="coupon_button">Apply</button>
        </VeeForm>
      </div>
      <div class="order_total">
        <div class="item">
          <h4>Subtotal</h4>
          <h6>100$</h6>
        </div>
        <div class="item">
          <h4>Discount</h4>
          <h6>20$</h6>
        </div>
        <div class="item">
          <h4>Grand Total</h4>
          <h6>80$</h6>
        </div>
        <button class="main-btn">Checkout</button>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { couponSchema } from '@/schemas/global';


  const handleSubmitCoupon = (coupon) => {
    console.log(coupon);
  }

</script>

<style lang="scss" scoped>
.cart_page{
  padding-bottom: 0;
  
  
  .discount_details{
    @include displayFlex($justify : space-between , $gap : 50px , $wrap : wrap);
    background: #e4e4e4;
    padding: 100px 50px;
    margin-top: 50px;
    
    .discount_coupon{
      max-width: 500px;
      width: 100%;
      h4{
        font-size: clamp(20px , 2.5vw , 30px);
        font-weight: 500;
      }
      p{
        font-size: 14px;
        font-weight: 300;
        margin-bottom: 30px;
      }
      .form{
        display: flex;
        height: 55px;
        .coupon_input{
          width: 100%;
          border: 1px solid $mainColor;
          border-radius: 8px 0 0 8px  ;
          border-right: none;
          input{
            background: #fff;
          }
        }
        button.coupon_button{
          background: $mainColor;
          color: #fff;
          border-radius: 0 8px 8px 0;
          padding: 0 30px;
          transition: 0.3s;
          border: 1px solid $mainColor;
          &:hover{
            background: transparent;
            color: $mainColor;
          }
        }
      }
    }
    .order_total{
      max-width: 300px;
      width: 100%;
      .item{
        @include displayFlex($justify : space-between);
        margin-bottom: 20px;
        h4{
          font-size: 18px;
          font-weight: 400;
        }
        h6{
          font-size: 20px;
          font-weight: 800;
        }
        &:last-of-type{
          padding-bottom: 35px;
          border-bottom: 1px solid $mainColor;
        }
      }
    }
    @media (max-width : 767px){
      justify-content: center;
      gap: 80px;
      .discount_coupon,
      .order_total{
        max-width: 100% !important;
        width: 100%;
      }
    }
  }
}
</style>
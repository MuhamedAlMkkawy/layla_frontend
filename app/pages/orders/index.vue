<template>
  <div class="orders_page page">
    <div class="container">
      <h1 class="underline_header">Orders</h1>
      <div class="cart_items">
        <div class="cart_item" data-aos="fade-up" data-aos-delay="100">
          <div class="product_info product_number">
            <h4>Number</h4>
            <h6>#100</h6>
          </div>
          <div class="product_info product_date">
            <h4>Date</h4>
            <h6>5/11/2025</h6>
          </div>
          <div class="product_info product_subtotal">
            <h4>Subtotal</h4>
            <h6>1200$</h6>
          </div>
          <div class="product_info product_status">
            <h4>Status</h4>
            <h6 class="status pending">pending</h6>
          </div>
        </div>
        <div class="cart_item" data-aos="fade-up" data-aos-delay="200">
          <div class="product_info product_number">
            <h4>Number</h4>
            <h6>#101</h6>
          </div>
          <div class="product_info product_date">
            <h4>Date</h4>
            <h6>5/11/2025</h6>
          </div>
          <div class="product_info product_subtotal">
            <h4>Subtotal</h4>
            <h6>1200$</h6>
          </div>
          <div class="product_info product_status">
            <h4>Status</h4>
            <h6 class="status prepared">prepared</h6>
          </div>
        </div>
        <div class="cart_item" data-aos="fade-up" data-aos-delay="300">
          <div class="product_info product_number">
            <h4>Number</h4>
            <h6>#102</h6>
          </div>
          <div class="product_info product_date">
            <h4>Date</h4>
            <h6>5/11/2025</h6>
          </div>
          <div class="product_info product_subtotal">
            <h4>Subtotal</h4>
            <h6>1200$</h6>
          </div>
          <div class="product_info product_status">
            <h4>Status</h4>
            <h6 class="status delivered">delivered</h6>
          </div>
        </div>
        <div class="cart_item" data-aos="fade-up" data-aos-delay="400">
          <div class="product_info product_number">
            <h4>Number</h4>
            <h6>#103</h6>
          </div>
          <div class="product_info product_date">
            <h4>Date</h4>
            <h6>5/11/2025</h6>
          </div>
          <div class="product_info product_subtotal">
            <h4>Subtotal</h4>
            <h6>1200$</h6>
          </div>
          <div class="product_info product_status">
            <h4>Status</h4>
            <h6 class="status cancelled">cancelled</h6>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
  .cart_item{
    padding-block: 0px;
  }
</style>
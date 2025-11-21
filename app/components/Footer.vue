<template>
  <footer class="footer">
    <div class="container footer_content">
      <div class="image">
        <img src="../assets/images/logo.png" alt="image" loading="lazy">
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores ea tempora dolorum doloribus! Totam, culpa repudiandae. Obcaecati repellendus maxime ut eaque, asperiores dolores delectus, vitae dolorem voluptatem possimus nostrum itaque. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit animi ducimus odio in eveniet ipsum magnam nostrum accusantium id corrupti, libero culpa autem, mollitia recusandae maiores architecto explicabo beatae sed.
      </p>
      <div class="social_links">
        <NuxtLink class="image" v-for="i in 6" :key="i"><img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" alt="image" loading="lazy"></NuxtLink>
      </div>
    </div>
  </footer>
</template>

<script setup>

</script>

<style lang="scss" scoped>
  footer{
    margin-top: 50px;
    padding-block: 50px ;
    text-align: center;
    background: $mainColor;
    color: #fff;
    .footer_content{
      max-width: 800px;
      margin: 0 auto;
      .image{
        max-width: 350px;
        margin: 0 auto 30px;
      }
      p{
        font-size: 14px;
        margin-bottom: 30px;
      }
      .social_links{
        @include displayFlex($justify : center , $gap : 30px);
        .image{
          display: flex;
          width: 30px;
          margin: 0;
        }
      }
    }
  }
</style>
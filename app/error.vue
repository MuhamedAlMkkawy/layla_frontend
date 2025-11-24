<template>
  <div class="error_page">
    <div class="image">
      <img :src="logoImg" alt="logo image" loading="lazy">
    </div>
    <h1>
      4 
      <NotFoundEyes/>
      <!-- <span>0</span> -->
      4
    </h1>
    <h3>
      {{ 
        globalStore.lang == 'en'?
        'Page is Not Found ' :
        'الصفحة غير موجوده'
      }}
    </h3>
    <NuxtLink :to="localeRoute('/')" class="main-btn">
      {{ 
        globalStore.lang == 'en'?
        'Go To Home Page' :
        'أذهب للرئيسية'
      }}
    </NuxtLink>
  </div>
</template>

<script setup>  
  import logoImg from '@/assets/images/logo.png'
  // define global store
  const globalStore = useGlobalStore()

  // define locale route
  const localeRoute = useLocaleRoute()

</script>


<style lang="scss">  
  .error_page{
    @include displayFlex($direction : column , $gap : 0);
    height: 100vh;
    background: $mainColor;
    position: relative;
    padding-inline: 20px;
    .image{
      max-width: 400px;
      width: 100%;
      height: 80px;
      margin: 0 auto;
      img{
        object-fit: cover !important;
        filter: brightness(0) invert(1) !important;
      }
      // @media (max-width : 560px){
      //   width: 200px;
      // }
    }

    h1{
      font-size: 200px;
      margin-block: 40px;
      color: $thirdColor;
      @include displayFlex($gap : 20px);
      // span{
      //   display: none;
      //   color: $thirdColor;
      //   @media (max-width : 450px){
      //     display: flex;
      //   }
      // }
      @media (max-width : 567px){
        font-size: 80px;
      }
    }

    h3{
      font-size: clamp(30px , 100% , 300px);
      margin-bottom: 10px;
    }
    a{
      max-width: 500px;
    }
  }
</style>
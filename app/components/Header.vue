<template>
  <header class="header">
    <div class="container header_content">
      <NuxtLink :to="$localeRoute('/')" class="image">
        <img src="../assets/images/logo.png" alt="image" loading="lazy">
      </NuxtLink>
      <ul class="header_icons">
        <li><NuxtLink :to="$localeRoute('/cart')" title="cart"><i class="pi pi-shopping-cart"></i></NuxtLink></li>
        <li><NuxtLink :to="$localeRoute('/orders')" title="orders"><i class="pi pi-briefcase"></i></NuxtLink></li>
        <li>
          <NuxtLink 
            title="lang" 
            @click="globalStore.setLang(availableLocales[0].code)"
            :to="switchLocalePath(availableLocales[0].code)"
            >
            <i class="pi pi-language"></i>
          </NuxtLink>
        </li>
      </ul>
    </div>
  </header>
</template>

<script setup>
  const globalStore = useGlobalStore()
  const { locale, locales } = useI18n()
  const switchLocalePath = useSwitchLocalePath()

  const availableLocales = computed(() => {
    return locales.value.filter(i => i.code !== locale.value)
  })
</script>


<style lang="scss" scoped>
  header{
    position: relative;
    z-index: 3;
    padding: 30px 0;
    .header_content{
      @include displayFlex($justify : space-between , $gap : 20px);
      .image{
        width: 200px;
        flex-shrink: 0;
      }
      ul.header_icons{
        @include displayFlex();
        a{
          @include circle(40px , 5px);
          border: 1px solid $thirdColor;
          color: $thirdColor;
          @include displayFlex();
          transition : 0.3s;
          &:hover{
            background: $mainColor;
            color: $thirdColor;
            border-color: $mainColor;
          }
        }
      }
      @media (max-width : 450px){
        flex-direction: column;
        justify-content: center;
      }
    }
  }
</style>
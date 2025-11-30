<template>
  <header :class="['header' , {'scrolled' : isScrolled }]"  :style="$route.path !== '/' && $route.path !== '/ar' ? 'background : #000;' : ''" >
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

  // USE THE LOCALES TO MANAGE THE LANGUAGE
  const { locale, locales } = useI18n()
  const switchLocalePath = useSwitchLocalePath()

  const availableLocales = computed(() => {
    return locales.value.filter(i => i.code !== locale.value)
  })

  // TO CHECK THE SCROLL FROM TOP TO MANAGE THE BACKGROUND OF THE HEADER
  const isScrolled = ref(false)
  onMounted(()=>{
    window.addEventListener('scroll', () => {
      isScrolled.value = window.pageYOffset > 100
    })
  })
</script>


<style lang="scss" scoped>
  header{
    position: sticky;
    top: 0;
    z-index: 9;
    padding: 10px 0;
    transition: 0.5s;
    // background: #000;
    .header_content{
      @include displayFlex($justify : space-between , $gap : 20px);
      .image{
        width: fit-content;
        height: 60px;
        flex-shrink: 0;
        img{
          object-fit: contain
        }
      }
      ul.header_icons{
        @include displayFlex();
        a{
          @include circle(40px , 5px);
          border: 1px solid #000;
          color: #000;
          @include displayFlex();
          transition : 0.3s;
          &:hover{
            background: $mainColor;
            color: #fff;
            border-color: $mainColor;
          }
        }
      }
      @media (max-width : 450px){
        flex-direction: column;
        justify-content: center;
      }
    }
    &.scrolled{
      background: #fff;
      // box-shadow: 0 0 6px #e4e4e4;
      .image{
        filter: brightness(0);
      }
      ul.header_icons{
        a{
          border-color: $mainColor;
          color: $mainColor;
        }
      }
    }
  }
</style>
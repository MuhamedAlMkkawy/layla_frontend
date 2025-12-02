<template>
  <NuxtLayout>
    <NuxtPage />
    <LazyThreeScrollModel />
    <Toast />
  </NuxtLayout>
</template>

<script setup>
  import Toast  from 'primevue/toast';
  
  const { locale } = useI18n()
  const currentDir = computed(() => (locale.value === "ar" ? "rtl" : "ltr"));
  
  useHead({
    htmlAttrs: {
      lang: locale,
      dir: currentDir,
    },
  });
</script>


<style>
  .page-enter-active,
  .page-leave-active {
    transition: opacity 0.8s ease, 
    transform 0.8s cubic-bezier(0.22, 1, 0.36, 1);
  }

  .page-enter-from {
    opacity: 0;
    transform: scale(0.92) translateY(15px);
  }

  .page-leave-to {
    opacity: 0;
    transform: scale(0.96) translateY(-10px);
  }
</style>
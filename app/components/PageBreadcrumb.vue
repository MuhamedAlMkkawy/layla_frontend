<template>
  <div class="breadcrumb">
    <NuxtLink :to="$localeRoute('/')">Home</NuxtLink>
    <i class="pi pi-angle-right"></i>
    <h5>{{props.pageName}}</h5>
  </div>
</template>

<script setup>
  // define props
  const props = defineProps({
    pageName : {
      type: String,
      default: ''
    }
  })
</script>

<style lang="scss" scoped>
  .breadcrumb{
    @include displayFlex($justify : flex-start , $gap : 5px);
    font-size: 20px;
    font-weight: 500;
    h5{
      color: #807d7e;
      line-height: normal;
      margin-bottom: 0;
    }
  }
</style>
<template>
  <footer class="footer">
    <div class="container footer_content">
      <div class="image">
        <img src="../assets/images/logo.png" data-aos="fade-in" alt="image" loading="lazy">
      </div>
      <p data-aos="fade-up" data-aos-delay="200">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores ea tempora dolorum doloribus! Totam, culpa repudiandae. Obcaecati repellendus maxime ut eaque, asperiores dolores delectus, vitae dolorem voluptatem possimus nostrum itaque. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit animi ducimus odio in eveniet ipsum magnam nostrum accusantium id corrupti, libero culpa autem, mollitia recusandae maiores architecto explicabo beatae sed.
      </p>
      <div class="social_links">
        <NuxtLink
          v-for="(item, i) in socialLinks"
          :key="i"
          :to="item.url"
          target="_blank"
          class="image"
          data-aos="fade-up"
          :data-aos-delay="i * 150"
        >
          <img :src="item.icon" :alt="item.name" loading="lazy" />
        </NuxtLink>
      </div>

    </div>
  </footer>
</template>

<script setup>
  const socialLinks = [
    {
      name: "Facebook",
      url: "https://facebook.com/",
      icon: "https://cdn-icons-png.flaticon.com/512/733/733547.png",
    },
    {
      name: "Instagram",
      url: "https://instagram.com/",
      icon: "https://cdn-icons-png.flaticon.com/512/2111/2111463.png",
    },
    {
      name: "Twitter",
      url: "https://cdn-icons-png.flaticon.com/512/5968/5968958.png",
      icon: "https://cdn-icons-png.flaticon.com/512/5968/5968958.png",
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/",
      icon: "https://cdn-icons-png.flaticon.com/512/3536/3536505.png",
    },
    {
      name: "GitHub",
      url: "https://github.com/",
      icon: "https://cdn-icons-png.flaticon.com/512/733/733553.png",
    },
    {
      name: "YouTube",
      url: "https://youtube.com/",
      icon: "https://cdn-icons-png.flaticon.com/512/174/174883.png",
    },
  ];
</script>

<style lang="scss" scoped>
  footer{
    // margin-top: 50px;
    border-top: 1px solid #e4e4e4;
    padding-block: 50px 120px;
    text-align: center;
    background: #2e2a69;
    color: #fff;
    .footer_content{
      max-width: 800px;
      margin: 0 auto;
      > .image{
        max-width: 350px;
        height: 100px;
        margin: 0 auto 30px;
        img{
          object-fit: contain;
          // filter: brightness(0)invert(1);
        }
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
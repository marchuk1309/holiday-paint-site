<template>
  <footer class="footer">
    <div class="container flex jc-sb">
      <div class="footer-col">
        <div class="footer-logo"><img src="@/assets/img/logo-white.png" alt=""></div>
        <div class="footer-text">
          <p>ИНН 230 906 897 754</p>
          <p>ОГРНИП 319 237 500 081 080</p>
        </div>
        <div class="footer-socials">
          <a href="https://vk.com/holidaypaint" target="_blank" class="socials-item header__socials-item"><img src="@/assets/img/icons/vk.svg" alt=""></a>
          <a href="https://www.instagram.com/holidaypaint/" target="_blank" class="socials-item header__socials-item"><img src="@/assets/img/icons/instagram.svg" alt=""></a>
          <a href="https://wa.me/79385040674" target="_blank" class="socials-item header__socials-item"><img src="@/assets/img/icons/whatsapp.svg" alt=""></a>
          <a href="https://t.me/Roman_HP" target="_blank" class="socials-item header__socials-item"><img src="@/assets/img/icons/telegram.svg" alt=""></a>
        </div>
      </div>
      <div class="footer-col">
        <p class="footer-header">Документация</p>
        <a @click.prevent="dialog1Visible = true" class="footer-link">Товарный знак</a>
        <a @click.prevent="dialog2Visible = true" class="footer-link">Сертификаты</a>
        <a href="policy.pdf" target="_blank" class="footer-link">Политика конфиденциальности</a>
      </div>
      <div class="footer-col">
        <p class="footer-header">Товары</p>
        <nuxt-link to="/paint" class="footer-link">Меловая краска</nuxt-link>
        <nuxt-link to="/colored-smoke" class="footer-link">Цветной дым</nuxt-link>
        <nuxt-link to="/markers" class="footer-link">Меловые маркеры</nuxt-link>
        <nuxt-link to="/holy-paint" class="footer-link">Краски холи</nuxt-link>
        <nuxt-link to="/kigurumi" class="footer-link">Костюмы кигуруми</nuxt-link>
      </div>
      <div class="footer-col">
        <p class="footer-header">Навигация</p>
        <nuxt-link to="/about" class="footer-link">О компании</nuxt-link>
        <a @click="$emit('changeCity')" class="footer-link">Найти представителя</a>
        <nuxt-link to="/discounts" class="footer-link">Акции</nuxt-link>
        <a href="http://holiday-paint.tilda.ws/" target="_blank" class="btn footer-btn">Стать партнером</a>
      </div>
    </div>
    <div class="footer-after">
      <div class="container flex jc-sa">
        <p>&copy; Holiday Paint {{currentYear}}. <a target="_blank" href="https://wa.me/79146000900">Разработано Fobesko Team</a></p>
      </div>
    </div>

    <el-dialog
      class="images-dialog"
      :visible.sync="dialog1Visible"
      width="100%"
      >
      <el-carousel height="100vh" :autoplay="false">
        <el-carousel-item v-for="item in imageArr2" :key="item">
          <img :src="item.url" alt="">
        </el-carousel-item>
      </el-carousel>
    </el-dialog>
    <el-dialog
      class="images-dialog"
      :visible.sync="dialog2Visible"
      width="100%"
    >
      <el-carousel height="100vh" :autoplay="false">
        <el-carousel-item v-for="item in imageArr1" :key="item">
          <img :src="item.url" alt="">
        </el-carousel-item>
      </el-carousel>
    </el-dialog>
  </footer>
</template>

<script>
  export default {
    name: "Footer",
    data: () => ({
      currentYear: new Date().getFullYear(),
      dialog1Visible: false,
      dialog2Visible: false,
      imageArr1: [],
      imageArr2: []
    }),
    created() {
      for (let y in this.$store.state.shop.content[0].images) {
        this.imageArr1.push({url: 'http://hpapi.fobesko.com/public/storage/content/' + this.$store.state.shop.content[0].images[y]})
      }
      for (let y in this.$store.state.shop.content[6].images) {
        this.imageArr2.push({url: 'http://hpapi.fobesko.com/public/storage/content/' + this.$store.state.shop.content[6].images[y]})
      }
      this.$forceUpdate()
      console.log(this.imageArr)
    },
  }
</script>

<style lang="sass" scoped>
  @import "../assets/sass/variables"
  .footer
    padding-top: 2em
    background-color: #222324
    color: #e8e8e8
    @media (max-width: 800px)
      .container
        flex-wrap: wrap
    &-after
      margin-top: 1.5em
      background-color: #191a1b
      padding: .75em
      text-transform: uppercase
    &-logo
      margin-bottom: 1.5em
      img
        width: 10em
    &-text
      margin-bottom: 1.5rem
      font-size: $_14px
      line-height: 1.5

    &-header
      text-transform: uppercase
      font-size: $_18px
      font-weight: 700
      margin-bottom: 1.5em
    &-link
      display: block
      width: fit-content
      color: #9b9b9b
      &:not(:last-child)
        margin-bottom: 1em
      &:hover
        color: $primaryColor
  @media (max-width: 800px)
    .footer
      &-col
        &:first-child
          width: 100%
          text-align: center
        &:nth-child(3), &:nth-child(4), &:nth-child(2)
          display: none
</style>

<style lang="scss">
  @import "../assets/sass/variables";
  .images-dialog {
    .el-dialog {
      margin: 0!important;
      &__header {
        z-index: 100;
      }
      &__header, &__body {
        padding: 0;
        position: relative;
      }
      img {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }
    .el-carousel__arrow:hover {
      background-color: $primaryColor;
    }
  }
</style>

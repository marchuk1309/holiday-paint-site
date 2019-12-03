<template>
  <footer class="footer">
    <div class="container flex jc-sb">
      <div class="footer-col">
        <div class="footer-logo"><img src="@/assets/img/logo-white.png" alt=""></div>
        <div class="footer-text">
          <p>ИНН 000 000 000</p>
          <p>ОГРНИП 000 000 000</p>
        </div>
        <div class="footer-socials">
          <a href="https://vk.com" target="_blank" class="socials-item footer__socials-item"><img src="@/assets/img/icons/vk.svg" alt=""></a>
          <a href="https://instagram.com" target="_blank" class="socials-item footer__socials-item"><img src="@/assets/img/icons/instagram.svg" alt=""></a>
          <a href="https://youtube.com" target="_blank" class="socials-item footer__socials-item"><img src="@/assets/img/icons/youtube.svg" alt=""></a>
        </div>
      </div>
      <div class="footer-col">
        <p class="footer-header">Документация</p>
        <a href="" class="footer-link">Товарный знак</a>
        <a href="" class="footer-link">Сертификаты</a>
        <a href="" class="footer-link">Политика конфиденциальности</a>
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
        <nuxt-link to="/found" class="footer-link">Найти представителя</nuxt-link>
        <nuxt-link to="/discounts" class="footer-link">Акции</nuxt-link>
        <a class="btn footer-btn">Стать партнером</a>
      </div>
    </div>
    <div class="footer-after">
      <div class="container flex jc-sa">
        <p>&copy; Holiday Paint</p>
      </div>
    </div>
  </footer>
</template>

<script>
  export default {
    name: "Footer"
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

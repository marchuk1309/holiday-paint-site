<template>
  <div class="header">
    <div class="header-top">
      <div class="container flex ai-c jc-sb">
        <nuxt-link no-prefetch to="/" class="header-logo"><img src="@/assets/img/logo.png" alt=""></nuxt-link>
        <div class="header__contacts">
          <a href="tel:8 800 000 00 00" class="header__contacts-link">8 800 000 00 00</a>
          <a href="mailto:partner@holiday-paint.ru" class="header__contacts-link">partner@holiday-paint.ru</a>
          <div @click="changeDistrict = !changeDistrict" class="header-address">
            <span>Район {{currentDistrict}}</span>
          </div>
        </div>
        <div class="header__location-toggler" @click="changeCity = !changeCity">
          <span>{{currentCity}}</span>
        </div>

        <div class="header__socials">
          <a href="https://vk.com" target="_blank" class="socials-item header__socials-item"><img src="@/assets/img/icons/vk.svg" alt=""></a>
          <a href="https://instagram.com" target="_blank" class="socials-item header__socials-item"><img src="@/assets/img/icons/instagram.svg" alt=""></a>
          <a href="https://youtube.com" target="_blank" class="socials-item header__socials-item"><img src="@/assets/img/icons/youtube.svg" alt=""></a>
        </div>
        <ul class="header__menu flex jc-sb">
          <li class="header__menu-link">
            <nuxt-link no-prefetch active-class="active" to="/about">О проекте</nuxt-link>
          </li>
          <li class="header__menu-link">
            <a href="">Франшиза</a>
          </li>
          <li class="header__menu-link">
            <nuxt-link no-prefetch active-class="active" to="/feedback">Отзывы</nuxt-link>
          </li>
          <li class="header__menu-link">
            <nuxt-link no-prefetch active-class="active" to="/discounts">Акции и скидки</nuxt-link>
          </li>
        </ul>
        <nuxt-link no-prefetch to="/basket" class="header-basket mobile-show">
          <p class="header-basket__counter">{{basketCount}}</p>
          <img src="@/assets/img/icons/basket.svg" alt="">
        </nuxt-link>
        <div class="mobile-menu__toggler" @click="toggleMenu" :class="{active: mobileMenu}">
          <span></span><span></span><span></span>
        </div>
      </div>
    </div>
    <div class="mobile-menu" :class="{active: mobileMenu}">
      <div class="mobile-menu__list">
        <a @click.prevent="goTo('/about')" class="mobile-menu__link">О проекте</a>
        <a @click.prevent="goTo('/')" class="mobile-menu__link">Франшиза</a>
        <a @click.prevent="goTo('/feedback')" class="mobile-menu__link">Отзывы</a>
        <a @click.prevent="goTo('/discounts')" class="mobile-menu__link">Акции и скидки</a>
        <a @click.prevent="goTo('/catalog')" class="mobile-menu__link">Магазин</a>
        <a @click.prevent="goTo('/paint')" class="mobile-menu__link">Смываемая краска</a>
        <a @click.prevent="goTo('/markers')" class="mobile-menu__link">Меловые маркеры</a>
        <a @click.prevent="goTo('/colored-smoke')" class="mobile-menu__link">Цветной дым</a>
        <a @click.prevent="goTo('/holy-paint')" class="mobile-menu__link">Краски холи</a>
        <a @click.prevent="goTo('/kigurumi')" class="mobile-menu__link">Кигуруми</a>
      </div>
      <a href="tel:8 800 000 00 00" class="mobile-menu__tel">8 800 000 00 00</a>
    </div>
    <div class="header-bottom" :class="{fixed: this.headerFixed}">
      <div class="container flex ai-c jc-sb">
        <div class="header-nav flex ai-c jc-sb">
          <nuxt-link no-prefetch to="/paint" active-class="active" class="header-nav__link">
            <p class="header-nav__link-img"><img src="@/assets/img/icons/paint-spray.svg" alt=""></p>
            Смываемая краска
          </nuxt-link>
          <nuxt-link no-prefetch to="/markers" active-class="active" class="header-nav__link">
            <p class="header-nav__link-img"><img src="@/assets/img/icons/highlighter.svg" alt=""></p>
            Меловые маркеры
          </nuxt-link>
          <nuxt-link no-prefetch to="/colored-smoke" active-class="active" class="header-nav__link">
            <p class="header-nav__link-img"><img src="@/assets/img/icons/cloud.svg" alt=""></p>
            Цветной дым
          </nuxt-link>
          <nuxt-link no-prefetch to="/holy-paint" active-class="active" class="header-nav__link">
            <p class="header-nav__link-img"><img src="@/assets/img/icons/dust.svg" alt=""></p>
            Краски холи
          </nuxt-link>
          <nuxt-link no-prefetch to="/kigurumi" active-class="active" class="header-nav__link">
            <p class="header-nav__link-img"><img src="@/assets/img/icons/working-coverall.svg" alt=""></p>
            Кигуруми
          </nuxt-link>
        </div>
        <nuxt-link no-prefetch to="/basket" class="header-basket">
          <p class="header-basket__counter">{{basketCount}}</p>
          <img src="@/assets/img/icons/basket.svg" alt="">
        </nuxt-link>
        <nuxt-link no-prefetch to="/catalog" class="btn btn-transparent">Магазин</nuxt-link>
      </div>
    </div>
    <el-dialog
      :modal-append-to-body="false"
      :center="true"
      title="Выберите район"
      :visible.sync="changeDistrict"
      width="300px"
    >
      <a v-for="district in districts" :key="district"  @click="changeCurrentDistrict(district)" class="dialog-link">{{district}}</a>
    </el-dialog>
    <el-dialog
      :modal-append-to-body="false"
      :center="true"
      title="Выберите город"
      :visible.sync="changeCity"
      width="300px"
    >
      <a v-for="city in citys" :key="city" @click="changeCurrentCity(city)"  class="dialog-link">{{city}}</a>
    </el-dialog>
  </div>
</template>

<script>
  import localdata from "../assets/localdata";
  export default {
    name: "Header",
    data: () => ({
      changeCity: false,
      changeDistrict: false,
      mobileMenu: false,
      currentDistrict: 'Химки',
      headerFixed: false,
      currentCity: 'Петропавловск-Камчатский',
      districts: [
        'Химки',
        'Марьено',
        'Солнцено',
        'Ясенево'
      ],
      citys: [
        'Петропавловск-Камчатский',
        'Москва',
        'Санкт-Петербург',
        'Сочи',
        'Тюмень'
      ],
      basketItems: localdata.basketData
    }),
    computed: {
      basketCount() {
        let total = 0
        this.basketItems.forEach((item) => {
          total += item.count
        })
        return total
      }
    },
    mounted() {
      window.addEventListener('scroll', this.scrolled);
    },
    methods: {
      scrolled () {
        if (window.pageYOffset > 100) {
          console.log('WORKKK')
          this.headerFixed = true
        } else this.headerFixed = false
      },
      changeCurrentCity(city) {
        this.currentCity = city
        this.changeCity = false
      },
      changeCurrentDistrict(district) {
        this.currentDistrict = district
        this.changeDistrict = false
      }, toggleMenu() {
        this.mobileMenu = !this.mobileMenu;
        this.$emit('mobileMenu')
      },
      goTo(link) {
        this.mobileMenu = false
        this.$router.push(link)
      }
    }

  }
</script>

<style lang="sass" scoped>
  @import "../assets/sass/variables"
  .dialog-link
    display: block
    width: fit-content
    margin-left: auto
    margin-right: auto
    margin-bottom: .5em
  .header
    &-top, &-bottom
      padding: 1.25em 0
      position: relative
    &-top
      &::before
        content: ''
        position: absolute
        width: 100%
        height: 100%
        left: 0
        top: 0
        opacity: .6
        z-index: -1
        background-color: #fff
    &-bottom
      background-color: transparent
      &.fixed
        position: fixed
        top: 0
        left: 0
        width: 100%
        background-color: rgba(#fff, .9)
        transition: .5s
    &-logo
      width: 8em
      img
        width: 100%
    &-address
      color: $primaryColor
      font-weight: 600
      position: relative
      width: fit-content
      padding-right: 2em
      transition: .3s
      cursor: pointer
      &::after
        content: ''
        position: absolute
        right: 0
        top: 0
        height: 100%
        width: 1.5em
        background-image: url('../assets/img/icons/bottom.svg')
        background-position: center
        background-repeat: no-repeat
        background-size: 60%
      &:hover
        color: darken($primaryColor, 15%)
    &__contacts
      font-size: $_18px
      &-link
        display: block
        margin-bottom: .4em
        width: fit-content
        &:hover
          color: $primaryColor

    &__location-toggler
      font-size: $_14px
      padding: .75em 3em .75em 1.5em
      background-color: #fff
      box-shadow: $boxShadow
      border-radius: 1em
      transition: .3s
      cursor: pointer
      position: relative
      &:hover
        box-shadow: $boxShadowHover
      &::after
        content: ''
        position: absolute
        right: .75em
        top: 0
        height: 100%
        width: 1.5em
        background-image: url('../assets/img/icons/bottom.svg')
        background-position: center
        background-repeat: no-repeat
        background-size: 60%
    &__menu
      &-link
        a.active
          color: $primaryColor
        &:not(:last-child)
          margin-right: .8em
    &-nav
      &__link
        display: flex
        align-items: center
        &:not(:last-child)
          margin-right: 1.25em
        &.active
          color: $primaryColor
          .header-nav__link-img
            box-shadow: $boxShadowHover
        &-img
          transition: .3s
          height: 3em
          width: 3em
          padding: .75em 0
          border-radius: 50%
          text-align: center
          background-color: #fff
          box-shadow: $boxShadow
          margin-right: .75em
          img
            height: 100%
            filter: drop-shadow(0 4px 5px rgba(122, 49, 158, 0.27))
        &:hover
          .header-nav__link-img
            box-shadow: $boxShadowHover
    &-basket
      width: 4em
      height: 4em
      background-color: #fff
      box-shadow: $boxShadow
      position: relative
      padding: 1em 0
      text-align: center
      border-radius: 50%
      img
        height: 100%
      &__counter
        transition: inherit
        position: absolute
        bottom: 68%
        left: 68%
        border-radius: 50%
        width: 1.75em
        height: 1.75em
        line-height: 1.75em
        text-align: center
        background-color: #fff
        box-shadow: 0 6px 5px rgba(75, 75, 75, 0.22)
        font-weight: 600
      &:hover
        box-shadow: $boxShadowHover
        .header-basket__counter
          box-shadow: 0 3px 2px rgba(75, 75, 75, 0.22)
    .mobile-menu
      padding: 6em 2em
      color: #fff
      position: fixed
      top: 0
      width: 100%
      background-color: $titleColor
      right: 100%
      transition: .4s
      height: 100vh
      overflow-y: scroll
      z-index: 1
      &.active
        right: 0
      &__tel
        display: block
        width: fit-content
        margin-left: auto
        margin-right: auto
      &__list
        height: 100%
        display: flex
        flex-direction: column
        justify-content: center
      &__link
        margin: .5em
        font-size: 1.5em

      &__toggler
        display: none
        width: 40px
        height: 30px
        position: relative
        span
          transition: .4s
          display: block
          width: 100%
          height: 4px
          border-radius: 5px
          position: absolute
          left: 0
          background-image: $primaryGrad
          &:first-child
            top: 0
          &:nth-child(2)
            top: calc(50% - 2px)
          &:last-child
            bottom: 0
        &.active
          span
            &:first-child
              top: calc(50% - 2px)
              transform: rotate(45deg)
            &:nth-child(2)
              display: none
            &:last-child
              bottom: auto
              top: calc(50% - 2px)
              transform: rotate(-45deg)
  @media (max-width: 1024px)
    .header
      position: fixed
      top: 0
      left: 0
      width: 100%
      z-index: 10
      &-top
        z-index: 2
        &:before
          opacity: .95
      &-bottom, &-address, &__contacts, &__socials, &__menu
        display: none
      &__location-toggler
        width: 14em
        text-align: center
      &-logo
        width: 5em
      .mobile-menu__toggler
        display: block
      .header-basket
        font-size: .8em
</style>
<style lang="sass">
  @media (max-width: 1024px)
    .el-header
      margin: 2.5em 0
</style>

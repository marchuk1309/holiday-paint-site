<template>
  <div class="partners-item">
    <div class="partners-photo">
      <img :src="'http://hpapi.fobesko.com/public/storage/profile/' + partner.id + '.' + partner.imgext" alt="">
      <p class="partners-city">{{partner.city}}</p>
    </div>
    <div class="partners-descript">
      <p class="partners-name">{{partner.name}}</p>
      <p class="partners-rating">{{partner.rating}}</p>
    </div>
    <div class="partners-socials">
      <a v-if="partner.vk" :href="'https://vk.com/' + partner.vk" target="_blank" class="partners-social__box"><img src="@/assets/img/icons/vk.svg" alt=""></a>
      <a v-if="partner.instagram" :href="'https://instagram.com/' + partner.instagram" target="_blank" class="partners-social__box"><img src="@/assets/img/icons/instagram.svg" alt=""></a>
      <a v-if="partner.whatsapp" :href="'https://wa.me/' + partner.whatsapp" target="_blank" class="partners-social__box"><img src="@/assets/img/icons/whatsapp.svg" alt=""></a>
      <a v-if="partner.telegram" :href="'https://t.me/' + partner.telegram" target="_blank" class="partners-social__box"><img src="@/assets/img/icons/telegram.svg" alt=""></a>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['partner'],
    computed: {
      /*
      photo() {
        let index = this.$store.state.shop.userphoto.findIndex(user => user.id == this.partner.id)
        if (index != -1) return this.$store.state.shop.userphoto[index]
        else return this.$store.state.shop.noPhoto
      },*/
    }
  }
</script>

<style lang="sass" scoped>
  @import "../assets/sass/variables"
  .partners
    &-item
      background-color: #fff
      box-shadow: 0 10px 29px rgba(122, 49, 158, 0.12)
      border-radius: .625em
      overflow: hidden
      padding-bottom: 1em
      position: relative
      @media (min-width: 1025px)
        margin: 1em
    &-photo
      width: 100%
      height: 15em
      position: relative
      img
        height: 100%
        width: 100%
        object-fit: cover
    &-city
      position: absolute
      bottom: 1.5em
      background-color: #fff
      left: 0
      padding: .5em
      width: fit-content
    &-socials
      display: flex
      padding: 0 .75em
    &-social
      &__box
        line-height: 1
        height: 2em
        width: 2em
        border-radius: 50%
        box-shadow: $boxShadow
        padding: .5em 0
        text-align: center
        transition: .3s
        &:not(:last-child)
          margin-right: .5em
          @media (max-width: 1024px)
            margin-right: .25em
        img
          width: auto
          display: inline
          height: 100%
        &:hover
          box-shadow: $boxShadowHover
    &-descript
      padding: .75em
      display: flex
      justify-content: space-between
    &-name
      position: relative
      &:after
        content: ''
        position: absolute
        left: calc(100% + .25em)
        top: 0
        height: 100%
        width: 1.25em
        background-image: url('../assets/img/icons/heart.svg')
        background-position: center
        background-repeat: no-repeat
        background-size: contain
    &-menu
      height: 2em
      width: 2em
      border-radius: 50%
      box-shadow: $boxShadow
      position: absolute
      right: .5em
      bottom: 1em
      display: flex
      align-items: center
      justify-content: space-around
      line-height: 2.5em
      font-weight: 700
      color: $primaryColor
      &:hover
        box-shadow: $boxShadowHover
</style>

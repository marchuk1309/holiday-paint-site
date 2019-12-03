<template>
  <div class="goods-item" :class="addedClass">
    <div class="goods-photo">
      <img src="@/assets/img/goods/photo.png"" alt="">
      <p class="goods-photo__popup" v-if="!good.inStock">Нет в наличии. Потребуется доставка с основного склада</p>
    </div>
    <p class="goods-price">{{good.price}}</p>
    <p class="goods-name">{{good.name}}</p>
    <p class="goods-descript">{{good.info}}</p>
    <nuxt-link :to="'/catalog/' + good.id" class="goods-link"></nuxt-link>
    <a v-if="good.inStock" @click.prevent="" class="goods-btn btn">В корзину</a>
    <a v-else class="goods-btn btn blue">Заказать</a>
  </div>
</template>

<script>
  export default {
    props: ['good', 'addedClass']
  }
</script>

<style lang="sass" scoped>
  @import "../assets/sass/variables"
  .goods
    &-item
      position: relative
      padding: 1em
      background-color: #ffffff
      box-shadow: 0 10px 29px rgba(122, 49, 158, 0.12)
      border-radius: 1em
      text-align: center
      transition: .3s
      &:hover
        box-shadow: 0 5px 10px rgba(122, 49, 158, 0.12)
        color: inherit
        .goods-photo__popup
          visibility: visible
          opacity: 1
    &-photo
      position: relative
      height: 15em
      border-bottom: 1px solid #c4c4c4
      margin-bottom: 1em
      img
        height: 100%
      &__popup
        visibility: hidden
        opacity: 0
        transition: .4s
        position: absolute
        top: 1em
        left: 0
        right: 0
        font-size: $_14px
        background-color: #fff
        box-shadow: 0 4px 7px rgba(54, 54, 54, 0.15)
        border-radius: 5px
        padding: .5em
        line-height: 1.3
        color: $blue
        font-weight: 500

    &-price
      text-transform: uppercase
      font-weight: 600
      background-image: $primaryGrad
      -webkit-background-clip: text
      -webkit-text-fill-color: transparent
      font-size: 1.75em
      margin-bottom: .5em
    &-descript
      margin-bottom: 1em
    &-link
      display: block
      position: absolute
      left: 0
      top: 0
      width: 100%
      height: 100%
      z-index: 1
    &-btn
      z-index: 2
      width: 100%
      box-shadow: 0 8px 40px rgba(122, 49, 158, 0.4)
      margin-bottom: .75em

</style>

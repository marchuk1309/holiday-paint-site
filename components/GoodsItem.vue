<template>
  <div class="goods-item" :class="addedClass">
    <div class="goods-photo">
      <img v-if="good.images != null" :src="'http://hpapi.fobesko.com/public/storage/product/' + good.images[0]" alt="">
      <img v-if="good.images == null" :src="$store.state.shop.noPhoto" alt="">
      <p class="goods-photo__popup" v-if="good.available == 0">Нет в наличии. Потребуется доставка с основного склада</p>
      <nuxt-link :to="'/catalog/' + good.id" class="goods-link"></nuxt-link>
    </div>
    <p class="goods-price">{{price || 0}}₽</p>
    <p class="goods-name">{{good.name}}</p>
    <p class="goods-descript">{{this.volume}}</p>
    <div>
      <div v-if="good.sizes !== undefined & good.sizes !== '[]'" class="goods__sizes">
        <div v-for="(size,index) in good.sizes" :key="index"  class="goods__size">
          <input :id="good.id + '-size-' + size + '-' + addedClass" v-model="good.size" type="radio" class="goods__size--input" :value="index">
          <label class="goods__size--label" :for="good.id + '-size-' + size + '-' + addedClass">
            {{ size }}
          </label>
        </div>
      </div>
      <input v-for="item in good.colors" v-model="good.color" :value="item" type="radio" class="form-checkbox__color" :style="'background-color:' + $store.state.shop.colors[colorIndex(item)].color">
    </div>
    <div class="goods__alert" v-if="good.category != 4 && showAlert">Выберите цвет!</div>
    <div class="goods__alert" v-if="good.category == 4 && showAlert">Выберите размер!</div>
    <a v-if="available" @click.prevent="basketPush()" class="goods-btn btn">{{added ? "В корзине +" :"В корзину"}}</a>
    <a v-else @click.prevent="basketPush()" class="goods-btn btn blue">{{added ? "В корзине +" :"Заказать"}}</a>
  </div>
</template>

<script>

  export default {
    data: () => ({
      selectedColor: null,
      showAlert: false,
      added: false
    }),
    methods: {
      basketPush() {
        // If it is not kigurumi and have colors
        if(this.good.category != 4 && this.good.colors.length > 0 && this.good.color == null) {
          // Check colors quantity, if one, select it
          if (this.good.colors.length == 1) this.good.color = this.good.colors[0]
          // If many, show message
          else { this.showAlert = true; return }
        }
        // If it is kigurumi and have colors
        else if (this.good.category == 4 && this.good.sizes.length > 0 && this.good.size == null) {
          // Check colors quantity, if one, select it
          if (this.good.sizes.length == 1) this.good.size = this.good.sizes[0]
          // If many, show message
          else { this.showAlert = true; return }
        }
        // If reached this point - hide alert
        this.showAlert = false
        let item = { ...this.good }
        // If it is kigurumi - select correct price
        if (this.good.category == 4) {
          item.price = this.price
        }
        this.$store.commit('shop/basketPush', item)
        this.added = true
      },
      colorIndex(color) {
        return this.$store.state.shop.colors.findIndex(element => element.id === color)
      }
    },
    watch: {
      good() {
        if (this.good.color != undefined) this.showAlert = false
        if (this.good.size != undefined) this.showAlert = false
      },
    },
    mounted(){
    },
    computed: {
      available() {
        let stock = this.good[this.$store.state.shop.user.info.id]
        if (stock.length > 0) stock = stock.reduce((a, b) => a + b, 0)
        if (stock > 0) return true
        else return false
      },
      volume() {
        if (this.good.volume == null) return ''
        return this.good.volume + ' мл.'
      },
      sizes() {
        if (this.good.sizes == null || this.good.sizes == '[]' || this.good.sizes == '') return ''
        else return JSON.stringify(this.good.sizes).substring(2, JSON.stringify(this.good.sizes).length - 2) + ' мм.'
      },
      price() {
        if (typeof JSON.parse(this.good.price) == 'object') {
          if (this.good.size != undefined) {
            let price = JSON.parse(this.good.price)
            if (price[this.good.size] == undefined) return 0
            else return price[this.good.size]
          }
          else {
            let price = JSON.parse(this.good.price) || 0
            let length = price ? price.length : 0
            if (price[0] == undefined) return 0
            if (price.length == 1) return price[0]
            else return price[0] + '-' + price[price.length-1]
          }
        }
        else return this.good.price
      }
    },
    props: ['good', 'addedClass']
  }
</script>

<style lang="sass" scoped>
  @import "../assets/sass/variables"
  .goods
    &__alert
      display: flex
      align-items: center
      justify-content: center
      color: #ff0000
      padding: 0 0 1em 0
    &-item
      position: relative
      padding: 1em
      background-color: #ffffff
      box-shadow: 0 10px 29px rgba(122, 49, 158, 0.12)
      border-radius: 1em
      text-align: center
      transition: .3s
      display: flex
      flex-direction: column
      &:hover
        box-shadow: 0 5px 10px rgba(122, 49, 158, 0.12)
        color: inherit
        .goods-photo__popup
          visibility: visible
          opacity: 1
    &-photo
      position: relative
      height: 15em
      margin-bottom: 1em
      img, object
        height: 100%
        width: 100%
        object-fit: contain
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
    &__sizes
      display: flex
      flex-wrap: wrap
      justify-content: center
      margin-bottom: .5em
    &__size
      &--label
        cursor: pointer
        border-radius: 5px
        border: 1px solid
        width: 2.5em
        padding: .25em 0
        margin: .5em .25em
        display: block
        text-align: center
        position: relative
        transition: .4s
        z-index: 1
        overflow: hidden
        &::after
          content: ''
          position: absolute
          left: 0
          top: 0
          width: 100%
          height: 100%
          opacity: 0
          visibility: hidden
          background-image: $primaryGrad
          transition: inherit
          z-index: -1
      &--input
        display: none
        &:checked ~ .goods__size--label
          border-color: $primaryColor
          color: #ffffff
          &::after
            opacity: 1
            visibility: visible
    &-price
      text-transform: uppercase
      font-weight: 600
      color: $primaryColor
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
      margin-top: auto
      z-index: 2
      width: 100%
      box-shadow: 0 8px 40px rgba(122, 49, 158, 0.4)
      margin-bottom: .75em
  .form-checkbox__color
    z-index: 2
    position: relative
</style>

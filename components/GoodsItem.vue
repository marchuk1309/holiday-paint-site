<template>
  <div v-if="showItem === true" class="goods-item" :class="addedClass">
    <div class="goods-photo">
      <img :src="photo" alt="">
      <p class="goods-photo__popup" v-if="good.available == 0">Нет в наличии. Потребуется доставка с основного склада</p>
    </div>
    <p class="goods-price">{{price}}₽</p>
    <p class="goods-name">{{good.name}}</p>
    <p class="goods-descript">{{this.volume}} {{this.sizes}}</p>
    <nuxt-link :to="'/catalog/' + good.id" class="goods-link"></nuxt-link>
    <div>
      <input v-for="item in good.colors" v-model="good.color" :value="item" type="radio" class="form-checkbox__color" :style="'background-color:' + $store.state.shop.colors[item].color">
    </div>
    <div class="goods__alert" v-if="showAlert">Выберите цвет!</div>
    <a v-if="good.available == 1" @click.prevent="basketPush()" class="goods-btn btn">В корзину</a>
    <a v-else class="goods-btn btn blue">Заказать</a>
  </div>
</template>

<script>

  export default {
    data: () => ({
      selectedColor: null,
      showAlert: false
    }),
    methods: {
      basketPush() {
        if(this.good.color == null) {
          this.showAlert = true
        }
        else
        {
          this.showAlert = false
          this.$store.commit('shop/basketPush', this.good)
        }
      }
    },
    watch: {
      good() {
        if (this.good.color != undefined) this.showAlert = false
      },
      showItem() {
        if (this.addedClass !== 'popular-item') this.$store.commit('shop/checkShownProducts', [this.good, this.showItem])
      }
    },
    mounted(){
      if (this.addedClass !== 'popular-item') this.$store.commit('shop/checkShownProducts', [this.good, this.showItem])
      //console.log(this.promocodes)
      /*
      if (this.showItem == true) {
        this.$store.commit('shop/pushFilter', this.good)
      }*/
    },
    computed: {
      photo() {
        let index = this.$store.state.shop.products_photos.findIndex(product => product.id == this.good.id)
        if (index != -1) return this.$store.state.shop.products_photos[index].value
        else return this.$store.state.shop.noPhoto
      },
      showItem(){
        if (this.addedClass == 'popular-item') return true
        // Availability filter
        if (this.good.available == 0 && this.$store.state.shop.showAvailable) return false
        // Type filter
        if (this.$store.state.shop.showType.includes(this.good.category) !== true && this.$store.state.shop.showType.length > 0) return false
        // Color filter
        if (this.good.colors === null) this.good.colors = []
        if (this.good.colors === undefined) this.good.colors = []
        if (this.$store.state.shop.showColor.filter(value => this.good.colors.includes(value)).length === 0 && this.$store.state.shop.showColor.length > 0) return false
        // Search filter
        if (this.$store.state.shop.searchString.length > 0 && !this.good.name.includes(this.$store.state.shop.searchString) && !this.good.name.toLowerCase().includes(this.$store.state.shop.searchString)) return false
        // Sale filter
        if (this.$store.state.shop.showSale == true && this.$store.state.shop.saleproducts.length > 0 && !this.$store.state.shop.saleproducts.includes(this.good.id)) return false
        else { return true }
      },
      volume() {
        if (this.good.volume == null) return ''
        return this.good.volume + ' мл.'
      },
      sizes() {
        if (this.good.sizes == null || this.good.sizes == '[]') return ''
        return JSON.stringify(this.good.sizes).substring(2, JSON.stringify(this.good.sizes).length - 2) + ' мм.'
      },
      price() {
        if (typeof JSON.parse(this.good.price) == 'object') {
          let price = JSON.parse(this.good.price)
          return price[0] + '-' + price[2]
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
      img
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
      margin-top: auto
      z-index: 2
      width: 100%
      box-shadow: 0 8px 40px rgba(122, 49, 158, 0.4)
      margin-bottom: .75em
  .form-checkbox__color
    z-index: 2
    position: relative
</style>

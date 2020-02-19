<template>
  <section class="item-card">
    <div class="container">
      <h2 class="section-title">Карточка товара</h2>
      <div class="item-card__wrap">
        <div class="item-card__left">
          <div v-if="element.images != null" class="item-card__gallery" :class="{single: element.images.length === 1}">
            <el-carousel v-if="element.images.length > 1" arrow="always" height="30em" trigger="click" :autoplay="false">
              <el-carousel-item v-for="(item, index) in element.images" :key="index">
                <img :src="'http://hpapi.fobesko.com/public/storage/product/' + item" alt="">
              </el-carousel-item>
            </el-carousel>
            <img class="item-card__single-photo" v-else :src="'http://hpapi.fobesko.com/public/storage/product/' + element.images[0]" alt="">
          </div>
          <img v-if="element.images == null" class="item-card__gallery single" :src="$store.state.shop.noPhoto" alt="">
        </div>
        <form class="item-card__right">
          <p class="item-card__name">{{element.name}}</p>
          <div v-if="element.colors.length > 0" class="item-card__form-box">
            <p class="item-card__label">Цвет:</p>
            <input v-for="item in element.colors" v-model="element.color" :value="item" type="radio" class="form-checkbox__color" :style="'background-color:' + $store.state.shop.colors[item].color">
          </div>
          <div v-if="element.sizes.length > 0" class="item-card__sizes">
            <p class="item-card__label">Размер:</p>
            <div v-for="(size,index) in element.sizes" :key="index" class="item-card__size">
              <input :id="element.id + '-size-' + size" v-model="element.size" type="radio" class="item-card__size--input" :value="index">
              <label class="item-card__size--label" :for="element.id + '-size-' + size">
                {{size}}
              </label>
            </div>
          </div>
          <div class="goods__alert" v-if="showColorAlert">Выберите цвет!</div>
          <div class="goods__alert" v-if="showSizeAlert">Выберите размер!</div>
          <div class="item-card__form-box">
            <div class="item-card__buttons">
              <a @click.prevent="basketPush(); proceed()" class="item-card__btn btn btn-transparent">Купить сразу</a>
              <a @click.prevent="basketPush()" class="item-card__btn btn">В корзину</a>
            </div>
            <p class="item-card__label">Описание:</p>
            <p class="item-card__text">{{element.description}}</p>
          </div>
        </form>
      </div>
    </div>
    <PopularGoods />
  </section>
</template>

<script>
  import PopularGoods from "@/components/PopularGoods";
  import localData from "@/assets/localdata";

  export default {
    name: "itemCard",
    head: {
      title: `Holiday Paint | Товар`
    },
    components: {
      PopularGoods
    },
    data: () => ({
      showColorAlert: false,
      showSizeAlert: false,
      images: [
        '../../assets/img/goods/photo.png'
      ]
    }),
    methods: {
      proceed(){
        if(this.element.category != 4 && this.element.color != null) { this.$router.push('/order/step1') }
        if(this.element.category == 4 && this.element.size != null) { this.$router.push('/order/step1') }
      },
      basketPush() {
        if(this.element.category != 4 && this.element.color == null) this.showColorAlert = true
        else if (this.element.category == 4 && this.element.size == null) this.showSizeAlert = true
        else
        {
          this.showColorAlert = false
          this.showSizeAlert = false
          let item = { ...this.element }
          if (this.element.category == 4) item.price = JSON.parse(this.element.price)[this.element.size]
          this.$store.commit('shop/basketPush', item)
        }
      }
    },
    watch: {
      element() {
        if (this.element.color != undefined) this.showAlert = false
      },
    },
    computed: {
      photo() {
        let index = this.$store.state.shop.products_photos.findIndex(product => product.id == this.element.id)
        if (index != -1) return this.$store.state.shop.products_photos[index].value
        else return this.$store.state.shop.noPhoto
      },
      element() {
        return this.$store.getters['shop/productsInfo'].filter((el) => {
          return el.id === +this.$route.params.id
        })[0]
      }
    },
  }
</script>

<style lang="sass">
  @import "../../assets/sass/variables"
  .item-card
    margin-top: 4em
    &__gallery.single
      width: auto
      margin-left: auto
      margin-right: auto
      height: 25em
    &__alert
      display: flex
      align-items: center
      justify-content: center
      color: #ff0000
      padding: 0 0 1em 0
    &__single-photo
      width: 100%
      height: 100%
      object-fit: contain
    &__wrap
      display: flex
      justify-content: space-between
      margin-bottom: 8em
      flex-wrap: wrap
    &__left
      width: 45%
      display: flex
      justify-content: space-between
      @media (max-width: 992px)
        width: 100%
        margin-bottom: 2em
    &__right
      width: 50%
      @media (max-width: 992px)
        width: 100%
    &__name
      text-transform: uppercase
      font-size: $_30px
      font-weight: 500
      margin-bottom: .75em
    &__label
      font-size: 1.365em
      margin-bottom: .5em
      margin-right: .5em
    &__buttons
      width: 100%
      display: flex
      justify-content: space-between
      margin: 2em 0
      align-items: center
      flex-wrap: wrap
    &__btn
      width: 48%
      text-align: center
      &:not(.btn-transparent)
        padding: calc(.875em + 3px)
      @media (max-width: 600px)
        width: 100%
        &:first-child
          margin-bottom: 1em
    &__gallery
      width: 100%
      height: 30em
      background-color: #ffffff
      border-radius: 10px
      box-shadow: 0 10px 29px rgba(122, 49, 158, 0.12)
    .el-carousel__item
      img
        height: 100%
        width: 100%
        object-fit: contain
    .el-carousel__button
      background-color: $primaryColor
    .el-carousel__arrow
      background-image: $primaryGrad
      opacity: .11
      &:hover
        opacity: .5
    &__sizes
      display: flex
      flex-wrap: wrap
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
        &:checked ~ .item-card__size--label
          border-color: $primaryColor
          color: #ffffff
          &::after
            opacity: 1
            visibility: visible
</style>

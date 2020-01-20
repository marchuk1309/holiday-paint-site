<template>
  <section class="item-card">
    <div class="container">
      <h2 class="section-title">Карточка товара</h2>
      <div class="item-card__wrap">
        <div class="item-card__left">
          <div class="item-card__gallery">
            <el-carousel arrow="always" height="30em" trigger="click" :autoplay="false">
              <el-carousel-item v-for="(image, index) in images" :key="index">
                <img :src="photo" alt="">
              </el-carousel-item>
            </el-carousel>
          </div>
        </div>
        <form class="item-card__right">
          <p class="item-card__name">{{element.name}}</p>
          <div class="item-card__form-box">
            <p class="item-card__label">Цвет:</p>
            <input v-for="item in element.colors" v-model="element.color" :value="item" type="radio" class="form-checkbox__color" :style="'background-color:' + $store.state.shop.colors[item].color">
          </div>
          <div class="item-card__alert" v-if="showAlert">Выберите цвет!</div>
          <div class="item-card__form-box">
            <div class="item-card__buttons">
              <a class="item-card__btn btn btn-transparent">Купить сразу</a>
              <a @click.prevent="basketPush()" class="item-card__btn btn">В корзину</a>
            </div>
            <p class="item-card__label">Описание:</p>
            <p class="item-card__text">{{element.description}}</p>
          </div>
        </form>
      </div>
    </div>
    <PopularGoods />
    <Subscription />
  </section>
</template>

<script>
  import PopularGoods from "@/components/PopularGoods";
  import Subscription from "@/components/Subscription"
  import localData from "@/assets/localdata";

  export default {
    name: "itemCard",
    head: {
      title: `Holiday Paint | Товар`
    },
    components: {
      PopularGoods,
      Subscription
    },
    data: () => ({
      showAlert: false,
      images: [
        '../../assets/img/goods/photo.png',
        '../../assets/img/goods/photo.png',
        '../../assets/img/goods/photo.png',
        '../../assets/img/goods/photo.png',
        '../../assets/img/goods/photo.png',
      ]
    }),
    methods: {
      basketPush() {
        if(this.element.color == null) {
          this.showAlert = true
        }
        else
        {
          this.showAlert = false
          this.$store.commit('shop/basketPush', this.element)
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
    &__alert
      display: flex
      align-items: center
      justify-content: center
      color: #ff0000
      padding: 0 0 1em 0
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
</style>

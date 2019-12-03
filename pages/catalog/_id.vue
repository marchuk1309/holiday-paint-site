<template>
  <section class="item-card">
    <div class="container">
      <h2 class="section-title">Карточка товара</h2>
      <div class="item-card__wrap">
        <div class="item-card__left">
          <div class="item-card__gallery">
            <el-carousel arrow="always" height="30em" trigger="click" :autoplay="false">
              <el-carousel-item v-for="(image, inx) in images" :key="inx">
                <img src="../../assets/img/goods/photo.png" alt="">
              </el-carousel-item>
            </el-carousel>
          </div>
        </div>
        <form class="item-card__right">
          <p class="item-card__name">{{element.name}}</p>
          <div class="item-card__form-box">
            <p class="item-card__label">Цвет:</p>
            <input name="color" type="radio" class="form-checkbox__color purple">
            <input name="color" type="radio" class="form-checkbox__color green">
            <input name="color" type="radio" class="form-checkbox__color blue">
            <input name="color" type="radio" class="form-checkbox__color yellow">
            <input name="color" type="radio" class="form-checkbox__color pink">
            <input name="color" type="radio" class="form-checkbox__color dark-blue">
            <input name="color" type="radio" class="form-checkbox__color maroon">
            <input name="color" type="radio" class="form-checkbox__color red">
            <input name="color" type="radio" class="form-checkbox__color gray">
          </div>
          <div class="item-card__form-box">
            <p class="item-card__label">Размер:</p>
            <select name="" id="" class="item-card__select form-select">
              <option value="120">120</option>
              <option value="150">150</option>
              <option value="160">160</option>
              <option value="190">190</option>
            </select>
            <div class="item-card__buttons">
              <a class="item-card__btn btn btn-transparent">Купить сразу</a>
              <a class="item-card__btn btn">В корзину</a>
            </div>
            <p class="item-card__label">Описание:</p>
            <p class="item-card__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio dolore dolorem ea exercitationem expedita, fugiat impedit ipsa ipsam minima nesciunt omnis possimus rem sint veritatis vero vitae voluptates. Earum facere odio pariatur possimus praesentium tenetur ut! Accusamus expedita molestias voluptatum.</p>
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
      images: [
        '../../assets/img/goods/photo.png',
        '../../assets/img/goods/photo.png',
        '../../assets/img/goods/photo.png',
        '../../assets/img/goods/photo.png',
        '../../assets/img/goods/photo.png',
      ]
    }),
    computed: {
      element() {
        return localData.itemsData.filter((el) => {
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

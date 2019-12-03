<template>
  <section class="order">
    <div class="order-wrap container">
      <h2 class="section-title mb2">Оформление заказа</h2>
      <el-row align="space-between">
        <el-col class="order-col" :sm="24" :md="12">
          <el-card class="order-card">
            <el-form
              ref="form"
              :rules="rules"
              :model="userData"
              @submit.native.prevent="onSubmit"
            >
              <h2 class="order-card__title">Введите данные, чтобы продолжить покупку</h2>
              <el-form-item prop="name">
                <el-input placeholder="Имя*" v-model="userData.name"/>
              </el-form-item>
              <el-form-item prop="tel">
                <el-input placeholder="Телефон*" v-model="userData.tel"/>
              </el-form-item>
              <el-form-item prop="email">
                <el-input placeholder="E-mail" v-model.trim="userData.email"/>
              </el-form-item>
              <label class="form-checkbox__wrap">
                <input class="form-checkbox big" type="checkbox" v-model="userData.subscription"><span class="form-checkbox__label">Подписаться на новости HOLIDAY PAINT</span>
              </label>
              <p class="order-card__text">Контактные данные под надежной защитой</p>
              <div class="order-delivery__wrap">
                <label class="order-delivery__label">
                  <input name="delivery" checked type="radio" class="order-delivery__radio form-radio">
                  <div class="order-delivery__label-border"></div>
                  <div class="order-delivery__label-text">
                    <p>Самовывоз</p>
                    <span>Москва, 3-я улица Строителей, 25</span>
                  </div>
                </label>
                <label class="order-delivery__label">
                  <input name="delivery" type="radio" class="order-delivery__radio form-radio">
                  <div class="order-delivery__label-border"></div>
                  <div class="order-delivery__label-text">
                    <p>Доставка</p>
                    <span>Домой или в офис</span>
                  </div>
                </label>
              </div>
              <el-form-item>
                <button
                  class="btn"
                  type="submit"
                >
                  Продолжить покупку
                </button>
              </el-form-item>
            </el-form>
          </el-card>
        </el-col>
        <el-col class="order-col" :sm="24" :md="12">
          <order-list :items="items"/>
        </el-col>
      </el-row>
    </div>
    <popular-goods/>
    <subscription/>
  </section>
</template>

<script>
  import OrderList from "../../components/OrderList";
  import PopularGoods from "../../components/PopularGoods";
  import Subscription from '../../components/Subscription';
  import localdata from "../../assets/localdata";

  export default {
    name: "order-step1",
    data: () => ({
      items: localdata.basketData,
      userData: {
        name: '',
        tel: '',
        email: '',
        subscription: false
      },
      rules: {
        name: [
          { required: true, message: 'Введите свое имя', trigger: 'blur' }
        ],
        tel: [
          { required: true, message: 'Введите свой телефон', trigger: 'blur' }
        ]
      }
    }),
    head: {
      title: 'Holiday Paint | Оформление заказа'
    },
    components: {
      OrderList,
      PopularGoods,
      Subscription
    },
    methods: {
      onSubmit() {
        this.$refs.form.validate( async valid => {
          if (valid) {
            const formData = {
              name: this.userData.name,
              tel: this.userData.tel,
              email: this.userData.email,
              subscription: this.userData.subscription
            }
            try {
              this.$router.push('/order/step2')
            } catch (e) {
            }
          }
        })
      }
    }
  }
</script>

<style lang="sass" scoped>
  @import "../../assets/sass/variables"
  .order
    padding-top: 4em
    &-wrap
      margin-bottom: 4em
    &-card
      @media (min-width: 992px)
        width: 98%
      &__text
        font-weight: 600
        color: $blue
        margin-bottom: 1em
        @media (max-width: 767px)
          text-align: center
          font-size: .9em
      &__link
        text-decoration: underline
        color: $primaryColor
        &:hover
          color: darken($primaryColor, 20%)
      &__title
        font-size: 1.5em
        font-weight: 600
        color: $titleColor
        margin-bottom: 1em
        @media (max-width: 767px)
          text-align: center
      &.right
        @media (min-width: 992px)
          margin-left: auto
        @media (max-width: 991px)
          margin-bottom: 2em
      .btn
        width: 100%
    &-delivery
      &__wrap
        display: flex
        justify-content: space-between
        margin-bottom: 1.5em
      &__label
        cursor: pointer
        width: 48%
        padding: .75em
        border-radius: 1em
        position: relative
        background-color: transparent
        display: flex
        &-text
          p
            font-weight: 700
            margin-bottom: .5em
        &-border
          position: absolute
          content: ''
          left: 0
          right: 0
          top: 0
          bottom: 0
          border: 1px solid #dcdcdc
          border-radius: inherit
          transition: .3s
        .form-radio
          margin-right: 1em
          &:checked + .order-delivery__label-border
            border: 2px solid $primaryColor

</style>
<style lang="sass">
  .order
    .el-row
      display: flex
      @media (max-width: 991px)
        flex-direction: column-reverse

    &-card
      &.right
        height: 100%
    .el-form-item
      &:last-child
        margin-bottom: 0
      &__content
        margin-bottom: .5em
    .el-input__inner
      font-size: 1em
      padding: 0 2.5em
      height: 60px
      line-height: 63px
      border-radius: 40px
    .form-checkbox__wrap
      margin-bottom: 1em
      font-size: 1.25em
      @media (max-width: 767px)
        font-size: 1em
</style>

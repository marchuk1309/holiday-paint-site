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
              <el-form-item prop="city">
                <el-input placeholder="Город*" v-model="userData.city"/>
              </el-form-item>
              <el-form-item prop="street">
                <el-input placeholder="Улица*" v-model="userData.street"/>
              </el-form-item>
              <el-row :justify="'space-between'">
                <el-col :xs="24" :sm="7">
                  <el-form-item prop="home">
                    <el-input placeholder="Дом*" v-model.trim="userData.home"/>
                  </el-form-item>
                </el-col>
                <el-col :xs="24" :sm="7">
                  <el-form-item prop="build">
                    <el-input placeholder="Стр.*" v-model.trim="userData.build"/>
                  </el-form-item>
                </el-col>
                <el-col :xs="24" :sm="7">
                  <el-form-item prop="apartment">
                    <el-input placeholder="Кв.*" v-model.trim="userData.apartment"/>
                  </el-form-item>
                </el-col>
              </el-row>
              <p class="order-card__text">Наш партнер свяжется с Вами и сообщит стоимость и сроки доставки заказа</p>
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
  </section>
</template>

<script>
  import OrderList from "../../components/OrderList";
  import PopularGoods from "../../components/PopularGoods";
  import localdata from "../../assets/localdata";

  export default {
    name: "order-step1",
    data: () => ({
      items: [],
      userData: {
        city: '',
        street: '',
        build: '',
        home: '',
        apartment: '',

      },
      rules: {
        city: [
          { required: true, message: 'Введите свой город', trigger: 'blur' }
        ],
        street: [
          { required: true, message: 'Введите улицу', trigger: 'blur' }
        ],
        home: [
          { required: true, message: 'Введите дом', trigger: 'blur' }
        ],
        apartment: [
          { required: true, message: 'Введите квартиру', trigger: 'blur' }
        ],
      }
    }),
    head: {
      title: 'Holiday Paint | Оформление заказа'
    },
    mounted(){
      this.items = this.$store.getters['shop/basketInfo']
    },
    components: {
      OrderList,
      PopularGoods
    },
    computed: {
    },
    methods: {
      onSubmit() {
        this.$refs.form.validate( async valid => {
          if (valid) {
            const formData = {
              city: this.userData.city,
              street: this.userData.street,
              build: this.userData.build,
              home: this.userData.home,
              apartment: this.userData.apartment
            }
            try {
              //this.$store.commit('addStatsRecord', {value: request.value})
              let request = { ...this.$store.state.shop.request }
              request.city = this.userData.city
              request.address = this.userData.street + ' ' + this.userData.home + ' ' + this.userData.apartment
              this.$store.commit('shop/addRequest', request)
              this.$store.commit('shop/basketFlush')
              this.$router.push('/order/thanks');
            } catch (e) {
              console.log(e)
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
      display: flex
      flex-direction: column
      height: 100%
      @media (min-width: 992px)
        width: 98%
      &__text
        font-size: $_14px
        text-align: center
        color: $primaryColor
        margin-bottom: 2em
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
        margin-top: auto
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
    .is-justify-space-between
      margin-bottom: 2em
      .el-col
        &:first-child
          margin-right: auto
        &:last-child
          margin-left: auto
      justify-content: space-between
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
    .order
      .el-form
        .el-form-item
          margin-bottom: 1em
</style>

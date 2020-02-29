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
                <el-input placeholder="Телефон*"  maxlength="10" v-model="userData.phone">
                  <template slot="prepend">+7</template>
                </el-input>
              </el-form-item>
              <el-form-item prop="email">
                <el-input placeholder="E-mail" v-model.trim="userData.email"/>
              </el-form-item>
              <!--
              <label class="form-checkbox__wrap">
                <input class="form-checkbox big" type="checkbox" v-model="subscription"><span class="form-checkbox__label">Подписаться на новости HOLIDAY PAINT</span>
              </label>
              -->
              <p class="order-card__text">Контактные данные под надежной защитой</p>
              <div class="order-delivery__wrap">
                <label class="order-delivery__label">
                  <input v-model="delivery" type="radio" value="0" class="order-delivery__radio form-radio">
                  <div class="order-delivery__label-border"></div>
                  <div class="order-delivery__label-text">
                    <p>Самовывоз</p>
                    <span v-if="$store.state.shop.user.info.street != null">{{$store.state.shop.user.info.street + ', ' + $store.state.shop.user.info.building}}</span>
                    <span v-else>Адрес уточните по телефону</span>
                  </div>
                </label>
                <label class="order-delivery__label">
                  <input v-model="delivery" type="radio" value="1" class="order-delivery__radio form-radio">
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
      delivery: 0,
      userData: {
        name: '',
        phone: '',
        email: '',
        subscription: false,
      },
      rules: {
        name: [
          { required: true, message: 'Введите свое имя', trigger: 'blur' }
        ],
        phone: [
          { required: true,  message: 'Введите свой телефон', trigger: 'blur' },
          { type: 'number', message: 'Введен невалидный номер'}
        ]
      }
    }),
    watch: {
      'userData.email'() {
        this.userData.email = this.userData.email.replace(/[А-Яа-яЁё\s]/g, "")
      },
      'userData.phone'() {
        this.userData.phone = this.userData.phone.replace(/[A-Za-zА-Яа-яЁё\s]/g, "")
      }
    },
    head: {
      title: 'Holiday Paint | Оформление заказа'
    },
    mounted(){
      this.items = this.$store.getters['shop/basketInfo']
      if(this.$store.state.shop.request.name != undefined) this.userData.name = this.$store.state.shop.request.name
      if(this.$store.state.shop.request.phone != undefined) this.userData.phone = this.$store.state.shop.request.phone
      if(this.$store.state.shop.request.email != undefined) this.userData.email = this.$store.state.shop.request.email
      if(this.$store.state.shop.request.subscription != undefined) this.userData.subscription = this.$store.state.shop.request.subscription
    },
    components: {
      OrderList,
      PopularGoods
    },
    methods: {
      onSubmit() {
        this.$refs.form.validate( async valid => {
          if (valid) {
            const formData = {
              name: this.userData.name,
              phone: '+7' + this.userData.phone,
              email: this.userData.email,
              subscription: this.userData.subscription
            }
            try {
              let request = formData
              request.product_ids = []
              request.quantity = []
              request.colors = []
              request.value = 0
              this.items.forEach( function(item, index) {
                request.product_ids.push(item.id)
                request.quantity.push(item.quantity)
                if (item.category == 4) request.colors.push(item.sizes[item.size])
                else request.colors.push(item.color)
                request.value += parseInt(item.price) * parseInt(item.quantity)
              });
              request.seller_id = this.$store.state.shop.user.info.id
              request.value = request.value - this.$store.state.shop.discount
              request.product_ids = JSON.stringify(request.product_ids)
              request.quantity = JSON.stringify(request.quantity)
              request.colors = JSON.stringify(request.colors)
              if (this.delivery == 0) {
                this.$store.commit('shop/addRequest', request)
                this.$store.commit('shop/basketFlush')
                this.$router.push('/order/thanks')
              }
              else {
                this.$store.commit('shop/saveRequestInfo', request)
                this.$router.push('/order/step2')
              }

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

<template>
  <div class="subscription">
    <div class="container flex jc-sb">
      <div class="subscription-text">
        <h3 class="subscription-header">Нужна помощь с заказом?</h3>
        <a :href="'tel:' + userPhone" class="subscription-link">{{userPhone}}</a>
        <a :href="'mailto:' + $store.state.shop.user.info.corp_email" class="subscription-link">{{$store.state.shop.user.info.corp_email}}</a>
      </div>
      <div class="subscription-form">
        <h3 class="subscription-header">Подпишитесь на новости Holiday Paint</h3>
        <form>
          <div class="form-line">
            <input type="email" class="form-input boxed" placeholder="Введите свой e-mail">
            <button class="btn form-btn">Подписаться</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    computed: {
      userPhone() {
        if (this.$store.state.shop.user.info.phone) {
          const tel = '+' + this.$store.state.shop.user.info.phone[0] + " (" +this.$store.state.shop.user.info.phone.slice(1, 4) + ") " + this.$store.state.shop.user.info.phone.slice(4, 8) + " " + this.$store.state.shop.user.info.phone.slice(8);
          return tel
        }
        return ''
      }
    }
  }
</script>

<style lang="sass" scoped>
  @import "../assets/sass/variables"
  .subscription
    background-color: #f0f0f0
    padding: 2.5em 0
    .container
      @media (max-width: 767px)
        flex-direction: column
        text-align: center
    &-text
      @media (max-width: 767px)
        margin-bottom: 2em
    &-header
      text-transform: uppercase
      font-size: 1.5em
      font-weight: 700
      color: $titleColor
      margin-bottom: 1em
    &-link
      display: block
      width: fit-content
      margin-bottom: .75em
      @media (max-width: 767px)
        margin-left: auto
        margin-right: auto
    &-form
      @media (max-width: 767px)
        .form-line
          flex-wrap: wrap
      .form-input
        width: 60%
        @media (max-width: 767px)
          width: 100%
          margin-bottom: 1em
      .form-btn
        width: 38%
        padding: 0
        border-radius: 40px
        @media (max-width: 767px)
          width: 100%
</style>

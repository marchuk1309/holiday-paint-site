<template>
  <div class="subscription">
    <div class="container flex jc-sb">
      <div class="subscription-text">
        <h3 class="subscription-header">Нужна помощь с заказом?</h3>
        <a href="tel:8 800 000 00 00" class="subscription-link">8 800 000 00 00</a>
        <a href="mailto:partner@holiday-paint.ru" class="subscription-link">partner@holiday-paint.ru</a>
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

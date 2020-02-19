<template>
  <div class="catalog-filter" :class="addedFilter">
    <p class="catalog-filter__title">Фильтр</p>
    <div class="catalog-filter__box active">
      <div class="catalog-filter__box-title">
        <p @click="openFilterBox()">Товар</p>
        <a @click.prevent="clearCheckboxes()" :style="'color:' + typeString" class="catalog-filter__clean-btn">Очистить</a>
      </div>
      <div v-for="item in $store.state.shop.categories" >
        <label class="catalog-filter__checkbox form-checkbox__wrap">
          <input :checked="$store.state.shop.showType.includes(item.id)" @click="$store.commit('shop/filterType', item.id)" class="form-checkbox" type="checkbox"><span class="form-checkbox__label">{{item.label}}</span>
        </label>
        <label v-for="subitem in item.subtabs" class="catalog-filter__checkbox form-checkbox__wrap sub">
          <input :checked="$store.state.shop.showSubType.includes(subitem.id)" @click="$store.commit('shop/filterSubType', subitem.id)" class="form-checkbox" type="checkbox"><span class="form-checkbox__label">{{subitem.label}}</span>
        </label>
      </div>
    </div>
    <div class="catalog-filter__box active">
      <div class="catalog-filter__box-title">
        <p @click="openFilterBox()">Цвет</p>
        <a @click.prevent="clearCheckboxes()" :style="'color:' + colorString" class="catalog-filter__clean-btn">Очистить</a>
      </div>
        <input v-for="item in $store.state.shop.colors" @click="$store.commit('shop/filterColor', item.id)" type="checkbox" class="form-checkbox__color" :style="'background-color:' + item.color">
    </div>
    <div class="catalog-filter__box">
      <div class="catalog-filter__box-title">
        <p @click="openFilterBox()">Размер</p>
        <a @click.prevent="clearCheckboxes()" :style="'color:' + sizeString" class="catalog-filter__clean-btn">Очистить</a>
      </div>
      <p class="catalog-filter__box-text">Ваш рост (см)</p>
      <div class="form-range__wrap">
        <el-slider
          @change="sizeChanged = true"
          :step="10"
          :min="90"
          :max="190"
          :marks="marks"
          v-model="value1"
        ></el-slider>
      </div>
    </div>
    <div class="catalog-filter__box">
      <div class="catalog-filter__box-title">
        <p @click="openFilterBox()">Другое</p>
        <a @click.prevent="clearCheckboxes()" :style="'color:' + otherString" class="catalog-filter__clean-btn">Очистить</a>
      </div>
      <label class="catalog-filter__checkbox form-checkbox__wrap">
        <input :checked="$store.state.shop.showAvailable" @click="$store.commit('shop/filterAvailable')" class="form-checkbox" type="checkbox"><span class="form-checkbox__label">В наличии</span>
      </label>
      <label class="catalog-filter__checkbox form-checkbox__wrap">
        <input :checked="$store.state.shop.showSale" @click="$store.commit('shop/filterSale')" class="form-checkbox" type="checkbox"><span class="form-checkbox__label">Товары со скидкой</span>
      </label>
    </div>
  </div>
</template>

<script>

  export default {
    components: {
    },
    data: () => ({
      showAvailable: false,
      sizeChanged: false,
      value1: 0,
      marks: {
        90: '90',
        190: '190'
      },
    }),
    computed: {
      typeString() {
        if (this.$store.state.shop.showType.length == 0) return 'gray'
        else return 'red'
      },
      sizeString() {
        if (this.$store.state.shop.showSize == 0) return 'gray'
        else return 'red'
      },
      colorString() {
        if (this.$store.state.shop.showColor == false) return 'gray'
        else return 'red'
      },
      otherString() {
        if (this.$store.state.shop.showAvailable == false && this.$store.state.shop.showSale == false) return 'gray'
        else return 'red'
      }
  },
    props: ['addedFilter'],
    watch:{
      value1(){
        if(this.sizeChanged == true) this.$store.commit('shop/filterSize', this.value1)
      }
    },
    methods: {
      openFilterBox() {
        const element = event.target.parentNode.parentNode
        if (!element.classList.contains('active')) {
          element.classList.add('active')
        }
        else {
          element.classList.remove('active')
        }
      },
      clearCheckboxes() {
        const inputs = event.target.parentNode.parentNode.querySelectorAll('input[type="checkbox"]')
        inputs.forEach((el, index, arr) => {
          el.checked = false
        })
        this.$store.commit('shop/flushFilter');
      }
    }
  }
</script>

<style lang="sass" scoped>
  @import "../../assets/sass/variables"
  .catalog
    &-filter
      background-color: #ffffff
      padding: 2em 1em
      &:not(.mobile-filter)
        box-shadow: 0 10px 29px rgba(122, 49, 158, 0.12)
      .form-checkbox
        font-size: 1.125em
        margin-right: calc(2em - 13px)
      &__title
        font-size: 1.875em
        font-weight: 600
        text-align: center
        padding-bottom: .75em
        text-transform: uppercase
        border-bottom: 1px solid #c4c4c4
        margin-bottom: .75em
      &__box
        transition: .5s
        margin-bottom: 1em
        border-bottom: 1px solid #c4c4c4
        padding-bottom: 1em
        &:not(.active)
          height: 2em
          max-height: 2em
          overflow: hidden
          .catalog-filter__box-title
            p:before
              transform: none
              background-position: left center
        &-text
          text-align: center
          font-size: $_14px
        &-title
          height: 2em
          padding: .5em 0
          margin-bottom: 1em
          line-height: 1em
          position: relative
          p
            padding-left: 2em
            position: relative
            cursor: pointer
            font-weight: 500
            font-size: $_18px
            text-transform: uppercase
            &:before
              position: absolute
              content: ''
              width: 1.5em
              height: 100%
              top: 0
              left: 0
              transform: rotate(180deg)
              background-image: url('../../assets/img/icons/bottom.svg')
              background-position: right center
              background-repeat: no-repeat
              background-size: contain

      &__clean-btn
        position: absolute
        right: 0
        top: 50%
        transform: translateY(-50%)
        color: #ea1c1c
        font-size: .75em
      &__checkbox
        display: block
        margin: .5em 0
        &.sub
          margin-left: 2.25em
</style>

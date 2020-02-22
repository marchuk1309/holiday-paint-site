<template>
  <client-only>
    <div class="container">
      <div class="popular-goods">
        <h2 class="section-title big gradient">Популярные товары</h2>
        <p class="subtitle">Что чаще всего покупают наши клиенты</p>
        <div class="popular-goods__body">
          <goods-item v-if="clientWidth >= 1025" v-for="(good, index) in popular" :good="good" :key="index + '-norm'" :addedClass="'popular-item'"/>
          <agile :slidesToShow="1" :responsive="[{breakpoint: 600, settings: {slidesToShow: 2}}, {breakpoint: 767, settings: {slidesToShow: 3}}]" :dots="false"  v-if="clientWidth < 1025">
            <div class="popular-items__slide" v-for="(good, index) in popular" :key="index">
              <goods-item :good="good" :addedClass="'popular-item'"/>
            </div>
          </agile>
        </div>
      </div>
    </div>
  </client-only>
</template>

<script>
  import GoodsItem from '@/components/GoodsItem'
  import { mapGetters } from 'vuex'

  export default {
    data: () => ({
      popularGoods: [],
      clientWidth: 0
    }),
    components: {
      GoodsItem
    },
    methods: {
      updateWidth() {
        this.clientWidth = window.innerWidth;
      },
    },
    computed: {
      ...mapGetters(['productsInfo', 'colorsInfo']),
      popular() {
        //let index = this.productsInfo.findIndex(ideas => ideas.id === idea.id)
        var colors = this.$store.state.shop.colors
        var array = []
        this.$store.state.shop.products.forEach(function (element) {
          //console.log()
          let item = { ...element }
          item.sold = element.sold.reduce((a, b) => a + b, 0)
          array.push(item)
        })
        return array.sort((a,b) => b.sold-a.sold).slice(0,5);
      }
    },
    mounted() {
      //this.popularGoods = this.$store.state.shop.items.slice(0, 5);
      window.addEventListener('resize', this.updateWidth);
      this.updateWidth();
    },
  }
</script>

<style lang="sass" scoped>
  .popular
    &-goods
      padding-bottom: 8em
      &__body
        display: flex
        justify-content: flex-start
    &-item
      width: 19%
      @media (min-width: 1025px)
        margin-right: 1%
      @media (max-width: 1024px)
        margin: 3em 1.75em
        width: auto
        box-shadow: 0 5px 19px rgba(122, 49, 158, 0.12)

</style>
<style lang="sass">
  @import "../assets/sass/variables"
  .agile__actions
    position: absolute
    left: 0
    width: calc(100% + .5em)
    top: 50%
    transform: translateY(-50%)
    margin: 0 -.25em
  .agile__nav-button
    background-image: $primaryGrad
    border: none
    color: #fff
    width: 40px
    height: 40px
    border-radius: 50%
    box-shadow: $boxShadow
    font-size: 1.5em
    padding-bottom: 4px
</style>

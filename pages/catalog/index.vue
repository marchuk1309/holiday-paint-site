<template>
  <article class="catalog">
    <div class="container page-view">
      <h2 class="section-title catalog-title">Яркие товары для праздников и мероприятий</h2>
      <div class="catalog-wrapper">
        <catalog-filter />
        <el-drawer
          class="mobile-filter"
          :visible.sync="mobileFilter"
          :direction="'ltr'"
          :size="'300px'"
          :before-close="addFilter">
          <catalog-filter class="mobile-filter"/>
        </el-drawer>
        <a @click.prevent="mobileFilter = true" class="btn mobile-filter__trigger">Показать фильтр</a>
        <div class="catalog-list">
          <catalog-nav @search="search" @changePageSize="changePageSize" />
          <catalog-list :goods="items"/>
          <h3 class="subtitle" v-if="goods.filter(good => checkItem(good)).length == 0">Ничего не найдено!</h3>
          <el-pagination
            :current-page.sync="page"
            @current-change="pageChangeHandler"
            :page-count="pageCount"
            layout="prev, pager, next"
          >
          </el-pagination>
        </div>
      </div>
    </div>
    <popular-goods />
  </article>
</template>

<script>
  import CatalogFilter from '@/components/catalog/Filter'
  import CatalogNav from '@/components/catalog/Nav'
  import CatalogList from "@/components/catalog/List"
  import PopularGoods from '@/components/PopularGoods'
  import paginationMixin from '@/mixins/pagination.mixin.js'


  export default {
    data: () => ({
      mobileFilter: false
    }),
    head: {
      title: `Holiday Paint | Каталог`
    },
    components: {
      CatalogFilter,
      CatalogNav,
      CatalogList,
      PopularGoods,
    },
    mixins: [paginationMixin],
    computed: {
      goods(){
        return this.$store.getters['shop/productsInfo']
      },
      shownGoods(){
        return this.$store.getters['shop/shownProductsInfo']
      },
    },
    created(){
    },
    mounted() {

      if (this.$route.query.category) {
        this.$store.commit('shop/filterType', parseInt(this.$route.query.category))
      }
      else if (this.$route.query.subcategory) {
        this.$store.commit('shop/filterSubType', parseInt(this.$route.query.subcategory))
      }
    },
    watch: {
      'items'(){
        if (this.items != undefined && this.items.length == 0) this.setupPagination(this.goods.filter(good => this.checkItem(good)))
      },
      '$store.state.shop.user.info.id'(){
        console.log('LOADING COMPLETE')
        this.$store.commit('shop/flushFilter');
      },
      '$store.state.shop.showType'(){ this.setupPagination(this.goods.filter(good => this.checkItem(good))) },
      '$store.state.shop.showSubType'(){ this.setupPagination(this.goods.filter(good => this.checkItem(good))) },
      '$store.state.shop.showColor'(){ this.setupPagination(this.goods.filter(good => this.checkItem(good))) },
      '$store.state.shop.showSize'(){ this.setupPagination(this.goods.filter(good => this.checkItem(good))) },
      '$store.state.shop.searchString'(){ this.setupPagination(this.goods.filter(good => this.checkItem(good))) },
      '$store.state.shop.showSale'(){ this.setupPagination(this.goods.filter(good => this.checkItem(good))) },
      '$store.state.shop.showAvailable'(){ this.setupPagination(this.goods.filter(good => this.checkItem(good))) }
    },
    methods: {
      changePageSize(newPageSize){
        this.pageSize = newPageSize
        this.setupPagination(this.goods.filter(good => this.checkItem(good)))
      },
      checkItem(item){
        let shop = this.$store.state.shop
        // Stock availability filter
        if (item[shop.user.info.id] == null || (item[shop.user.info.id].reduce((a, b) => a + b, 0) <= 0 && shop.showAvailable)) return false
        // Color filter
        if (item.colors === null) item.colors = []
        if (item.colors === undefined) item.colors = []
        if (shop.showColor.filter(value => item.colors.includes(value)).length === 0 && shop.showColor.length > 0) return false
        // Size filter
        if (item.sizes === null) item.sizes = []
        if (item.sizes === undefined) item.sizes = []
        if (!item.sizes.includes(shop.showSize.toString()) && shop.showSize > 0) return false
        // Search filter
        if (shop.searchString.length > 0 && !item.name.includes(shop.searchString) && !item.name.toLowerCase().includes(shop.searchString)) return false
        // Sale filter
        if (shop.showSale == true && this.$store.state.shop.saleproducts.length > 0 && !shop.saleproducts.includes(item.id)) return false
        // Type filter
        if (shop.showType.includes(item.category) != true && shop.showSubType.includes(item.sub) != true && (shop.showType.length > 0 || shop.showSubType.length > 0)) {
          return false
        }
        //if (shop.showSubType.includes(item.sub) != true && shop.showSubType.length > 0) return false
        return true
      },
      addFilter() {
        console.log('filter add')
        this.mobileFilter = false
      },
      handleCurrentChange(count) {
        console.log(val)
      },
      search(string) {
        this.$store.commit('shop/filterSearch', string);
      }
    }
  }
</script>

<style lang="sass">
  @import "../../assets/sass/variables"
  .mobile-filter__trigger
    margin-left: auto
    margin-right: auto
    margin-bottom: 2em
    @media (min-width: 1025px)
      display: none
  .catalog
    &-title
      margin-bottom: 2em
    &-wrapper
      width: 100%
      display: flex
      justify-content: space-between
      align-items: flex-start
      margin-bottom: 5em
    &-filter:not(.mobile-filter)
      width: 20%
    &-list
      width: 78%
      &__wrap
        display: flex
        flex-wrap: wrap
        margin-bottom: 3em
  .el-pagination
    display: flex
    justify-content: center
    button:hover
      color: $primaryColor
    .btn-next .el-icon, .btn-prev .el-icon
      font-size: 1.75rem
  .el-pager
    li
      font-size: 1.25rem
      &.active, &:hover
        color: $primaryColor
  @media (max-width: 1024px)
    .catalog
      &-wrapper
        flex-wrap: wrap
      &-filter:not(.mobile-filter)
        display: none
      &-list
        width: 100%
</style>

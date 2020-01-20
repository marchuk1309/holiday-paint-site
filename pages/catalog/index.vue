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
    <subscription />
  </article>
</template>

<script>
  import CatalogFilter from '@/components/catalog/Filter'
  import CatalogNav from '@/components/catalog/Nav'
  import CatalogList from "@/components/catalog/List"
  import PopularGoods from '@/components/PopularGoods'
  import Subscription from '@/components/Subscription'
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
      Subscription,
      PopularGoods,
    },
    mixins: [paginationMixin],
    computed: {
      goods(){
        return this.$store.getters['shop/productsInfo']
      },
        shownGoods(){
            return this.$store.getters['shop/shownProductsInfo']
        }
    },
    mounted() {
      console.log(this.goods)
      this.setupPagination(this.goods.map(good => {
        return {
          ...good
        }
      }))
      this.$forceUpdate()
    },
    watch: {
        shownGoods(){
          this.setupPagination(this.goods.map(good => {
              return {
                  ...good
              }
          }))
      }
    },
    methods: {
      changePageSize(newPageSize){
        this.pageSize = newPageSize
        this.setupPagination(this.goods.map(good => {
          return {
            ...good
          }
        }))
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

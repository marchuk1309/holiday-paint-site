<template>
  <section class="catalog-nav">
    <div class="catalog-nav__value">
      Отобржать на странице:
      <div class="catalog-select__wrap form-select__wrap">
        <select class="catalog-select form-select" v-model="pageSize" @change="changePageSize" ref="pageSize" id="pageItemsCount">
          <option value="8">8</option>
          <option value="16">16</option>
          <option value="24">24</option>
          <option value="32">32</option>
          <option value="40">40</option>
        </select>
      </div>
    </div>
    <div class="catalog-nav__search form-search__wrap">
      <input class="form-input boxed form-search" type="text" placeholder="Что хотите найти?">
      <a class="form-search__btn"></a>
    </div>
  </section>
</template>

<script>
  export default {
    data: () => ({
      pageSize: "8"
    }),
    mounted() {
      this.$emit('changePageSize', this.pageSize)
    },
    methods: {
      changePageSize() {
        this.$emit('changePageSize', this.pageSize)
      }
    }
  }
</script>

<style lang="sass" scoped>
  .catalog
    &-nav
      display: flex
      justify-content: space-between
      margin-bottom: 2em
      @media (max-width: 767px)
        margin-bottom: 3em
        flex-direction: column
        .form-search
          width: 100%
          &__btn
            right: 1.5em
      &__value
        display: flex
        align-items: center
        @media (max-width: 767px)
          justify-content: space-between
          margin-bottom: 2em
    &-select
      margin-left: 1em
</style>

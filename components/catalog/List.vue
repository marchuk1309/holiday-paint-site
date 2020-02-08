<template>
  <section class="catalog-list__wrap">
    <CatalogItem v-for="item in goods" :key="item.id" :good="item" :addedClass="addedClass" />
  </section>
</template>

<script>
  import CatalogItem from '@/components/GoodsItem'

  export default {
    data: () => ({
      addedClass: 'catalog-item'
    }),
    components: {
      CatalogItem
    },
    props: ['goods'],
    watch: {
      '$store.state.shop.isLoaded'(){
        this.$forceUpdate()
      }
    }
  }
</script>

<style lang="sass" scoped>
  .catalog
    &-item
      @media (min-width: 1301px)
        width: 24%
        &:not(:nth-child(4)):not(:nth-child(3)):not(:nth-child(2)):not(:nth-child(1))
          margin-top: 1em
        &:not(:nth-child(4n + 4))
          margin-right: 1.25%
      @media (max-width: 1300px) and (min-width: 768px)
        width: 31.5%
        &:not(:nth-child(3)):not(:nth-child(2)):not(:nth-child(1))
          margin-top: 1em
        &:not(:nth-child(3n + 3))
          margin-right: 2%
      @media (max-width: 767px) and (min-width: 500px)
        width: 48%
        &:not(:nth-child(2)):not(:nth-child(1))
          margin-top: 1em
        &:not(:nth-child(2n + 2))
          margin-right: 4%
      @media (max-width: 499px)
        max-width: 100%
        width: 22em
        margin-left: auto
        margin-right: auto
        &:not(:nth-child(1))
          margin-top: 1em
</style>

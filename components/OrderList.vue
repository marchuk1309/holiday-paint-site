<template>
  <el-card class="order-card right">
    <h2 class="order-card__title uppercase">Ваш заказ:</h2>
    <el-table
      class="mb2"
      :data="items"
      height="400px"
      style="width: 100%">
      <el-table-column
        label="Товар"
        width="320"
      >
        <template slot-scope="scope">
          <div class="basket-item">
            <div class="basket-image">
              <img v-if="scope.row.images != null" :src="'http://hpapi.fobesko.com/public/storage/product/' + scope.row.images[0]" alt="">
              <img v-if="scope.row.images == null" :src="$store.state.shop.noPhoto" alt="">
            </div>
            <div class="basket-descript">
              <p class="basket-item__name">{{scope.row.name}}</p>
              <p>{{scope.row.description}}</p>
              <p v-if="scope.row.color !== undefined">Цвет: {{$store.state.shop.colors[scope.row.color].label}}</p>
              <p v-if="scope.row.size !== undefined">Размер: {{scope.row.sizes[scope.row.size]}}</p>
              <p>{{scope.row.quantity}} шт.</p>
            </div>
          </div>
        </template>
      </el-table-column>
      <el-table-column
        align="right"
        label="Цена"
      >
        <template slot-scope="scope">
          <span class="order-card__price">{{scope.row.price * scope.row.quantity}} р.</span>
        </template>
      </el-table-column>
    </el-table>
    <h2 class="order-card__title order-card__amount uppercase flex jc-sb">
      <span>Итого: {{totalCount}} товара</span>
      <span>{{totalSum}} р.</span>
    </h2>
    <nuxt-link class="order-card__link" to="/basket">Редактировать</nuxt-link>
  </el-card>
</template>

<script>
  export default {
    name: "OrderList",
    props: ['items'],
    computed: {
      totalSum() {
        let total = 0
        this.items.forEach((item) => {
          total += item.price * item.quantity
        })
        return total
      },
      totalCount() {
        let total = 0
        this.items.forEach((item) => {
          total += item.quantity
        })
        return total
      }
    },
  }
</script>

<style lang="sass" scoped>
  @import "../assets/sass/variables"
  .order-card
    &__text
      font-weight: 600
      color: $blue
      margin-bottom: 1em
    &__price
      font-weight: 700
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
</style>

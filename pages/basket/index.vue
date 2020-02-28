<template>
  <section class="basket">
    <div class="container">
      <h2 class="section-title">Корзина ({{basketCount}})</h2>
      <div class="basket-wrap" ref="basket">
        <div class="basket-left">
          <el-table
                  :data="items"
                  class="basket-table"
                  style="width: 100%">
            <el-table-column
                    label="Товар"
                    width="240">
              <template slot-scope="scope">
                <div class="basket-item">
                  <div class="basket-image">
                    <img v-if="scope.row.images != null" :src="'http://hpapi.fobesko.com/public/storage/product/' + scope.row.images[0]" alt="">
                    <img v-if="scope.row.images == null" :src="$store.state.shop.noPhoto" alt="">
                  </div>
                  <div class="basket-descript">
                    <p class="basket-item__name">{{scope.row.name}}</p>
                    <p v-if="scope.row.color !== undefined">Цвет: {{$store.state.shop.colors[scope.row.color].label}}</p>
                    <p v-if="scope.row.size !== undefined">Размер: {{scope.row.sizes[scope.row.size]}}</p>                  </div>
                </div>
              </template>
            </el-table-column>
            <el-table-column
              label="Описание"
              width="230">
              <template slot-scope="scope">
                <div class="basket-item">
                  <div class="basket-descript">
                    <p>{{scope.row.description}}</p>
                  </div>
                </div>
              </template>
            </el-table-column>
            <el-table-column
                    label="Количество"
                    align="center"
                    width="140">
              <template slot-scope="scope">
                <div class="basket-item__counter">
                  <el-input-number @change="changeCount(scope.row)" size="small" v-model="scope.row.quantity" :min="0" :max="100"></el-input-number>
                  <p class="basket-item__size"></p>
                </div>
              </template>
            </el-table-column>
            <el-table-column
                    label="Стоимость"
                    align="center"
            >
              <template slot-scope="scope">
                <p>{{scope.row.price}} р.</p>
              </template>
            </el-table-column>
            <el-table-column
                    align="center"
                    label="Сумма"
            >
              <template slot-scope="scope">
                <p>{{scope.row.price * scope.row.quantity}} р.</p>
              </template>
            </el-table-column>
            <el-table-column>
              <template slot-scope="scope">
                <el-button
                        circle
                        type="danger"
                        icon="el-icon-delete"
                        @click="removeItem = scope.row; removeDialog = true"></el-button>
              </template>
            </el-table-column>
          </el-table>
        </div>
        <div class="basket-right">
          <el-card class="basket-card" ref="totalBasket" :class="{fixed: totalBaskedFixed}">
            <p class="basket-card__title">Итого: {{totalSum - discountValue}} р.</p>
            <div class="basket-card__paragraphs">
              <p>Сумма: {{totalSum}} р.</p>
              <p>Скидка: {{discountValue}} р.</p>
            </div>
            <a class="basket-card__link" @click.prevent="openModal()">У меня есть промокод</a>
            <el-dialog
                    :append-to-body="true"
                    title="Введите промокод"
                    :visible.sync="promocodeDialog"
                    class="custom-modal"
            >
              <input v-model="promocode" type="text" class="form-input width-100" placeholder="Ваш промокод">
              <div class="basket-card__alert" v-if="codeIsWrong">Промокод не найден!</div>
              <div class="basket-card__alert" v-if="codeIsExpired">Срок действия промокода истек!</div>
              <div class="basket-card__alert" v-if="codeIsUsed">Промокод использован максимальное количество раз!</div>
              <div class="basket-card__alert" v-if="codeIsNotApplicable">Промокод верен, но не применим ни к одному из товаров в корзине</div>
              <span slot="footer" class="dialog-footer">
                <a class="btn btn-transparent" @click="promocodeDialog = false">Отменить</a>
                <a class="btn" @click.prevent="usePromocode()">Применить</a>
              </span>
            </el-dialog>
            <button :disabled="items.length == 0" @click="proceed" style="width:100%" class="btn with-shadow">Оформить</button>
          </el-card>
        </div>
      </div>
    </div>
    <el-dialog
      :center="true"
      title="Удалить товар?"
      :visible.sync="removeDialog"
      width="350px"
    >
      <span class="dialog-text">Вы действительно хотите удалить {{removeItem.name}} из корзины?</span>
      <span slot="footer" class="dialog-footer">
        <a class="btn btn-transparent" @click="removeDialog = false; removeItem.quantity === 0 ? removeItem.quantity = 1 : removeItem.quantity = removeItem.quantity">Нет</a>
        <a class="btn" type="primary" @click="deleteItem()">Да</a>
      </span>
    </el-dialog>
    <popular-goods />
  </section>
</template>

<script>
  import PopularGoods from "../../components/PopularGoods";

  export default {
    name: "basket",
    data: () => ({
      items: [],
      discountValue: 0,
      discountType: 0,
      totalBaskedFixed: true,
      promocodeDialog: false,
      removeDialog: false,
      removeItem: {},
      promocode: '',
      usedPromocode: '',
      codeIsFound: false,
      codeIsWrong: false,
      codeIsExpired: false,
      codeIsUsed: false,
      codeIsNotApplicable: false
    }),
    head: {
      title: 'Holiday Paint | Корзина'
    },
    components: {
      PopularGoods
    },
    mounted() {
      window.addEventListener('scroll', this.basketScrolling)
      console.log(this.$store.getters['shop/basketInfo'])
      this.items = this.$store.getters['shop/basketInfo']
    },
    beforeDestroy() {
      window.removeEventListener('scroll', this.basketScrolling)
    },
    watch: {
      totalSum(){
        this.usePromocode()
      }
    },
    methods: {
      proceed(){
        this.$router.push('/order/step1')
      },
      basketScrolling() {
        if (window.innerWidth > 1024) {
          const scrollHeight = this.$refs.basket.clientHeight - this.$refs.totalBasket.$el.clientHeight
          if (window.pageYOffset > scrollHeight) this.totalBaskedFixed = false
          else this.totalBaskedFixed = true
        } else this.totalBaskedFixed = false
      },
      changeCount(item) {
        if (item.quantity === 0) {
          this.removeItem = item
          this.removeDialog = true
        }
      },
      deleteItem(){
        console.log(this.removeItem.id)
        this.$store.commit('shop/basketDel', this.removeItem)
        console.log(this.items)
        this.removeDialog = false
      },
      setDiscountValue(promocode, item) {
        if (promocode.type == 0) this.discountValue += promocode.value * item.quantity
        else if (promocode.type == 1) this.discountValue += item.price * item.quantity * promocode.value / 100
        this.$store.commit('shop/setDiscount', this.discountValue)
        this.$store.commit('shop/setCurrentPromocode', promocode)
      },
      openModal() {
        this.promocodeDialog = !this.promocodeDialog
        this.codeIsExpired = false
        this.codeIsUsed = false
        this.codeIsWrong = false
        this.codeIsNotApplicable = false
      },
      usePromocode() {
        this.discountValue = 0
        console.log('Using Promocode')
        console.log(this.promocode)
        console.log(this.$store.state.shop.promocodes)
        // Loop through promocodes
        this.$store.state.shop.promocodes.forEach((promocode) => {
          console.log('Promocode search...')
          console.log(promocode.code)
          // If there is a match
          if (promocode.code == this.promocode) {
            console.log('Promocode found')
            // Clear messages before checking
            this.codeIsFound = true
            this.codeIsExpired = false
            this.codeIsUsed = false
            this.codeIsWrong = false
            this.codeIsNotApplicable = false
            // Check remained uses, if zero, show message
            if (promocode.uses == 0) this.codeIsUsed = true
            // Check date, if expired, show message
            else if (new Date(promocode.end_date) < new Date()) this.codeIsExpired = true
            else {
              // Loop through basket to apply the discount
              this.$store.state.shop.basket.forEach((item) => {
                // If the target is all items
                if (promocode.target == 0) {
                  this.setDiscountValue(promocode, item)
                  this.promocodeDialog = false
                }
                // If the target are categories
                else if (promocode.target == 1) {
                  if (promocode.items.includes(item.category)) {
                    console.log('Target item found by category')
                    this.setDiscountValue(promocode, item)
                    this.promocodeDialog = false
                  }
                  else this.codeIsNotApplicable = true
                }
                // If the target are specific items
                else if (promocode.target == 2) {
                  // If the promocode includes the id of current basket item
                  if (promocode.items.includes(item.id)) {
                    console.log('Target item found by id')
                    this.setDiscountValue(promocode, item)
                    this.promocodeDialog = false
                  }
                  else this.codeIsNotApplicable = true
                } else console.log('Invalid target')

              })
            }
          }
          // If match not found, show message
          if (this.codeIsFound == false) this.codeIsWrong = true
        })
      }
    },
    computed: {
      totalSum() {
        let total = 0
        this.items.forEach((item) => {
          total += item.price * item.quantity;
        })
        return total
      },
      basketCount () {
        return this.$store.state.shop.basket.reduce(function (count, current) {
          return count + current.quantity
        }, 0)
      },
    }
  }
</script>



<style lang="sass">
  @import "../../assets/sass/variables"
  .custom-modal
    .el-dialog
      width: 360px
      @media (max-width: 768px)
        width: 310px
  .dialog-text
    word-break: break-word
  .basket
    padding-top: 5em
    &-wrap
      margin-bottom: 4em
      display: flex
      justify-content: space-between
      flex-wrap: wrap
    &-left
      width: 75%
      @media (max-width: 1024px)
        width: 100%
    &-table
      font-size: $_14px
    &-item
      display: flex
      &__name
        text-transform: uppercase
        font-weight: 500
      &__counter
        display: flex
        align-items: center
        flex-direction: column
      &__size
        margin-top: 1em
        text-align: center
    &-descript
      p:not(.basket-item__name)
        font-weight: 300

    &-image
      width: 8em
      height: 8em
      min-width: 8em
      border-radius: 5px
      border: 1px solid #dcdcdc
      margin-right: 1em
      img
        width: 100%
        height: 100%
        object-fit: contain
    &-right
      width: 23%
      position: relative
      display: flex
      justify-content: flex-end
      @media (max-width: 1024px)
        width: 100%
        margin-top: 2em
        justify-content: center
    &-card
      position: absolute
      bottom: 0
      width: 18em
      &__alert
        display: flex
        text-align: center
        align-items: center
        justify-content: center
        color: #ff0000
        padding: 1em 0 0 0
      &.fixed
        position: fixed
        bottom: auto
      @media (max-width: 1024px)
        position: relative
        width: 20em
        max-width: 100%
      &__title
        font-size: 1.5em
        color: $titleColor
        font-weight: 600
        margin-bottom: .5em
      &__paragraphs
        margin-bottom: 1em
        padding-bottom: 1em
        border-bottom: 1px solid #dcdcdc
        p
          margin-bottom: .25em
      &__link
        display: block
        width: fit-content
        margin-left: auto
        margin-right: auto
        color: $primaryColor
        text-decoration: underline
        margin-bottom: 1em
  .section-title
    margin-bottom: 1.75em
  .dialog-footer
    display: flex
    align-items: center
    justify-content: space-between
    .btn
      width: 48%
</style>

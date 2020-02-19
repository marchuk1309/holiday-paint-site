<template>
  <div class="content-wrap">
    <el-container v-if="dataLoaded">
      <el-header height="auto">
        <Header @changeCity="changeCity = !changeCity" />
      </el-header>
      <el-main>
        <nuxt/>
      </el-main>
      <el-footer height="auto">
        <Footer @changeCity="changeCity = !changeCity"/>
      </el-footer>
      <el-dialog
        :modal-append-to-body="false"
        :center="true"
        :visible.sync="changeCity"
        width="400px"
        class="modal"
      >
        <div class="flex mb2 ai-c">
          <p>Выберите город</p>
          <input placeholder="Поиск" v-model="citiesFind" class="form-input" type="text">
        </div>
        <div class="cities-list">
          <a v-for="city in cities" :key="city" @click="changeCurrentCity(city)"  class="dialog-link">{{city}}</a>
        </div>
      </el-dialog>
    </el-container>
  </div>
</template>


<script>
  import Header from "../components/Header";
  import Footer from "../components/Footer";
  export default {
    data: () => ({
      mobileMenu: false,
      changeCity: false,
      citiesFind: '',
      dataLoaded: false,
    }),
    components: {
      Header,
      Footer
    },
    async created(){
      this.$nuxt.$loading.start()
      await this.getAllData()
      this.dataLoaded = true
      this.$nuxt.$loading.finish()
    },
    computed: {
      cities(){
        let result = this.$store.getters['shop/citiesInfo']
        if (this.citiesFind !== '') {
          result = result.filter(el => el.toLowerCase().includes(this.citiesFind.toLowerCase()))
        }
        return result
      },
    },
    methods: {
      async getAllData() {
        await this.$store.dispatch('shop/getData')
      },
      async changeCurrentCity(city) {
        this.$store.commit('shop/setCurrentCity', city);
        await this.$store.dispatch('shop/getPartnerInfo', city);
        this.changeCity = false
        this.citiesFind = ''
      },
    },
    watch: {
      citiesFind() {
        this.citiesFind = this.citiesFind.replace(/\s/g, '')
      },
      '$store.state.shop.isLoaded'() {
        //setTimeout(() => this.$nuxt.$loading.finish(), 250)
        this.$forceUpdate()
      },
    }
  }
</script>

<style lang="sass" scoped>
  @import "../assets/sass/variables"
  .dialog-link
    display: block
    width: fit-content
    margin-right: 1em
    margin-bottom: .5em
  .el-header, .el-footer, .el-main
    padding: 0
  .el-header
    position: absolute
    left: 0
    top: 0
    width: 100%
    z-index: 10
  .el-main
    overflow-x: hidden
    padding-top: 14em
    @media (max-width: 1024px)
      padding-top: 6em
  .el-container
    min-height: 100vh
</style>

<style lang="scss">
  .modal {
    .el-dialog {
      max-width: 95%;
    }
    .form-input {
      border-radius: 10px;
      padding: 0 2em;
      height: 50px;
    }
    .cities-list {
      width: auto;
      display: flex;
      flex-direction: column;
      text-align: left;
      height: 12em;
      flex-wrap: wrap;
    }
  }
</style>

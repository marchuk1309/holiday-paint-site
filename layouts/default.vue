<template>
  <el-container>
    <el-header height="auto">
      <Header />
    </el-header>
    <el-main>
      <nuxt/>
    </el-main>
    <el-footer height="auto">
      <Footer/>
    </el-footer>
  </el-container>
</template>


<script>
  import Header from "../components/Header";
  import Footer from "../components/Footer";
  export default {
    data: () => ({
      mobileMenu: false
    }),
    components: {
      Header,
      Footer
    }
  }
</script>

<style lang="sass" scoped>
  @import "../assets/sass/variables"
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

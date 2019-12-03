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
  .el-container
    min-height: 100vh
</style>

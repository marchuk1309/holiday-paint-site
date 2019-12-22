<template>
  <div v-if="loading" class="loading-page">
    <img src="../assets/img/loader.gif" type="image/gif" alt="Loading...">
  </div>
</template>

<script>
  export default {
    data: () => ({
      loading: false
    }),
    methods: {
      start () {
        this.loading = true
      },
      finish () {
        this.loading = false
      }
    }
  }
</script>

<style scoped>
  .loading-page {
    transition: .5s;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10000;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    font-size: 2em;
    background: rgb(255, 255, 255);
  }
</style>

<template>
  <div class="centred">
    <h2>Упс! Данная страница не существует! :(</h2>
    <nuxt-link to="/">На главную</nuxt-link>
  </div>
</template>


<script>
  import Header from "../components/Header";
  import Footer from "../components/Footer";
  export default {
    name: 'error',
    components: {
      Header,
      Footer
    }
  }
</script>

<style lang="sass" scoped>
  .centred
    padding-top: 4em
    display: flex
    flex-direction: column
    align-items: center
    justify-content: center
    h2
      font-size: 3em
      margin-bottom: 1em
    a
      font-size: 1.5em

</style>

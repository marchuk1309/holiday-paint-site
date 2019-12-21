<template>
  <client-only>
    <section class="partners">
      <div class="container">
        <h2 class="section-title big gradient">Партнеры Holiday Paint</h2>
        <p class="subtitle">Топ 5 партнеров проекта</p>
        <div class="partners-wrap flex jc-sb">
          <PartnersItem v-if="clientWidth >= 1025" v-for="partner in partners" :key="partner.id" :partner="partner"/>
          <agile :slidesToShow="1" :responsive="[{breakpoint: 600, settings: {slidesToShow: 2}}, {breakpoint: 767, settings: {slidesToShow: 3}}]" :dots="false"  v-if="clientWidth < 1025">
            <div class="partners__slide" v-for="(partner, index) in partners" :key="index + '-slide'">
              <partners-item :partner="partner" />
            </div>
          </agile>
        </div>
      </div>
    </section>
  </client-only>
</template>

<script>
  import localData from "@/assets/localdata";
  import PartnersItem from "@/components/PartnersItem";

  export default {
    data: () => ({
      partners: localData.partnersData.slice(0, 5),
      clientWidth: 0
    }),
    components: {
      PartnersItem
    },
    methods: {
      updateWidth() {
        this.clientWidth = window.innerWidth;
      },
    },
    mounted() {
      window.addEventListener('resize', this.updateWidth);
      this.updateWidth();
    },
  }
</script>

<style lang="sass" scoped>
  @import "../assets/sass/variables"
  .partners
    margin-bottom: 8em
</style>

<style lang="sass">
  .partners
    &__slide
      padding: 2em
</style>

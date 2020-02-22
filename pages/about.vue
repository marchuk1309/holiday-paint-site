<template>
  <section class="about">
    <div class="container">
      <h2 class="section-title big-margin">О проекте</h2>
      <div class="about__body flex jc-sb">
        <div class="about-logo"><img src="@/assets/img/logo.png" alt=""></div>
        <div class="about-description">
          <p>В 2015 году HOLIDAY PAINT был тестовым продуктом — меловой краской, выпускаемой на российском заводе. Но в 2016 году бренд HOLIDAY PAINT перерос в автономный проект и масштабировался за счет собственной партнерской сети, которая занималась реализацией краски.</p>
          <p>На данный момент в России и СНГ более 60 партнеров. Вместе с сетью расширился и ассортимент. Глобальная цель проекта — сделать Мир ярче.</p>
        </div>
      </div>
      <div class="about-facts flex jc-sb">
        <div class="about-fact">
          <p class="about-fact__count text-grad">60+</p>
          <p class="about-fact__text">Партнеров в РФ и СНГ</p>
        </div>
        <div class="about-fact">
          <p class="about-fact__count text-grad">4+</p>
          <p class="about-fact__text">Года на рынке</p>
        </div>
        <div class="about-fact">
          <p class="about-fact__count text-grad">500 000+</p>
          <p class="about-fact__text">Клиентов по всей России и СНГ</p>
        </div>
      </div>
      <Partners />
    </div>
    <client-only>
      <yandex-map
        :settings="settings"
        :coords="[59.62896654088406, 48.731893822753904]"
        zoom="3"
        style="width: 100%; height: 500px;"
        :controls="[]"
      >
        <template v-for="(item,index) in markers()">

          <ymap-marker
             :markerId="index"
             marker-type="placemark"
             :coords="item.coords.split(' ')"
             :hint-content="item.city"
             :balloon="{
                header: item.city,
                body: item.name + ' ('+item.email+') - ' + nullCheck(item.street) + ', ' + nullCheck(item.building),
                footer: item.phone
             }"
             :icon="{color: 'purple'}"
             cluster-name="1"
          ></ymap-marker>
        </template>

      </yandex-map>
    </client-only>
  </section>
</template>

<script>
  import { yandexMap, ymapMarker } from 'vue-yandex-maps'
  import Partners from "../components/Partners";
  export default {
    components: {
      Partners,
      yandexMap,
      ymapMarker
    },
    head: {
      title: `Holiday Paint | О проекте`
    },
    data: () => ({
      settings: {
        apiKey: '51dd1116-29b8-4a97-ac52-d4d1197d0d80',
        lang: 'ru_RU',
        coordorder: 'longlat',
        version: '2.1'
      },
    }),
    methods: {
      markers(){
        return this.$store.state.shop.markers.filter(item => item.coords != null)
      },
      parseCoords(coords) {
        console.log(coords)
        return coords.split(',')
      },
      nullCheck(string) {
        if (string == null) return ''
        else return string
      }
    },
    mounted() {
      console.log(this.markers())
    }
  }

</script>

<style lang="sass" scoped>
  .about
    padding: 5em 0 0
    &__body
      margin-bottom: 4em
      @media (max-width: 767px)
        text-align: center
        flex-direction: column
        align-items: center
    &-logo
      width: 30%
      @media (max-width: 767px)
        width: 20em
        max-width: 100%
        margin-bottom: 2em
      img
        width: 100%
    &-description
      width: 60%
      font-size: 1.365em
      line-height: 1.4
      @media (max-width: 767px)
        width: 100%
      p
        margin-bottom: 1em
    &-facts
      margin-bottom: 8em
      @media (max-width: 767px)
        flex-wrap: wrap
        justify-content: center
    &-fact
      text-align: center
      @media (max-width: 992px)
        font-size: .8em
      @media (max-width: 767px)
        margin-bottom: 3em
        &:last-child
          width: 100%
          order: -1
      &__count
        font-size: 6.5em
        font-weight: 600
        margin-bottom: .1em
      &__text
        width: 60%
        margin-left: auto
        margin-right: auto
        text-transform: uppercase
        font-size: 1.5em
        font-weight: 500
  .map
    img
      width: 100%
</style>

<template>
  <section class="home-wrap">
    <main class="main">
      <div class="container">
        <div class="main-left">
          <h1 class="section-title big gradient">{{page.main.title}}</h1>
          <h3 class="main-subtitle">{{page.main.subtitle}}</h3>
          <p class="subtitle">{{page.main.subtitle2}}</p>
          <div class="main-buttons">
            <nuxt-link to="/catalog" class="btn">{{page.main.buttontext}}</nuxt-link>
            <div class="video-btn">
              <button class="video-btn__body" @click.prevent="openVideo(page.main.videourl)"></button>
              <span class="video-btn--label-1">Смотреть видео</span>
            </div>
          </div>
        </div>
      </div>
    </main>
    <section class="digadv">
      <div class="container">
        <div class="digadv-items">
          <div v-for="item in 4" class="digadv-item">
            <div class="digadv-item__value">{{page.digadv.values[(item-1)]}}</div>
            <p class="digadv-item__text">{{page.digadv.texts[(item-1)]}}</p>
          </div>
        </div>
      </div>
    </section>
    <section class="advert">
      <div class="container">
        <h2 class="section-title big gradient">{{page.advert.title}}</h2>
        <p class="subtitle">{{page.advert.subtitle}}</p>
        <div v-masonry transition-duration="0.3s" item-selector=".item">
          <div v-masonry-tile class="item" v-for="(item, index) in $store.state.shop.content[0].images['advert']">
            <a :href="page.advert.urls[index]">
              <img :src="$store.state.shop.apiServer + '/storage/content/0-advert-'+item" alt="">
            </a>
          </div>
        </div>
      </div>
    </section>
    <section class="paint">
      <!--<img src="../../assets/img/paint/bottle.png" alt="" class="paint-bg">-->
      <div class="container">
        <h2 class="section-title big gradient">{{page.lead.title}}</h2>
        <p class="subtitle">{{page.lead.subtitle}}</p>
        <div class="paint-content">
          <p class="paint-text">{{page.lead.text}}</p>
          <div class="paint-buttons">
            <nuxt-link to="/catalog/?category=paint" class="btn">{{page.lead.buttontext}}</nuxt-link>
            <!--
            <div class="video-btn">
              <button class="video-btn__body" @click.prevent="openVideo($store.state.shop.settings[5].value)"></button>
            </div>
            -->
          </div>
          <!--<p class="home-label"><span>590</span> рублей за шт.</p>-->

        </div>
      </div>
    </section>
    <section class="feedback">
      <div class="container">
        <h2 class="section-title big gradient">{{page.gallery.title}}</h2>
        <p class="subtitle">{{page.gallery.subtitle}}</p>
        <feedbacks/>
        <nuxt-link :to="page.gallery.buttonurl || ''" class="btn centred">{{page.gallery.buttontext}}</nuxt-link>
      </div>
    </section>
    <Partners/>
    <popular-goods/>
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
    <el-dialog
      :visible.sync="videoDialog"
      custom-class="video-dialog"
      @closed="videoUrl = ''"
    >
      <iframe
        class="dialog-video"
        width="100%"
        height="100%"
        :src="videoUrl"
      >
      </iframe>
    </el-dialog>
  </section>
</template>

<script>
  import { yandexMap, ymapMarker } from 'vue-yandex-maps'
  import Parallax from 'parallax-js'
  import Partners from "../components/Partners";
  import PopularGoods from "../components/PopularGoods";
  import Feedbacks from "../components/Feedbacks";

  const toBase64 = file => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });

export default {
  components: {
    Partners,
    PopularGoods,
    yandexMap,
    ymapMarker,
    Feedbacks
  },
  head: {
    title: `Holiday Paint | Главная`
  },
  data: () => ({
    background: null,
    lead: null,
    videoDialog: false,
    videoUrl: null,
    settings: {
      apiKey: '51dd1116-29b8-4a97-ac52-d4d1197d0d80',
      lang: 'ru_RU',
      coordorder: 'longlat',
      version: '2.1'
    },
    page: {}
  }),
  methods: {
    markers(){
      return this.$store.state.shop.markers.filter(item => item.coords != null)
    },
    openVideo(link) {
      if (link.indexOf('youtu') === -1) {
        this.videoUrl = link
      }
      else {
        this.videoUrl = 'https://www.youtube.com/embed/' + link.split('/').pop()
      }
      this.videoDialog = true
    },
    nullCheck(string) {
      if (string == null) return ''
      else return string
    }
  },
  created() {
    this.page = this.$store.state.shop.pages[0].data
    console.log(this.page)
    //this.background = this.$store.dispatch('shop/getImage', 'content/main-bg-0.png')
    this.background = this.$store.state.shop.apiServer + '/storage/content/0-bg-0.png'
    this.lead = this.$store.state.shop.apiServer + '/storage/content/0-lead-0.png'
    console.log(this.background)
  },
  mounted() {
    document.styleSheets[0].removeRule(this.background)
    document.styleSheets[0].removeRule(this.lead)
    this.background = document.styleSheets[0].insertRule('.main:after{background-image: url('+this.background+')}');
    this.lead = document.styleSheets[0].insertRule('.paint{background-image: url('+this.lead+')}');
    /*
    const smokeScene = this.$refs.parallax;
    const smokeParallaxInstance = new Parallax(smokeScene);
    */
  }
}
</script>
<style lang="scss">
  .video-dialog {
    width: 64em;
    max-height: 100vh;
    max-width: 95vw;
    .el-dialog__body {
      padding-right: 0;
      padding-left: 0;
      padding-bottom: 0;
      height: 36em;
      width: 100%;
      @media (max-width: 500px) {
        height: 60vw

      }
    }
  }
</style>
<style lang="scss" scoped>
  @import "../assets/sass/variables";
  /*HOME*/
  .dialog-video {
    width: 100%;
    height: 100%;
  }
  .home {
    &-list {
      margin-bottom: 1.5em;
      &__item {
        display: flex;
        align-items: center;
        font-size: 1.5em;
        &:not(:last-child) {
          margin-bottom: 1em;
        }
      }
      &__text {
        @media (max-width: 600px) {
          font-size: .85em;
        }
      }
      &__icon {
        margin-right: 1em;
        min-width: 2em;
        width: 2em;
        height: 2em;
        border-radius: 50%;
        background-color: #fff;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0 4px 11px rgba(168, 168, 168, 0.21);
        img {
          height: .9em;
        }
      }
    }
    &-label {
      font-size: 1.5em;
      margin-bottom: 1.5em;
      span {
        font-weight: 700;
        color: $blue;
      }
      @media (max-width: 600px) {
        text-align: center;
      }
    }
  }
  @media (max-width: 600px) {
    h2.section-title.big {
      font-size: 2.5em;
    }
    p.subtitle {
      font-size: 1.5em;
    }
  }
  /*HOME END*/

  /* MAIN */
  h1.section-title {
    margin-top: .25em;
    font-size: 4.5em;
    text-align: left;
    margin-bottom: 0.15em;
    @media (max-width: 600px) {
      text-align: center;
    }
  }
  .main {
    position: relative;
    padding-bottom: 8em;
    @media (max-width: 1440px) {
      padding-bottom: 10em;
    }
    @media (max-width: 768px) {
      padding-bottom: 6em;
    }
    &:after {
      content: '';
      width: 100%;
      height: calc(100% + 14em);
      right: -7em;
      top: -14em;
      position: absolute;
      background-position: right top;
      background-repeat: no-repeat;
      background-size: 70%;
      z-index: -1;
      @media (max-width: 1440px) {
        background-size: 98%;
        right: -30%;
      }
      @media (max-width: 1024px) {
        top: -6em;
        width: 85%;
      }
      @media (max-width: 600px) {
        content: none;
      }
    }
    .container {
      display: flex;
    }
    &-subtitle {
      text-align: left;
      font-size: 3em;
      text-transform: uppercase;
      color: $blue;
      font-weight: 600;
      margin-bottom: .5em;
      @media (max-width: 600px) {
        text-align: center;
        font-size: 2.5em;
      }
    }
    .subtitle {
      text-align: left;
      width: 15em;
      max-width: 100%;
      @media (max-width: 600px) {
        margin-left: auto;
        margin-right: auto;
        text-align: center;
        margin-bottom: 1em;
      }
    }
    &-buttons {
      display: flex;
      align-items: center;
      font-size: 1.4em;
      @media (max-width: 600px) {
        flex-direction: column;
      }
      .btn {
        padding-left: 3.5em;
        padding-right: 3.5em;
      }
      .video-btn {
        z-index: 1;
        margin-left: 2em;
        @media (max-width: 600px) {
          margin-left: 0;
          order: -1;
        }
        &--label-1 {
          z-index: -2;
        }
      }
    }
    &-left {
      width: 50%;
      @media (max-width: 1024px) {
        width: 55%;
      }
      @media (max-width: 900px) {
        width: 70%;
      }
      @media (max-width: 600px) {
        font-size: .8em;
        width: 100%;
        text-align: center;
      }
    }
  }

  /*MAIN END*/

  /*PAINT*/

  .paint {
    //background-image: url('../assets/img/paint/car.png');
    background-position: right 70%;
    background-repeat: no-repeat;
    background-size: 40%;
    padding-top: 4em;
    padding-bottom: 8em;
    position: relative;
    @media (max-width: 600px) {
      background-image: none;
    }
    &-content {
      width: 80%;
      margin-left: auto;
      margin-right: auto;
    }
    &-buttons {
      display: flex;
      align-items: center;
      @media (max-width: 600px) {
        flex-direction: column-reverse;
      }
      .btn {
        padding-left: 3em;
        padding-right: 3em;
        margin-right: 2em;
        @media (max-width: 600px) {
          margin-right: 0;
          margin-bottom: .5em;
        }
      }
    }
    &-text {
      display: block;
      font-style: italic;
      font-size: 1.5em;
      width: 60%;
      max-width: 100%;
      margin-bottom: 2em;
      @media (max-width: 600px) {
        text-align: center;
      }
    }
    &-bg {
      position: absolute;
      left: 0;
      top: 50%;
      width: 20%;
      z-index: -1;
      transform: translateY(-50%);
      @media (max-width: 1600px) {
        width: 14em;
        left: -1em;
      }
      @media (max-width: 768px) {
        left: -5em;
      }
    }
  }

  /*PAINT END*/

  /* ABOUT */

  .digadv {
    position: relative;

    &-items {
      display: flex;
      justify-content: space-between;
      margin-bottom: 3em;
      flex-wrap: wrap;
      height: 8rem;
      align-items: center;
      @media (max-width: 768px) {
        justify-content: space-around;
        margin-bottom: 1em;
      }
    }
    &-item {
      width: 16%;
      text-align: center;
      @media (max-width: 768px) {
        width: 32%;
        margin-bottom: 2em;
      }
      &__value {
        font-size: 1.5em;
        text-align: center;
        width: 40em;
        max-width: 100%;
        margin-left: auto;
        margin-right: auto;
        margin-bottom: 1em;
      }
    }

    &__img {
      height: 5em;
      width: 5em;
      margin-left: auto;
      margin-right: auto;
      margin-bottom: 1em;
      padding: 1.25em 0;
      text-align: center;
      background-image: url('../assets/img/landings/about-item-bg.png');
      background-position: center;
      background-repeat: no-repeat;
      background-size: contain;

      img {
        height: 2.5em;
      }
    }
  }


  /* FEEDBACKS */

  .feedback {
      padding: 4em 0 4em 0;
  }


  /* FEEDBACKS END*/

  .btn.centred {
    width: fit-content;
    margin-left: auto;
    margin-right: auto;
  }

  p.subtitle.blue {
    text-transform: uppercase;
    text-align: center;
  }

  .map {
    img {
      width: 100%
    }
  }

  .grid-item {
    float: left;
    width: 80px;
    height: 60px;
    border: 2px solid hsla(0, 0%, 0%, 0.5);
  }
  .item img{
    width: 21rem;
    border: 2px solid hsla(0, 0%, 0%, 0.5);
  }
  .item2 img{
    width: 32rem;
    border: 2px solid hsla(0, 0%, 0%, 0.5);
  }
</style>

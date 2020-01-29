<template>
  <section class="home-wrap">
    <main class="main">
      <div class="container">
        <div class="main-left">
          <h1 class="section-title big gradient">Holiday Paint</h1>
          <h3 class="main-subtitle">Магазин ярких впечатлений</h3>
          <p class="subtitle">Яркие товары для праздников и мероприятий</p>
          <div class="main-buttons">
            <nuxt-link to="/catalog" class="btn">Перейти в магазин</nuxt-link>
            <div class="video-btn">
              <button class="video-btn__body" @click.prevent="openVideo($store.state.shop.settings[2].value)"></button>
              <span class="video-btn--label-1">Смотреть видео</span>
            </div>
          </div>
        </div>
      </div>
    </main>
    <section class="paint">
      <img src="../assets/img/paint/bottle.png" alt="" class="paint-bg">
      <div class="container">
        <h2 class="section-title big gradient">Меловая смываемая краска</h2>
        <p class="subtitle">Сделай свое авто ярким к любому празднику</p>
        <div class="paint-content">
          <p class="subtitle blue">Особенности краски:</p>
          <ul class="home-list">
            <li class="home-list__item">
              <div class="home-list__icon"><img src="../assets/img/icons/drop-silhouette.svg" alt=""></div>
              <span class="home-list__text">Смывается простой водой</span>
            </li>
            <li class="home-list__item">
              <div class="home-list__icon"><img src="../assets/img/icons/secure.svg" alt=""></div>
              <span class="home-list__text">Безопасна для ЛКП и без запаха</span>
            </li>
            <li class="home-list__item">
              <div class="home-list__icon"><img src="../assets/img/icons/glow.svg" alt=""></div>
              <span class="home-list__text">Светится в ультрафиолетовом свете</span>
            </li>
            <li class="home-list__item">
              <div class="home-list__icon"><img src="../assets/img/icons/rain-cloud-with-raindrops-falling-down.svg" alt=""></div>
              <span class="home-list__text">Устойчива к осадкам</span>
            </li>
          </ul>
          <div class="paint-buttons">
            <p @click="$store.commit('shop/flushFilter'); $store.commit('shop/filterType', 0)">
            <nuxt-link to="/catalog" class="btn">Перейти в магазин</nuxt-link>
            </p>
            <div class="video-btn">
              <button class="video-btn__body" @click.prevent="openVideo('https://www.youtube.com/embed/ni5hRK1ehzk')"></button>
            </div>
          </div>
          <p class="home-label"><span>590</span> рублей за шт.</p>
          <small class="paint-small">*Смывается под давлением на бесконтактной мойке или с помощью воды и губки. Краска не смывается с автомобиля в дождь и в снег.</small>
        </div>
      </div>
    </section>
    <section class="smoke">
      <div class="smoke-bg">
        <img src="../assets/img/smoke/smoke-left.png" alt="" class="smoke-bg__item smoke-bg__left">
        <parallax-container class="smoke-bg__smoke">
          <parallax-element :factor="0.3">
            <img src="../assets/img/smoke/smoke-bg.png" alt="">
          </parallax-element>
        </parallax-container>
        <div class="smoke-bg__parallax" ref="parallax">
          <img src="../assets/img/smoke/smoke-phone.png" alt="" class="smoke-bg__item smoke-bg__phone" data-depth="0">
          <img src="../assets/img/smoke/kiss-1.png" alt="" class="smoke-bg__item smoke-bg__kiss-1" data-depth="0.3">
          <img src="../assets/img/smoke/kiss-2.png" alt="" class="smoke-bg__item smoke-bg__kiss-2" data-depth="0.2">
          <img src="../assets/img/smoke/kiss-3.png" alt="" class="smoke-bg__item smoke-bg__kiss-3" data-depth="0.1">
          <img src="../assets/img/smoke/kiss-4.png" alt="" class="smoke-bg__item smoke-bg__kiss-4" data-depth="0.1">
          <img src="../assets/img/smoke/kiss-5.png" alt="" class="smoke-bg__item smoke-bg__kiss-5" data-depth="0.1">
          <img src="../assets/img/smoke/kiss-6.png" alt="" class="smoke-bg__item smoke-bg__kiss-6" data-depth="0.1">
        </div>
      </div>
      <div class="container">
        <h2 class="section-title big gradient">Цветной дым</h2>
        <p class="subtitle">Любая фотосессия станет невероятно завораживающей</p>
        <div class="smoke-content">
          <p class="subtitle blue">Идеален для ваших фотографий</p>
          <p class="subtitle">Собирайте лайки и комментарии в соцсетях к своим публикациям</p>
          <ul class="home-list">
            <li class="home-list__item">
              <div class="home-list__icon"><img src="../assets/img/icons/timing.svg" alt=""></div>
              <span class="home-list__text">Дымит от 30 до 120 сек.</span>
            </li>
            <li class="home-list__item">
              <div class="home-list__icon"><img src="../assets/img/icons/painter-palette.svg" alt=""></div>
              <span class="home-list__text">Более 9 цветов</span>
            </li>
            <li class="home-list__item">
              <div class="home-list__icon"><img src="../assets/img/icons/list-with-bullets.svg" alt=""></div>
              <span class="home-list__text">Более 5 видов</span>
            </li>
            <li class="home-list__item">
              <div class="home-list__icon"><img src="../assets/img/icons/life-insurance.svg" alt=""></div>
              <span class="home-list__text">Безопасно для здоровья</span>
            </li>
          </ul>
          <div class="smoke-btn__wrap">
            <p @click="$store.commit('shop/flushFilter'); $store.commit('shop/filterType', 2)">
            <nuxt-link to="/catalog" class="btn smoke-btn">Перейти в магазин</nuxt-link>
            </p>
            <p class="home-label">от <span>330</span> рублей за шт.</p>
          </div>
        </div>
      </div>
    </section>
    <section class="markers">
      <div class="container">
        <h2 class="section-title big gradient">Меловые смываемые маркеры</h2>
        <p class="subtitle">Пишите на маркерных led-досказ, витринах, окнах и даже на холодильнике</p>
        <div class="markers-right">
          <div class="markers__wrap">
            <div class="markers-item">
              <div class="markers-item--img"><img src="../assets/img/markers/img-1.png" alt=""></div>
              <p class="markers-text">Смывается влажной губкой</p>
            </div>
            <div class="markers-item">
              <div class="markers-item--img"><img src="../assets/img/markers/img-2.png" alt=""></div>
              <p class="markers-text">9 цветов</p>
            </div>
            <div class="markers-item">
              <div class="markers-item--img"><img src="../assets/img/markers/img-3.png" alt=""></div>
              <p class="markers-text">3 вида<br>стержня</p>
            </div>
            <div class="markers-item">
              <div class="markers-item--img"><img src="../assets/img/markers/img-4.png" alt=""></div>
              <p class="markers-text">Светится при ультрафиолете</p>
            </div>
          </div>
          <div class="markers-button__wrap">
            <p @click="$store.commit('shop/flushFilter'); $store.commit('shop/filterType', 1)">
            <nuxt-link to="/catalog" class="btn">Перейти в магазин</nuxt-link>
            </p>
            <p class="home-label">от <span>130</span> рублей за шт.</p>
          </div>
        </div>
      </div>
    </section>
    <section class="holipaint">
      <div class="holipaint-video">
        <video autoplay loop muted>
          <source src="../assets/video/holipaint.mp4" type="video/mp4">
        </video>
      </div>
      <div class="container">
        <h2 class="section-title big gradient">Фестивальные краски холи</h2>
        <p class="subtitle">Сделайте небо над головой ярким</p>
        <div class="video-btn-2">
          <button class="video-btn-2__body" @click.prevent="openVideo('/_nuxt/videos/d60c6b2.mp4')">
            <svg id="play"  viewBox="0 0 163 163" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px">
              <g fill="none">
                  <g  transform="translate(2.000000, 2.000000)" stroke-width="4">
                      <path d="M10,80 C10,118.107648 40.8923523,149 79,149 L79,149 C117.107648,149 148,118.107648 148,80 C148,41.8923523 117.107648,11 79,11" id="lineOne" stroke="#825cd4"></path>
                      <path d="M105.9,74.4158594 L67.2,44.2158594 C63.5,41.3158594 58,43.9158594 58,48.7158594 L58,109.015859 C58,113.715859 63.4,116.415859 67.2,113.515859 L105.9,83.3158594 C108.8,81.1158594 108.8,76.6158594 105.9,74.4158594 L105.9,74.4158594 Z" id="triangle" stroke="#825cd4"></path>
                      <path d="M159,79.5 C159,35.5933624 123.406638,0 79.5,0 C35.5933624,0 0,35.5933624 0,79.5 C0,123.406638 35.5933624,159 79.5,159 L79.5,159" id="lineTwo" stroke="#825cd4"></path>
                  </g>
              </g>
            </svg>
          </button>
          <span class="video-btn-2--label">Открыть на весь экран</span>
        </div>
        <div class="holipaint-content">
          <div class="holipaint-item">
            <div class="holipaint-img"><img src="../assets/img/icons/recycle-sign.svg" alt=""></div>
            <p class="holipaint-text">Только пищевые красители</p>
          </div>
          <div class="holipaint-item">
            <div class="holipaint-img"><img src="../assets/img/icons/painter-palette.svg" alt=""></div>
            <p class="holipaint-text">7 ярких цветов</p>
          </div>
          <div class="holipaint-item">
            <div class="holipaint-img"><img src="../assets/img/icons/washing-machine.svg" alt=""></div>
            <p class="holipaint-text">Легко отстирываются</p>
          </div>
        </div>
        <div class="holipaint-button__wrap">
          <p @click="$store.commit('shop/flushFilter'); $store.commit('shop/filterType', 3)">
          <nuxt-link to="/catalog" class="btn">Перейти в магазин</nuxt-link>
          </p>
          <p class="home-label"><span>100</span> рублей за шт.</p>
        </div>
      </div>
    </section>
    <section class="kigurumi">
      <parallax-container class="kigurumi-parallax__container">
        <parallax-element :factor=".3">
          <img src="../assets/img/kigurumi/kigurumi-smoke.png" alt="" class="kigurumi-parallax--img">
        </parallax-element>
      </parallax-container>
      <div class="container">
        <h2 class="section-title big gradient">Костюмы кигуруми</h2>
        <p class="subtitle">Самый мягкий косплей на любимых героев</p>
        <div class="kigurumi-content">
          <ul class="home-list">
            <li class="home-list__item">
              <div class="home-list__icon"><img src="../assets/img/icons/boy-face.svg" alt=""></div>
              <span class="home-list__text">Размеры для детей от 3 лет</span>
            </li>
            <li class="home-list__item">
              <div class="home-list__icon"><img src="../assets/img/icons/list-with-bullets.svg" alt=""></div>
              <span class="home-list__text">Более 40 моделей</span>
            </li>
            <li class="home-list__item">
              <div class="home-list__icon"><img src="../assets/img/icons/washing-machine.svg" alt=""></div>
              <span class="home-list__text">Легко стираются</span>
            </li>
            <li class="home-list__item">
              <div class="home-list__icon"><img src="../assets/img/icons/wool.svg" alt=""></div>
              <span class="home-list__text">Мягкий и нежный материал</span>
            </li>
          </ul>
          <div class="kigurumi-button__wrap">
            <p @click="$store.commit('shop/flushFilter'); $store.commit('shop/filterType', 4)">
            <nuxt-link to="/catalog" class="btn">Перейти в магазин</nuxt-link>
            </p>
            <p class="home-label"><span>1 990</span> рублей за шт.</p>
          </div>
        </div>
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
            :balloon="{header: item.city, body: item.name+' ('+item.corp_email+')', footer: item.phone}"
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
export default {
  components: {
    Partners,
    PopularGoods,
    yandexMap,
    ymapMarker
  },
  head: {
    title: `Holiday Paint | Главная`
  },
  data: () => ({
    videoDialog: false,
    videoUrl: null,
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
    openVideo(link) {
      this.videoUrl = 'https://www.youtube.com/embed/' + link.split('/').pop()
      this.videoDialog = true
    }
  },
  mounted() {
    const smokeScene = this.$refs.parallax;
    const smokeParallaxInstance = new Parallax(smokeScene);

  }
}
</script>
<style lang="scss">
  .video-dialog {
    width: 64em;
    max-height: 100vh;
    .el-dialog__body {
      padding-right: 0;
      padding-left: 0;
      padding-bottom: 0;
      height: 36em;
      width: 100%;
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
      background-image: url('../assets/img/home/main-image.png');
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
    background-image: url('../assets/img/paint/car.png');
    background-position: right 70%;
    background-repeat: no-repeat;
    background-size: 40%;
    padding-top: 2em;
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
    &-small {
      display: block;
      font-style: italic;
      font-weight: 300;
      width: 38em;
      max-width: 100%;
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

  /*SMOKE*/

  .smoke {
    position: relative;
    padding-bottom: 8em;
    @media (max-width: 600px) {
      padding-bottom: 6em;
    }
    &-btn {
      width: fit-content;
      padding-left: 3.5em;
      padding-right: 3.5em;
      margin-bottom: 1em;
      &__wrap {
        text-align: center;
        width: fit-content;
        display: flex;
        flex-direction: column;
        align-items: center;
        @media (max-width: 600px) {
          width: 100%;
        }
      }
    }
    &-content {
      width: 45em;
      margin-left: auto;
      margin-right: auto;
      max-width: 100%;
      @media (min-width: 1024px) {
        margin-left: 12.25em;
      }
      .subtitle {
        text-align: left;
        @media (max-width: 600px) {
          margin-bottom: 1.5em;
          &, &.blue {
            text-align: center;
          }
        }
      }
    }
    &-bg {
      &__item {
        position: absolute;
        @media (max-width: 900px) {
          &:not(.smoke-bg__smoke):not(.smoke-bg__left) {
            display: none!important;
          }
        }
        @media (max-width: 600px) {
          display: none!important;
        }
      }
      &__left {
        right: 0;
        top: 50%;
        transform: translateY(-50%);
        width: 45%;
      }
      &__phone {
        left: 5%!important;
        top: 50%!important;
        transform: translateY(-50%)!important;
        width: 20em;
        @media (max-width: 1600px) {
          left: 0!important;
          width: 14em;
        }
        @media (max-width: 1024px) {
          width: 12em;
        }
      }
      &__parallax {
        z-index: -1;
        position: absolute!important;
        left: 0;
        top: 0;
        height: 100%;
        width: 22em;
        @media (max-width: 1600px) {
          width: 14em;
        }
        @media (max-width: 1024px) {
          width: 12em;
        }
      }
      &__smoke {
        position: absolute;
        top: -30%;
        left: -10em;
        width: 70vw;
        z-index: -1;
        img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }
        @media (max-width: 1600px) {
          top: -10%;
        }
        @media (max-width: 1024px) {
          top: 0%;
        }
        @media (max-width: 768px) {
          top: 15%;
        }
        @media (max-width: 600px) {
          width: 100%;
        }
      }
      &__kiss {
        &-1 {
          width: 25%;
          left: auto!important;
          right: -3em;
          top: 55%!important;
        }
        &-2 {
          right: -3em;
          left: auto!important;
          top: 18%!important;
          width: 35%;
        }
        &-3 {
          width: 40%;
          left: -1em!important;
          top: 19%!important;
        }
        &-4 {
          left: 80%!important;
          top: 35%!important;
          width: 40%;
        }
        &-5 {
          left: -4em!important;
          top: 55%!important;
        }
        &-6 {
          width: 45%;
          left: -10%!important;
          top: 30%!important;
        }
      }
    }
  }

  /*SMOKE END*/

  /*MARKERS*/

  .markers {
    padding: 2em 0 10em;
    background-image: url('../assets/img/markers/markers-left.png');
    background-position: 10% 70%;
    background-repeat: no-repeat;
    background-size: 40%;
    @media (max-width: 1600px) {
      background-size: 50%;
      background-position: 6% 60%;
    }
    @media (max-width: 900px) {
      background-size: 40%;
      background-position: 5% 50%;
    }
    @media (max-width: 768px) {
      background-position: 0 40%;
    }
    @media (max-width: 600px) {
      background-image: none;
      padding-bottom: 6em;
      h2.section-title {
        font-size: 2.2em;
      }
    }

    &-right {
      width: 40em;
      max-width: 100%;
      margin-left: auto;
    }
    &__wrap {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
    }
    &-item {
      width: 35%;
      text-align: center;
      margin-bottom: 2em;
      &--img {
        height: 4em;
        margin-bottom: 1em;
        img {
          height: 100%;
        }
      }
    }
    .btn {
      width: fit-content;
      margin-left: auto;
      margin-right: auto;
      margin-bottom: 1em;
    }
    .home-label {
      text-align: center;
    }

  }

  /*MARKERS END*/

  /*HOLIPAINT*/

  .holipaint {
    margin: 2em 0;
    position: relative;
    &-video {
      mask-image: url("../assets/img/holipaint/holipaint-mask.png");
      mask-size: contain;
      mask-position: center;
      mask-repeat: no-repeat;
      z-index: -1;
      @media (max-width: 768px) {
        height: 40em;
        mask-size: auto 100%;
      }
      video {
        width: 100%;
        @media (max-width: 768px) {
          height: 100%;
          width: auto;
          max-width: none;
        }
      }
    }
    .container {
      height: 100%;
      display: flex;
      flex-direction: column;
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      width: 100%;
    }
    .video-btn-2 {
      font-size: 1.5em;
      position: absolute;
      top: 40%;
      left: 50%;
      transform: translate(-50%, -50%);
      display: flex;
      align-items: center;
      .video-btn-2__body {
        margin-right: 1em;
        background-color: transparent;
        border: none;
        padding: 0;
        @media (max-width: 600px) {
          margin-right: 2.5em;
        }
        svg#play {
          width:70px;
          display:block;
          cursor: pointer;
          transform-origin: 50% 50%;
        }

        svg#play #triangle {
          fill:rgba($primaryColor,0);
          transition:500ms;
          transform-origin: 50% 50%;
        }
        svg#play:hover #triangle {
          fill:$primaryColor;
          transform-origin: 50% 50%;
        }

        svg #lineOne, svg #lineTwo {
          transform-origin: 50% 50%;
          transition: 1s;
        }

        svg:hover #lineOne {
          transform: rotate(260deg);
          -webkit-transform: rotate(260deg);
          -moz-transform: rotate(260deg);
          -o-transform: rotate(260deg);
          transform-origin: 50% 50%;
        }

        svg:hover #lineTwo {
          transform: rotate(-450deg);
          transform-origin: 50% 50%;
        }
      }
    }
    &-content {
      margin-bottom: 4em;
      margin-top: auto;
      display: flex;
      justify-content: space-around;
      @media (max-width: 1024px) {
        margin-bottom: 2em;
      }
    }
    &-item {
      width: 30%;
      font-size: 1.5em;
      text-align: center;
      @media (max-width: 768px) {
        font-size: 1.25em;
        width: 33%;
      }
      @media (max-width: 600px) {
        font-size: .9em;
        width: 33%;
      }
    }
    &-img {
      margin-left: auto;
      margin-right: auto;
      height: 4em;
      width: 4em;
      border-radius: 50%;
      background-color: #fff;
      box-shadow: 0 4px 11px rgba(168, 168, 168, 0.21);
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 2em;
      img {
        height: 2em;
      }
      @media (max-width: 1600px) {
        margin-bottom: 1em;
      }
    }
    &-button__wrap {
      text-align: center;
      .btn {
        width: fit-content;
        margin: 0 auto 1.5em;
        padding-left: 3em;
        padding-right: 3em;
      }
    }
  }

  /*HOLIPAINT END*/

  /* KIGURUMI */

  .kigurumi {
    position: relative;
    padding-bottom: 20em;
    background-image: url('../assets/img/kigurumi/kigurumi-bg.png');
    background-position: right center;
    background-repeat: no-repeat;
    background-size: 55%;
    @media (max-width: 1600px) {
      padding-bottom: 15em;
      background-size: 60%;
    }
    @media (max-width: 768px) {
      background-size: 50%;
      padding-bottom: 10em;
    }
    @media (max-width: 600px) {
      background-image: none;
      padding-bottom: 8em;
    }
    &-parallax {
      &__container {
        z-index: -1;
        position: absolute!important;
        left: 0;
        top: -10%;
        width: 100%;
        height: 100%;
        @media (max-width: 1024px) {
          top: 15%;
        }
      }
      &--img {
        width: 50%;
        @media (max-width: 600px) {
          width: 100%;
        }
      }
    }
    &-button__wrap {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: fit-content;
      @media (max-width: 600px) {
        width: 100%;
      }
      .btn {
        padding-left: 3em;
        padding-right: 3em;
        margin-bottom: 1em;
      }
    }
  }

  /* KIGURUMI END */

  .map {
    img {
      width: 100%
    }
  }

</style>

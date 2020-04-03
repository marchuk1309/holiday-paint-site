<template>
  <section class="landing-wrap">
    <main class="main">
      <div class="container">
        <div class="main-left">
          <h1 class="section-title big gradient">{{page.main.title}}</h1>
          <h3 class="main-subtitle">{{page.main.subtitle}}</h3>
          <div class="main-buttons">
            <div class="main-btn__wrap">
              <nuxt-link to="/catalog/?category=0" class="btn">{{page.main.buttontext}}</nuxt-link>
              <p class="landing__label"></p>
            </div>
            <div class="video-btn">
              <button class="video-btn__body" @click.prevent="openVideo(page.main.videourl)"></button>
              <span class="video-btn--label-1">Смотреть видео</span>
            </div>
          </div>
        </div>
      </div>
    </main>
    <section class="paint">
      <!--<img src="../../assets/img/paint/bottle.png" alt="" class="paint-bg">-->
      <div class="container">
        <h2 class="section-title big gradient">{{page.about.title}}</h2>
        <p class="subtitle">{{page.about.subtitle}}</p>
        <div class="paint-content">
          <p class="paint-text">{{page.about.text}}</p>
          <div class="paint-buttons">
            <nuxt-link :to="page.about.buttonurl || ''" class="btn">{{page.about.buttontext}}</nuxt-link>
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
    <section class="about">
      <parallax-container class="about-bg">
        <parallax-element :factor="0.3">
          <img src="../../assets/img/landings/about-smoke.png" class="about-bg--img" alt="">
        </parallax-element>
      </parallax-container>
      <div class="container">
        <h2 class="section-title big gradient">{{page.advant.title}}</h2>
        <div class="about-using">
          <div v-for="(item, index) in images['advant']" class="about-using__item">
            <div class="about-using__img"><img :src="$store.state.shop.apiServer + '/storage/content/'+id+'-advant-'+item" alt=""></div>
            <p class="about-using__head">{{page.advant.name[index]}}</p>
            <p class="about-using__text">{{page.advant.text[index]}}</p>
          </div>
        </div>
        <nuxt-link :to="page.advant.buttonurl || ''" class="btn centred">{{page.advant.buttontext}}</nuxt-link>
      </div>
    </section>
    <section class="holipaint">
      <div class="holipaint-video">
        <video autoplay loop muted>
          <source ref="holipaintVideo" src="../../assets/video/holipaint.mp4" type="video/mp4">
        </video>
      </div>
      <div class="container">
        <h2 class="section-title big gradient">{{page.video.title}}</h2>
        <p class="subtitle">{{page.video.subtitle}}</p>
        <div class="video-btn-2">
          <button class="video-btn-2__body" @click.prevent="openVideo(page.video.videourl)">
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
          <span class="video-btn-2--label">{{page.video.videotext}}</span>
        </div>
        <div class="holipaint-content">
          <div class="holipaint-item">
            <!--
            <div class="holipaint-img">
              <img src="../assets/img/icons/recycle-sign.svg" alt="">
            </div>
            -->
            <p class="holipaint-text"></p>
          </div>
          <div class="holipaint-item">
            <!--
            <div class="holipaint-img">
              <img src="../assets/img/icons/painter-palette.svg" alt="">
            </div>
            -->
            <p class="holipaint-text"></p>
          </div>
          <div class="holipaint-item">
            <!--
            <div class="holipaint-img">
              <img src="../assets/img/icons/washing-machine.svg" alt="">
            </div>
            -->
            <p class="holipaint-text"></p>
          </div>
        </div>
        <div class="holipaint-button__wrap">
          <nuxt-link to="/catalog/?category=holy-paint" class="btn">{{page.video.buttontext}}</nuxt-link>
          <!--
          <p class="home-label"><span>100</span> рублей за шт.</p>
          -->
        </div>
      </div>
    </section>
    <section v-if="images['gallery'] && images['gallery'].length > 0" class="feedback">
      <div class="container">
        <h2 class="section-title big gradient">{{page.gallery.title}}</h2>
        <p class="subtitle">{{page.gallery.subtitle}}</p>
        <feedbacks/>
        <nuxt-link :to="page.gallery.buttonurl || ''" class="btn centred">{{page.gallery.buttontext}}</nuxt-link>
      </div>
    </section>
    <section class="faq">
      <div class="container">
        <h2 class="section-title big gradient">FAQ</h2>
        <p class="subtitle">Часто задаваемые вопросы про меловую краску</p>
        <div class="faq-body">
          <el-collapse v-model="activeCollapses">
            <el-collapse-item v-for="(item, index) in page.faq.q" :title="item" :name="index">
              <div>{{page.faq.a[index]}}</div>
            </el-collapse-item>
          </el-collapse>
        </div>
      </div>
    </section>
    <popular-goods/>
    <el-dialog
        :visible.sync="videoDialog"
        custom-class="video-dialog"
        @closed="videoUrl = ''"
    >
      <iframe
          class="dialog-video"
          width="100%"
          height="100%"
          :src="videoUrl">
      </iframe>
    </el-dialog>
  </section>
</template>

<script>

  import Parallax from 'parallax-js'
  import Feedbacks from "../../components/Feedbacks";
  import PopularGoods from "../../components/PopularGoods";
  export default {
    components: {
      PopularGoods,
      Feedbacks
    },
    head: {
      title: `Holiday Paint | Главная`
    },
    computed: {
      id() {
        let item = this.$store.state.shop.pages.find(item => item.data.url == this.$route.params.id)
        if (this.$route.name != 'index') return item.id
        else return 0
      },
      images() {
        let index = this.$store.state.shop.content.findIndex(item => item.id == this.id)
        return this.$store.state.shop.content[index].images
      },
      page(){
        let index = this.$store.state.shop.pages.findIndex(item => item.id == this.id)
        return this.$store.state.shop.pages[index].data
      }
    },
    data: () => ({
      videoDialog: false,
      videoUrl: null,
      activeCollapses: [0],
      background: null,
      about: null
    }),
    methods: {
      openVideo(link) {
        this.videoUrl = 'https://www.youtube.com/embed/' + link.split('/').pop()
        this.videoDialog = true
      },
    },
    created() {
      //this.background = this.$store.dispatch('shop/getImage', 'content/main-bg-0.png')
      this.background = this.$store.state.shop.apiServer + '/storage/content/'+this.id+'-bg-0.png'
      this.about = this.$store.state.shop.apiServer + '/storage/content/'+this.id+'-about-0.png'
    },
    mounted() {
      document.styleSheets[0].removeRule(this.background)
      document.styleSheets[0].removeRule(this.about)
      this.background = document.styleSheets[0].insertRule('.main:after{background-image: url('+this.background+')}');
      this.about = document.styleSheets[0].insertRule('.paint{background-image: url('+this.about+')}');
    },
  }
</script>

<style lang="scss" scoped>
  @import "../../assets/sass/variables";
  /*LANDING*/
  .btn.centred {
    width: fit-content;
    margin-left: auto;
    margin-right: auto;
  }
  .landing {
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
      font-size: 4em;
    }
  }
  p.subtitle.blue {
    text-transform: uppercase;
    text-align: center;
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
      right: -10em;
      top: -14em;
      position: absolute;
      //background-image: url('../../assets/img/landings/paint/main-bg.png');
      background-position: right top;
      background-repeat: no-repeat;
      background-size: 55%;
      z-index: -1;
      @media (max-width: 1440px) {
        right: -25%;
        background-size: 70%;
      }
      @media (max-width: 1024px) {
        top: -6em;
        background-size: 90%;
        right: -40%;
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
      color: $blue;
      font-weight: 600;
      margin-bottom: 1em;
      @media (max-width: 600px) {
        text-align: center;
        font-size: 2.5em;

      }
    }
    &-btn__wrap {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    &-buttons {
      display: flex;
      align-items: center;
      font-size: 1.4em;
      @media (max-width: 600px) {
        flex-direction: column;
      }
      .landing__label {
        height: 1.5em;
        margin-top: 1em;

      }
      .btn {
        padding-left: 3.5em;
        padding-right: 3.5em;
      }
      .video-btn {
        z-index: 1;
        margin-left: 2em;
        margin-bottom: 2.5em;
        @media (max-width: 600px) {
          margin-left: 0;
          margin-bottom: 4.5em;
          order: -1;
        }
        &--label-1 {
          z-index: -2;
        }
      }
    }
    &-left {
      width: 65%;
      @media (max-width: 1024px) {
        width: 70%;
      }
      @media (max-width: 900px) {
        width: 80%;
      }
      @media (max-width: 600px) {
        font-size: .8em;
        width: 100%;
        text-align: center;
      }
    }
  }

  /*MAIN END*/

  /* ABOUT */

  .about {
    position: relative;
    margin-bottom: 4em;
    &-bg {
      width: 15%;
      top: -10%;
      position: absolute;
      left: -5%;
      @media (max-width: 768px) {
        display: none;
      }
    }
    .subtitle {
      margin-bottom: 1.5em;
    }
    &-text {
      font-size:  1.5em;
      text-align: center;
      width: 40em;
      max-width: 100%;
      margin-left: auto;
      margin-right: auto;
      margin-bottom: 2em;
    }
    &-facts {
      display: flex;
      align-items: flex-end;
      justify-content: space-between;
      margin-bottom: 4em;
      flex-wrap: wrap;
      @media (max-width: 768px) {
        justify-content: space-around;
      }
    }
    &-fact {
      @media (max-width: 768px) {
        width: 49%;
        &:not(:last-child) {
          margin-bottom: 2em;
        }
      }
      @media (max-width: 600px) {
        width: 100%;
      }
      &__img {
        height: 6em;
        text-align: center;
        margin-bottom: 1em;
        img {
          height: 100%;
        }
      }
      &__text {
        text-align: center;
        font-size: 1.5em;
      }
      &:last-child {
        .about-fact__img {
          height: 11em;
          img {
            height: 120%;
          }
        }
      }
    }
    &-using {
      display: flex;
      justify-content: space-between;
      margin-bottom: 3em;
      flex-wrap: wrap;
      @media (max-width: 768px) {
        justify-content: space-around;
        margin-bottom: 1em;
      }
      &__item {
        width: 16%;
        text-align: center;
        @media (max-width: 768px) {
          width: 32%;
          margin-bottom: 2em;
        }
      }
      &__head {
        font-weight: 700;
      }
      &__img {
        height: 5em;
        width: 5em;
        margin-left: auto;
        margin-right: auto;
        margin-bottom: 1em;
        padding: 1.25em 0;
        text-align: center;
        background-image: url('../../assets/img/landings/about-item-bg.png');
        background-position: center;
        background-repeat: no-repeat;
        background-size: contain;
        img {
          height: 2.5em;
        }
      }
    }

    &-second {
      padding: 10em 0;
      background-image: url('../../assets/img/landings/paint/about-second__bg.png');
      background-position: left 80%;
      background-repeat: no-repeat;
      background-size: 45%;
      @media (max-width: 768px) {
        background-image: none;
        padding: 8em 0 4em;
        .container {
          flex-direction: column;
        }
      }
      .video-btn {
        margin-right: auto;
        margin-left: auto;
        @media (min-width: 769px) {
          &--label-1 {
            display: none;
          }
        }
        @media (max-width: 768px) {
          order: 1;
          margin-top: 2em;
          &--label-1 {
            left: 50%;
            top: 100%;
            text-align: center;
            transform: translateX(-50%)
          }
        }
      }
      &__right {
        width: 57%;
        @media (max-width: 768px) {
          width: 100%;
          text-align: center;
        }
      }
      .section-title {
        text-align: left;
        width: 10em;
        max-width: 100%;
        margin-bottom: .25em;
        @media (max-width: 768px) {
          text-align: center;
          margin-left: auto;
          margin-right: auto;
        }
      }
      .subtitle {
        text-align: left;
        margin-bottom: 2em;
        @media (max-width: 768px) {
          text-align: center;
        }
      }
      &__text {
        font-size: 1.5em;
        width: 27em;
        max-width: 100%;
        margin-bottom: 1.5em;
        @media (max-width: 768px) {
          margin-left: auto;
          margin-right: auto;
        }
      }
    }
  }

  /* ABOUT END */

  /*PAINT*/

  .paint {
    //background-image: url('../../assets/img/paint/car.png');
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

  /* FEATURES */

  .features {
    padding: 5em 0;
    .section-title {
      margin-bottom: .5em;
    }
    &-body {
      padding: 5em 0;
      margin-bottom: 3em;
      background-image: url('../../assets/img/landings/paint/features__bg.png');
      background-position: center;
      background-size: auto 90%;
      background-repeat: no-repeat;
      @media (max-width: 768px) {
        background-size: auto 60%;
      }
      @media (max-width: 600px) {
        padding: 0;
        flex-direction: column;
      }
    }
    &-list {
      width: 36%;
      @media (max-width: 768px) {
        width: 40%;
      }
      @media (max-width: 600px) {
        width: 100%;
        background-color: rgba(#fff, .3);
        border-radius: 5px;
        font-weight: 500;
      }
    }
    &-item {
      display: flex;
      align-items: center;
      font-size: 1.5em;
      height: 3.5em;
      position: relative;
      &.plus {
        justify-content: flex-end;
        padding-right: 3em;
        &:after {
          content: '';
          width: 2em;
          height: 2em;
          position: absolute;
          right: 0;
          top: 50%;
          transform: translateY(-50%);
          background-image: url('../../assets/img/icons/plus-circle.svg');
          background-position: center;
          background-repeat: no-repeat;
          background-size: contain;
        }
        @media (max-width: 600px) {
          padding-right: 0;
          padding-left: 3em;
          justify-content: flex-start;
          &:after {
            right: auto;
            left: 0;
          }
        }
      }
      &.minus {
        padding-left: 3em;
        &:after {
          content: '';
          width: 2em;
          height: 2em;
          position: absolute;
          left: 0;
          top: 50%;
          transform: translateY(-50%);
          background-image: url('../../assets/img/icons/minus-circle.svg');
          background-position: center;
          background-repeat: no-repeat;
          background-size: contain;
        }
        @media (max-width: 600px) {
          padding-left: 0;
          padding-right: 3em;
          justify-content: flex-end;
          text-align: right;
          &:after {
            left: auto;
            right: 0;
          }
        }
      }
      @media (max-width: 768px) {
        font-size: 1.25em;
      }
    }
  }

  /* FEATURES END */

  /*HOLIPAINT*/

  .holipaint {
    margin: 2em 0;
    position: relative;
    &-video {
      mask-image: url("../../assets/img/holipaint/holipaint-mask.png");
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

  /* FEEDBACKS */

  .feedback {
    &-slider {
      padding-bottom: 4em;
    }
  }


  /* FEEDBACKS END*/

  /* FAQ */

  .faq {
    padding: 5em 0;
  }

  /* FAQ END*/

</style>

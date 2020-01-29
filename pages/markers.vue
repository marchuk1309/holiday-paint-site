<template>
  <section class="landing-wrap">
    <main class="main">
      <div class="container">
        <div class="main-left">
          <h1 class="section-title big gradient">Меловые маркеры</h1>
          <h3 class="main-subtitle">Рисуйте каждый день все, <br>что захочется</h3>
          <div class="main-buttons">
            <div class="main-btn__wrap">
              <p @click="$store.commit('shop/filterType', 1)">
                <nuxt-link to="/catalog" class="btn">Перейти в магазин</nuxt-link>
              </p>
              <p class="landing__label">100 рублей за штуку</p>
            </div>
          </div>
        </div>
      </div>
    </main>
    <section class="about">
      <div class="container">
        <h2 class="section-title big gradient">Что такое меловые маркеры?</h2>
        <p class="subtitle">Яркие рисунки, привлекающие внимание окружающих</p>
        <p class="about-text">Меловые маркеры — это маркеры на водной основе, жидкого мела и пигментов. Легко смывается простой водой с гладких поверхностей: стекло, металл, пластик.</p>
        <p class="subtitle blue">Где можно рисовать маркерами</p>
        <div class="about-using">
          <div class="about-using__item">
            <div class="about-using__img"><img src="../assets/img/icons/blackboard.svg" alt=""></div>
            <p class="about-using__text">LED-доска</p>
          </div>
          <div class="about-using__item">
            <div class="about-using__img"><img src="../assets/img/icons/blackboard2.svg" alt=""></div>
            <p class="about-using__text">Грифельные доски</p>
          </div>
          <div class="about-using__item">
            <div class="about-using__img"><img src="../assets/img/icons/window.svg" alt=""></div>
            <p class="about-using__text">Стекло и пластик</p>
          </div>
          <div class="about-using__item">
            <div class="about-using__img"><img src="../assets/img/icons/bracket.svg" alt=""></div>
            <p class="about-using__text">Металл и кафель</p>
          </div>
          <div class="about-using__item">
            <div class="about-using__img"><img src="../assets/img/icons/crate.svg" alt=""></div>
            <p class="about-using__text">Дерево и бумага</p>
          </div>
          <div class="about-using__item">
            <div class="about-using__img"><img src="../assets/img/icons/fabric.svg" alt=""></div>
            <p class="about-using__text">Одежда и ткань</p>
          </div>
        </div>
        <p @click="$store.commit('shop/flushFilter'); $store.commit('shop/filterType', 1)">
          <nuxt-link to="/catalog" class="btn centred">Перейти в магазин</nuxt-link>
        </p>
      </div>
    </section>
    <section class="about-second">
      <div class="about-second__parallax" ref="aboutParallax">
        <img src="../assets/img/landings/markers/letter0.png" alt="" class="about-second__parallax-item" data-depth="0.1">
        <img src="../assets/img/landings/markers/letter1.png" alt="" class="about-second__parallax-item" data-depth="0.2">
        <img src="../assets/img/landings/markers/letter2.png" alt="" class="about-second__parallax-item" data-depth="0.3">
        <img src="../assets/img/landings/markers/letter3.png" alt="" class="about-second__parallax-item" data-depth="0.2">
        <img src="../assets/img/landings/markers/letter4.png" alt="" class="about-second__parallax-item" data-depth="0.2">
        <img src="../assets/img/landings/markers/letter5.png" alt="" class="about-second__parallax-item" data-depth="0.2">
      </div>
      <div class="container flex jc-sb">
        <button @click="openVideo($store.state.shop.settings[3].value)" class="about-second__left video-btn">
          <span class="video-btn__body gradient"></span>
          <span class="video-btn--label-1">Смотреть видео</span>
        </button>
        <div class="about-second__right">
          <h2 class="section-title big gradient">Боди-арт</h2>
          <p class="subtitle">Посмотрите видео, как выглядит боди-арт.</p>
          <p class="about-second__text">Боди-арт — берет свое начало с росписи тел древних племен Америки, Африки и Азии. В наши дни боди-арт используется не только в развлекательных, но и в рекламных целях. Но, основное направление — неоновые фотографии под ультрафиолетовым светом.</p>
        </div>
      </div>
    </section>
    <section class="features">
      <div class="container">
        <h2 class="section-title big gradient">Преимущества меловых маркеров</h2>
        <p class="subtitle">Почему стоит купить меловые маркеры HOLIDAY PAINT?</p>
        <div class="features-body flex jc-sb">
          <div class="features-left">
            <div class="features-img"><img src="../assets/img/landings/markers/colors.png" alt=""></div>
            <p class="features-label">9 ярких и насыщенных цветов</p>
          </div>
          <ul class="features-list">
            <li class="features-list__item">
              <div class="features-list__img"><img src="../assets/img/icons/drop-silhouette.svg" alt=""></div>
              <span class="features-list__text">Смываются простой водой</span>
            </li>
            <li class="features-list__item">
              <div class="features-list__img"><img src="../assets/img/icons/list-with-bullets.svg" alt=""></div>
              <span class="features-list__text">3 размера наконечников - 6,8 и 10мм</span>
            </li>
            <li class="features-list__item">
              <div class="features-list__img"><img src="../assets/img/icons/glow.svg" alt=""></div>
              <span class="features-list__text">Светятся при ультрафиолетовом свете</span>
            </li>
            <li class="features-list__item">
              <div class="features-list__img"><img src="../assets/img/icons/secure.svg" alt=""></div>
              <span class="features-list__text">Не имеют запаха, не токсичны</span>
            </li>
          </ul>
        </div>
        <nuxt-link to="/catalog" class="btn centred">Перейти в магазин</nuxt-link>
      </div>
    </section>
    <section class="feedback">
      <div class="container">
        <h2 class="section-title big gradient">Фото и видео с меловыми маркерами</h2>
        <p class="subtitle">Мы запечатлели самые яркие жизненные моменты</p>
        <feedbacks/>
        <nuxt-link to="/catalog" class="btn centred">Перейти в магазин</nuxt-link>
      </div>
    </section>
    <section class="faq">
      <div class="container">
        <h2 class="section-title big gradient">FAQ</h2>
        <p class="subtitle">Часто задаваемые вопросы про меловую краску</p>
        <div class="faq-body">
          <el-collapse v-model="activeCollapses">
            <el-collapse-item title="Consistency" name="1">
              <div>Consistent with real life: in line with the process and logic of real life, and comply with languages and habits that the users are used to;</div>
              <div>Consistent within interface: all elements should be consistent, such as: design style, icons and texts, position of elements, etc.</div>
            </el-collapse-item>
            <el-collapse-item title="Feedback" name="2">
              <div>Operation feedback: enable the users to clearly perceive their operations by style updates and interactive effects;</div>
              <div>Visual feedback: reflect current state by updating or rearranging elements of the page.</div>
            </el-collapse-item>
            <el-collapse-item title="Efficiency" name="3">
              <div>Simplify the process: keep operating process simple and intuitive;</div>
              <div>Definite and clear: enunciate your intentions clearly so that the users can quickly understand and make decisions;</div>
              <div>Easy to identify: the interface should be straightforward, which helps the users to identify and frees them from memorizing and recalling.</div>
            </el-collapse-item>
            <el-collapse-item title="Controllability" name="4">
              <div>Decision making: giving advices about operations is acceptable, but do not make decisions for the users;</div>
              <div>Controlled consequences: users should be granted the freedom to operate, including canceling, aborting or terminating current operation.</div>
            </el-collapse-item>
          </el-collapse>
        </div>
      </div>
    </section>
    <popular-goods/>
    <el-dialog
      :visible.sync="videoDialog"
      custom-class="video-dialog"
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
  import Feedbacks from "../components/Feedbacks";
  import PopularGoods from "../components/PopularGoods";
  export default {
    components: {
      PopularGoods,
      Feedbacks
    },
    head: {
      title: `Holiday Paint | Главная`
    },
    data: () => ({
      videoDialog: false,
      videoUrl: null,
      activeCollapses: ['1'],
    }),
    methods: {
      openVideo(link) {
        this.videoUrl = 'https://www.youtube.com/embed/' + link.split('/').pop()
        this.videoDialog = true
      }
    },
    mounted() {
      const aboutScene = this.$refs.aboutParallax;
      const smokeParallaxInstance = new Parallax(aboutScene);
    },
  }
</script>

<style lang="scss" scoped>
  @import "../assets/sass/variables";
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
      background-image: url('../assets/img/landings/markers/main-bg.png');
      background-position: right top;
      background-repeat: no-repeat;
      background-size: 55%;
      z-index: -1;
      @media (max-width: 1440px) {
        right: -10%;
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

    &-second {
      position: relative;
      padding: 15em 0;
      background-image: url('../assets/img/landings/markers/about-second__bg.png');
      background-position: left center;
      background-repeat: no-repeat;
      background-size: auto 100%;
      @media (max-width: 1600px) {
        background-size: 50% auto;
      }
      @media (max-width: 768px) {
        background-image: none;
        padding: 8em 0 4em;
        .container {
          flex-direction: column;
        }
      }
      &__parallax {
        z-index: -1;
        position: absolute;
        right: 0;
        top: 0;
        width: 55%;
        height: 100%;
        @media (max-width: 768px) {
          width: 100%;
        }
        @media (max-width: 600px) {
          display: none;
        }
        &-item {
          position: absolute!important;
          left: auto!important;
          top: auto!important;
          &:nth-child(1) { //A
            right: 0!important;
            top: 20%!important;
          }
          &:nth-child(2) { //M
            right: 0%!important;
            bottom: 10%!important;
          }
          &:nth-child(3) { //C
            right: 50%!important;
            top: 20%!important;
          }
          &:nth-child(4) { //R
            right: 60%!important;
            top: 40%!important;
          }
          &:nth-child(5) { //N
            right: 100%!important;
            bottom: 10%!important;
          }
          &:nth-child(6) { //B
            right: 100%!important;
            top: 20%!important;
          }
        }
      }
      .video-btn {
        margin-right: auto;
        margin-left: 0;
        @media (min-width: 769px) {
          &--label-1 {
            display: none;
          }
        }
        @media (max-width: 768px) {
          order: 1;
          margin-top: 2em;
          margin-left: auto;
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

  /* FEATURES */

  .features {
    padding: 5em 0;
    .section-title {
      margin-bottom: .5em;
    }
    &-left {
      width: 50%;
      text-align: center;
      @media (max-width: 767px) {
        width: 100%;
        margin-bottom: 2em;
      }
    }
    &-body {
      flex-wrap: wrap;
      margin-bottom: 2em;
    }
    &-img {
      width: 25em;
      max-width: 100%;
      margin-left: auto;
      margin-right: auto;
      margin-bottom: 2em;
      img {
        width: 100%;
      }
    }
    &-label {
      font-size: 1.5em;
    }
    &-list {
      width: 50%;
      @media (max-width: 767px) {
        width: 100%;
      }
      &__item {
        display: flex;
        align-items: center;
        font-size: 1.5em;
        height: 3.5em;
        position: relative;
        @media (max-width: 768px) {
          font-size: 1.25em;
        }
      }
      &__img {
        width: 2em;
        height: 2em;
        min-width: 2em;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #fff;
        border-radius: 50%;
        box-shadow: 0 4px 11px rgba(168, 168, 168, 0.21);
        margin-right: 1em;
        img {
          height: .8em;
        }
      }

    }

  }

  /* FEATURES END */

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

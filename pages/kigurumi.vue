<template>
  <section class="landing-wrap">
    <main class="main">
      <div class="container">
        <div class="main-left">
          <h1 class="section-title big gradient">Костюмы кигуруми</h1>
          <h3 class="main-subtitle">Превратите любую <br>вечеринку в сказку</h3>
          <div class="main-buttons">
            <div class="main-btn__wrap">
              <nuxt-link to="/catalog/?category=4" class="btn">Перейти в магазин</nuxt-link>
              <p class="landing__label">от 1490 рублей за штуку</p>
            </div>
          </div>
        </div>
      </div>
    </main>
    <section class="about">
      <div class="container">
        <h2 class="section-title big gradient">Что такое кигуруми?</h2>
        <p class="subtitle">Привлекательные мягкие костюмы для вечеринок</p>
        <p class="about-text">Кигуруми — это костюм, напоминающий комбинезон, стилизованный под мультяшного героя или зверушку.</p>
        <p class="subtitle blue">Для чего подойдет костюм</p>
        <div class="about-using">
          <div class="about-using__item">
            <div class="about-using__img"><img src="../assets/img/icons/photo-camera.svg" alt=""></div>
            <p class="about-using__text">Тематическая фотосессия</p>
          </div>
          <div class="about-using__item">
            <div class="about-using__img"><img src="../assets/img/icons/moon-and-stars.svg" alt=""></div>
            <p class="about-using__text">Пижама для сна</p>
          </div>
          <div class="about-using__item">
            <div class="about-using__img"><img src="../assets/img/icons/stick-figure-on-snowboard.svg" alt=""></div>
            <p class="about-using__text">Катание на сноуборде</p>
          </div>
          <div class="about-using__item">
            <div class="about-using__img"><img src="../assets/img/icons/confetti.svg" alt=""></div>
            <p class="about-using__text">Праздники и вечеринки</p>
          </div>
          <div class="about-using__item">
            <div class="about-using__img"><img src="../assets/img/icons/happy-children.svg" alt=""></div>
            <p class="about-using__text">Детские мероприятия</p>
          </div>
          <div class="about-using__item">
            <div class="about-using__img"><img src="../assets/img/icons/calendar.svg" alt=""></div>
            <p class="about-using__text">Повседневная жизнь</p>
          </div>
        </div>
        <nuxt-link to="/catalog/?category=4" class="btn centred">Перейти в магазин</nuxt-link>
      </div>
    </section>
    <section class="about-second">
      <img src="../assets/img/landings/kigurumi/about-second__right.png" alt="" class="about-second__right-bg">
      <div class="container flex jc-sb">
        <button @click="openVideo($store.state.shop.settings[1].value)" class="about-second__left video-btn">
          <span class="video-btn__body gradient"></span>
          <span class="video-btn--label-1">Смотреть видео</span>
        </button>
        <div class="about-second__right">
          <h2 class="section-title big gradient">Как выглядит кигуруми?</h2>
          <p class="subtitle">Посмотрите видео, как костюм сидит на теле</p>
          <p class="about-second__text">Кигуруми — это костюмы зверей, героев мультфильмов и других персонажей. Цельный наряд, напоминающий комбинезон, покрывающий тело от головы до ног. Капюшоны костюма стилизованы под мультяшного героя или зверюшку.</p>
        </div>
      </div>
    </section>
    <section class="features">
      <div class="container">
        <h2 class="section-title big gradient">Преимущества кигуруми</h2>
        <p class="subtitle">Почему стоит купить кигуруми в магазине HOLIDAY PAINT?</p>
        <div class="features-body flex jc-sb">
          <div class="features-left">
            <div class="features-img"><img src="../assets/img/landings/kigurumi/colors.png" alt=""></div>
          </div>
          <ul class="features-list">
            <li class="features-list__item">
              <div class="features-list__img"><img src="../assets/img/icons/wool.svg" alt=""></div>
              <span class="features-list__text">Легкая и мягкая ткань — флис</span>
            </li>
            <li class="features-list__item">
              <div class="features-list__img"><img src="../assets/img/icons/thumbs-up-hand-symbol.svg" alt=""></div>
              <span class="features-list__text">Свободный и комфортный</span>
            </li>
            <li class="features-list__item">
              <div class="features-list__img"><img src="../assets/img/icons/list-with-bullets.svg" alt=""></div>
              <span class="features-list__text">Более 40 видов моделей</span>
            </li>
            <li class="features-list__item">
              <div class="features-list__img"><img src="../assets/img/icons/washing-machine.svg" alt=""></div>
              <span class="features-list__text">Легко стираются</span>
            </li>
            <li class="features-list__item">
              <div class="features-list__img"><img src="../assets/img/icons/boy-face.svg" alt=""></div>
              <span class="features-list__text">Размеры для детей от 3 лет</span>
            </li>
          </ul>
        </div>
        <nuxt-link to="/catalog/?category=4" class="btn centred">Перейти в магазин</nuxt-link>
      </div>
    </section>
    <section class="feedback">
      <div class="container">
        <h2 class="section-title big gradient">Фото с кигуруми</h2>
        <p class="subtitle">Мы запечатлели самые яркие жизненные моменты</p>
        <feedbacks/>
        <nuxt-link to="/catalog/?category=4" class="btn centred">Перейти в магазин</nuxt-link>
      </div>
    </section>
    <section class="faq">
      <div class="container">
        <h2 class="section-title big gradient">FAQ</h2>
        <p class="subtitle">Часто задаваемые вопросы про кигуруми</p>
        <div class="faq-body">
          <el-collapse v-model="activeCollapses">
            <el-collapse-item title="Как стирать костюм?" name="1">
              <div>Костюм стирается в стиральной машинке на деликатном режиме или ручной стирке. Наши костюмы не линяют после стирки.</div>
            </el-collapse-item>
            <el-collapse-item title="Не сядит ли костюм после стирки?" name="2">
              <div>При соблюдении температурного режима костюм не изменится в размере так как изготовлен из качественного материала.</div>
            </el-collapse-item>
            <el-collapse-item title="Какой кигуруми лучше?" name="3">
              <div>Это довольно сложный вопрос. Ведь все мы разные и всем нравится что-то свое – одному нравится милый тигруля, а другому – волшебный единорог. На наш взгляд, лучше тот кигуруми, который заставляет улыбаться вас и тех, кто вас в нем видит.</div>
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
      right: 0;
      top: -14em;
      position: absolute;
      background-image: url('../assets/img/landings/kigurumi/main-bg.png');
      background-position: right top;
      background-repeat: no-repeat;
      background-size: auto 100%;
      z-index: -1;
      @media (max-width: 1440px) {
        right: -15%;
      }
      @media (max-width: 1024px) {
        top: -6em;
        background-size: auto 85%;
        right: -15%;
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
    &-bg {
      width: 15%;
      top: 0;
      position: absolute;
      left: 0%;
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
      padding: 15em 0;
      background-image: url('../assets/img/landings/kigurumi/about-second__bg.png');
      background-position: left center;
      background-repeat: no-repeat;
      background-size: auto 100%;
      position: relative;
      &__right-bg {
        position: absolute;
        right: 0;
        top: 50%;
        transform: translateY(-50%);
        width: 18%;
        z-index: -1;
      }
      @media (max-width: 1600px) {
        background-size: 45% auto;
        &__right-bg {
          width: 15%;
        }
      }
      @media (max-width: 768px) {
        background-image: none;
        padding: 8em 0 4em;
        &__right-bg {
          display: none;
        }
        .container {
          flex-direction: column;
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

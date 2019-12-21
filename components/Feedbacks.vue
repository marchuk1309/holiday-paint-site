<template>
  <div class="feedback-slider">
    <el-carousel :autoplay="false" :loop="false" arrow="always" :trigger="'click'" :type="sliderType" height="30em">
      <el-carousel-item v-for="item in 6" :key="item">
        <img src="../assets/img/landings/paint/feedback-1.jpg" alt="">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
  export default {
    name: "Feedbacks",
    data: () => ({
      sliderType: 'card'
    }),
    methods: {
      onResize() {
        this.sliderType = document.body.clientWidth > 767 ? 'card' : '';
      }
    },
    mounted() {
      window.addEventListener('resize', this.onResize);
      this.onResize();
    },
  }
</script>

<style lang="scss">
  @import "../assets/sass/variables";
  .feedback-slider .el-carousel__arrow {
    background-color: rgba($primaryColor, .50);
    &:hover {
      background-color: rgba($primaryColor, 1);
    }
  }
  .feedback-slider .el-carousel__item {
    mask-image: url("../assets/img/landings/feedback-mask.png");
    mask-repeat: no-repeat;
    mask-position: center;
    mask-size: contain;
    background-color: #99a9bf;
    .el-carousel__mask {
      background-color: $primaryColor;
      opacity: .5;
    }
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
</style>

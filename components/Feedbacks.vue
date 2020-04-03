<template>
  <div class="feedback-slider">
    <el-carousel :autoplay="false" :loop="false" arrow="always" :trigger="'click'" :type="sliderType" height="30em">
      <el-carousel-item v-for="(item,index) in imageArr" :key="index">
        <img :src="item.url" alt="">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>

  export default {
    name: "Feedbacks",
    data: () => ({
      sliderType: 'card',
      imageArr: [[]]
    }),
    computed: {
      id() {
        let item = this.$store.state.shop.pages.find(item => item.data.url == this.$route.params.id)
        if (this.$route.name != 'index') return item.id
        else return 0
      }
    },
    methods: {
      onResize() {
        this.sliderType = document.body.clientWidth > 767 ? 'card' : '';
      },
    },
    watch: {
    },
    created() {
      let index = this.$store.state.shop.content.findIndex(item => item.id == this.id)
        this.imageArr = []
        for (let name of this.$store.state.shop.content[index].images['gallery']) {
          this.imageArr.push({url: this.$store.state.shop.apiServer + '/storage/content/' + this.id +'-'+ 'gallery' +'-'+ name})
        }
      this.$forceUpdate()
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

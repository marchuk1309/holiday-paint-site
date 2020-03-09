<template>
  <div class="feedback-slider">
    <el-carousel :autoplay="false" :loop="false" arrow="always" :trigger="'click'" :type="sliderType" height="30em">
      <el-carousel-item v-for="(item,index) in imageArr[number]" :key="index">
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
      photos() {return [
          'http://hpapi.fobesko.com/public/storage/content/0.png',
          'http://hpapi.fobesko.com/public/storage/content/0.png',
          'http://hpapi.fobesko.com/public/storage/content/0.png',
          'http://hpapi.fobesko.com/public/storage/content/0.png',
          'http://hpapi.fobesko.com/public/storage/content/0.png'
      ]},
      number() {
        if (this.$route.name == 'paint') return 1
        if (this.$route.name == 'colored-smoke') return 3
        if (this.$route.name == 'holy-paint') return 4
        if (this.$route.name == 'kigurumi') return 5
        if (this.$route.name == 'markers') return 2
        else return 0
      }
    },
    methods: {
      onResize() {
        this.sliderType = document.body.clientWidth > 767 ? 'card' : '';
      },
    },
    watch: {
      '$store.state.shop.content'() {
        let arr = []
        for (let x in this.$store.state.shop.content) {
          arr.push([])
          for (let y in this.$store.state.shop.content[x].images) {
            arr[x].push({url: 'http://hpapi.fobesko.com/public/storage/content/' + this.$store.state.shop.content[x].images[y]})
          }
        }
        for (let x in arr) {
          this.imageArr[i] = arr[i]

        }
        this.$forceUpdate()
        console.log(this.$store.state.shop.content)
        console.log(this.imageArr[this.number])
      }
    },
    created() {
      let arr = []
      for (let x in this.$store.state.shop.content) {
        arr.push([])
        for (let y in this.$store.state.shop.content[x].images) {
          arr[x].push({url: 'http://hpapi.fobesko.com/public/storage/content/' + this.$store.state.shop.content[x].images[y]})
        }
      }
      for (let x in arr) {
        this.imageArr[x] = arr[x]

      }
      this.$forceUpdate()
      console.log(this.$store.state.shop.content)
      console.log(this.imageArr[this.number])
    },
    mounted() {
      window.addEventListener('resize', this.onResize);
      this.onResize();
      //if (this.$route.name == "colored-smoke")
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

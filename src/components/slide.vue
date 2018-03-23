<template>
  <div class="sliders-group">
    <div class="sliders-group">
   <div class="swiper-container">
  <div class="swiper-wrapper">
    <div class="swiper-slide" v-for="item in slides">
      <img :src="item.src">
    </div>
  </div>
</div>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
import Swiper from 'swiper'
  export default {
    props:{
      slides: {
      type: Array,
      default: []
     }
    },
    data () {
    return {
     
    }
  },
   methods: {

    
   },
  mounted () {
     new Swiper('.swiper-container', {
        autoplay: true,//可选选项，自动滑动

       })
    }
  }
</script>


<style lang="stylus" type="text/stylus" scoped>
@import 'swiper/dist/css/swiper.min.css'
    .sliders-group
          display: block
          width: 100%
          height:100%
          overflow: hidden
          
        img
          width: 100%
          height:100%
          border:1px solid #e7bc77

</style>

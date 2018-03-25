<template>
<div class="sliders-group">
   <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="item in slides">
        <img :src="item.src">
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
     loop: true,
     autoplay: true,
     speed: 800,
     autoplay: {
        disableOnInteraction: false
    }

       })
    }
  }
</script>


<style lang="stylus" type="text/stylus" scoped>
@import 'swiper/dist/css/swiper.min.css'
    .sliders-group
        box-shadow: 0px 7px  5px rgba(231,227,227,1)
    .swiper-container
       height:1.8rem
       width: 100%
       overflow: hidden 
      img
          width: 100%
          height:100%
          border:1px solid #e7bc77

</style>

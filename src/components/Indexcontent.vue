<template>
<div> 
       <div class="part  partA">
          <div class="title">
            <p><span></span>粤健康</p>
          </div>
          <div class="nav">
            <ul class="navUl">
             <li><a href=""><i class="iconfont icon-yuyuedengjilei"></i><p>我的预约</p></a></li>
             <li><a href=""><i class="iconfont icon-biaoshilei_renlianmingdan"></i><p>我的就诊人</p></a></li>
             <li><a href=""><i class="iconfont icon-yisheng"></i><p>我的医生</p></a></li>
             <li><a href=""><i class="iconfont icon-wodeqiabao0101"></i><p>体检报告</p></a></li>
             <li><a href=""><i class="iconfont icon-yiyuan"></i><p>就趁医院</p></a></li> 
           </ul>
          </div>
          <div class="shadow"></div>
       </div>


        <slider :slides="slides">

       </slider>


   <div class="part partB">
            <div class="title">
              <p><span></span>粤福气</p>
            </div>
            <div class="nav">
              <ul class="navUl">
               <li><a href=""><i class="iconfont icon-icon-test"></i><p>团购汇</p></a></li>
               <li><a href=""><i class="iconfont icon-shangcheng"></i><p>积分商城</p></a></li>
               <li><a href=""><i class="iconfont icon-bhjaward"></i><p>幸运大抽奖</p></a></li>
           </ul>
          </div>
          <div class="shadow"></div>
  </div>

     <div class="part partC">
            <div class="title">
              <p><span></span>粤互动</p>
            </div>
            <div class="nav"> 
              <ul class="navUl">
               <li><a href=""><i class="iconfont icon-kefunv"></i><p>客服小蜜</p></a></li>
               <li><a href=""><i class="iconfont icon-liebiaodaohang_gongyi"></i><p>育牙森林</p></a></li>
               <li><a href=""><i class="iconfont icon-pingjia"></i><p>我的评价</p></a></li>
           </ul>
          </div>
          <div class="shadow"></div>
  </div>
 </div>
</template>


<script type="text/ecmascript-6">
import Slider from "@/components/IndexSlide"
 export default {
  components:{
    Slider
  },
  data(){
    return{
      slides:[
        {
           src: require('../../static/images/slide.jpg')
        },
        {
            src: require('../../static/images/slide2.jpg') 
        }
        
      ]
    }
  }


}
 
</script>


<style lang="stylus" type="text/stylus" scoped>
 
 .part
    width:6.4rem
    clear:both
    color:#666
 .part .title 
       padding:0.25rem 0  0.07rem 0
       border-bottom:1px solid rgba(231,227,227,0.5)
       width:5.8rem
  .part .title span 
    display:inline-block
    width:0.06rem
    height:0.28rem
    min-height:12px
    min-width:4px
    vitical-align:bottom
    font-size:0
    background:#fec65e
    margin-left:0.15rem
    margin-right:0.1rem
  .part p
    font-size:0.28rem
    color:black
  .partA .shadow
    height:0.3rem
  .part .shadow
    clear:both
    width:100%
    height:0.1rem
    background:rgba(231,227,227,0.3)
  .nav
    width:100%
  .navUl ul
     width:85%
     height:100%
     margin:0 auto
     
  .navUl li
     width:25%
     height:100%
     float:left
     text-align:center
     display:flex
  .navUl li a
      margin:auto
      width:100%
      display:block
      padding:0.15rem 0
  
 .partA .navUl li .iconfont
     font-size:0.6rem  
 .partA .navUl li p
     font-size:0.23rem
     color:#333
       
.partA .navUl li:nth-child(1) .iconfont
      color: #f8b547
.partA .navUl li:nth-child(2) .iconfont
      color: #19a9de
.partA .navUl li:nth-child(3) .iconfont
      color:#94cdac
.partA .navUl li:nth-child(4) .iconfont
      color:#8c94d3 
.partA .navUl li:nth-child(5) .iconfont
      color:#18a7e3  
.partB .navUl li .iconfont
     font-size:0.55rem  
.partB .navUl li p
     font-size:0.23rem
     color:#333
.partB .navUl li:nth-child(1) .iconfont
      color: #eeb448
.partB .navUl li:nth-child(2) .iconfont
      color: #e32531
.partB .navUl li:nth-child(3) .iconfont
      color:#e1371e
.partC .navUl li .iconfont
     font-size:0.55rem  
.partC .navUl li p
     font-size:0.23rem
     color:#333
.partC .navUl li:nth-child(1) .iconfont
      color: #db7da1
.partC .navUl li:nth-child(2) .iconfont
      color: #f5514f
.partC .navUl li:nth-child(3) .iconfont
      color:#ef7430

    
</style>

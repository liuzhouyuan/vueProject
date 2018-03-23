<template>
  <div class="wrap">
  <div class="card">
    <div class="topLeft">vip</div>

     <div class="bottom">
       <div class="Avator">
              <img src="../../static/images/touxiang.jpg"> 
      </div>
       <div class="detail">
            <span class="weiname" >我是小兰花</span><span class="class">普通会员</span>
       </div> 
    </div>
  </div>
  <div class="content">
    <div class="title">
           <p><span></span>会员特价 <strong>解除绑定</strong></p>
    </div>
    <div class="nav">
    <ul class="navUl">
             <li><a href="">
                 <div class="img"><img src="../../static/images/git.png"></div>
                 <p>到院有奖</p></a>
             </li>
             <li><a href="">
                 <div class="img"><img src="../../static/images/git.png"></div>
                 <p>积分兑换</p></a>
             </li>       
   </ul>
   </div>

     <div class="title">
          <p><span></span>品牌动态</p>
    </div>
     <div class="aiyaimg">
       <img src="../../static/images/aiya.png">
     </div>
     <div class="tip">
     <h3>920爱牙日，全民关注口腔健康</h3>
     <p>关注口腔健康，正成为越来越多年轻人的生活习惯</p>
       
     </div>
  </div>
<div class="footerWrap">
  <m-footer></m-footer> 
</div>
  </div>

</template>


<script type="text/ecmascript-6">
 import MFooter from '@/components/Indexfooter'
 export default {
  components: {
      MFooter
  
    }

}

</script>


<style lang="stylus" type="text/stylus" scoped>
.card
  margin:20px 10px
  height:2.8rem
  background:#275fad
  border-radius:15px
  position:relative
  overflow:hidden
  
.topLeft
    position:absolute
    top:0.15rem
    right:0.35rem
    color:white
    font-size:0.6rem 

.bottom
  height:1.3rem
  width:100%
  background:rgba(0,0,0,0.1) 
  position:absolute
  bottom:0
.detail
      position:absolute
      bottom:0.35rem
      left:1.8rem

.weiname
        font-size:0.3rem
        display:inline-block
        margin-left:3px
        font-weight:bold
        color:white
.class
            background:#f58220
            display:inline-block
            border:1px solid white
            padding:0 8px
            color:white
            boder-radius:20%
            margin-left:8px
            font-size:0.22rem
            border-radius:3px
.Avator
      width:1rem
      height:1rem
      border-radius:50%
      position:absolute
      bottom:10px
      left:0.5rem
.Avator img
      width:100%
      height:100%
      border-radius:50%
      border:1px solid #acacad

  
.title 
       padding:0.25rem 0  0.07rem 0
       border-bottom:1px solid rgba(231,227,227,0.5)
       width:6rem
       margin:0 auto
       position:relative
       clear:both
.title span 
    display:inline-block
    width:0.06rem
    height:0.35rem
    min-height:12px
    min-width:4px
    vitical-align:bottom
    font-size:0
    background:#fec65e
    margin-left:0.15rem
    margin-right:0.1rem
.title  p
    font-size:0.31rem
    color:black
.title  strong
    float:right
    margin-right:10px
    font-weight:normal
    font-size:0.25rem
    color:#999
    height:0.35rem
    line-height:0.6rem
.titie div
     position:absolute
     right:0
     display:inline-block
     color:red    
.nav
    width:100%
    margin-top:10px
    margin-bottom:10px
    margin-left:0.7rem
 
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
     
     .img
       width:1rem
       height:1rem
       display:inline-block
       img
         width:100%
         height:100%
         border-radius:100%
  .navUl li a
      margin:auto
      width:100%
      display:block
      padding:0.15rem 0
  .navUl li p
     font-size:0.26rem
     color:black
      

.aiyaimg
  width:6.4rem
  box-sizing:border-box
  padding:10px 10px 10px 10px
  height:3rem
  img
    width:100%
    height:100%
.tip
  width:5.5rem
  margin:0 auto
  margin-bottom:10px
  h3
    height:0.5rem
    line-height:0.5rem
    font-size:0.3rem
  p
    font-size:0.25rem
    color:#666
</style>

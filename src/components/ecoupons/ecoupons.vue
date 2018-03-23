
<template>
  <div class="wrap">
  <div class="header">
    <div class="center"><i class="icon iconfont icon-dingwei"></i><span>珠江西苑</span></div>
    <div class="right"><i class="icon iconfont icon-206"></i><i class="icon iconfont icon-pingfen"></i> </div>	
  </div>
  <div class="content">
      <div class="title">
           <p>可用的券 <strong>查看更多可用券<i class="icon iconfont icon-youhua"></i></strong></p>
    </div>

<router-link to="/">
    <div class="part1">
        <div class="left"><div class="img"><img src="../../../static/images/dianzaiquanimg.png"></div></div>
        <div class="center">
          <h3>ESM超声波洁牙</h3>
          <p>有效期:2018:02.26-2019.01.16</p>
          <p>适用于:广东华南口腔</p>
        </div>
        <div class="right"><span>使用</span></div>
    </div>
</router-link>
   <div class="part1">
        <div class="left"><div class="img"><img src="../../../static/images/dianzaiquanimg.png"></div></div>
        <div class="center">
          <h3>ESM超声波洁牙</h3>
          <p>有效期:2018:02.26-2019.01.16</p>
          <p>适用于:广东华南口腔</p>
        </div>
        <div class="right"><span>使用</span></div>
    </div>

     <div class="title">
           <p>团购精选 </p>
    </div>

     <div class="part2">
          <div class="img"><img src="../../../static/images/dianzaiquanimg.png"></div>
        <div class="bottom">
          <div class="left"><div class="img"><img src="../../../static/images/dianzaiquanimg.png"></div></div>
          <div class="center">
            <p>广东华南口腔</p>
            <h3>ESM超声波洁牙</h3>
            <p>超值团购,每人限购一张</p>
          </div>
          <div class="right">
            <div class="wraper">
              <span class="newPrice">￥159.0</span>
              <span class="oldPrice">￥264.0</span>
              <span class="buytBtn">购买</span>
            </div>
          </div>
    </div>
    </div>

   <div class="switch">
       <div class="flexBox">
      <transition name="out">
       <i  class="icon iconfont icon-erweima"></i>
       </transition>
       </div>
     
   </div>


  </div>

  <div class="foot">
    <div class="wrapper">
    <ul>
        <li class="li1"><a href=""><div class="iconstyle"><i class="iconfont icon-iconfonthome0"></i></div><p>首页</p></a></li>
      <li class="li2"><a href=""><div class="iconstyle"><i class="iconfont icon-weibiaoti1"></i></div><p>打电话</p></a></li>
      <li class="btn li3"><a href="">附近门诊</a></li>
      <li class="btn li4"><a href="">电子券</a></li>
    </ul>           
    </div>
</div>  

 
  </div>
</template>


<script type="text/ecmascript-6">
 export default {


}
 
</script>


<style lang="stylus" type="text/stylus" scoped>
.header
  display:flex
  height:1rem
.center
  width:60%
  text-align:right
  align-self:center
  height:0.5rem
  line-height:0.5rem
  span
    font-size:0.3rem
    font-weight:bold
.right
  width:35% 
  align-self:center 
  text-align:right
  margin-right:10px
  .iconfont 
    font-size:0.37rem
    padding-left:0.2rem
  .icon-206
    color:#e32987

  .icon-pingfen
    color:#f9d222
.icon-dingwei
  color:red
  font-size:0.3rem
  padding-right:10px
.title 
       padding:0.25rem 0  0.07rem 0
       width:6rem
       margin:0 auto
.title  p
    font-size:0.3rem
    color:#333
    font-weight:bold
    
.title  strong
    float:right
    margin-right:10px
    font-weight:normal
    font-size:0.25rem
    color:#999
    height:0.35rem
    line-height:0.6rem
.title  strong i
    font-size:0.2rem
.content
  padding:0 10px
.part1
  display:flex
  height:1.5rem 
  border:1px solid rgba(231,227,227,0.8) 
  margin:0.15rem 0
  border-radius:10px
.part1 .left
   width:28%
   align-self:center 
   .img
     width:1.8rem
     height:1.35rem
     padding:8px 0px 8px 8px 
     box-sizing:border-box
     img
       width:100%
       height:100%
   
.part1 .center
   width:52%
   height:1.2rem
   box-sizing:border-box
   padding:10px 5px 10px 15px 
   text-align:left
   h3
     font-size:0.25rem
     text-align:left
     height:0.4rem
     line-height:0.4rem
   p
     font-size:0.21rem
     color:#999
     text-align:left
     white-space:nowrap
     height:0.25rem
     line-height:0.25rem   
.part1 .right
   width:22%
   align-self:center 
   text-align:center
   margin-left:0.1rem
   span
     display:line-block
     padding: 5px 0.18rem
     border-radius:10px;
     border:1px solid rgba(85,105,144,0.9)
     font-size:0.25rem
     color:#556990
   
.part2
  height:3rem
  margin-bottom:0.3rem 
  padding-bottom:10px
  border:1px solid rgba(231,227,227,0.9) 
  border-radius:10px
  .img
    height:2rem
    img
      width:100%
      height:100%
.bottom
  display:flex
  height:1rem 
  border-radius:10px
  margin:0.15rem 0
  
.bottom .left
   width:13%
   align-self:center
   .img
     width:0.7rem
     height:0.7rem
     box-sizing:border-box
     padding-left:3px
     img
       width:100%
       height:100%
       border-radius:100%  
.bottom .center
   width:35%
   text-align:left
   height:1rem
   padding-top:8px
   box-sizing:border-box 
   h3
     font-size:0.23rem
     text-align:left
     height:0.35rem
     line-height:0.35rem
     font-weight:normal
.bottom .center p
     font-size:0.19rem
     color:#999
     text-align:left
     white-space:nowrap
     height:0.2rem
     line-height:0.2rem  
.bottom  .right
   width:52%
   height:1rem
   line-height:1rem
   text-align:left
   align-self:center 
.wraper
      height:1rem
      line-height:1rem
   span
     display:line-block
   .newPrice
     color:#f58220
     font-size:0.38rem 
   .oldPrice
     color:#666
     font-size:0.22rem
     text-decoration:line-through
    .buytBtn
      padding:5px 0.2rem
      background:#f58220
      border-radius:8px
      color:white
      font-size:0.28rem     
.switch
    display:flex
    height:1rem
    text-algin:center
    .flexBox
      align-self:center 
      margin:auto
      width:1rem
      height:1rem
      line-height:1.2rem
      border-radius:50%
      background:linear-gradient(top, #ed1851, #fcb427)  
      text-align:center
      color:white
      .iconfont
        font-size:0.6rem
.foot
  margin-top:1rem
.wrapper
  border-top:1px solid rgba(231,227,227,0.8)
  position:fixed
  bottom:0
  ul
    width:6.4rem
    li
      float:left
      height:45px
      text-align:center
.li1 
  height:45px
  line-height:45px
  width:16%
  background:#f5f5f5      
.li2 
  width:16%
  height:45px
  line-height:45px
  background:#f5f5f5
  
.li1 a,li2 a
  font-size:0.23rem
  color:#333    
.li3 
  boder-right:1px solid #f5f5f5
.li4 
  border-left:1px solid #f5f5f5 
.btn
  width:34%
  height:45px
  line-height:45px
  background:#fab041
  box-sizing:border-box
.btn a
  color:white
  font-size:0.33rem
  foot-weight:bold
.iconstyle 
  height:0.23rem
  line-height:28px
  box-sizing:border-box
  padding-top:0
.icon-iconfonthome0
  font-size:0.4rem
  color:#9c9c9c
.icon-weibiaoti1
  font-size:0.4rem
  color:#4bb4e0     
</style>

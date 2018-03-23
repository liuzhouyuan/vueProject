<template>
  <div class="wrap">
  <h2>我的会员卡</h2>

  <div class="content">
<router-link to="/carDetail"> 
    <div class="card card1">
        <div class="inner">
        <div class="left">
          <img src="../../static/images/touxiang.jpg">
        </div>
         <div class="center"> <p>粤牙网</p></div>
        <div class="right"><p>普通会员</p></div>
       </div>   
   </div> 
</router-link> 

     <div class="card card2">
        <div class="inner">
        <div class="left">
          <img src="../../static/images/touxiang.jpg">
        </div>
         <div class="center"> <p>广东华南口腔医院</p></div>
        <div class="right"><p>普通会员</p></div>
       </div>   
   </div> 

  <div class="card card3">
        <div class="inner">
        <div class="left">
          <img src="../../static/images/touxiang.jpg">
        </div>
         <div class="center"> <p>汇亿康口腔门诊部</p></div>
        <div class="right"><p>普通会员</p></div>
       </div>   
   </div> 




  </div>

    
 </div>
</template>


<script type="text/ecmascript-6">


 export default {

    
}
 
</script>


<style lang="stylus" type="text/stylus" scoped>
.content
  padding:0 15px
h2
  text-align:center
  height:0.8rem
  line-height:0.8rem
  font-size:0.3rem
    
.card
  height:1.5rem
  font-size:0.25rem
  border-radius:10px
  display:flex
  margin-bottom:15px
  
  .inner
     height:1rem
     width:100%
     margin:auto
     align-self:center
     div
       float:left
       height:1rem
    .left
      width:1rem
      padding-left:15px
    .left img
         width:100%
         height:100%
         border-radius:100%
     .center
       width:3rem 
     .center p
       height:3rem
       line-height:1rem
       padding-left:0.15rem
       text-align:left
       font-size:0.3rem
       color:white
     .right p
       height:1rem
       line-height:1rem
       padding:0 10px
       text-align:center
       font-size:0.25rem
       color:white
       
.card1
   background:#008cc4 
.card2
   background:#86965b      
.card3
   background:#f58220      
  
        

</style>

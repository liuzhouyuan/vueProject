<template>
  <div class="wrap">
  <div class="headWrap">

    <div class="header">
      <div class="flexBox">
      <div class="Avator">
         <img src="../../static/images/touxiang.jpg"> 
      </div>
      <div class="detail">
              <div>
                   <i class="icon iconfont icon-huiyuan"></i><span class="weiname" >我是小兰花</span><span class="class">普通会员</span>
              </div>
              <div class="bottom">
                  <i class="icon iconfont icon-yue"></i>余额:0元
              <div class="iconsleft"><i class="icon iconfont icon-jifen"></i>积分:0元</div>
              </div>


      </div>

      </div>
      
    </div>
    <div class="addBtn">
     <div class="inner">
      <i class="icon iconfont icon-022caozuo_jiahao"></i>   
     </div>
      
    </div>

    </div>
  <div class="content">

    <div class="tip">
      <p>向前台出示会员码即可完成挂号或者余额付款，积分兑换</p>
    </div>
    <div class="erweimaWrap">
    <div class="erweima">
      <img src="../../static/images/erweima.jpg">
      <p><i class="icon iconfont icon-206"></i> 23424324343434</p>
    </div>
    </div>
    <div class="Tiaoxingma">
       <div class="tiaoxingma">
        <img src="../../static/images/tiaoxingma.png">
      </div>
    </div>
   <div class="switch">
     <div class="flexBox" @click="toggle()">
     <transition name="in">
     <i v-show="isShow" class="icon iconfont icon-jiantou9"></i>
    </transition>
    <transition name="out">
     <i v-show="!isShow" class="icon iconfont icon-erweima"></i>
     </transition>
     </div>
     
   </div>
 </div>

 <m-footer></m-footer> 
 
   
  </div>
</template>


<script type="text/ecmascript-6">

 import MFooter from '@/components/Indexfooter'
 export default {
  components: {
      MFooter
    },
    data(){
      return{
        isShow:true
      }
    },
    methods:{
        toggle(){
          this.isShow=!this.isShow
        }
    }

}
 
</script>


<style lang="stylus" type="text/stylus" scoped>
 .header
   width:6.4rem
   height:2.8rem
   display:flex
   .flexBox
     margin:auto
     align-self:center
    .Avator
      width:1rem
      height:1rem
      border-radius:50%
      margin:0 auto
    .Avator img
      width:100%
      height:100%
      border-radius:50%
      border:1px solid #acacad
    .detail
      font-size:0.2rem
      margin:15px 0
      .icon-yue
        font-size:0.28rem
        color:#e42b83
        margin-right:3px
      .icon-huiyuan
        color:#da5e96
        font-size:0.35rem
      .icon-jifen
        font-size:0.28rem
        color:#f16f4e
        margin-right:3px
      .weiname
        font-size:0.27rem
        display:inline-block
        margin-left:3px
        font-weight:bold
        color:#333
      .bottom
        font-size:0.25rem 
        color:#333 
        margin-top:5px
        .iconsleft
          display:inline-block
          padding-left:15px
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
.headWrap
   position:relative
   width:6.4rem
   height:2.8rem
   background:#fec65e
   .addBtn
     position:absolute
     bottom:-0.4rem
     left:0
     right:0
     margin:auto
     background:red
     display:inline-block
     width:0.8rem
     height:0.8rem
     border-radius:50%
     background:#ffffff
     border:2px solid #e8e9ea
     .inner
       position:absolute
       width:0.6rem
       height:0.6rem
       line-height:0.65rem
       border-radius:50%
       background:#e8e9ea
       bottom:0
       left:0
       right:0
       top:0
       margin:auto
       text-align:center
       .icon-022caozuo_jiahao
         color:#c2c3c6
         font-size:0.35rem
.content
  width:6.4rem  
  height:3rem     
 .tip 
   margin-top:0.4rem
   p
     text-align:center
     height:1rem
     line-height:1rem
     color:#c2c3c6
     font-size:0.23rem
  .erweimaWrap
   height:3rem
   display:block
  .erweima 
     margin:auto
     width:3rem
     height:3rem
     p
       text-align:center
       font-size:0.22rem
     img
       width:100%
       height:100%
       margin:auto
    .icon-206
      color:red
      font-size:0.25rem
      padding-right:10px
    .tiaoxingma 
       clear:both
       margin:auto
       width:4rem
       height:1rem
       img
         width:100%
         height:100%
         margin:auto
  .Tiaoxingma
    margin-top:1rem
  .switch
    display:flex
    height:3rem
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
    .in-enter-active,.in-leave-active
       transition:opacity .5s
    
    .in-enter, .in-leave-to
      opacity:0
    .out-enter-active,out-leave-active
       transition:opacity .5
    .out-enter,.out-leave-to
       opacity:0 
         
      
</style>

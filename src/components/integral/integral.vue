<template>
  <div class="wrap">

   <div class="header">
         <div class="p_infos">
              <!-- 头像 -->
               <div>
                   <router-link  to="/PersonDate">
                       <div class="Avator">
                         <img src="../../../static/images/touxiang.jpg">
                       </div>
                   </router-link>
               </div>
             <!-- 个人信息 -->
              <div>
                    <div class="flexBox">
                     <div class="detail">
                      <div>
                        <i class="icon iconfont icon-huiyuan"></i><span class="weiname" >{{m.nickname}} </span>
                      </div>
                      <div class="bottom">
                         <i class="icon iconfont icon-yue"></i>余额:{{m.balance}}元
                         <div class="nlian iconleft"><i class="icon iconfont icon-jifen"></i>积分: {{m.integral}}</div>
                     </div>
                     </div>
                   </div>
               </div>
         </div>

         <!-- nav区域 -->
    <div class="hradius">
    </div>
     <div class="nav">
           <ul>
             <li><a href=""><span>1000</span></i><p>积分</p></a></li>
             <li><a href=""><span>6000</span></i><p>已消费积分</p></a></li>
             <li><a href=""><i class="icon iconfont icon-shangcheng"></i><p>积分消费商城</p></a></li>  
           </ul>
    </div>
   </div>
   <div class="tabnav">

      <ul class="tabitem">
        <li @click="currentTabIndex=index" :class="{tabActive:currentTabIndex==index}"  v-for="(tabCon,index) in tabItem" >{{tabCon.tabCon}}</li>
     </ul>  
   </div>
  <div class="tabContent">
          <transition  enter-active-class="animated bounceInLeft" leave-active-class="animated bounceInRight">
            <div v-show="0==currentTabIndex" class="navCont1">
                        <P class="clearfix">ghfghfghfg目前仅支持兑换天河城百货购物小屋，请上传清晰的照片</P>
                        <div class="bottom">
                          <div class="left">
                          <div class="dotted">
                      
                            </div>
                            </div>

           

                          <div class="right">
                          djfdk 
                            
                          </div>
                       </div>
              </div>
         </transition>
         <transition  enter-active-class="animated bounceInLeft" leave-active-class="animated bounceInRight">
              <div v-show="1==currentTabIndex" class="navCont2">
                        <P class="clearfix">hah目前仅支持兑换天河城百货购物小屋，请上传清晰的照片</P>
                        <div class="bottom">
                          <div class="left">
                          <div class="dotted">
                      
                            </div>
                            </div>

           

                          <div class="right">
                          djfdk 
                            
                          </div>
                       </div>
              </div>

          </transition>
</div>


</div>
   
</template>


<script type="text/ecmascript-6">
import {addClass} from '../../../static/js/dom.js'
 export default {
   data(){
    return{
      tabItem:[
          {tabCon:"票据兑积分"},
          {tabCon:"口令兑积分"}
      ],
     currentTabIndex:0,
     m:[],
    }
  },
  methods:{
      

  },
  created(){
    this.$http.get('http://yueya.aghorn.top/api/Information/index').then(function(res){
      this.m = res.body.data
      console.log(this.m)
    })

}

}
 
</script>


<style lang="stylus" type="text/stylus" scoped>
  /*导航一*/
  .tabnav
    width:6.4rem
    height:0.55rem
    border-bottom:1px solid rgba(231,227,227,0.5)  
    ul
      width 90%
      margin:auto
      margin:0
      padding:0
      li
          float:left
          width:35%
          text-align:center
          font-size:0.25rem
          height:0.55rem
          line-height:0.65rem
      .tabActive
        color:red
  .tabContent,.tabContent1,.tabContent2
      height:0.5rem
  .tabContent
        
        overflow:hidden
        border:1px solid red
 /* 头部 */
.header
  background:#fec65e
  height:3rem
  border-bottom-radius:20%
  position:relative
  overflow:hidden
  box-shadow: 0px 5px  14px rgba(231,227,227,0.5) 
.p_infos
   height:1.5rem
   display:flex
.p_infos > div
   height:1.5rem
.Avator
  display: flex
  height:100%
.Avator > img
  margin: auto;
  width:1rem
  height:1rem
  border-radius:50%
  border-buttom:2px solid #bebbb7
.p_infos > div:nth-child(1)
    width:20%
.p_infos > div:nth-child(2)
    width:60%
.p_infos > div:nth-child(3)
    width:20%
.flexBox
   display: flex
   height:100% 
   font-size:0.2rem   
 .icon-huiyuan
  color:#da5e96
  font-size:0.35rem
.weiname
  font-size:0.27rem
  display:inline-block
  margin-left:3px
  font-weight:bold
  color:#333
.bottom
  font-size:0.25rem 
  color:#333 
.icon-yue
  font-size:0.28rem
  color:#e42b83
  margin-right:3px
.icon-jifen
  font-size:0.28rem
  color:#f16f4e
  margin-right:3px
.detail
  margin:auto 0
  padding-left:4px
.detail .bottom
  color:#555
.iconleft
   padding:0.1rem

/* 二维码*/
  
/* nav区域*/
.hradius
   height:50%
   width:120%
   background:white
   position:absolute
   bottom:0
   left:-0.4rem
   
   border-top-left-radius:100%;
   border-top-right-radius:100%;
.nav
     height:50%
     width:100%
     position:absolute
     bottom:0
     left:0
.nav ul
   width:90%
   height:100%
   margin:0 auto
   
.nav li
   width:33%
   height:100%
   float:left
   text-align:center
   display:flex
.nav li a
    margin:auto
    width:100%
    display:block
.nav li span
   color:#f58323
   font-size:0.4rem     
.nav li p
   font-size:0.23rem
   color:#333
   height:0.4rem
   line-height:0.4rem
  .icon-shangcheng
    color:#e72428
    font-size:0.45rem
.navCont .bottom
 display:flex
 height:1.5rem
 width:6.4rem
.navCont .bottom >div
   align-self:center
   text-align:center 
.left
   width:45%
.right
   width:55%
   border:1px solid red
   
</style>

<style lang="stylus" type="text/stylus">

 


</style>
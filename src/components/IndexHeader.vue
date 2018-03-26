<template>
  <div class="wrap">
   <div class="header">  
         <div class="p_infos">
              <!-- 头像 -->
               <div>
                   <router-link  to="/PersonDate">
                       <div class="Avator">
                         <img :src="this.GLOBAL.BASE_URL+personDate.headimgurl"> 
                       </div>
                   </router-link>
               </div>
             <!-- 个人信息 -->
              <div>
                    <div class="flexBox">
                     <div class="detail">
                      <div>
                        <i class="icon iconfont icon-huiyuan"></i><span class="weiname" >{{personDate.nickname}} </span>
                      </div>
                      <div class="bottom">
                         <i class="icon iconfont icon-yue"></i>余额:{{personDate.balance}}元
                         <div class="nlian iconleft"><i class="icon iconfont icon-jifen"></i>积分: {{personDate.integral}}</div>
                     </div>
                     </div>
                   </div>
               </div>

               <!-- 二维码 -->

               <div>
                   <div class="flexBox">
                      <div class="erweima">
                       <router-link  to="/Erweima">
                        <div class="textC"><i class="icon iconfont icon-erweima"></i></div>
                        <div class="title">会员码</div>
                        </router-link>
                      </div> 
                   </div>

               </div>
         </div>

         <!-- nav区域 -->
        <div class="hradius">
         </div>
         <div class="nav">

           <ul>
             <li><router-link  to="/integral"><i class="iconfont icon-tubiao309"></i><p>兑积分</p></router-link></li>
             <li><router-link  to="/deposit"><i class="iconfont icon-chongzhi"></i><p>充值</p></router-link></li>
             <li><a href=""><i class="iconfont icon-qianbao"></i><p>钱包</p></a></li>
             <li><router-link tag="a"  to="/ecoupons"><i class="iconfont icon-wodeqiabao0101"></i><p>电子券</p></router-link></li>
             <li><router-link tag="a"  to="/card"><i class="iconfont icon-206"></i><p>卡包</p></router-link></li>
           </ul>
         </div>
   </div>


  </div>
   
</template>


<script type="text/ecmascript-6">
import { Toast } from 'mint-ui'
 export default {
   data(){
    return{
     personDate:[],
    }
  },
  created(){
    this.$http.get('http://yueya.aghorn.top/api/Information/index').then(function(res){
      if(!res.body.errorCode){
        this.personDate=res.body.data
      }else{
        Toast('数据请求错误')
      }

    })

},

}
 
</script>


<style lang="stylus" type="text/stylus" scoped>

 /* 头部 */
 .header
    background:#fec65e
    height:3rem
    border-bottom-radius:20%
    position:relative
    overflow:hidden
    box-shadow: 0px 5px  14px rgba(231,227,227,0.5) 
 .header .p_infos
     height:1.5rem
     display:flex
  .header .p_infos > div
     height:1.5rem
 .header .Avator
    display: flex
    height:100%
    
  .header .Avator > img
    margin: auto;
    width:1rem
    height:1rem
    border-radius:50%
    border-buttom:2px solid #bebbb7
  .header  .p_infos > div:nth-child(1)
      width:25%
  .header .p_infos > div:nth-child(2)
      width:55%
  .header .p_infos > div:nth-child(3)
      width:20%
  .header .flexBox
     display: flex
     height:100% 
     font-size:0.2rem   
  .header .icon-huiyuan
    color:#da5e96
    font-size:0.35rem
  .header .weiname
    font-size:0.27rem
    display:inline-block
    margin-left:3px
    font-weight:bold
    color:#333
  .header .bottom
    font-size:0.25rem 
    color:#333 
  .header .icon-yue
    font-size:0.28rem
    color:#e42b83
    margin-right:3px
  .header .icon-jifen
    font-size:0.28rem
    color:#f16f4e
    margin-right:3px
  .header .icon-erweima
    font-size:0.6rem
    color:#333
  .header .detail
    margin:auto 0
    padding-left:4px
 .header .detail .bottom
    color:#555
  .header .iconleft
     padding:0.1rem
  .header .erweima
    margin:auto 0
  .header .erweima .title 
    text-align:center
    color:#333
    font-size:0.23rem
    
    
  /* 二维码*/
    
  /* nav区域*/
 .header .hradius
     height:50%
     width:120%
     background:white
     position:absolute
     bottom:0
     left:-0.4rem
     
     border-top-left-radius:100%;
     border-top-right-radius:100%;
 .header  .nav
       height:50%
       width:100%
       position:absolute
       bottom:0
       left:0
 .header  .nav ul
     width:90%
     height:100%
     margin:0 auto
     
 .header  .nav li
     width:20%
     height:100%
     float:left
     text-align:center
     display:flex
  .header .nav li a
      margin:auto
      width:100%
      display:block
  
.header .nav li .iconfont
     font-size:0.58rem
     transition: all 2s easeout
 .header  .nav li .iconfont:hover
     font-size:0.52rem     
 .header  .nav li p
     font-size:0.23rem
     color:#333
 
 .header .nav li:nth-child(1) .iconfont
      color:#f8b547
 .header .nav li:nth-child(2) .iconfont
      color:#ec3d2b
 .header .nav li:nth-child(3) .iconfont
      color:#ec3d2b
 .header .nav li:nth-child(4) .iconfont
      color:#ea84a0 
 .header  .nav li:nth-child(5) .iconfont
      color:#e32485 
    
</style>

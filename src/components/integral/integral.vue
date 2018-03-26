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

  <div class="content">
   <div class="tabnav">

      <ul class="tabitem">
        <li @click="currentTop_tab=index"  v-for="(Item,index) in Top_tab" ><a :class="{tabActive: currentTop_tab==index}" >{{Item.tabItem}}</a></li>
     </ul>

   </div>

  <div class="Top_tabCon">

          <div v-show="0== currentTop_tab" class="navCont navCont1 animated">

                        <p>目前仅支持兑换天河城百货购物小屋，请上传清晰的照片</p>
                        <div v-if="imgArr.length>0" class="imgShow">
                        <ul>
                          <li v-for="(item,index) in imgArr" ><img :src="item"><i @click="delImg($event,index)"  class="icon iconfont  icon-shanchu animated"></i></li>
                         
                      
                        </ul>
                        </div>
                        <div class="bottom_part">
                          <div class="left">
                            <div class="dotted">
                               <input  id="file"  type="file" class="input_File"  accept="image/*"  @change="getfile($event)">
                                <div class="addIcon"><i class="icon iconfont  icon-022caozuo_jiahao"></i></div>
                                <div class="tip"><span>添加兑换票据</span></div>
                            </div>
                          </div>
                          <div class="right">
                             <mt-button type="primary" size="large">兑积分</mt-button>

                          </div>
                       </div>
          </div>


          <div v-show="1== currentTop_tab" class="navCont2" >
               <input v-model="watchword" type="text" placeholder="请输入积分兑换券上的兑换口令" >
               <div class="watchWord_Btn">
                   <mt-button type="primary" size="large">兑积分</mt-button>
               </div>    
          </div>  
</div>

  <div class="tabnav">
        <ul class="tabitem">
          <li @click="currentBottom_tab=index"   v-for="(Item,index) in Bottom_tab" ><a :class="{tabActive:currentBottom_tab==index}" >{{Item.tabItem}}</a></li>
       </ul>
  </div>

<div class="Bottom_tabCon">
  <ul class="history_list">
     <li v-for="(item,index) in record"  v-if="index <= limit_num">
       <span>{{item.convert_time}}</span>
       <span>兑换积分{{item.score}}</span>
       <span  :class="{redfont:item.status=='审核中', yellowfont:item.status=='成功'}">{{item.status}}</span>
     </li>
    
  </ul>
    <p v-show="limit_num!==record.length">
        查看更多消费记录
      <i @click="limit_num=record.length" class="icon iconfont  icon-jiantou9"></i>
    </p>

   <p v-show="limit_num==record.length">
      折叠消费记录
     
    <i  @click="limit_num=fixed_limit_num" class="icon iconfont  icon-xiangshang_jiantou"></i>
   </p> 

</div>




</div>

</div>


                  

</div>
   
</template>

<script type="text/ecmascript-6">
import {addClass} from '../../../static/js/dom.js'

import { Toast } from 'mint-ui'
 export default {
   data(){
    return{
    Top_tab:[
          {tabItem:"票据兑积分"},
          {tabItem:"口令兑积分"}
      ],
    Bottom_tab:[
          {tabItem:"兑换记录"},
          {tabItem:"消费记录"}
    ],
    currentTop_tab:0,
    currentBottom_tab:0,
    personDate:[],
    imgArr:[],
    imgNumLimit:4,
    fileDate:[],
    watchword:"",
    limit_num:2,
    fixed_limit_num:2,

    record:[]
    }
  },
  mounted(){
    console.log(this.imgArr),
    console.log(this.fileDate)
  },
  components: {

   },
  methods:{
    delImg(e,index){
      this.imgArr.splice(index,1)
     

    },

      getfile(event){
      //let file=event.target.files[0]
      let fileList = event.target.files;
      let imgNum = fileList.length;
      let _this= this
      if(imgNum>this.imgNumLimit){
         Toast('一次最多上传'+this.imgNumLimit+'张图片！')
         event.target.value=""
         return
       }



      for(let i=0;i<imgNum;i++){
        let fileName=fileList[i].name
        let suffix=fileName.substring(fileName.lastIndexOf(".")+1).toLowerCase()
        if(suffix !="jpg" && suffix !="jpeg" && suffix !="png" && suffix !="git" && suffix !="bmp" && suffix !="pdf"){
          Toast('请选择图片格式为jpg,png,git.pdf,bmp的上传')
          event.target.value=""
         return
        }else{
          let fileSize=fileList[i].size
          let limitSize=fileSize/1024/1024
         if(limitSize>2){
              Toast('上传图片不能超过2M')
              event.target.value=""
              return
         } else{
              _this.fileDate.push(fileList[i])
            /*   console.log(fileList[i])
                alert(fileList[i].name)*/
              let reader = new FileReader();
              reader.readAsDataURL(fileList[i]);
              reader.onload = function() {
               let image = new Image()
               image.src=reader.result
               image.onload=function(){
                _this.imgArr.push(reader.result)
               } 
            }
        }

    }
  }
},
        getfile1(event){
        let reader = new FileReader()
        reader.readAsDataURL(event.target.files[0])

       }

  },
  created(){

   this.$http.get('http://yueya.aghorn.top/api/Information/index').then(function(res){
      if(!res.body.errorCode){
        this.personDate=res.body.data
      }else{
        Toast('数据请求错误')
      }

    });
   this.$http.get('http://yueya.aghorn.top/api/Convert/convert_record').then(function(res){
      if(!res.body.errorCode){
        this.record=res.body.data

      }else{
        Toast('数据请求错误')
      }

    });

},

}
 
</script>


<style lang="stylus" type="text/stylus" scoped>

  /*底部部分*/
.Bottom_tabCon 
  margin:10px 0   
  .history_list
     width:85%
     margin:auto
     margin-top:0.1rem
     li
       height:0.65rem
       border-bottom:1px dashed #999
       display:inline-block
       width:100%
       letter-spacing:-8px
       position:relative
       span
         position:absolute
         bottom:0
         font-size:0.25rem
         letter-spacing: normal
         color:#999
     li > span:nth-child(1)
       left:0
     li > span:nth-child(2)
       left:35%
     li > span:nth-child(3)
       right:0
    p
     text-align:center
     height:0.7rem
     line-height:0.7rem
     color:#666
     font-size:0.28rem
     .iconfont 
       padding:0 0.15rem
    .redfont
      color:#EE1C22!important
    .yellowfont
      color:#F58222!important
    
  

  /*中部导航一*/
.Top_tabCon
  padding-bottom:1rem
  box-shadow: 0px 5px  14px rgba(231,227,227,0.5) 
.tabnav
    width:6.4rem
    height:0.85rem
    border-bottom:1px solid rgba(231,227,227,0.5)  
    ul
      width:90%
      margin:auto
      letter-spacing: -8px
      li
          width:35%
          letter-spacing: normal
          text-align:center
          font-size:0.28rem
          display:inline-block
          height:0.8rem
          a
            padding-top:0.28rem
            display:inline-block
            height:0.85rem
            box-sizing:border-box
            transition:border-bottom 0.3s linear
      .tabActive
        color:#0095D9
        border-bottom:0.08rem solid #0095D9
 .navCont1
    p
      color:#B7B8BB
      height:1rem
      line-height:1rem
      font-size:0.24rem
      text-indent:0.2rem
    .imgShow
       ul
          width:90%
          margin:auto
          letter-spacing: -8px
          li
            width:33%
            text-align:center
            font-size:0.28rem
            padding: 0 0.05rem
            box-sizing:border-box
            display:inline-block
            letter-spacing: normal
            margin-bottom:10px
            position:relative
            i
              position:absolute
              bottom:0
              right:0
              padding:0.1rem 0.05rem 0 0.2rem
              display:inline-block
              box-sizing:border-box
            .icon-shanchu
                color:#E0E2E7
                font-size:0.23rem
         
            img
              max-width:100%
              height:auto
              font-size:0
              display:block
   .navCont2
     width:6.4rem
     input
       width:90%
       margin:0.4rem auto
       display:block
       height:1rem
       border:1px solid rgba(231,227,227,0.6) 
       text-indent 0.25rem
       border-radius:0.1rem
     input:focus
       outline:none
       box-shadow: 0px 3px  4px rgba(231,227,227,0.6)
    ::-webkit-input-placeholder
       color:#999
       font-sie:0.25rem
     .watchWord_Btn
       margin:auto
       width:60%
   
   .navCont  .bottom_part
     display:flex
     height:1.6rem
     width:6.4rem
    .navCont .bottom_part >div
       align-self:center
       text-align:center
        
    .left
       width:40%
       .dotted 
         width:1.3rem
         height:1.3rem
         border:1px dashed #B0B1B5
         margin:auto
         position:relative
            
        .input_File
            color:red
            width:0.7rem
            height:0.7rem
            background:red
            position: absolute
            box-sizing:content-box
            opacity:0
            z-index:10
            top:0
            left:0
            right:0
            bottom:0
            margin:auto
        .addIcon
            width:0.7rem
            height:0.7rem
            position: absolute
            top:0
            left:0
            right:0
            bottom:0
            margin:auto
            line-height:0.7rem
            height:0.7rem
            text-align:center
        .icon-022caozuo_jiahao
          font-size:0.6rem
          color:#BCBDC0
         .tip
           color:#999
           position: absolute
           bottom:0
           span
              text-align:center
              display:block
              font-size:0.2rem
              width:1.3rem
              text-overflow:clip
              word-wrap:nowrap
              overflow:hidden
              word-break:keep-all
     
             
    .right
       width:60%



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
    padding-left:0.45rem
.p_infos > div:nth-child(2)
    width:70%
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
   font-size:0.25rem
   color:#333
   height:0.5rem
   line-height:0.5rem
  .icon-shangcheng
    color:#e72428
    font-size:0.45rem

@media only screen and (max-width:360px)
      .navCont  .icon-022caozuo_jiahao
          font-size:0.6rem
      .navCont  .tip
           font-size:12px

   
</style>

<style lang="stylus" type="text/stylus">
.mint-toast 
    background: rgba(62, 172, 216, 0.5)
.watchWord_Btn .mint-button--primary
  margin:auto
.mint-button--primary 
    color: #fff
    background-color: #C8C9CB
    box-shadow: 0px 6px  9px rgba(231,227,227,0.9) 
    display: block
    width: 75%
    height:0.85rem
    margin-left:0.18rem   
.mint-button::after 
    background-color:#E0E2E7

</style>
<style type="text/css">


</style>
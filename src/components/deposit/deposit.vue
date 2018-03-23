<template>
 <div class="wrap">
 <div class="header">

   <div v-if="showtip" class="tip flex">
       <div class="left"><span class="ring"><i class="icon iconfont icon-xiaolaba"></i></span>账户余额不支持提现,仅限在粤牙网及合作机构使用</div>
       <div class="right" @click="showtip=!showtip">
         <span class="close">x</span>
       </div>
   </div>
   <div class="title flex">
     <div>账户余额(元)</div>
     <div>充值明细</div>
   </div> 
   <p class="sum">200:00</p>
   </div>
  <div class="content">

     <div class="payWay">
     <p><span>充值方式</span><span>微信支付</span></p>
  
     <p @click="isShow=!isShow">{{payway}}</p>
     <li v-show="isShow" v-for="item in options" @click="payway=item.label,isShow=!isShow">{{item.label}}</li>

  
     </div>

 </div>





 </div>
</template>
<script type="text/ecmascript-6">


export default {
  data(){
    return{
      payway:'微信支付',
      showtip:true,
      isShow:true,
      options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        value: '微信支付'  
    }
  },
  methods:{
    m:() =>this.payway=1

  },

components: {
    
   },

  mounted () {
   

    }
}
</script>


<style lang="stylus" type="text/stylus">
 .header
   background:#0095d9
   height:3rem
   padding-top:0.3rem
  .flex
      display:flex
      div
       align-self:center  
   .tip
     height:0.6rem
     background:white
     color:#f04348
     font-size:0.22rem
    
     .left
       width:90%
       .ring
         diaplay:inline-block
         padding:0 0.13rem
       .icon-xiaolaba
         font-size:0.28rem
     .right
       width:10%
       text-align:center
       font-size:0.38rem
   .title 
     height:0.8rem
     font-size:0.32rem
     color:black
     div:nth-child(1)
       width:60%
       padding-left:0.6rem
     div:nth-child(2)
       width:40%
       text-align:center
  .sum
    font-size:0.8rem
    color:white
    text-indent:0.5rem
    height:0.8rem
    line-height:0.8rem       
.content
  height:3rem
  border:1px solid red
  .payWay
    width:4rem
    border:1px solid red
    margin:auto
    p
      color:#333
      font-size:0.32rem
      height:0.4rem
      
      



</style>



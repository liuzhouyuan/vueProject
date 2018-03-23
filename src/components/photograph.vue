<template>
  <div class="wrap">
    <div>
        <input type="file"  id="img-upload" multiple accept="image/*" @change="uploadImg($event)"/>
     </div>






    <div id="content">
      <div class="FlexBox">
        <div class="inner">
          <img src="../../static/images/picLogo.png">
        </div>  
      </div>

      <div class="Btn">
        <div class="inner">
        <button  class="choose" @click="">从相册中拍一张</button> <br>
        <button class="take">拍一张照片</button> 
  
      </div>  
  
  </div>
  </div>
 
  <m-footer></m-footer> 
  </div>
</template>



<script type="text/ecmascript-6">
 import footer from "@/components/Indexfooter"
  export default {
       components: {
        MFooter:footer
      },
      methods:{
          
    }
   }  

</script>
<style lang="stylus" type="text/stylus" scoped>
.FlexBox
  display: flex
  height:4.5rem
.Btn
  display: flex
  height:2rem
.inner
  margin:auto 
.inner img
  width:2.5rem
  height:2.5rem 
  border-radius:50%
  min-height:100px
  min-weight:100px
.Btn button
   margin:12px 0
   width:3.5rem
   height:0.8rem
   min-height:30px
   min-weight:45px
   border:1px solid rgba(231,227,227,0.7)
   color:#666
   font-size:0.28rem
</style>

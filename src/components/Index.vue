<template>
 <div>
   <div class="wrap container" >
    <m-header></m-header>
    <part-a></part-a>
   </div>

<div class="wrap">
 <m-footer></m-footer> 
 </div>

 </div>
</template>
<script type="text/ecmascript-6">

import MFooter from '@/components/Indexfooter'
import MHeader from '@/components/IndexHeader'
import partA from '@/components/IndexContent'
export default {

components: {
     MFooter,
     MHeader,
     partA,
   },

  mounted () {
   

    }
}
</script>


<style lang="stylus" type="text/stylus" scoped>
 #box   
    width: 100px 
    height: 100px  
    line-height: 100px
    font-size: 20px 
    text-align: center
    border: 1px solid black 
    margin: 50px  
    color: yellow 
</style>



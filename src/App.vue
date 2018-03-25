<template>
  <div id="app">
     <keep-alive>
        <router-view></router-view>
      </keep-alive>
  </div> 
</template>


<script type="text/ecmascript-6">

  export default {


  }
 
</script>


<style lang="stylus" type="text/stylus">
body,html
  background-color:white
body,div,ul,li,h1,h2,h3,h4,h5,h6,p,form,input
   margin:0;
   padding:0
*
  margin:0
  padding:0
  border:0
  vertical-align:baseline
a 
  text-decoration:none
  -webkit-touch-callout:none
  background-color:transparent
  color:#666
a:active,a:hover
    outline:0
li 
  list-style:none
/*select
  appearance:none

option:hover
    background-color:transparent
    border:none
button,input,optgroup,select,textarea
    font: inherit;
    margin: 0;
    color: inherit;

body
  font-family: 'PingFang SC', 'STHeitiSC-Light', 'Helvetica-Light', arial, sans-serif
button
   border:0px
   background-color:transparent
   outline: none
strong,b
  font-weight:normal
a,button,input,optgroup,select,textarea
  -webkit-tap-highlight-color:rgba(0,0,0,0)

button,input,optgroup,select,textarea
  color:inherit
  font:inherit
  margin:0
  -webkit-appearance:none
  outline:none
  line-height:normal 
button,select
  text-transform:none
button,html input[type="button"],input[type="reset"],input[type="submit"]
  -webkit-appearance:button
  cursor:pointer
button[disabled],html input[disabled]
  cursor:default
button::-moz-focus-inner,input::-moz-focus-inner
  border:0
  padding:0
input 
 line-height:normal
input[type="checkbox"],input[type="radio"]
  box-sizing:border-box 
  padding:0
input[type="number"]::-webkit-inner-spin-button,input[type="number"]::-webkit-outer-spin-button
  height:auto
input[type="search"]*/
/*  -webkit-appearance:textfield
  -moz-box-sizing:content-box
  -webkit-box-sizing:content-box
  box-sizing:content-box*/
.clearfix
  display: inline-block
  &:after
    display: block
    content: "."
    height: 0
    line-height: 0
    clear: both
    visibility: hidden
 .wrap
   margin:0 auto 
   width:6.4rem
   height:100%
   font-size:13px
   color: #333 
   overflow:hidden
 .m
    margin:0.1rem
  .fontB
     font-size:0.16rem
  .fontS
    font-size:0.12rem
  .fontC
    font-size:0.14rem
  .fontW
     font-weight:bold
  .nlian
    display:inline-block
  .iconm 
    margin:0.05rem
 .flexC
    display: flex
    height:100%
 .mauto
    margin:auto
 .fColor1
     font-color:#333
 .fColor2
     font-color:#666
 .textC
     text-align:center
 .posiR
     position:relative
  .mt1
    margin-top:0.1rem
  .ml1
    margin-left:0.1rem
  .mt15
    margin-top:0.15rem
  .mb1
    margin-bottom:0.1rem
  .mb15
    margin-bottom:0.15rem
  .container
    height:90%
    overflow:auto
    padding-bottom:44px
   
</style>

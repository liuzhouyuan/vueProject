<template>
<div class="foot">
<div class="wrapper">
<ul>
    <li class="li1"><a href=""><div class="iconstyle"><i class="iconfont icon-iconfonthome0"></i></div><p>首页</p></a></li>
	<li class="li2"><a href=""><div class="iconstyle"><i class="iconfont icon-weibiaoti1"></i></div><p>打电话</p></a></li>
	<li class="btn li3"><a href="">在线咨询</a></li>
	<li class="btn li4"><a href="">预约看牙</a></li>
</ul>			  		
</div>
</div>	

</template>

<script type="text/ecmascript-6">
  export default {
    
  }
</script>

<style lang="stylus" type="text/stylus" scoped>
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
	padding-top:2px;		
.li2 
	width:16%
	padding-top:2px;;
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
.icon-iconfonthome0
	font-size:0.4rem
	color:#9c9c9c
.icon-weibiaoti1
	font-size:0.4rem
	color:#4bb4e0
			       
</style>
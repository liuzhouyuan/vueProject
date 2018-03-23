<template>
<div class="wrap">
	<ul  class="list">
		<li>
			<a href="">
				<div class="left">头像</div>

				<div class="right">
				  <router-link  to="/photograph">
	                 <img src="../../static/images/touxiang.jpg"> 
			         <i class="iconfont icon-youhua"></i>
			       </router-link>
			    </div>
			</a>
		</li>

		<li>
			<a href="">
					<div class="left">昵称</div>
					<div class="right">
	                 我是蓝小花<i class="iconfont icon-youhua"></i>
			        </div>
			</a>
		</li>

		<li>
			
					<div class="left">真实姓名</div>
					<div class="right">
	                 张丰三<i class="iconfont icon-youhua"></i>
			        </div>

		</li>

		<li>
			<a href="">
					<div class="left">性别</div>
					<div class="right">
	                 男<i class="iconfont icon-youhua"></i>
			        </div>
			</a>
		</li>
		<li>
			<a href="">
					<div class="left">出生年月日</div>
					<div class="right">
	                 1999年10月18日<i class="iconfont icon-youhua"></i>
			        </div>
			</a>
		</li>
		<li>
			<a href="">
					<div class="left">手机号码</div>
					<div class="right">
	                 13640230621<i class="iconfont icon-youhua"></i>
			        </div>
			</a>
		</li>
		<li>
			<a href="">
					<div class="left">地址</div>
					<div class="right">
	                 广州市天河区林和东路218号<i class="iconfont icon-youhua"></i>
			        </div>
			</a>
		</li>
		<li>
			<a href="">
					<div class="left">社区</div>
					<div class="right">
	                 值达菀<i class="iconfont icon-youhua"></i>
			        </div>
			</a>
		</li>
	</ul>

</div>	

</template>

<script type="text/ecmascript-6">
   export default {
   data(){
    return{
     m:[]
    }
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
 .list
 	width:5.5rem
 	margin:0 auto

 .list li 
 	margin-top:15px;
 	height:0.55rem
 	display:block
 	line-height:0.55rem
 	border-bottom:1px solid rgba(231,227,227,0.7)

 	
 .left 
 	float:left
 	font-size:0.28rem
 	color:black
	
 .right
 	float:right
 	color:#999
 	font-size:0.23rem

 	

 .right img
 	width:0.5rem
 	height:0.5rem
 	vertical-align:middle
 	border:1px solid rgb(231,227,227)
 	border-radius:50%
 	margin-bottom:0.1rem
 	
.iconfont
  	 font-size:0.2rem
  	 margin-left:8px
.content
   display:inline-block
   padding-bottom:0.15rem
	height:0.3rem
   line-height:0.3rem
 	
 	
</style>
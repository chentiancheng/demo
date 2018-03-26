<template>
	<div class="foodShopContent">
		<div class="header" :style="imgUrl">
			<p><a href="/foodList"><img src="../../static/img/返回 (1).png" /></a></p>
			<p><img src="../../static/img/星星.png"/></p>
			<p><img src="../../static/img/分享.png" /></p>
		</div>
		<div class="section">
			<div class="foodShopTitle">
				<dl>
					<dt @click="moduleReturn()">韩国南山烤肉（上地店）</dt>
					<dd>
						<span>☆☆☆☆☆</span>
						<span>人均￥88</span>
						<span><img src="../../static/images/23_05.jpg"/>反馈</span>
					</dd>
				</dl>
			</div>
			<div class="foodShopinfo">
				<p><span><a href="#/foodShopAddress"><img src="../../static/images/32_09.jpg"/></a></span><span>据您417m|海淀区上地西路七街往南50米</span><span> <img src="../../static/images/32_12.jpg"/></span></p>
				<p>
					<img src="../../static/images/32_17.jpg" />营业时间：10：30-23:00
				</p>
			</div>
			<div class="friendImg">
				<p class="title">
					<b>网友推荐菜</b>
					<b>查看11道推荐菜<img src="../../static/img/箭头.png"/></b>
				</p>
				<ul>
					<li>
						<img src="../../static/images/32_21.jpg"/>
					</li>
					<li>
						<img src="../../static/images/32_21.jpg"/>
					</li>
					<li>
						<img src="../../static/images/32_21.jpg"/>
					</li>
				</ul>
				<div class="contents">五花肉，酱牛肉，卤牛肉，小肥牛，水煮鱼，牛舌，海鲜大酱汤 ,牛舌</div>
			</div>
			<div class="friendImg">
				<p class="title">
					<b>网友推荐菜</b>
					<b>查看11道推荐菜<img src="../../static/img/箭头.png"/></b>
				</p>
				<ul>
					<li>
						<img src="../../static/images/32_21.jpg"/>
					</li>
					<li>
						<img src="../../static/images/32_21.jpg"/>
					</li>
					<li>
						<img src="../../static/images/32_21.jpg"/>
					</li>
				</ul>
				<div class="contents">五花肉，酱牛肉，卤牛肉，小肥牛，水煮鱼，牛舌，海鲜大酱汤 ,牛舌</div>
			</div>
		</div>
		<div class="moduleReturn" v-show="Imgbool">
			<button @click="moduleReturn()">点击关闭</button>
		</div>
	</div>
		
</template>

<script>
	import axios from "axios"
	export default{
		data(){
			var imgUrl=""
			var id=0
			var Imgbool=false;
			return{
				imgUrl,
				id,
				Imgbool
			}
		},
		created(){
			this.id=this.$router.currentRoute.query.id
			console.log(this.id)
			var that=this
			axios.get('http://restapi.amap.com/v3/place/detail?key=f7d5a22536870ec6cb742868700e1e56&id='+that.id).then(function(res){
				console.log(res.data)
				that.imgUrl={
					 backgroundImage: "url(" + res.data.pois[0].photos[0].url + ")",
					  backgroundSize: "100%",
				}
				
				console.log(that.imgUrl)
			},function(err){
				console.log(err)
			})
		},
		methods:{
			moduleReturn(){
				if(this.Imgbool==true){
					this.Imgbool=false
				}else{
					this.Imgbool=true
				}
			}
			
			
		}
	}
	
</script>

<style>
</style>
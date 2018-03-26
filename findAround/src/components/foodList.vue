<template>
	<div class="foodList">
		<div class="header">
			<p><a href="#"><img src="../../static/images/2_08.jpg"/></a></p>
			<p>{{keyword}}</p>
			<p>
				<img src="../../static/images/2_03.jpg" />
				<img src="../../static/images/2_05.jpg" />
			</p>
		</div>
		<div class="section">
			<navBar></navbar>
			<router-link v-for="val in data" :to="{path:'/foodShopContent',query:{id:val.id}}">
			<div class="foodShopList" >
				<div class="foodShopListLeft">
					<dl>
						<dt>{{val.name}}</dt>
						<dd class="stares">
							<!--<star :score="4.8"></star>-->
							<span><!--☆☆☆☆☆ --><star :score="val.biz_ext.rating"></star></span>&nbsp;
							<span>673条评论</span>
							<span>人均<a href="#">￥{{val.biz_ext.cost}}</a></span>
						</dd>
						<dd>
							<span>韩国料理 </span>
							<span>{{val.adname}} </span>
							<span>418米 </span>
						</dd>
						<dd>
							<button>牛肉不错</button>
							<button>粥好喝</button>
							<button>炸鸡好吃</button>
							<button>饼不错</button>
						</dd>
					</dl>
				</div>
				<div class="foodShopListRight">
					<img :src="val.photos[0].url" />
				</div>
			</div>
			</router-link>
		</div>
	</div>	
</template>

<script>
	import navBar from "./findNavbar";
	import axios from "axios"
    import star from "./mystar"
	export default {
 	components:{
 		navBar,
   		star
 	},
 	data(){
 		var data=""
 		var keyword=""
 		return{
 			data,
 			keyword
 		}
 	}
 	,
 	created(){
 		var that=this
 		console.log(this.$router.currentRoute.query.name)
 		this.keyword=this.$router.currentRoute.query.name
 		axios.get('http://restapi.amap.com/v3/place/text?key=f7d5a22536870ec6cb742868700e1e56&keywords='+this.keyword+'&types=&city=北京&children=1&offset=20&page=1&extensions=all').then(function(res){
 			console.log(res.data.pois)
 			that.data=res.data.pois
 		},function(err){
 			console.log(err)
 		})
 	}
	}
</script>

<style>
</style>
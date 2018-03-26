<template>
	<div class="foodShopAddress">
		<div class="header">
			<span><img src="../../static/images/2_08.jpg"/></span>
			<input type="text" value="美食" />
			<a href="#"><img src="../../static/images/2_03.jpg" /></a>
			<a href="#">X</a>
		</div>
		<div class="section">
			<div id="container" class="mymap">
				
			</div>
		</div>
		<div class="footer">
			<div class="foodShopListLeft">
					<dl>
						<dt>韩国南山烤肉（上地店）</dt>
						<dd class="stares">
							<!--<star :score="4.8"></star>-->
							<span>☆☆☆☆☆ <!--<star :score="val.biz_ext.rating"></star>--></span>&nbsp;
							<span>673条评论</span>
							<span>人均<a href="#">￥88</a></span>
						</dd>
						<dd>
							<span>韩国料理 </span>
							<span>上地 </span>
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
				<div class="typeGo">
					<ul>
						<li>
							<span><img src="../../static/images/32_12.jpg"/></span>
							电话
						</li>
						<li>
							<span><img src="../../static/images/2_05.jpg" /></span>
							搜周边
						</li>
						<li>
							<span><img src="../../static/img/位置-b.png"/></span>
							导航
						</li>
					</ul>
				</div>
		</div>
	</div>
</template>

<script>
	import AMap from 'AMap';
	export default {
    mounted(){
       this.loadmap();     //加载地图和相关组件
    },
    methods: {
      loadmap(){
        const map = new AMap.Map('container', {
          zoom: 9
        });
      }
    }
}
</script>

<style>
</style>
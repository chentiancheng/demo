<template>
	<div class="findList">
		<div class="header">
			<p class="h_left">
				<img src="../../static/images/1_03.jpg" />
			</p>
			<p class="h_right">
				<ul>
					<li>常用</li>
					<li>特色</li>
					<li>搜索</li>
				</ul>
			</p>
		</div>
		<div class="section">
			<div class="findSeach">
				<input type="text" placeholder="请输入您要找的" id="serach" @keyup="keywordFind()" @blur="returensOff()"/>
				<div class="findBox" v-if="findData==''?false:true">
					<ul>
					<li v-for="val in findData" @click="isArrayFind()">{{val.name}}</li>
					</ul>
				</div>
			</div>
			<div class="findType">
				<div class="findTypeLeft">
					<ul>
						<li v-for="val,index in data" v-bind:class="{active:val.bool}" @click="btn(index)">{{val.tit}}</router-link>
						</li>
					</ul>
				</div>
				<div class="findTypeRight">
					<ul>
						<router-link v-for="val in info" :to="{ path: '/foodList',query:{name:val.name  }}">
							<li>
								<img :src="val.img" />
								<h2>{{val.name}}</h2>
								<span>{{val.datatype}}</span>
							</li>
						</router-link>
					</ul>
				</div>
			</div>
		</div>
		<div class="footer">
			<span>当前:正在定位中</span>
			<span><img src="../../static/images/1_35.jpg"/></span>
		</div>
	</div>
</template>

<script>
	
	import axios from "axios"
	export default {
		name: 'HelloWorld',
		data() {
			var data = "";
			var info = "";
			var newArr = [];
			var findData=""
			return {
				data,
				info,
				newArr,
				findData
			}
		},
		created() {
			var that = this
			axios.get("../static/list.json").then(function(res) {
				that.data = res.data.type
				that.info = res.data.type[0].datainfo
				for(var i = 0; i < res.data.type.length; i++) {
					for(var j = 0; j < res.data.type[i].datainfo.length; j++)
						that.newArr.push(res.data.type[i].datainfo[j].name)

				}
				console.log(that.newArr)
				console.log(res.data.type)
			}, function(err) {
				console.log(err)
			})
		},
		methods: {
			btn(index) {

				this.info = this.data[index].datainfo;
				for(var i = 0; i < this.data.length; i++) {
					if(index == i) {
						this.data[i].bool = true;
					} else {
						this.data[i].bool = false;
					}
				}
			
			},
			keywordFind(){
				var val=document.getElementById("serach").value
//			console.log(val)
				var that = this
				axios.get("http://restapi.amap.com/v3/place/text?key=f7d5a22536870ec6cb742868700e1e56&keywords="+val+"&types=&city=北京&children=1&offset=10&page=1&extensions=all").then(function(res) {
				console.log(res.data)
				that.findData=res.data.pois
			}, function(err) {
				console.log(err)
			})
			},
			returensOff(){
				this.findData=""
			}
			,
			//数组去除重复
			getTypeArray(arr) {　　　
			var ChangeArr=[];
			for(var i=0;i<arr.length;i++){
				var tempArr=arr[i]
				if(ChangeArr.indexOf(tempArr)==-1){
					ChangeArr.push(tempArr)
				}
			}
			console.log(ChangeArr)


			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
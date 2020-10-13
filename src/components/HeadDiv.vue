<template>
  <div id="div-header">
	  <!-- <router-link to="/home">主页</router-link> -->
	  <ul class = "ul-header" id = "nav-header">
		<li id = "header-logo" class="li-logo">
			<!-- <img src="../assets/logo.jpg" height="60px"/> -->
			<div class="logo-name" id="header-logo-name">tliMusic</div>
		</li>
		<li>
			<el-menu :default-active="activeIndex2"
					class="el-menu-demo"
					mode="horizontal"
					@select="handleSelect"
					background-color="#242424"
					text-color="#fff"
					active-text-color="red">
				<el-menu-item index="1" >
					<template slot="title">发现音乐</template>
				</el-menu-item>
				<el-menu-item index="2">我的音乐</el-menu-item>
				<el-menu-item index="3">朋友</el-menu-item>
				<el-menu-item index="4">商城</el-menu-item>
				<el-menu-item index="5">音乐人</el-menu-item>
				<el-menu-item index="6">下载客户端</el-menu-item>
			</el-menu>
		</li>
		<li>
			<!-- 搜索框/登录/按钮 -->
			<div class="screach" id="header-screach">
				<el-input placeholder="音乐/视频/电台/用户" v-model="screach" class="screach-el">
					<i slot="prefix" class="el-input__icon el-icon-search"></i>
				</el-input>
				<el-button id="create-center" type="info" round>创作者中心</el-button>
				<el-button id="user-login" type="info" icon="el-icon-user" circle @click="dialogTableVisible = true"></el-button>
				<el-dialog :visible.sync="dialogTableVisible" width="30%">
					<Login></Login>
				</el-dialog>
			</div>
		</li>
	  </ul>
  </div>
</template>

<script>
import Login from './login/login.vue';
export default {
  name : "HeadDiv",
	data(){
		return {
		        activeIndex: '1',
		        activeIndex2: '1',
				screach : '',
				dialogTableVisible : false,
		};
	},
	components:{
		Login ,
	},
	methods:{
		handleSelect(key, keyPath) {
			console.log(key, keyPath);
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
  color: #42b983;
}
#div-header{
	width: 100%;
	background-color: #242424;
}
img{
	vertical-align: middle;
}
.logo-name{
	display: inline-block;
	margin: 5px 5px;
	/* color: white; */
	font-size: 60px;
	font-family: "华文新魏";
	font-weight: 800;
	line-height: 60px;
	height: 60px;
	/* 字体倾斜 */
	/* font-style: oblique; */
	/* 字体镂空 */
	-webkit-text-stroke: 2px red;
	-webkit-text-fill-color: transparent;
	/* background-color: red; */
	background-image: linear-gradient(to right ,#c6ffdd,#fbd786,#f7797d);
	/* 让背景只显示在文字下面 */
	-webkit-background-clip: text;
	/* 背景过滤 */
	/* backdrop-filter: grayscale(30%); */
	/* text-shadow:
	1px 1px 0 #CCC,
	2px 2px 0 #CCC,
	3px 3px 0 #444,
	4px 4px 0 #444,
	5px 5px 0 #444,
	6px 6px 0 #444; */
	/* -webkit-text-shadow:0 0 10px #CCC;
	-moz-text-shadow:0 0 10px  #CCC;
	-o-text-shadow:0 0 10px  #CCC;
	text-shadow:0 0 10px  #CCC; */
}
.ul-header{
	margin: 0px auto;
	height: 60px;
	width: 1200px;
	display: flex;
	justify-content: space-between;
	/* border: 1px solid white; */
	background-color: #242424;
}
.ul-header li{
	float: left;
	list-style: none;
}
.el-menu-demo{
	display: flex;
	justify-content: space-between;
	border-bottom: 0px !important;
}
.screach{
	margin: 10px 5px;
	display: flex;
	justify-content: space-between;
}
.screach-el{
	width: 160px !important;
	font-size: 12px !important;
}

#create-center{
	background-color: #242424;
	color: #e6e6e6;
	height: 25px;
	width: 80px !important;
	font-size: 12px;
	padding: 3px 2px;
	margin: auto 10px;
}
#create-center :hover {
	color: white !important;
}
#user-login{
	height: 30px !important;
	width: 30px !important;
	margin: auto 0px !important;
	padding: 5px 5px !important;

}
</style>

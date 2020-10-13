<template>
	<div id="div-footer">
		<div class="footer-content">
			<!-- friend-link -->
			<div id="div-friend-link">
				<div>
					<ul>
						<li><el-link type="info" href="https://element.eleme.io" target="_blank" class="friend-link">服务条款</el-link>|</li>
						<li><el-link type="info" href="https://element.eleme.io" target="_blank" class="friend-link">隐私政策</el-link>|</li>
						<li><el-link type="info" href="https://element.eleme.io" target="_blank" class="friend-link">儿童隐私政策</el-link>|</li>
						<li><el-link type="info" href="https://element.eleme.io" target="_blank" class="friend-link">版权投诉指引</el-link>|</li>
						<li><el-link type="info" href="https://element.eleme.io" target="_blank" class="friend-link">意见反馈</el-link>|</li>
					</ul>
				</div>
				<div>
					<span style="margin: 5px;">
						tliMusic版权所有©1997-2020 tlidx个人运营：
						<el-link type="info" href="https://element.eleme.io" target="_blank" class="friend-link">tli[2020]1234-567号 </el-link>
					</span>
				</div>
				<div>
					<span style="margin: 5px;">
						 违法和不良信息举报电话：0000-12345678 举报邮箱：
						 <el-link type="info" href="https://element.eleme.io" target="_blank" class="friend-link">ttlidx@gmail.com  </el-link>
					</span>
				</div>
			</div>
			<!-- icon-link -->
			<div id="div-icon-link">
				<div>
					 <el-link type="info" href="https://element.eleme.io" target="_blank" class="icon-link">
						 <label>
							<div class="el-icon-headset icon-image"></div>
							<span class="icon-text">my music</span>
						 </label>
					 </el-link>
				</div>
				<div>
					 <el-link type="info" href="https://element.eleme.io" target="_blank" class="icon-link">
						 <label>
							<div class="el-icon-s-custom icon-image"></div>
							<span class="icon-text">用户认证</span>
						 </label>
					 </el-link>
				</div>
				<div>
					 <el-link type="info" href="https://element.eleme.io" target="_blank" class="icon-link">
						 <label>
							<div class="el-icon-refresh icon-image"></div>
							<span class="icon-text">独立音乐人</span>
						 </label>
					 </el-link>
				</div>
				<div>
					 <el-link type="info" href="https://element.eleme.io" target="_blank" class="icon-link">
						 <label>
							<div class="el-icon-thumb icon-image"></div>
							<span class="icon-text">赞赏</span>
						 </label>
					 </el-link>
				</div>
				<div>
					 <el-link type="info" href="https://element.eleme.io" target="_blank" class="icon-link">
						 <label>
							<div class="el-icon-caret-right icon-image"></div>
							<span class="icon-text">视频奖励</span>
						 </label>
					 </el-link>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name : 'FootDiv',
	}
</script>

<style scoped>
#div-footer{
	border-top: 1px solid gainsboro;
	font-size: 12px !important;
	color: #a6a9ad !important;
	padding: 10px;
}
.footer-content{
	/* border: 1px solid black; */
	width: 1000px;
	margin: 0px auto;
	display: flex;
	justify-content: space-between;
}
li{
	float: left;
	list-style: none;
	font-weight: 300;
}
.friend-link{
	margin: 0px 5px;
	font-size: 12px !important;
}
#div-friend-link{
	display: flex;
	flex-flow: column;
}
#div-friend-link>div{
	margin: 5px 0px;
}
span{
	line-height: 20px;
}
#div-icon-link>div{
	margin: 0px 25px;
}
#div-icon-link{
	display: flex;
	justify-content: space-between;
}
.icon-image{
	font-size: 25px;
	border: 2px solid #a6a9ad;
	border-radius: 50%;
	padding: 10px;
	margin: 5px 0px;
}
.icon-link{
	font-size: 12px !important;
}
.icon-text{
	width: auto;
	display: block;
	text-align: center;
}
</style>

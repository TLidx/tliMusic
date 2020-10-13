<template>
	<div id="Login">
    <el-tabs >
      <el-tab-pane label="邮箱登录" >
        <el-form ref="form" :model="form">
          <el-container>
            <el-container>
              <el-main>
                <el-form-item >
                  <el-input v-model="form.email" placeholder="请输入邮箱"></el-input>
                </el-form-item>
                <el-form-item >
                  <el-input v-model="form.password" placeholder="请输入密码" show-password></el-input>
                </el-form-item>
              </el-main>
              <el-footer>
                <el-form-item >
                  <el-button type="primary" @click="loginEmail();">登录</el-button>
                  <el-button type="primary" >取消</el-button>
                </el-form-item>
              </el-footer>
            </el-container>
          </el-container>
        </el-form>

      </el-tab-pane>
      <el-tab-pane label="手机登录">
        <el-form ref="form" :model="form">
          <el-container>
            <el-container>
              <el-main>
                <!-- 手机号码 -->
                <el-form-item >
                  <el-input v-model="form.phone" placeholder="请输入手机号码">
                    <!-- <el-select slot="prepend" v-model="form.countrycode" >
                      <el-option v-for="item in countrycodes" :key="item.value" :label="item.label" :value="item.value"></el-option>
                    </el-select> -->
                    <el-select slot="prepend" v-model="form.countrycode" popper-class="countrycode-select" value-key="86">
                      <el-option
                      v-for="item in countrycodes"
                      :key="item.code"
                      :label="'+'+item.code"
                      :value="item.code"
                      style="width: 250px;">
                      <span style="float: left">{{ item.zh }}</span>
                      <span style="float: right; color: #8492a6; font-size: 13px">+{{ item.code }}</span>
                      </el-option>
                    </el-select>
                  </el-input>
                </el-form-item>
                <el-form-item >
                  <el-input v-model="form.password" placeholder="请输入密码" show-password></el-input>
                </el-form-item>
              </el-main>
              <el-footer>
                <el-form-item >
                  <el-button type="primary" @click="loginCellphone();" style="margin: 0px auto;">登录</el-button>
                  <el-button type="primary" >取消</el-button>
                  <el-link type="info">立刻注册</el-link>
                </el-form-item>
              </el-footer>
            </el-container>
          </el-container>
        </el-form>

      </el-tab-pane>
    </el-tabs>
	</div>
</template>

<script>
	export default {
		name : "Login",
		data(){
			return {
				form : {
					phone : '',
					countrycode : '86',
					password : '',
          email : '',
				},
				countrycodes :[],

			}
		},
    mounted : function(){
      this.countrycodeList();
    },
		methods:{
			countrycodeList : function(){
				this.$http.get(this._ctx + 'countries/code/list').then(function(res){
					// console.log(res);
					var result = res.data.data;
          var countrycodes = []
					$(result).each(function(index,val){
						countrycodes = countrycodes.concat(val.countryList);
					});
          this.countrycodes = countrycodes;
				},function(res){
					console.log('访问失败');
					alert('获取失败');
				});
			},
      loginCellphone : function(){
        /* 手机号登录*/
        this.$http.post(this._ctx + 'login/cellphone',{"phone":this.form.phone , "password" : this.form.password},
        {emulateJSON: true}).then(function(res){
           console.log(res);
           this.$message({
             'message' : '登录成功',
             'type' : 'success'
           });
        },function(res){
            console.log('登录失败');
            // alert('用户名或密码错误！');
            this.$message({
              'message' : '手机号或密码错误',
              'type' : 'error'
            });
        });
      },
      loginEmail : function(){
        /* 邮箱登录*/
        this.$http.post(this._ctx + 'login',{"email":this.form.email,"password":this.form.password}).then(function(res){
          console.log(res);
          if(res.body.code=='502'){
            this.$message.error(res.body.message);
            return;
          }
          this.$message({
            'message' : '登录成功',
            'type' : 'success'
          });
        },function(res){
           console.log('登录失败');
           this.$message({
             'message' : '邮箱或密码错误',
             'type' : 'error'
           });
       });
      },
		},
	}
</script>

<style scoped>
	.el-select{
		width: 80px;
	}
  .el-form{
    width: 70%;
    margin: 0px auto;
  }
</style>

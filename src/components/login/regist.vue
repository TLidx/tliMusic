<template>
  <div id="Regist">
    <el-form ref="form" :model="form" label-position="top">
      <el-container>
        <el-container>
          <el-main>
            <el-form-item label="手机号码:">
              <el-input v-model="form.phone" placeholder="请输入手机号"></el-input>
            </el-form-item>
            <el-form-item label="密码:">
              <el-input v-model="form.password" placeholder="请输入密码" show-password></el-input>
            </el-form-item>
          </el-main>
          <el-footer>
            <el-form-item>
              <el-button>下一步</el-button>
            </el-form-item>
          </el-footer>
        </el-container>
      </el-container>
    </el-form>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        form:{
          phone : '',
          password : '',
        }
      }
    },
    methods:{

    }
  }
</script>

<style scoped>

</style><template>
</template>

<script>
</script>

<style>
</style>

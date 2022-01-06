<!--
 * @Author: your name
 * @Date: 2022-01-06 20:30:01
 * @LastEditTime: 2022-01-06 22:07:39
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \vue-admin-self\src\views\showdemo\demo.vue
-->
<template>
  <div>
    <el-container>
      <el-header>Header

        <!-- <div style="margin-top: 15px;"> -->
        <!-- 直接放一个div会导致位置错误，head部分进入main部分 -->
        <el-input v-model="input3" placeholder="请输入内容" class="input-with-select">
          <el-select slot="prepend" v-model="select" placeholder="请选择" width:>
            <el-option label="label1" value="1" />
            <el-option label="label2" value="2" />
            <el-option label="label3" value="3" />
          </el-select>
          <el-button slot="append" icon="el-icon-search" @click="open" />
        </el-input>
        <!-- </div> -->
      </el-header>
      <el-main>
        <div>show</div>
        <el-form :inline="true" :model="formInline">
          <!-- <el-col :span="6"> -->
          <el-form-item label="活动区域">
            <el-select placeholder="活动区域">
              <el-option label="op_label1" value="111" />
              <el-option label="op_label2" value="222" />
            </el-select>
          </el-form-item>
          <!-- </el-col> -->
          <el-form-item><el-button>show</el-button></el-form-item>
        </el-form>
      </el-main>
      <el-footer>Footer</el-footer>
    </el-container>
  </div>
</template>

<script>
export default {

  data() {
    return {
    //   input1: '',
    //   input2: '',
      input3: '',
      select: '',
      formInline: {
        user: '',
        region: ''
      }
    }
  },
  methods: {
    open() {
      this.$message.success('搜索')
    }
  }
}
</script>

<style>
.el-select .el-input{
    /* 这里单独设置大小，只会调整input中，label的大小，
    进而导致input本体范围不够
     */
width: 130px;
}
/* .el-header, .el-footer { */
    /* background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px; */
  /* } */
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }

  body > .el-container {
    margin-bottom: 40px;
  }

  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }

  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>

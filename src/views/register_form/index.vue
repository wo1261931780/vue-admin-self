<!--
 * @Author: your name
 * @Date: 2022-01-27 10:40:23
 * @LastEditTime: 2022-01-27 11:17:48
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \vue-admin-self\src\views\register_form\index.vue
-->
<template>
  <div class="app-container">
    <el-form>
      <el-form-item label="name">
        <el-input placeholder="请输入姓名" />
      </el-form-item>
      <el-form-item label="请选择性别">
        <el-radio-group v-model="form.sex">
          <el-radio label="male" />
          <el-radio label="female" /></el-radio-group>
      </el-form-item>
      <el-form-item label="address">
        <el-input placeholder="请输入住址" />
      </el-form-item>
      <el-form-item label="tel">
        <el-input placeholder="电话" />
      </el-form-item>
      <el-form-item label="wechat">
        <el-input placeholder="微信" />
      </el-form-item>
      <el-form-item label="name">
        <el-input placeholder="学历" />
      </el-form-item>
      <el-form-item label="school">
        <el-input placeholder="学校" />
      </el-form-item>
      <el-form-item label="请选择科目：">
        <el-checkbox-group v-model="form.type">
          <el-checkbox label="math" />
          <el-checkbox label="chine" name="type" />
          <el-checkbox label="eng" />
          <el-checkbox label="pych" />
          <el-checkbox label="ches" />
        </el-checkbox-group>
      </el-form-item>
      <el-form-item label="备注：">
        <el-input v-model="form.desc" type="textarea" />
      </el-form-item>
    </el-form>

    <el-button type="primary">提交</el-button>
    <el-button>取消</el-button>

  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: '',
        type: [],
        sex: '',
        desc: ''
      }
    }
  },
  methods: {}
}
</script>

<style scoped>
.line {
  text-align: center;
}
.el-input{
    width: 200px;
}
</style>

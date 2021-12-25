<!--
 * @Author: your name
 * @Date: 2021-12-23 23:46:29
 * @LastEditTime: 2021-12-25 23:33:03
 * @LastEditors: your name
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \vue-admin-self\src\views\dashboard\index.vue
-->
<template>
  <div class="dashboard-container">
    <div class="dashboard-text">name: {{ name }}</div>
    <div>show me somthing</div>
    <!-- <el-alert :closable="false" title="menu 1-1" type="success"> </el-alert> -->
    <el-button :plain="true" class="s1" @click="open"> show me </el-button>
    <el-input
      class="input-with-select"
      change="querydemo"
      placeholder="请输入内容,目前支持测试测试搜索(╯°Д°)╯︵┻━┻"
    >
      <el-select slot="prepend" class="el-selectdemo" placeholder="请选择">
        <el-option label="title" value="1" />
        <el-option label="keyword" value="2" />
        <el-option label="audioid" value="3" />
        <el-option label="coverdesignerid" value="4" />
      </el-select>
      <el-button slot="append" icon="el-icon-search" click="querydemo" />
    </el-input>
  </div>
</template>
<script src="//cdn.jsdelivr.net/npm/element-plus"></script>
<script>
// import { setup } from 'mockjs';
import { mapGetters } from "vuex";
// import { defineComponent, h } from "vue";

export default {
  name: "Dashboard",
  computed: {
    ...mapGetters(["name"]),
  },
  methods: {
    open() {
      this.$message("这是消息提示");
    },
  },
};
</script>

<style lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
</style>

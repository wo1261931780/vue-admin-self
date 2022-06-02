<!--
 * @Author: your name
 * @Date: 2021-12-23 23:46:29
 * @LastEditTime: 2022-06-01 19:43:01
 * @LastEditors: liujiajun 45444154+wo1261931780@users.noreply.github.com
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \vue-admin-self\src\views\dashboard\index.vue
-->
<template>
  <div class="dashboard-container">
    <div class="dashboard-text">name: {{ name }}</div>
    <div>show me somthing</div>
    <!-- <el-alert :closable="false" title="menu 1-1" type="success"> </el-alert> -->
    <el-button :plain="true" class="s1" @click="open"> show me </el-button>
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
      //     ElMessage({
      //     message: 'Congrats, this is a success message.',
      //     type: 'success',
      //   })
      // this.$message("普通消息提示");
      this.$message.success("普通消息提示");
      //   type:'success'
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

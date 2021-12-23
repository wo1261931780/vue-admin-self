<template>
  <div class="dashboard-container">
    <div class="dashboard-text">name: {{ name }}</div>
    <div>show me somthing</div>
    <!-- <el-alert :closable="false" title="menu 1-1" type="success"> </el-alert> -->
    <el-button :plain="true" @click="open" class="s1"> show me </el-button>
                <el-input
                class="input-with-select"
                change="querydemo"
                placeholder="请输入内容,目前支持测试测试搜索(╯°Д°)╯︵┻━┻">
                <el-select
                    slot="prepend"
                    
                    class="el-selectdemo"
                    placeholder="请选择">
                    <el-option label="title" value="1"></el-option>
                    <el-option label="keyword" value="2"></el-option>
                    <el-option label="audioid" value="3"></el-option>
                    <el-option label="coverdesignerid" value="4"></el-option>
                </el-select>
                <el-button slot="append" icon="el-icon-search" click="querydemo"></el-button>
            </el-input>
  </div>
</template>
<script src="//cdn.jsdelivr.net/npm/element-plus"></script>
<script>
// import { setup } from 'mockjs';
import { mapGetters } from "vuex";
// import { defineComponent, h } from "vue";

export default {
  name: 'Dashboard',
  computed: {
    ...mapGetters([
      'name'
    ])
  },
  methods:{
    open(){
      
      this.$message("这是消息提示")
    },
  },
}
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

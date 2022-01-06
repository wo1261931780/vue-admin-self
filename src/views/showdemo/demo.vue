<!--
 * @Author: your name
 * @Date: 2022-01-06 20:30:01
 * @LastEditTime: 2022-01-06 23:28:52
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
        <el-input v-model="input3" placeholder="请输入内容,目前支持测试搜索(╯°Д°)╯︵┻━┻" class="input-with-select">
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

        <el-form :inline="true" :model="formInline">
          <el-form-item label="测试1">
            <el-select placeholder="测试1">
              <el-option label="op_label1" value="111" />
              <el-option label="op_label2" value="222" />
            </el-select>
          </el-form-item>
          <el-form-item label="测试2">
            <el-select placeholder="测试2">
              <el-option label="op_label1" value="111" />
              <el-option label="op_label2" value="222" />
            </el-select>
          </el-form-item>
          <el-form-item label="测试3">
            <el-select placeholder="测试3">
              <el-option label="op_label1" value="111" />
              <el-option label="op_label2" value="222" />
            </el-select>
          </el-form-item>
          <el-form-item label="测试4">
            <el-select placeholder="测试4">
              <el-option label="op_label1" value="111" />
              <el-option label="op_label2" value="222" />
            </el-select>
          </el-form-item>
          <el-form-item>
            <el-button>查询</el-button>

            <el-button plain type="primary">更新记录</el-button>

            <el-button>取消选择</el-button>
          </el-form-item>
        </el-form>

        <el-table :data="tabledata" style="width:100%">
          <el-table-column fixed prop="table_index" label="序号index" width="150px" align="center" sortable />
          <!-- 这里只需要设置一次fix固定左边即可
          后续会默认设置 -->
          <el-table-column prop="table_priority" label="优先级priority" width="150px" align="center" sortable />
          <el-table-column prop="table_date" label="日期date" width="150px" align="center" sortable />
          <el-table-column prop="table_title" label="标题title" width="150px" align="center" />
          <el-table-column prop="table_author" label="作者author" width="150px" align="center" />
          <el-table-column prop="table_upload" label="上传文件upload" width="150px" align="center" />
          <el-table-column prop="table_audio" label="配音audio" width="150px" align="center" />
          <el-table-column prop="table_cutter" label="剪辑cutter" width="150px" align="center" />
          <el-table-column prop="table_reviews" label="人工审核reviews" width="150px" align="center" />
          <el-table-column prop="table_machine_reviews" label="机器审核machine_reviews" width="150px" align="center" />
          <el-table-column prop="table_plateform" label="平台选择plateform" width="150px" align="center" />
          <el-table-column fixed="right" label="发布release" width="150px" align="center">
            <!-- 但是在fix到右边，就必须设置好对应关键词 -->
            <template>
              <el-button type="primary" plain @click="table_info">测试</el-button>
            </template>
          </el-table-column>
        </el-table>
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
      },
      tabledata: [{
        table_index: 'table_index',
        table_priority: 'table_priority',
        table_date: 'table_date',
        table_title: 'table_title',
        table_author: 'table_author',
        table_upload: 'table_upload',
        table_audio: 'table_audio',
        table_cutter: 'table_cutter',
        table_reviews: 'table_reviews',
        table_machine_reviews: 'table_machine_reviews',
        table_plateform: 'table_plateform'
      }, {
        table_index: 'table_index2',
        table_priority: 'table_priority2',
        table_date: 'table_date2',
        table_title: 'table_title2',
        table_author: 'table_author2',
        table_upload: 'table_upload2',
        table_audio: 'table_audio2',
        table_cutter: 'table_cutter2',
        table_reviews: 'table_reviews2',
        table_machine_reviews: 'table_machine_reviews2',
        table_plateform: 'table_plateform2'
      }]
    }
  },
  methods: {
    open() {
      this.$message.success('搜索')
    },
    table_info() {
      this.$message.error('ceshi')
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
.el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    /* line-height: 60px; */
  }
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    /* line-height: 160px; */
    /* 行高限制了页面的展示效果 */
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

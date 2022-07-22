<!--
 * @Author: your name
 * @Date: 2022-01-28 09:30:20
 * @LastEditTime: 2022-02-22 11:34:32
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \vue-admin-self\src\views\class_system\index.vue
-->
<template>
  <div class="app-container">
    <h1>课表</h1>
    <h1>账单</h1>
    <el-container>
      <el-main>
        <el-header>demo
          <el-button @click="st_info = true">学生弹出框</el-button>
          <el-button @click="charge_info = true">账单弹出框</el-button>
          <el-button @click="add_class = true">课程弹出框</el-button>
        </el-header>
        <el-table border style="width: 100%" stripe :data="class_data">
          <el-table-column
            label="时间"
            sortable
            fixed
            align="center"
            prop="class_time"
            width="150px"
          />
          <el-table-column label="教室1" align="center">
            <el-table-column
              label="学生"
              sortable
              fixed
              align="center"
              prop="st_name"
              width="90px"
            />
            <el-table-column
              label="科目"
              sortable
              fixed
              align="center"
              prop="st_subject"
              width="90px"
            />
            <el-table-column
              label="老师"
              sortable
              fixed
              align="center"
              prop="teacher_name"
              width="90px"
            />
          </el-table-column>

          <el-table-column label="教室2" align="center">
            <el-table-column
              label="学生"
              sortable
              fixed
              align="center"
              prop="st_name"
              width="90px"
            />
            <el-table-column
              label="科目"
              sortable
              fixed
              align="center"
              prop="st_subject"
              width="90px"
            />
            <el-table-column
              label="老师"
              sortable
              fixed
              align="center"
              prop="teacher_name"
              width="90px"
            />
          </el-table-column>

          <el-table-column label="教室3" align="center">
            <el-table-column
              label="学生"
              sortable
              fixed
              align="center"
              prop="st_name"
              width="90px"
            />
            <el-table-column
              label="科目"
              sortable
              fixed
              align="center"
              prop="st_subject"
              width="90px"
            />
            <el-table-column
              label="老师"
              sortable
              fixed
              align="center"
              prop="teacher_name"
              width="90px"
            />
          </el-table-column>
        </el-table>
      </el-main>
    </el-container>
    <el-dialog title="学生信息" :visible.sync="st_info">
      <el-form inline>
        <el-form-item label="姓名：">
          <el-input placeholder="张辰洋" />
        </el-form-item>

        <el-form-item label="微信：">
          <el-input placeholder="12345678" />
        </el-form-item>
        <br>
        <el-form-item label="老师：">
          <el-button
            type="text"
            @click="teacher_info_drawer = true"
          >杜teacher（math）</el-button>

          <el-button
            type="text"
            @click="teacher_info_drawer = true"
          >刘teacher（English）</el-button>
        </el-form-item>

        <br>
        <el-form-item label="费用：">
          <el-input placeholder="300元/时" />
        </el-form-item>

        <el-form-item label="课时：">
          <el-input placeholder="2/10" />
        </el-form-item>
        <el-button @click="teacher_info_drawer = true">老师信息</el-button>
      </el-form>
    </el-dialog>
    <el-dialog title="账单弹出框" :visible.sync="charge_info">
      <el-table :data="class_data" stripe>
        <el-table-column
          label="学生"
          property="st_name"
          :filter-method="st_filter"
          :filters="[
            { text: '王凯硕', value: '王凯硕' },
            { text: '张辰洋', value: '张辰洋' },
            { text: '赵玉松', value: '赵玉松' },
          ]"
        >
          <template slot-scope="scope">
            <el-tag :type="scope.row.st_name === '张辰洋' ? 'success' : 'primary'">
              {{ scope.row.st_name }}
            </el-tag>
          </template>
        </el-table-column>
        <el-table-column
          label="老师姓名"
          property="teacher_name"
          sortable
          :filter-method="teacher_filter"
          :filters="[
            { text: '刘佳珺', value: '刘佳珺' },
            { text: '杜雨菲', value: '杜雨菲' },
          ]"
        >
          <template slot-scope="scope">
            <el-tag :type="scope.row.teacher_name === '刘老师' ? 'success' : 'primary'">
              {{ scope.row.teacher_name }}
            </el-tag>
          </template>
        </el-table-column>
        <el-table-column label="缴费时间" property="cz_time" sortable />
        <el-table-column label="缴纳额度" property="cz_free" sortable />
      </el-table>
      <span>1</span>
      <el-table border :data="income_data">
        <el-table-column label="收入：" prop="income_real" />

        <el-table-column label="在职老师数量" prop="staff_num" />
        <el-table-column label="预收账款" prop="income_zz" />
        <el-table-column label="预计收入" prop="income_yj" />

        <el-table-column label="实际收入" prop="income_real" />
      </el-table>
    </el-dialog>
    <el-dialog title="教室管理" :visible.sync="add_class">
      <el-form inline>
        <el-form-item label="学生姓名：" prop="st_name">
          <el-select
            v-model="class_data.st_name"
            clearable
            filterable
            placeholder="学生select，可以搜索的select"
          >
            <el-option
              v-for="item in st_name_op"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </el-form-item>

        <el-form-item label="学科选择：" prop="st_subject">
          <el-select
            v-model="class_data.st_subject"
            clearable
            filterable
            placeholder="学科select，可以搜索的select"
          >
            <el-option
              v-for="item in subject_op"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </el-form-item>
        <br>
        <el-form-item label="课时进度：">
          <el-input placeholder="5/10" />
        </el-form-item>
        <el-form-item label="老师姓名：" prop="teacher_name">
          <el-select
            v-model="class_data.teacher_name"
            clearable
            filterable
            placeholder="老师select，可以搜索的select"
          >
            <el-option
              v-for="item in teacher_op"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </el-form-item>

        <br>
        <el-button type="primary" @click="class_arrange">提交</el-button>
        <el-button>取消</el-button>
      </el-form>
    </el-dialog>
    <el-drawer title="老师信息" :visible.sync="teacher_info_drawer" :with-header="false">
      <span>老师信息</span>
      <el-form label-width="100px" label-position="left">
        <el-form-item label="姓名：">
          <el-input placeholder="杜雨菲(员工)" />
        </el-form-item>
        <el-form-item label="微信：">
          <el-input placeholder="5555555555" />
        </el-form-item>
        <el-form-item label="费用">
          <el-input placeholder="200" />
        </el-form-item>
        <el-form-item label="工资：">
          <el-input placeholder="+1600" />
        </el-form-item>
        <el-form-item label="已结算：">
          <el-input placeholder="3200" />
        </el-form-item>
      </el-form>
    </el-drawer>
  </div>
</template>
<script>
export default {
  name: 'ShowMe',
  data() {
    return {
      st_info: false,
      teacher_info_drawer: false,
      charge_info: false,
      add_class: false,
      income_data: [
        {
          income_real: '3000',
          staff_num: '2',
          income_zz: '14000',
          income_yj: '7000'
        }
      ],
      st_name_op: [
        { value: 'zds', label: '张德帅' },
        { value: 'wks', label: '王凯硕' },
        { value: 'zcy', label: '张辰洋' },
        { value: 'zys', label: '赵玉松' }
      ],

      subject_op: [
        { value: 'math', label: '数学' },
        { value: 'creature', label: '生物' },
        { value: 'physical', label: '物理' },
        { value: 'chemistry', label: '化学' }
      ],

      teacher_op: [
        { value: 'dyf', label: '杜雨菲' },
        { value: 'wks', label: '刘佳珺' }
      ],
      class_data: [
        {
          st_name: '张德帅',
          st_subject: 'math',
          teacher_name: '杜老师',
          class_time: '8:00-10:00',
          cz_time: '2022-1-28 10:39:00',
          cz_free: '2000'
        },
        {
          st_name: '王凯硕',
          st_subject: 'chemistry',
          teacher_name: '杜老师',
          class_time: '10:00-12:00',
          cz_time: '2020-12-28 10:39:00',
          cz_free: '4000'
        },
        {
          st_name: '',
          st_subject: '',
          teacher_name: '',
          class_time: '午休',
          cz_time: '2021-11-28 10:39:00',
          cz_free: '3000'
        },
        {
          st_name: '张辰洋',
          st_subject: 'English',
          teacher_name: '刘老师',
          class_time: '14:00-16:00',
          cz_time: '2021-2-28 10:39:00',
          cz_free: '1200'
        },
        {
          st_name: '赵玉松',
          st_subject: 'creature',
          teacher_name: '刘老师',
          class_time: '16:00-18:00',
          cz_time: '2021-3-28 10:39:00',
          cz_free: '3000'
        }
      ]
    }
  },
  methods: {
    st_filter(st_name, row) {
      return row.st_name === st_name
    },
    teacher_filter(teacher_name, row) {
      return row.teacher_name === teacher_name
    },
    class_arrange() {
      this.$message.success('提交成功，返回主页')
    }
  }
}
</script>
<style>
.el-input {
  width: 300px;
}

/* @media screen and (max-width: 500px) {
    .el-message {
      min-width: 300px !important;
    }
    .el-input {
      min-width: 68px !important;
    }
    .el-drawer {
      min-width: 300px !important;
    }

    .el-form {
      min-width: 300px !important;
      .el-form__body{
        padding: 10px 20px!important;

      .el-form-item__label{
        width: 68px!important;
      }
      .el-select,.el-input{
        width: 180px!important;
      }}
    }
   .el-dialog__wrapper .el-dialog {
      width: 300px !important;
      .el-dialog__body{
        padding: 10px 20px!important;
        .el-form-item__label{
          width: 68px!important;
        }
        .el-select,.el-input{
          width: 180px!important;
        }
      }
    }

} */
</style>

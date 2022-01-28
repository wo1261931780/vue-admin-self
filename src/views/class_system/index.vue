<!--
 * @Author: your name
 * @Date: 2022-01-28 09:30:20
 * @LastEditTime: 2022-01-28 10:58:44
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \vue-admin-self\src\views\class_system\index.vue
-->
<template>
  <div>
    <h1>课表</h1>
    <h1>账单</h1>
    <el-container>

      <el-main>
        <el-header>demo
          <el-button
            @click="st_info=true"
          >学生弹出框</el-button>
          <el-button
            @click="charge_info=true"
          >账单弹出框</el-button>
        </el-header>
        <el-table
          border
          style="width:100%"
          stripe
          :data="class_data"
        >
          <el-table-column
            label="时间"
            sortable
            fixed
            align="center"
            prop="class_time"
            width="150px"
          />
          <el-table-column
            label="教室1"
            align="center"
          >
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

          <el-table-column
            label="教室2"
            align="center"
          >
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

          <el-table-column
            label="教室3"
            align="center"
          >
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
    <el-dialog
      title="学生信息"
      :visible.sync="st_info"
    >
      <el-form
        inline
      >
        <el-form-item
          label="姓名："
        >
          <el-input placeholder="张三" />
        </el-form-item>

        <el-form-item
          label="老师："
        >
          <el-input placeholder="杜老师" />
        </el-form-item>

        <el-form-item
          label="微信："
        >
          <el-input placeholder="12345678" />
        </el-form-item>
        <br>
        <el-form-item
          label="费用："
        >
          <el-input placeholder="300元/时" />
        </el-form-item>

        <el-form-item
          label="课时："
        >
          <el-input placeholder="2/10" />
        </el-form-item>
        <el-button
          @click="teacher_info_drawer=true"
        >老师信息</el-button>
      </el-form>
    </el-dialog>
    <el-dialog
      title="账单弹出框"
      :visible.sync="charge_info"
    ><div>测试
     </div>
      <el-table
        :data="class_data"
        stripe
      >
        <el-table-column
          label="学生"
          property="st_name"
          :filter-method="st_filter"
          :filters="[{text:'222',value:'222'},
                     {text:'111',value:'111'},{text:'333',value:'333'},]"
        >
          <template slot-scope="scope">
            <el-tag
              :type="scope.row.st_name==='222'?'success':'primary'"
            >
              {{ scope.row.st_name }}
            </el-tag>

          </template>
        </el-table-column>
        <el-table-column
          label="老师姓名"
          property="teacher_name"
        />
        <el-table-column
          label="缴费时间"
          property="cz_time"
        />
        <el-table-column
          label="缴纳额度"
          property="cz_free"
        />
      </el-table>
      <span>1</span>
      <el-table
        border
        :data="income_data"
      >
        <el-table-column
          label="收入："
          prop="income_real"
        />

        <el-table-column
          label="在职老师数量"
          prop="staff_num"
        />
        <el-table-column
          label="预收账款"
          prop="income_zz"
        />
        <el-table-column
          label="预计收入"
          prop="income_yj"
        />

        <el-table-column
          label="实际收入"
          prop="income_real"
        />
      </el-table>

    </el-dialog>
    <el-drawer
      title="老师信息"
      :visible.sync="teacher_info_drawer"
      :with-header="false"
    >
      <span>老师信息</span>
      <el-form
        label-width="100px"
        label-position="left"
      >
        <el-form-item
          label="姓名："
        >
          <el-input placeholder="杜老师" />
        </el-form-item>
        <el-form-item
          label="微信："
        >
          <el-input placeholder="5555555555" />
        </el-form-item>
        <el-form-item
          label="费用"
        >
          <el-input placeholder="200" />
        </el-form-item>
        <el-form-item
          label="工资："
        >
          <el-input placeholder="+1600" />
        </el-form-item>
        <el-form-item
          label="已结算："
        >
          <el-input placeholder="3200" />
        </el-form-item>

      </el-form>

    </el-drawer></div>
</template>
<script>

export default {
  data() {
    return {
      st_info: false,
      teacher_info_drawer: false,
      charge_info: false,
      income_data: [{
        income_real: '3000',
        staff_num: '2',
        income_zz: '14000',
        income_yj: '7000'
      }],
      class_data: [{
        st_name: '222',
        st_subject: 'math',
        teacher_name: 'du',
        class_time: '8:00-10:00',
        cz_time: '2022-1-28 10:39:00',
        cz_free: '2000'
      },
      {
        st_name: '111',
        st_subject: 'math',
        teacher_name: 'du',
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
        st_name: '333',
        st_subject: 'math',
        teacher_name: 'du',
        class_time: '14:00-16:00',
        cz_time: '2021-2-28 10:39:00',
        cz_free: '1200'
      },
      {
        st_name: '222',
        st_subject: 'math',
        teacher_name: 'du',
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
    }
  }
}
</script>
<style>
.el-input{
    width: 300px;
}
</style>


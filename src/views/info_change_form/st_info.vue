<!--
 * @Author: your name
 * @Date: 2022-01-27 10:40:23
 * @LastEditTime: 2022-01-27 21:11:45
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \vue-admin-self\src\views\register_form\index.vue
-->
<template>
  <div class="app-container">
    <el-form
      ref="student_data"
      :model="student_data"
      inline="true"
      label-position="left"
      label-width="120px"
      :rules="teacher_rule"
    >
      <el-form-item
        label="name_input"
        prop="name_input"
      >
        <el-input
          v-model="student_data.name_input"
          placeholder="请输入姓名"
          maxlength="5"
          show-word-limit
          clearable
        />
      </el-form-item>
      <el-form-item label="请选择性别">
        <el-radio-group v-model="student_data.sex">
          <el-radio label="male" />
          <el-radio label="female" /></el-radio-group>
      </el-form-item>
      <br>
      <el-form-item
        label="address_area"
      >
        <el-input
          placeholder="学生住址不强制"
          maxlength="50"
          show-word-limit
          clearable
        />
      </el-form-item>
      <el-form-item
        label="register_time"
      >
        <el-input
          v-model="student_data.register_time"
          placeholder="账号注册时间"
          disabled
        />
      </el-form-item>
      <br>
      <el-form-item
        label="tel_input"
        prop="tel_input"
      >
        <el-input
          v-model="student_data.tel_input"
          placeholder="电话"
          maxlength="11"
          show-word-limit
          clearable
        />
      </el-form-item>
      <el-form-item label="wechat">
        <el-input
          v-model="student_data.wechat_input"
          placeholder="微信"
        />
      </el-form-item>
      <br>

      <el-form-item label="school">
        <el-input
          v-model="student_data.school_input"
          placeholder="学校，可以搜索的select"
        />
      </el-form-item>

      <br>

      <el-form-item
        label="teach_input"
        prop="teach_input"
      >
        <el-checkbox-group v-model="student_data.teach_input">
          <el-checkbox label="小学" />
          <el-checkbox label="初中" />
          <el-checkbox label="高中" />
        </el-checkbox-group>
      </el-form-item>

      <br>

      <el-form-item
        label="class_input"
        prop="class_input"
      >
        <el-input
          v-model="student_data.class_input"
          placeholder="年级,应该是select"
        />
      </el-form-item>

      <br>
      <el-form-item
        label="请选择科目："
        prop="subject_checkbox"
      >
        <el-checkbox-group v-model="student_data.subject_checkbox">
          <el-checkbox label="math" />
          <el-checkbox label="chine" />
          <el-checkbox label="eng" />
          <el-checkbox label="pych" />
          <el-checkbox label="ches" />
        </el-checkbox-group>
      </el-form-item>
      <br>
      <el-button @click="history_info=true">点击查看课程记录</el-button>
      <hr>
      <el-form-item label="备注：">
        <el-input v-model="student_data.desc" type="textarea" placeholder="备注可以不填写" />
      </el-form-item>
    </el-form>
    <el-button type="primary">提交</el-button>
    <el-button>取消</el-button>

    <el-dialog
      title="排课情况"
      :visible.sync="history_info"
    >
      <el-table
        :data="st_history_info"
        style="width:100%"
        stripe
        border
        show-summary="true"
        height="400px"
      >
        <el-table-column
          label="时间"
          width="200px"
          align="center"
          prop="st_info_class_time"
          fixed
          sortable
        />
        <el-table-column
          label="科目"
          width="150px"
          align="center"
          prop="st_info_subject"
          sortable
          :filters="[{text:'数学',value:'math'},{text:'语文',value:'Chinese'}]"
        >
          <template slot-scope="scope">
            <el-tag
              :type="scope.row.st_info_subject==='math'?'primary':'danger'"
            >
              {{ scope.row.st_info_subject }}
            </el-tag>
          </template></el-table-column>
        <el-table-column
          label="老师姓名"
          width="150px"
          align="center"
          prop="info_teacher_name"
          sortable
          :filters="[{text:'杜老师',value:'杜老师'},{text:'刘老师',value:'刘老师'}]"
        >
          <template slot-scope="scope">
            <el-tag
              :type="scope.row.info_teacher_name==='杜老师'?'primary':'success'"
            >
              {{ scope.row.info_teacher_name }}
            </el-tag>
          </template>
        </el-table-column>
        <el-table-column label="时长" width="150px" align="center" prop="st_info_profit" />
        <el-table-column label="课时" width="150px" align="center" prop="st_info_profit" />
      </el-table></el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      history_info: false,
      student_data: {
        name_input: '',
        subject_checkbox: [],
        sex: '',
        teach_input: [],
        desc: '',
        address_area: '',
        register_time: '2022-1-27 18:03:57',
        tel_input: '',
        wechat_input: '',
        school_input: '',
        class_input: ''
      },
      st_history_info: [{ st_info_class_time: '2022年1月27日20:40:31', st_info_subject: 'math', info_teacher_name: '杜老师', st_info_profit: '1.5' },
        { st_info_class_time: '2022年8月27日20:40:31', st_info_subject: 'Chinese', info_teacher_name: '杜老师', st_info_profit: '2' },
        { st_info_class_time: '2022年2月27日20:40:31', st_info_subject: 'math', info_teacher_name: '刘老师', st_info_profit: '1' },
        { st_info_class_time: '2022年5月27日20:40:31', st_info_subject: 'math', info_teacher_name: '刘老师', st_info_profit: '2' },
        { st_info_class_time: '2022年4月27日20:40:31', st_info_subject: 'Chinese', info_teacher_name: '杜老师', st_info_profit: '1' },
        { st_info_class_time: '2021年1月27日20:40:31', st_info_subject: 'math', info_teacher_name: '杜老师', st_info_profit: '2' },
        { st_info_class_time: '2022年3月27日20:40:31', st_info_subject: 'Chinese', info_teacher_name: '杜老师', st_info_profit: '1' }],
      teacher_rule: {
        name_input: [
          { required: true, message: '请输入姓名', trigger: 'change' },
          { min: 2, max: 5, message: '最少2个字', trigger: 'change' }
        ],
        teach_input: [{ type: 'array', required: true, message: '请选择授课级别', trigger: 'change' }],
        subject_checkbox: [
          { type: 'array', required: true, message: '请至少选择一个', trigger: 'change' }
        ],
        sex: [],
        desc: [],
        address_area: [],
        tel_input: [
          { required: true, message: '请输入电话', trigger: 'change' },
          { min: 8, max: 11, message: '号码8-11位', trigger: 'change' }
        ],
        wechat_input: [],
        school_input: [{ required: true, message: '请输入院校', trigger: 'change' }],
        class_input: [{ required: true, message: '请输入学历', trigger: 'change' }]
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

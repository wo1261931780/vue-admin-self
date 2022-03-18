<!--
 * @Author: your name
 * @Date: 2022-01-27 10:40:23
 * @LastEditTime: 2022-03-18 22:16:42
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \vue-admin-self\src\views\register_form\index.vue
-->
<template>
  <div class="app-container">
    <el-form
      ref="teacher_data"
      :model="teacher_data"
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
          v-model="teacher_data.name_input"
          placeholder="请输入姓名"
          maxlength="5"
          show-word-limit
          clearable
        />
      </el-form-item>
      <el-form-item label="请选择性别">
        <el-radio-group v-model="teacher_data.sex">
          <el-radio label="male" />
          <el-radio label="female" /></el-radio-group>
      </el-form-item>
      <br>
      <el-form-item
        label="address_area"
        prop="address_area"
      >
        <el-input
          v-model="teacher_data.address_area"
          placeholder="请输入住址"
          maxlength="50"
          show-word-limit
          clearable
        />
      </el-form-item>
      <br>
      <el-form-item
        label="tel_input"
        prop="tel_input"
      >
        <el-input
          v-model="teacher_data.tel_input"
          placeholder="电话"
          maxlength="11"
          show-word-limit
          clearable
        />
      </el-form-item>
      <el-form-item label="wechat">
        <el-input
          v-model="teacher_data.wechat_input"
          placeholder="微信"
        />
      </el-form-item>
      <br>
      <el-form-item
        label="degree_input"
        prop="degree_input"
      >

        <el-select
          v-model="teacher_data.degree_input"
          clearable
          filterable
          placeholder="学历，可以搜索的select"
        >
          <el-option
            v-for="item in degree_op"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />

        </el-select>
      </el-form-item>
      <el-form-item label="school">

        <el-select
          v-model="teacher_data.school_input"
          clearable
          filterable
          placeholder="学校，可以搜索的select"
        >
          <el-option
            v-for="item in school_op"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />

        </el-select>
      </el-form-item>
      <br>

      <el-form-item
        label="teach_input"
        prop="teach_input"
      >
        <el-checkbox-group v-model="teacher_data.teach_input">
          <el-checkbox label="小学" />
          <el-checkbox label="初中" />
          <el-checkbox label="高中" />
        </el-checkbox-group>
      </el-form-item>

      <br>
      <el-form-item
        label="请选择科目："
        prop="subject_checkbox"
      >
        <el-checkbox-group v-model="teacher_data.subject_checkbox">
          <el-checkbox label="math" />
          <el-checkbox label="chine" />
          <el-checkbox label="eng" />
          <el-checkbox label="pych" />
          <el-checkbox label="ches" />
        </el-checkbox-group>
      </el-form-item>
      <br>
      <hr>
      <el-form-item label="备注：">
        <el-input v-model="teacher_data.desc" type="textarea" placeholder="备注可以不填写" />
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
      teacher_data: {
        name_input: '',
        subject_checkbox: [],
        sex: '',
        teach_input: [],
        desc: '',
        address_area: '',
        tel_input: '',
        wechat_input: '',
        school_input: '',
        degree_input: ''
      },
      degree_op: [{
        value: 'benke',
        label: '本科'
      }, {
        value: 'shuoshi',
        label: '硕士'
      }, {
        value: 'boshi',
        label: '博士'
      }],
      school_op: [{
        value: 'qju',
        label: '清华大学'
      }, {
        value: 'bju',
        label: '北京大学'
      }, {
        value: 'nju',
        label: '南京大学'
      }],
      degree_model: '',
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
        address_area: [{ required: true, message: '请输入地址', trigger: 'change' }],
        tel_input: [
          { required: true, message: '请输入电话', trigger: 'change' },
          { min: 8, max: 11, message: '号码8-11位', trigger: 'change' }
        ],
        wechat_input: [],
        school_input: [{ required: true, message: '请输入院校', trigger: 'change' }],
        degree_input: [{ required: true, message: '请输入学历', trigger: 'change' }]
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

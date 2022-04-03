<template>
  <div class="app-container">
    <el-form ref="sex" :model="formData" :rules="rules" size="medium" label-width="110px">
      <el-row>
        <el-col :span="12">
          <el-form-item label="姓名" prop="name_input">
            <el-input
              v-model="formData.name_input"
              placeholder="请输入姓名"
              :maxlength="5"
              show-word-limit
              clearable
              prefix-icon="el-icon-user-solid"
              :style="{width: '100%'}"
            />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="性别" prop="field127">
            <el-radio-group v-model="formData.field127" size="medium">
              <el-radio-button
                v-for="(item, index) in field127Options"
                :key="index"
                :label="item.value"
                :disabled="item.disabled"
              >{{ item.label }}</el-radio-button>
            </el-radio-group>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="注册时间" prop="field105">
            <el-input
              v-model="formData.field105"
              placeholder="请输入注册时间"
              :maxlength="50"
              show-word-limit
              :disabled="true"
              clearable
              :style="{width: '100%'}"
            />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="注册员工" prop="field144">
            <el-input
              v-model="formData.field144"
              placeholder="请输入注册员工"
              :maxlength="50"
              show-word-limit
              :disabled="true"
              clearable
              :style="{width: '100%'}"
            />
          </el-form-item>
        </el-col>
        <el-form-item label="地址" prop="field143">
          <el-input
            v-model="formData.field143"
            placeholder="请输入地址"
            :maxlength="50"
            show-word-limit
            clearable
            :style="{width: '100%'}"
          />
        </el-form-item>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="电话" prop="field108">
            <el-input
              v-model="formData.field108"
              placeholder="请输入电话"
              :maxlength="11"
              show-word-limit
              clearable
              :style="{width: '100%'}"
            />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="微信" prop="field109">
            <el-input
              v-model="formData.field109"
              placeholder="请输入微信"
              show-word-limit
              clearable
              :style="{width: '100%'}"
            />
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="学校" prop="field111">
            <el-select
              v-model="formData.field111"
              placeholder="请输入学校"
              filterable
              clearable
              :style="{width: '100%'}"
            >
              <el-option
                v-for="item in field111"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="授课等级" prop="field138">
            <el-radio-group v-model="formData.field138" size="medium">
              <el-radio
                v-for="(item, index) in field138Options"
                :key="index"
                :label="item.value"
                :disabled="item.disabled"
              >{{ item.label }}</el-radio>
            </el-radio-group>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="所在年级" prop="field139">
            <el-radio-group v-model="formData.field139" size="medium">
              <el-radio
                v-for="(item, index) in field139Options"
                :key="index"
                :label="item.value"
                :disabled="item.disabled"
              >{{ item.label }}</el-radio>
            </el-radio-group>
          </el-form-item>
        </el-col>
        <el-form-item label="授课科目" prop="field140">
          <el-checkbox-group v-model="formData.field140" :min="1" :max="5" size="medium">
            <el-checkbox-button
              v-for="(item, index) in field140Options"
              :key="index"
              :label="item.value"
              :disabled="item.disabled"
            >{{ item.label }}</el-checkbox-button>
          </el-checkbox-group>
        </el-form-item>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label-width="120px" label="是否指定老师" prop="field136">
            <el-radio-group v-model="formData.field136" size="medium">
              <el-radio
                v-for="(item, index) in field136Options"
                :key="index"
                :label="item.value"
                :disabled="item.disabled"
              >{{ item.label }}</el-radio>
            </el-radio-group>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="指定老师" prop="field134">
            <el-select
              v-model="formData.field134"
              placeholder="请输入指定老师"
              filterable
              clearable
              :style="{width: '100%'}"
            >
              <el-option
                v-for="item in field134"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select></el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-form-item label="备注：" prop="field114">
          <el-input
            v-model="formData.field114"
            type="textarea"
            placeholder="请输入备注："
            :maxlength="200"
            show-word-limit
            :autosize="{minRows: 4, maxRows: 4}"
            :style="{width: '100%'}"
          />
        </el-form-item>
        <el-col :span="7">
          <el-form-item label="" prop="field146">
            <el-button type="primary" icon="el-icon-search" size="medium"> 查看课程记录 </el-button>
            <el-button @click="history_info=true">点击查看课程记录</el-button>
          </el-form-item>
        </el-col>
        <el-col :span="7">
          <el-form-item label="" prop="field147">
            <el-button type="primary" icon="el-icon-search" size="medium"> 修改课时费 </el-button>
          </el-form-item>
        </el-col>
      </el-row>
      <el-form-item size="large">
        <el-button type="primary" @click="submitForm">提交</el-button>
        <el-button @click="resetForm">重置</el-button>
      </el-form-item>
    </el-form>
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
  components: {},
  props: [],
  data() {
    return {
      history_info: false,
      st_history_info: [{ st_info_class_time: '2022年1月27日20:40:31', st_info_subject: 'math', info_teacher_name: '杜老师', st_info_profit: '1.5' },
        { st_info_class_time: '2022年8月27日20:40:31', st_info_subject: 'Chinese', info_teacher_name: '杜老师', st_info_profit: '2' },
        { st_info_class_time: '2022年2月27日20:40:31', st_info_subject: 'math', info_teacher_name: '刘老师', st_info_profit: '1' },
        { st_info_class_time: '2022年5月27日20:40:31', st_info_subject: 'math', info_teacher_name: '刘老师', st_info_profit: '2' },
        { st_info_class_time: '2022年4月27日20:40:31', st_info_subject: 'Chinese', info_teacher_name: '杜老师', st_info_profit: '1' },
        { st_info_class_time: '2021年1月27日20:40:31', st_info_subject: 'math', info_teacher_name: '杜老师', st_info_profit: '2' },
        { st_info_class_time: '2022年3月27日20:40:31', st_info_subject: 'Chinese', info_teacher_name: '杜老师', st_info_profit: '1' }],
      formData: {
        name_input: undefined,
        field127: undefined,
        field105: undefined,
        field144: undefined,
        field143: undefined,
        field108: undefined,
        field109: undefined,
        field111: '',
        field138: '',
        field139: '',
        field140: [''],
        field136: [],
        field134: '',
        field114: undefined,
        field146: undefined,
        field147: undefined
      },
      rules: {
        name_input: [{
          required: true,
          message: '请输入姓名',
          trigger: 'blur'
        }],
        field127: [{
          required: true,
          message: '性别不能为空',
          trigger: 'change'
        }],
        field105: [],
        field144: [],
        field143: [],
        field108: [{
          required: true,
          message: '请输入电话',
          trigger: 'blur'
        }],
        field109: [],
        field111: [{
          required: true,
          message: '请输入学校',
          trigger: 'change'
        }],
        field138: [{
          required: true,
          message: '授课等级不能为空',
          trigger: 'change'
        }],
        field139: [{
          required: true,
          message: '所在年级不能为空',
          trigger: 'change'
        }],
        field140: [{
          required: true,
          type: 'array',
          message: '请至少选择一个授课科目',
          trigger: 'change'
        }],
        field136: [{
          required: true,
          type: 'array',
          message: '请至少选择一个是否指定老师',
          trigger: 'change'
        }],
        field134: [{
          required: true,
          message: '请输入指定老师',
          trigger: 'change'
        }],
        field114: [{
          required: true,
          message: '请输入备注：',
          trigger: 'blur'
        }]
      },
      field111: [{ value: 'zk', label: '清华大学' },
        { value: 'dyf', label: '北京大学' },
        { value: 'wks', label: '厦门大学' }],
      field134: [{ value: 'zk', label: '刘佳珺' },
        { value: 'dyf', label: '杜雨菲' },
        { value: 'wks', label: '刘佳珺2' }],
      field127Options: [{
        'label': '女',
        'value': 1
      }, {
        'label': '男',
        'value': 2
      }],
      field138Options: [{
        'label': '初中',
        'value': 1
      }, {
        'label': '高中',
        'value': 2
      }],
      field139Options: [{
        'label': '一年级',
        'value': 1
      }, {
        'label': '二年级',
        'value': 2
      }, {
        'label': '三年级',
        'value': 3
      }],
      field140Options: [{
        'label': '数学',
        'value': 1
      }, {
        'label': '英语',
        'value': 2
      }, {
        'label': '物理',
        'value': 3
      }, {
        'label': '化学',
        'value': 4
      }, {
        'label': '语文',
        'value': 5
      }],
      field136Options: [{
        'label': '是',
        'value': 1
      }, {
        'label': '否',
        'value': 2
      }]
    }
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {
    submitForm() {
      this.$refs['sex'].validate(valid => {
        if (!valid) return
        // TODO 提交表单
      })
    },
    resetForm() {
      this.$refs['sex'].resetFields()
    }
  }
}

</script>
<style>
</style>

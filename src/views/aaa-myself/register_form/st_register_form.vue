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
        <el-form-item label="地址" prop="field105">
          <el-input
            v-model="formData.field105"
            type="textarea"
            placeholder="请输入地址"
            :maxlength="50"
            show-word-limit
            :autosize="{minRows: 4, maxRows: 4}"
            :style="{width: '100%'}"
          />
        </el-form-item>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="电话" prop="field108">
            <el-input v-model="formData.field108" placeholder="请输入电话" clearable :style="{width: '100%'}" />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="微信" prop="field109">
            <el-input v-model="formData.field109" placeholder="请输入微信" clearable :style="{width: '100%'}" />
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
            </el-select></el-form-item>
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
      </el-row>
      <el-form-item size="large">
        <el-button type="primary" @click="submitForm">提交</el-button>
        <el-button @click="resetForm">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  components: {},
  props: [],
  data() {
    return {
      formData: {
        name_input: undefined,
        field127: undefined,
        field105: undefined,
        field108: undefined,
        field109: undefined,
        field110: '请选择',
        field111: '',
        field138: '',
        field139: '',
        field140: [''],
        field136: [],
        field134: '',
        field114: undefined
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
        field108: [{
          required: true,
          message: '请输入电话',
          trigger: 'blur'
        }],
        field109: [],
        field110: [{
          required: true,
          message: '请输入学历',
          trigger: 'change'
        }],
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

<template>
  <div class="p15 framework-component__wrapper">
    <div>
      <el-form
        ref="formModel"
        :disabled="formModelDisabled"
        :model="formModelData"
        :rules="formModelRules"
        :hide-required-asterisk="true"
        label-width="125px"
        label-position="right"
      >
        <el-row :gutter="15">
          <el-col :span="24" style="width:100%;">
            <el-row :gutter="15">
              <el-col v-if="formModelControl.field104.isShow" :span="6" :offset="0">
                <el-form-item-ex label="场景类型" prop="field104">
                  <!--                  <el-select v-model="formModelData.field104" placeholder="请输入场景类型"-->
                  <!--                             :disabled="formModelControl.field104.disabled" clearable :style="{width: '100%'}">-->
                  <!--                    <el-option v-for="(item, index) in formModelControl_field104Options" :key="index"-->
                  <!--                               :label="item.label" :value="item.value" :disabled="item.disabled"></el-option>-->
                  <!--                  </el-select>-->
                  <remote-dict
                    v-model="formModelData.field104"
                    :params="formModelControl.field104.params"
                    :disabled="formModelControl.field104.disabled"
                    placeholder="请输入场景类型"
                    clearable
                    :style="{width: '100%'}"
                  />
                </el-form-item-ex>
              </el-col>
              <el-col v-if="formModelControl.field105.isShow" :span="6" :offset="0">
                <el-form-item-ex label="场景ID" prop="field105">
                  <el-input
                    v-model="formModelData.field105"
                    placeholder="请输入场景ID"
                    show-word-limit
                    :disabled="formModelControl.field105.disabled"
                    clearable
                    :style="{width: '100%'}"
                  />
                </el-form-item-ex>
              </el-col>
              <el-col v-if="formModelControl.field106.isShow" :span="6" :offset="0">
                <el-form-item-ex label="场景名称" prop="field106">
                  <el-input
                    v-model="formModelData.field106"
                    placeholder="请输入场景名称"
                    show-word-limit
                    :disabled="formModelControl.field106.disabled"
                    clearable
                    :style="{width: '100%'}"
                  />
                </el-form-item-ex>
              </el-col>
            </el-row>
          </el-col>
          <el-col :span="24" style="width:100%;">
            <el-row :gutter="15">
              <el-col v-if="formModelControl.field111.isShow" :span="23" :offset="0">
                <el-table
                  ref="formModel_field111"
                  highlight-current-row
                  stripe
                  border
                  height="450"
                  :data="formModelControl.field111.tableData"
                  style="width:100%;"
                  @current-change="formModel_field111_handleCurrentChange"
                >
                  <el-table-column
                    type="index"
                    width="50"
                    label="序号"
                  >
                    <template slot-scope="scope">
                      <span>{{ scope.$index + 1 }}</span>
                    </template>
                  </el-table-column>
                  <el-table-column
                    v-for="(th, key) in formModelControl.field111.tableHeader"
                    :key="key"
                    :show-overflow-tooltip="true"
                    :fixed="key<0"
                    :prop="th.prop"
                    :formatter="th.formatter"
                    :label="th.label"
                    :min-width="th.width"
                  />
                  <table-column prop="operator">
                    <template slot-scope="scope">
                      <remote-dict
                        v-model="scope.row.operator"
                        :params="{data:{codeType:'BUSINESS_SCENARIO_TYPE'}}"
                        type="span"
                        :style="{width: '100%'}"
                      />
                    </template>
                  </table-column>
                </el-table>
              </el-col>
              <el-col :span="24" style="width:100%;">
                <el-row :gutter="15">
                  <el-col v-if="formModelControl.field113.isShow" :span="23" :offset="0">
                    <el-form-item-ex label="规则表达式" prop="field113">
                      <el-input
                        v-model="formModelData.field113"
                        type="textarea"
                        placeholder="请输入规则表达式"
                        show-word-limit
                        :disabled="formModelControl.field113.disabled"
                        :autosize="{minRows: 2, maxRows: 4}"
                        :style="{width: '100%'}"
                      />
                    </el-form-item-ex>
                  </el-col>
                </el-row>
              </el-col>
            </el-row>
          </el-col>
          <el-col :span="24" style="width:100%;">
            <el-row :gutter="15">
              <el-col v-if="formModelControl.field115.isShow" :span="23" :offset="0">
                <el-table
                  ref="formModel_field115"
                  highlight-current-row
                  stripe
                  border
                  height="450"
                  :data="formModelControl.field115.tableData"
                  style="width:100%;"
                  @current-change="formModel_field115_handleCurrentChange"
                >
                  <el-table-column
                    v-for="(th, key) in formModelControl.field115.tableHeader"
                    :key="key"
                    :show-overflow-tooltip="true"
                    :fixed="key<0"
                    :prop="th.prop"
                    :formatter="th.formatter"
                    :label="th.label"
                    :min-width="th.width"
                  />
                </el-table>
              </el-col>
            </el-row>
          </el-col>
        </el-row>
      </el-form>
    </div>
  </div>
</template>
<script>
import bizFormMixin from '@/mixins/biz-form'

export default {
  name: '',
  components: {},
  mixins: [bizFormMixin],
  props: [],
  data() {
    return {
      formModelDisabled: false,
      formModelData: {
        field104: undefined,
        field105: undefined,
        field106: undefined,
        field113: undefined
      },
      formModelControl: {
        field104: {
          isShowType: 'v-if',
          isShow: true,
          disabled: false,
          params: {
            'data': {
              'codeType': 'BUSINESS_SCENARIO_TYPE'
            }
          },
          url: undefined
        },
        field105: {
          isShowType: 'v-if',
          isShow: true,
          disabled: true
        },
        field106: {
          isShowType: 'v-if',
          isShow: true,
          disabled: false
        },
        field111: {
          isShowType: 'v-if',
          isShow: true,
          disabled: false,
          tableHeader: [{
            'prop': 'pubconditionId',
            'label': 'ID',
            'width': 120
          }, {
            'prop': 'conditionName',
            'label': '名称',
            'width': 120
          }, {
            'prop': 'leftVarType',
            'label': '变量数据类型',
            'width': 120

          }, {
            'prop': 'leftVarName',
            'label': '左侧变量名',
            'width': 120
          }, {
            'prop': 'operator2',
            'label': '运算符',
            'width': 120
          }, {
            'prop': 'rightVarName',
            'label': '右侧变量名',
            'width': 120
          }, {
            'prop': 'operator',
            'label': '测试',
            'width': 120
          }],
          url: undefined,
          tableData: [{
            'pubconditionId': '1',
            'conditionName': '2',
            'leftVarType': '3',
            'leftVarName': '4',
            'operator2': '5',
            'rightVarName': '6',
            'result': '7'
          }],
          currentRow: null
        },
        field113: {
          isShowType: 'v-if',
          isShow: true,
          disabled: false
        },
        field115: {
          isShowType: 'v-if',
          isShow: true,
          disabled: false,
          tableHeader: [{
            'prop': '',
            'label': 'ID',
            'width': 120
          }, {
            'prop': '',
            'label': '变量名称',
            'width': 120
          }, {
            'prop': '',
            'label': '变量结果',
            'width': 120
          }],
          url: undefined,
          tableData: [],
          currentRow: null
        }
      },
      formModelRules: {
        field104: [{
          required: true,
          message: '请输入场景类型',
          trigger: 'blur'
        }, {
          required: true,
          message: '请输入场景类型',
          trigger: 'change'
        }],
        field105: [{
          required: false,
          message: '请输入场景ID',
          trigger: 'blur'
        }, {
          required: false,
          message: '请输入场景ID',
          trigger: 'change'
        }],
        field106: [{
          required: true,
          message: '请输入场景名称',
          trigger: 'blur'
        }, {
          required: true,
          message: '请输入场景名称',
          trigger: 'change'
        }],
        field113: [{
          required: true,
          message: '请输入规则表达式',
          trigger: 'blur'
        }, {
          required: true,
          message: '请输入规则表达式',
          trigger: 'change'
        }]
      },
      formModelControl_field104Options: [{
        'label': '选项一',
        'value': 1
      }, {
        'label': '选项二',
        'value': 2
      }]
    }
  },
  computed: {},
  watch: {},
  created() {
  },
  mounted() {
  },
  methods: {
    /* 搜索表格field111选中行*/
    formModel_field111_handleCurrentChange(val) {
      this.formModelControl.field111.currentRow = val
    },
    /* 搜索表格field115选中行*/
    formModel_field115_handleCurrentChange(val) {
      this.formModelControl.field115.currentRow = val
    }
  }
}

</script>
<style scoped>
</style>

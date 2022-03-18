<!--
 * @Author: your name
 * @Date: 2022-03-18 22:50:57
 * @LastEditTime: 2022-03-18 22:53:55
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \vue-admin-self\src\views\class_system2\index.vue
-->
<template>
  <div>
    <el-form
      ref="formModel"
      :disabled="formModelDisabled"
      :model="formModelData"
      :rules="formModelRules"
      :hide-required-asterisk="true"
      label-width="110px"
      label-position="right"
    >
      <el-row :gutter="15">
        <el-col :span="24" style="width:100%;">
          <el-row :gutter="15" />
        </el-col>
        <el-col v-if="formModelControl.field127.isShow" :span="24" :offset="0">
          <el-table
            ref="formModel_field127"
            highlight-current-row
            stripe
            border
            height="600"
            :data="formModelControl.field127.tableData"
            style="width:100%;"
            @current-change="formModel_field127_handleCurrentChange"
          >
            <el-table-column
              v-for="(th, key) in formModelControl.field127.tableHeader"
              :key="key"
              :show-overflow-tooltip="true"
              :fixed="key<1"
              :prop="th.prop"
              :formatter="th.formatter"
              :label="th.label"
              :min-width="th.width"
            />
          </el-table>
        </el-col>
        <el-col v-if="formModelControl.field128.isShow" :span="24" :offset="0">
          <el-divider-ex>分隔线</el-divider-ex>
        </el-col>
        <el-col v-if="formModelControl.field126.isShow" :span="6" :offset="0">
          <el-form-item-ex label="" prop="field126" prepend-icon="enterprise">
            <el-button
              :loading="formModelControl.field126.loading"
              type="text"
              :disabled="formModelControl.field126.disabled"
              @click.native="formModel_field126ClickHandler"
            > 学生信息 </el-button>
          </el-form-item-ex>
        </el-col>
        <!--field126的弹窗表单开始-Start-->
        <el-dialog
          append-to-body
          :close-on-click-modal="false"
          title="学生信息"
          v-bind="$attrs"
          :visible.sync="field126_formModelVisible"
          v-on="$listeners"
        >
          <div class="el-dialog--inner">
            <el-form
              ref="field126_formModel"
              :disabled="field126_formModelDisabled"
              :model="field126_formModelData"
              :rules="field126_formModelRules"
              :hide-required-asterisk="true"
              label-width="125px"
              label-position="right"
            >
              <el-row :gutter="15">
                <el-col :span="24" style="width:100%;">
                  <el-row :gutter="15">
                    <el-col v-if="field126_formModelControl.field144.isShow" :span="12" :offset="0">
                      <el-form-item-ex label="姓名：" prop="field144">
                        <el-input
                          v-model="field126_formModelData.field144"
                          placeholder="请输入姓名："
                          show-word-limit
                          :disabled="field126_formModelControl.field144.disabled"
                          clearable
                          :style="{width: '100%'}"
                        />
                      </el-form-item-ex>
                    </el-col>
                    <el-col v-if="field126_formModelControl.field145.isShow" :span="12" :offset="0">
                      <el-form-item-ex label="微信" prop="field145">
                        <el-input
                          v-model="field126_formModelData.field145"
                          placeholder="请输入微信"
                          show-word-limit
                          :disabled="field126_formModelControl.field145.disabled"
                          clearable
                          :style="{width: '100%'}"
                        />
                      </el-form-item-ex>
                    </el-col>
                  </el-row>
                </el-col>
                <el-col :span="24" style="width:100%;">
                  <el-row :gutter="15">
                    <el-col v-if="field126_formModelControl.field141.isShow" :span="12" :offset="0">
                      <el-form-item-ex label="费用" prop="field141">
                        <el-input
                          v-model="field126_formModelData.field141"
                          placeholder="请输入费用"
                          show-word-limit
                          readonly
                          :disabled="field126_formModelControl.field141.disabled"
                          clearable
                          :style="{width: '100%'}"
                        />
                      </el-form-item-ex>
                    </el-col>
                    <el-col v-if="field126_formModelControl.field142.isShow" :span="12" :offset="0">
                      <el-form-item-ex label="课时：" prop="field142">
                        <el-input
                          v-model="field126_formModelData.field142"
                          placeholder="请输入课时："
                          show-word-limit
                          :disabled="field126_formModelControl.field142.disabled"
                          clearable
                          :style="{width: '100%'}"
                        />
                      </el-form-item-ex>
                    </el-col>
                  </el-row>
                </el-col>
                <el-col :span="24" style="width:100%;">
                  <el-row :gutter="15">
                    <el-col v-if="field126_formModelControl.field146.isShow" :span="12" :offset="0">
                      <el-form-item-ex label="按钮" prop="field146">
                        <el-button
                          :loading="field126_formModelControl.field146.loading"
                          type="primary"
                          icon="el-icon-document"
                          :disabled="field126_formModelControl.field146.disabled"
                          @click.native="field126_formModel_field146ClickHandler"
                        > 查看
                        </el-button>
                      </el-form-item-ex>
                    </el-col>
                  </el-row>
                </el-col>
                <el-col :span="24" style="width:100%;">
                  <el-row :gutter="15">
                    <el-col v-if="field126_formModelControl.field169.isShow" :span="12" :offset="0">
                      <el-form-item-ex label="科目" prop="field169">
                        <el-select
                          v-model="field126_formModelData.field169"
                          placeholder="请输入科目"
                          :disabled="field126_formModelControl.field169.disabled"
                          multiple
                          filterable
                          clearable
                          :style="{width: '100%'}"
                        >
                          <el-option
                            v-for="(item, index) in field126_formModelControl_field169Options"
                            :key="index"
                            :label="item.label"
                            :value="item.value"
                            :disabled="item.disabled"
                          />
                        </el-select>
                      </el-form-item-ex>
                    </el-col>
                  </el-row>
                </el-col>
                <el-col :span="24" style="width:100%;">
                  <el-row :gutter="15">
                    <el-col v-if="field126_formModelControl.field139.isShow" :span="12" :offset="0">
                      <el-form-item-ex label="按钮" prop="field139">
                        <el-button
                          :loading="field126_formModelControl.field139.loading"
                          icon="el-icon-close"
                          :disabled="field126_formModelControl.field139.disabled"
                          @click.native="field126_formModel_field139ClickHandler"
                        > 取消 </el-button>
                      </el-form-item-ex>
                    </el-col>
                    <el-col v-if="field126_formModelControl.field138.isShow" :span="12" :offset="0">
                      <el-form-item-ex label="按钮" prop="field138">
                        <el-button
                          :loading="field126_formModelControl.field138.loading"
                          type="primary"
                          icon="el-icon-check"
                          :disabled="field126_formModelControl.field138.disabled"
                          @click.native="field126_formModel_field138ClickHandler"
                        > 确定
                        </el-button>
                      </el-form-item-ex>
                    </el-col>
                  </el-row>
                </el-col>
              </el-row>
            </el-form>
          </div>
          <span slot="footer">
            <!--手动把按钮粘贴到此处-->
          </span>
        </el-dialog>
        <!--field126的弹窗表单结束-End-->
        <el-col v-if="formModelControl.field147.isShow" :span="6" :offset="0">
          <el-form-item-ex label="" prop="field147" prepend-icon="enterprise">
            <el-button
              :loading="formModelControl.field147.loading"
              type="text"
              :disabled="formModelControl.field147.disabled"
              @click.native="formModel_field147ClickHandler"
            > 教室管理 </el-button>
          </el-form-item-ex>
        </el-col>
        <!--field147的弹窗表单开始-Start-->
        <el-dialog
          append-to-body
          :close-on-click-modal="false"
          title="教室管理"
          v-bind="$attrs"
          :visible.sync="copy_field126_formModelVisible"
          v-on="$listeners"
        >
          <div class="el-dialog--inner">
            <el-form
              ref="copy_field126_formModel"
              :disabled="copy_field126_formModelDisabled"
              :model="copy_field126_formModelData"
              :rules="copy_field126_formModelRules"
              :hide-required-asterisk="true"
              label-width="125px"
              label-position="right"
            >
              <el-row :gutter="15">
                <el-col :span="24" style="width:100%;">
                  <el-row :gutter="15">
                    <el-col v-if="copy_field126_formModelControl.field149.isShow" :span="12" :offset="0">
                      <el-form-item-ex label="学生姓名：" prop="field149" prepend-icon="bank">
                        <el-select
                          v-model="copy_field126_formModelData.field149"
                          placeholder="请输入学生姓名："
                          :disabled="copy_field126_formModelControl.field149.disabled"
                          multiple
                          filterable
                          clearable
                          :style="{width: '100%'}"
                        >
                          <el-option
                            v-for="(item, index) in copy_field126_formModelControl_field149Options"
                            :key="index"
                            :label="item.label"
                            :value="item.value"
                            :disabled="item.disabled"
                          />
                        </el-select>
                      </el-form-item-ex>
                    </el-col>
                    <el-col v-if="copy_field126_formModelControl.field162.isShow" :span="12" :offset="0">
                      <el-form-item-ex label="学科选择" prop="field162" prepend-icon="bank">
                        <el-select
                          v-model="copy_field126_formModelData.field162"
                          placeholder="请输入学科选择"
                          :disabled="copy_field126_formModelControl.field162.disabled"
                          multiple
                          filterable
                          clearable
                          :style="{width: '100%'}"
                        >
                          <el-option
                            v-for="(item, index) in copy_field126_formModelControl_field162Options"
                            :key="index"
                            :label="item.label"
                            :value="item.value"
                            :disabled="item.disabled"
                          />
                        </el-select>
                      </el-form-item-ex>
                    </el-col>
                  </el-row>
                </el-col>
                <el-col :span="24" style="width:100%;">
                  <el-row :gutter="15">
                    <el-col v-if="copy_field126_formModelControl.field153.isShow" :span="12" :offset="0">
                      <el-form-item-ex label="课时进度：" prop="field153">
                        <el-input
                          v-model="copy_field126_formModelData.field153"
                          placeholder="请输入课时进度："
                          show-word-limit
                          readonly
                          :disabled="copy_field126_formModelControl.field153.disabled"
                          clearable
                          :style="{width: '100%'}"
                        />
                      </el-form-item-ex>
                    </el-col>
                    <el-col v-if="copy_field126_formModelControl.field152.isShow" :span="12" :offset="0">
                      <el-form-item-ex label="老师姓名：" prop="field152">
                        <el-select
                          v-model="copy_field126_formModelData.field152"
                          placeholder="请输入老师姓名："
                          :disabled="copy_field126_formModelControl.field152.disabled"
                          filterable
                          clearable
                          :style="{width: '100%'}"
                        >
                          <el-option
                            v-for="(item, index) in copy_field126_formModelControl_field152Options"
                            :key="index"
                            :label="item.label"
                            :value="item.value"
                            :disabled="item.disabled"
                          />
                        </el-select>
                      </el-form-item-ex>
                    </el-col>
                  </el-row>
                </el-col>
                <el-col v-if="copy_field126_formModelControl.field165.isShow" :span="24" :offset="0">
                  <el-form-item-ex label="日期范围" prop="field165">
                    <el-date-picker
                      v-model="copy_field126_formModelData.field165"
                      type="datetimerange"
                      format="yyyy-MM-dd HH:mm:ss"
                      value-format="yyyy-MM-dd"
                      :style="{width: '100%'}"
                      start-placeholder="开始日期"
                      end-placeholder="结束日期"
                      range-separator="至"
                      clearable
                      :disabled="copy_field126_formModelControl.field165.disabled"
                    />
                  </el-form-item-ex>
                </el-col>
                <el-col :span="24" style="width:100%;">
                  <el-row :gutter="15">
                    <el-col v-if="copy_field126_formModelControl.field157.isShow" :span="12" :offset="0">
                      <el-form-item-ex label="按钮" prop="field157">
                        <el-button
                          :loading="copy_field126_formModelControl.field157.loading"
                          icon="el-icon-close"
                          :disabled="copy_field126_formModelControl.field157.disabled"
                          @click.native="copy_field126_formModel_field157ClickHandler"
                        > 取消 </el-button>
                      </el-form-item-ex>
                    </el-col>
                    <el-col v-if="copy_field126_formModelControl.field158.isShow" :span="12" :offset="0">
                      <el-form-item-ex label="按钮" prop="field158">
                        <el-button
                          :loading="copy_field126_formModelControl.field158.loading"
                          type="primary"
                          icon="el-icon-check"
                          :disabled="copy_field126_formModelControl.field158.disabled"
                          @click.native="copy_field126_formModel_field158ClickHandler"
                        >
                          确定 </el-button>
                      </el-form-item-ex>
                    </el-col>
                  </el-row>
                </el-col>
              </el-row>
            </el-form>
          </div>
          <span slot="footer">
            <!--手动把按钮粘贴到此处-->
          </span>
        </el-dialog>
        <!--field147的弹窗表单结束-End-->
        <el-col v-if="formModelControl.field130.isShow" :span="24" :offset="0">
          <el-form-item-ex label="弹窗查询" prop="field130">
            <el-input-search
              v-model="formModelData.field130"
              placeholder="请输入弹窗查询"
              show-word-limit
              :disabled="formModelControl.field130.disabled"
              clearable
              :style="{width: '100%'}"
              @returnRow="biz.field130ReturnRowHandler || biz.emptyFn('field130ReturnRowHandler')"
            />
          </el-form-item-ex>
        </el-col>
        <el-col v-if="formModelControl.field172.isShow" :span="24" :offset="0">
          <el-divider-ex>分隔线</el-divider-ex>
        </el-col>
        <el-col v-if="formModelControl.field132.isShow" :span="24" :offset="0">
          <el-form-item-ex label="下拉框查询" prop="field132">
            <search-dict
              ref="formModel_field132"
              v-model="formModelData.field132"
              curr-page="1"
              :disabled="formModelControl.field132.disabled"
              placeholder="请输入下拉框查询"
              clearable
              :style="{width: '100%'}"
            />
          </el-form-item-ex>
        </el-col>
      </el-row>
    </el-form>
  </div>
</template>
<script>
// import bizFormMixin from '@/mixins/biz-form'
export default {
  name: '',
  components: {},
  //   mixins: [bizFormMixin],
  props: [],
  data() {
    return {
      field126_formModelVisible: false,
      copy_field126_formModelVisible: false,
      field126_formModelDisabled: false,
      field126_formModelData: {
        field144: undefined,
        field145: undefined,
        field141: undefined,
        field142: undefined,
        field169: []
      },
      field126_formModelControl: {
        field144: {
          isShowType: 'v-if',
          isShow: true,
          disabled: false
        },
        field145: {
          isShowType: 'v-if',
          isShow: true,
          disabled: false
        },
        field141: {
          isShowType: 'v-if',
          isShow: true,
          disabled: false
        },
        field142: {
          isShowType: 'v-if',
          isShow: true,
          disabled: false
        },
        field146: {
          isShowType: 'v-if',
          isShow: true,
          disabled: false,
          url: undefined
        },
        field169: {
          isShowType: 'v-if',
          isShow: true,
          disabled: false
        },
        field139: {
          isShowType: 'v-if',
          isShow: true,
          disabled: false,
          url: undefined
        },
        field138: {
          isShowType: 'v-if',
          isShow: true,
          disabled: false,
          url: undefined
        }
      },
      field126_formModelRules: {
        field144: [{
          required: false,
          message: '请输入姓名：',
          trigger: 'blur'
        }, {
          required: false,
          message: '请输入姓名：',
          trigger: 'change'
        }],
        field145: [{
          required: false,
          message: '请输入微信',
          trigger: 'blur'
        }, {
          required: false,
          message: '请输入微信',
          trigger: 'change'
        }],
        field141: [{
          required: false,
          message: '请输入费用',
          trigger: 'blur'
        }, {
          required: false,
          message: '请输入费用',
          trigger: 'change'
        }],
        field142: [{
          required: false,
          message: '请输入课时：',
          trigger: 'blur'
        }, {
          required: false,
          message: '请输入课时：',
          trigger: 'change'
        }],
        field169: [{
          required: false,
          type: 'array',
          message: '请至少选择一个科目 ',
          trigger: 'blur'
        }, {
          required: false,
          type: 'array',
          message: '请至少选择一个科目 ',
          trigger: 'change'
        }]
      },
      field126_formModelControl_field169Options: [{
        'label': '科目1',
        'value': 1
      }, {
        'label': '科目2',
        'value': 2
      }],
      copy_field126_formModelDisabled: false,
      copy_field126_formModelData: {
        field149: [],
        field162: [],
        field153: undefined,
        field152: undefined,
        field165: null
      },
      copy_field126_formModelControl: {
        field149: {
          isShowType: 'v-if',
          isShow: true,
          disabled: false
        },
        field162: {
          isShowType: 'v-if',
          isShow: true,
          disabled: false
        },
        field153: {
          isShowType: 'v-if',
          isShow: true,
          disabled: false
        },
        field152: {
          isShowType: 'v-if',
          isShow: true,
          disabled: false
        },
        field165: {
          isShowType: 'v-if',
          isShow: true,
          disabled: false
        },
        field157: {
          isShowType: 'v-if',
          isShow: true,
          disabled: false,
          url: undefined
        },
        field158: {
          isShowType: 'v-if',
          isShow: true,
          disabled: false,
          url: undefined
        }
      },
      copy_field126_formModelRules: {
        field149: [{
          required: true,
          type: 'array',
          message: '请至少选择一个学生姓名： ',
          trigger: 'blur'
        }, {
          required: true,
          type: 'array',
          message: '请至少选择一个学生姓名： ',
          trigger: 'change'
        }],
        field162: [{
          required: true,
          type: 'array',
          message: '请至少选择一个学科选择 ',
          trigger: 'blur'
        }, {
          required: true,
          type: 'array',
          message: '请至少选择一个学科选择 ',
          trigger: 'change'
        }],
        field153: [{
          required: false,
          message: '请输入课时进度：',
          trigger: 'blur'
        }, {
          required: false,
          message: '请输入课时进度：',
          trigger: 'change'
        }],
        field152: [{
          required: true,
          message: '请输入老师姓名：',
          trigger: 'blur'
        }, {
          required: true,
          message: '请输入老师姓名：',
          trigger: 'change'
        }],
        field165: [{
          required: true,
          message: '日期范围 不能为空',
          trigger: 'blur'
        }, {
          required: true,
          message: '日期范围 不能为空',
          trigger: 'change'
        }]
      },
      copy_field126_formModelControl_field149Options: [{
        'label': '学生1',
        'value': 1
      }, {
        'label': '学生2',
        'value': 2
      }, {
        'label': '学生3',
        'value': 3
      }],
      copy_field126_formModelControl_field162Options: [{
        'label': '生物',
        'value': 1
      }, {
        'label': '数学',
        'value': 2
      }, {
        'label': '物理',
        'value': 3
      }],
      copy_field126_formModelControl_field152Options: [{
        'label': '老师1',
        'value': 1
      }, {
        'label': '老师2',
        'value': 2
      }],
      formModelDisabled: false,
      formModelData: {
        field130: undefined,
        field132: undefined
      },
      formModelControl: {
        field127: {
          isShowType: 'v-if',
          isShow: true,
          disabled: false,
          tableHeader: [{
            'prop': 'time',
            'label': '时间',
            'width': '240'
          }, {
            'prop': 'classroom1',
            'label': '教室1',
            'width': '240'
          }, {
            'prop': 'classroom2',
            'label': '教室2',
            'width': '240'
          }, {
            'prop': 'classroom3',
            'label': '教室3',
            'width': '240'
          }],
          url: undefined,
          tableData: [],
          currentRow: null
        },
        field128: {
          isShowType: 'v-if',
          isShow: true,
          disabled: false
        },
        field126: {
          isShowType: 'v-if',
          isShow: true,
          disabled: false,
          url: undefined
        },
        field147: {
          isShowType: 'v-if',
          isShow: true,
          disabled: false,
          url: undefined
        },
        field130: {
          isShowType: 'v-if',
          isShow: true,
          disabled: false
        },
        field172: {
          isShowType: 'v-if',
          isShow: true,
          disabled: false
        },
        field132: {
          isShowType: 'v-if',
          isShow: true,
          disabled: false
        }
      },
      formModelRules: {
        field130: [{
          required: false,
          message: '请输入弹窗查询',
          trigger: 'blur'
        }, {
          required: false,
          message: '请输入弹窗查询',
          trigger: 'change'
        }],
        field132: [{
          required: false,
          message: '请输入下拉框查询',
          trigger: 'blur'
        }, {
          required: false,
          message: '请输入下拉框查询',
          trigger: 'change'
        }]
      }
    }
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {
    field126_formModel_field146ClickHandler() {
      // todo here
    },
    field126_formModel_field139ClickHandler() {
      this.field126_formModelVisible = false
    },
    field126_formModel_field138ClickHandler() {
      // 关闭弹窗
      this.field126_formModelVisible = false
    },
    copy_field126_formModel_field157ClickHandler() {
      this.field147_formModelVisible = false
    },
    copy_field126_formModel_field158ClickHandler() {
      // 关闭弹窗
      this.field147_formModelVisible = false
    },
    /* 搜索表格field127选中行*/
    formModel_field127_handleCurrentChange(val) {
      this.formModelControl.field127.currentRow = val
    },
    formModel_field126ClickHandler() {
      this.field126_formModelVisible = true
    },
    formModel_field147ClickHandler() {
      this.copy_field126_formModelVisible = true
    }
  }
}

</script>
<style scoped>
</style>

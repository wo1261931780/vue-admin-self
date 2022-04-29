<template>
  <BaseLayoutEx>
    <div style="padding:10px">
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
          <el-col v-if="formModelControl.field101.isShow" :span="12">
            <el-form-item-ex label="业务情景设定" prop="field101">
              <el-input
                v-model="formModelData.field101"
                placeholder="请输入业务情景设定"
                show-word-limit
                :disabled="formModelControl.field101.disabled"
                clearable
                :style="{width: '100%'}"
              />
            </el-form-item-ex>
          </el-col>
          <el-col v-if="formModelControl.field102.isShow" :span="24" :offset="0">
            <el-divider-ex>when</el-divider-ex>
          </el-col>
        </el-row>
      </el-form>
      <div class="box">
        <div class="header">
          条件
        </div>
        <div class="header">
          变量
        </div>
        <div class="header">
          类型
        </div>
        <div class="header">
          符号
        </div>
        <div class="header">
          另一变量或值
        </div>
        <div class="header">
          操作
        </div>
      </div>
      <div v-for="(item,index) in whenArr" class="box">
        <div class="column column1">
          <el-input v-model="item.value1" />
        </div>
        <div class="column column2">
          <el-input v-model="item.value2" />
        </div>
        <div class="column column3">
          <el-input v-model="item.value3" />
        </div>
        <div class="column column4">
          <el-input v-model="item.value4" />
        </div>
        <div class="column column5">
          <el-input v-model="item.value5" />
        </div>
        <div class="column column6">
          <el-button type="primary" icon="el-icon-plus" @click="addWhenArr">增加</el-button>
          <el-button type="primary" icon="el-icon-minus" @click="delWhenArr(index)">删除</el-button>
        </div>
      </div>
      <el-button style="margin:10px" type="primary" @click="getWhenRes">生成代码</el-button>
      <el-input
        v-model="whenRes"
        type="textarea"
        placeholder="请输入多行文本"
        show-word-limit
        :autosize="{minRows: 2, maxRows: 4}"
      />
    </div>
  </BaseLayoutEx>
</template>

<script>
export default {
  name: 'PubRuleScenario',
  components: {},
  props: [],
  data() {
    return {
      whenRes: [],
      whenArr: [
        { value1: '', value2: '', value3: '', value4: '', value5: '' }
      ],
      formModelDisabled: false,
      formModelData: {
        field101: undefined
      },
      formModelControl: {
        field101: {
          isShowType: 'v-if',
          isShow: true,
          disabled: false
        },
        field102: {
          isShowType: 'v-if',
          isShow: true,
          disabled: false
        }
      },
      formModelRules: {
        field101: [{
          required: false,
          message: '请输入业务情景设定',
          trigger: 'blur'
        }, {
          required: false,
          message: '请输入业务情景设定',
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
    addWhenArr() {
      const obj = { value1: '', value2: '', value3: '', value4: '', value5: '' }
      this.whenArr.push(obj)
      console.log(this.whenArr)
    },
    delWhenArr(index) {
      if (this.whenArr.length > 1) {
        this.whenArr.splice(index, 1)
      } else {
        this.$message.warning('无法删除，至少要有一个条件！')
      }
    },
    getWhenRes() {
      console.log('生成')
    }
  }
}

</script>
<style scoped>
.box {
    display: flex;
}
.header {
    flex: 1;
    text-align: center;
    align-items: center;
    height: 30px;
    border: 1px solid #d8dce5;
    margin-left: -1px;
    margin-top: -1px;
    line-height: 30px;
}
.column {
    flex: 1;
    text-align: center;
    align-items: center;
    height: 40px;
    border: 1px solid #d8dce5;
    margin-left: -1px;
    margin-top: -1px;
    vertical-align: middle;
    padding: 6px;
}

</style>

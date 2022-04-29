export default {
  inject: ['biz', 'baseLayout', 'layoutInfo'], // 交易页面的数据
  provide() {
    return {
      bizForm: this
    }
  },
  props: {
    formDisabled: {
      type: Boolean,
      default() {
        return false
      }
    }
  },
  data() {
    return {
      ajaxFlag: false,
      formModelDisabled: false,
      formModelData: {},
      formModelControl: {},
      formModelRules: {}
    }
  },
  computed: {
    stopWatch() {
      // 只读就行，不需要修改，也不要传给每个表单组件了
      return this.biz.stopWatch
    }
  },
  watch: {
    formDisabled: {
      handler(nVal) {
        this.formModelDisabled = nVal
      },
      deep: true,
      immediate: true
    },
    formModelDisabled: {
      handler(nVal) {
        this.$emit('update:form-disabled', nVal)
        this.$emit('getFormDisabled', nVal)
      },
      deep: true,
      immediate: true
    },
    formModelData: {
      handler(nVal) {
        this.$emit('update:form-data', nVal)
        this.$emit('getFormData', nVal)
      },
      deep: true,
      immediate: true
    },
    formModelControl: {
      handler(nVal) {
        this.$emit('update:form-control', nVal)
        this.$emit('getFormControl', nVal)
        // 监听disabled,自动清除错误提示
        if (nVal) {
          for (const k in nVal) {
            if (typeof nVal[k].disabled !== 'undefined' &&
              nVal[k].disabled && this.$refs['formModel'] &&
              typeof this.$refs['formModel'].clearValidate === 'function') { this.$refs['formModel'].clearValidate(k) }
          }
        }
      },
      deep: true,
      immediate: true
    },
    formModelRules: {
      handler(nVal) {
        this.$emit('update:form-rules', nVal)
        this.$emit('getFormRules', nVal)
      },
      deep: true,
      immediate: true
    }
  },
  beforeMount() {
    const t = this.$dayjs()
    window[this.$vnode.tag + '_beforeMount'] = t.valueOf()
    console.log(`${t.format('HH:mm:ss SSS')}:${this.biz ? this.biz.bizCode : ''}/${this.$vnode.tag}表单组件执行beforeMount`)
  },
  mounted() {
    const t = this.$dayjs()
    const timeDiff = t.valueOf() - window[this.$vnode.tag + '_beforeMount']
    const logStyle = this.$utils.getIEVersion() === -1 && timeDiff > 200 ? 'color:red;background:yellow;font-size:18px;' : ''
    console.log(`${t.format('HH:mm:ss SSS')}:${this.$utils.getStarsByTime(timeDiff)} ${this.biz ? this.biz.bizCode : ''}/${this.$vnode.tag}表单组件挂载成功,用时为：%c ${timeDiff} 毫秒`, logStyle)
  },
  methods: {
    bizFormFn() {
      alert('bizFormFn')
    },
    /**
     * 新增记录textarea行数
     * @param {} event
     */
    addTextAreaRows(event) {
      const el = event.target
      const value = el.value
      const rows = value.split('\n').length
      const countEl = el.nextElementSibling
      if (countEl) {
        let oriText = countEl.innerText
        const oriArr = oriText.split('/')
        if (oriArr && oriArr.length > 1) {
          oriText = oriArr[0] + '/' + oriArr[1]
          if (value) {
            const newText = oriText + '/' + rows
            countEl.innerText = newText
          } else {
            countEl.innerText = oriText
          }
        }
      }
    }
  }
}

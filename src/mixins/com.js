export default {
  inject: ["layoutInfo"],
  provide () {
    return {
    };
  },
  data () {
    return {}
  },
  computed: {
  },
  watch: {
  },
  beforeMount () {
    let t = this.$dayjs()
    window[this.$vnode.tag + '_beforeMount'] = t.valueOf()
    console.log(`${t.format('HH:mm:ss SSS')}:${this.biz ? this.biz.bizCode : ''}/${this.$vnode.tag}业务组件执行beforeMount`)
  },
  mounted () {
    let t = this.$dayjs()
    let timeDiff = t.valueOf() - window[this.$vnode.tag + '_beforeMount']
    let logStyle = this.$utils.getIEVersion() === -1 && timeDiff > 200 ? 'color:red;background:yellow;font-size:18px;' : ''
    console.log(`${t.format('HH:mm:ss SSS')}:${this.$utils.getStarsByTime(timeDiff)} ${this.biz ? this.biz.bizCode : ''}/${this.$vnode.tag}业务组件挂载成功,用时为：%c ${timeDiff} 毫秒`, logStyle)
  },
  activated () {
  },
  deactivated () {
  },

};

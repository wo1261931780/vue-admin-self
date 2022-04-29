export default {
  inject: ["layoutInfo"],
  provide () {
    return {
      biz: this
    };
  },
  data () {
    return {
      lazyLoad: false,
      isSilentCheck: true,//是否静默执行check,默认check成功不弹窗
      /**
       * 以下字段需要在交易的index.vue页面重新赋值 ----开始
       */
      activeName: "", //当前激活的tab面板，需自定义
      bizCode: "", //交易编码 交易基础字段

      // bizQueryName: "GetCnapsElcsBank",//客户表单查询(即：交易前置查询)queryName
      // bizCrudService: "" //
      // bizQueryMsg: "",//bizQueyName动态赋值之前先设置bizQueryMsg，弹出该提示
      // bizHideAllBtns:false,//隐藏所有右侧操作按钮
      // custFormDisabled:false,//控制左侧表单的保护
      // enableItem: [],//双敲字段列表
      // firstTrade:true,//default true，非首交易，手动设置为false
      // nonFormData: {}, //所有隐藏域的字段 mixin版本使用
      // baseModelData: {}, //交易基础数据
      // bizApi:'$apibiz',//默认值 '$apibiz'不要传，如果是公共交易 $apipubtrade 

      /**
       * 以上字段需要在交易的index.vue页面重新赋值 ----结束
       */
      pageLoading: false, //页面级加载控制
      ajaxFlag: false, //一般的ajax防抖开关
      /**
       * 用来控制是否触发联动。
       * 默认为 true,执行完commonInit方法后，设置为false
       * 使用时：要求在联动方法 先执行控制联动
       * 再判断 if(this.stopWatch) return
       * 最后再执行值的联动
       * 因为值不需要联动了，有保存到数据库，触发联动可能会被覆盖
       */
      stopWatch: true,
      /**
       * 判断是否执行完commonInif方法了
       */
      isCommonInitDone: false,

      firstTrade: true, //默认是首交易
      enableItem: [], //双敲字段
      enableItemCache: {},//双敲字段缓存值的对象
      /**
       * 交易基础字段
       */
      // bizCode: "", //交易编码 交易基础字段
      // bizId: "", //交易bizId
      // sysRefNo: "", // 业务参考号
      // sysRelNo: "", // 关联业务编号
      // sysMainRelNo: "", // 主关联业务编号
      // sysEntyId: "", // 系统实体编号
      // sysBizCcy: "", // 业务交易币种
      // sysBizAmt: "", // 业务交易金额
      // txDt: "", // 交易日期
      // channel: "", // 渠道号
      // unitTx: "", // 承做机构
      // unitBiz: "", // 业务归属
      // unitBizName: "", // 业务归属机构名称
      // txStatus: "", // 业务状态-参考worklist表
      // node: "", //当前节点
      // taskId: "", //当前任务ID

      /**
       *
       * 客户表单,原leftForm
       */
      // leftForm: {}, //客户表单数据
      // leftControl: {},
      // leftRules: {},
      // leftFormDisabled: false,

      custForm: {}, //客户表单数据
      custControl: {}, //
      custRules: {},
      custFormDisabled: false,

      /***
       * 费用组件相关参数
       * 是否需要刷新费用组件的标志,
       * 费用组件内部监听的值更新了，会设置isFeeNeedRefresh为true
       * 表示需要刷新费用（展示费用信息tab页就可以）
       */
      isFeeNeedRefresh: false,

      nonFormData: {}, //所有隐藏域的字段

      baseModelData: {}, //交易基础数据

      comRcpDto: {}, // 跨境申报

      bopType: "cksh", // 申报类型
      declareFlg: false, // 是否申报

      comBopDtoList: [], //申报数据

      // 信息采集
      comRncLaunderingDto: [],
      processClickType: false, // 是否点击了按钮

      crossDeclareIsShow: false, // 是否跨境人民币

      feeComForm: {
        /**
         * comFeeDetailDto
         * comFeeHisDetailDto
         * comCustsettDetailDto
         *
         */
        comFeeDetailDto: [],
        comFeeHisDetailDto: [],
        comCustsettDetailDto: [],
        comFeeBaseDto: {}
      },
      feeComDisabled: false,

      // 是否有信息采集
      isLaunder: false,
      isLaunderNeedRefresh: false // 是否需要刷新采集信息

      //费用组件数据
      //以下部分不需要定义，在baselayout组件定义即可
      // pubWorkListDto: {}, // 任务信息
      // comMsgSendDto: [], // 报文返回值
      // comVchDetailDto: [], // 账务明细
      // comVchHeadDto: [], // 账务主表
      // comDocDetailDto: [], // 面函明细
      // comDocHeadDto: [], // 面函主表
      // applyCmsList: [], // 信贷信息
      // bizremarkList: [], //业务批注
      // depositData: {
      //   comMgnRegDto: {}, // 顶部表单
      //   comMgnItemDtls: [], // 释放表格
      //   comMgnItemUseDtls: [] // 保证金操作列表
      // } // 保证金数据
    };
  },
  computed: {
    //生命历程的参数
    // lifecircleInitParams () {
    //   return {
    //     sysMainRelNo: xxx  //this.custForm.sysRefNo 
    //   }
    // },
    //业务加锁的参数
    // bizLockParams () {
    //   return {
    //     relNo: xxx,  
    //     refNo: xxx,
    //     bizCode:this.bizCode  
    //   }
    // },
  },
  watch: {
    bizQueryName: {
      handler (nVal) {
        if (!!nVal) {
          this.bizQueryMsg = ""
        }
      },
      immediate: true,
      deep: true
    },
    stopWatch: {
      handler (nVal) {
        if (nVal === false) {
          // this.tradeData = this.$refs["baselayout"].mergeForm();
          try {
            const el = this.$refs["baselayout"] ? this.$refs["baselayout"] : this.$refs["baseLayout"]
            this.tradeData = el.tradeData;
          } catch (error) {
            alert("开发提示:请在主交易的index.vue页面将BaseLayoutEx的ref属性设置为baselayout")
          }
        }
      },
      immediate: true,
      deep: true
    }
  },
  beforeMount () {
    let t = this.$dayjs()
    window[this.$vnode.tag + '_beforeMount'] = t.valueOf()
    console.log(`${t.format('HH:mm:ss SSS')}:${this.bizCode}交易组件执行beforeMount,组件名称为：${this.$vnode.tag}`)
  },
  mounted () {
    window.bizVm = this;
    setTimeout(() => {
      this.lazyLoad = true
    })
    let t = this.$dayjs()
    let timeDiff = t.valueOf() - window[this.$vnode.tag + '_beforeMount']
    let logStyle = this.$utils.getIEVersion() === -1 && timeDiff > 200 ? 'color:red;background:yellow;font-size:18px;' : ''
    console.log(`${t.format('HH:mm:ss SSS')}:${this.$utils.getStarsByTime(timeDiff)}  ${this.bizCode}/${this.$vnode.tag}交易组件挂载成功,用时为：%c ${timeDiff} 毫秒`, logStyle)
  },
  activated () {
    window.TFBBIZINFO = this;
  },
  deactivated () {
    window.TFBBIZINFO = null
  },
  beforeDestroy () {
    //交易解锁处理 ,若参数有更新，这里的条件也需要更新
    //交易解锁的逻辑移到按钮了，只有取消和退出按钮才需要解锁 0818 fiex Bug ID:ID1004441
    // if (this.bizLockParams && (this.bizLockParams.relNo || this.bizLockParams.refNo)) {
    //   const el = this.$refs["baselayout"] ? this.$refs["baselayout"] : this.$refs["baseLayout"]
    //   if (el && el.txStatus === '01') {
    //     this.$apiadmin.post_bizlock_unlock(this.bizLockParams)
    //       .then(({ data }) => {
    //       })
    //       .finally(() => {
    //       })
    //   }
    // }
  },
  methods: {
    // 公共方法 start


    /**
     * 节假日校验 
     * 20210707 
     * date 校验的时间
     * zone 所在国家
     * 返回 true false
     */
    async isHolidayCheck (date, zone) {
      zone = zone ? zone : 'CHN'
      let params = {
        "date": date,
        "zone": zone,
      }
      let result
      await this.$apiadmin.post_calendar_isholidaycheck({ data: params })
        .then(res => {
          if (res.data) {
            this.$message.info(date + "是节假日")
            result = true
          } else {
            this.$message.info(date + "不是节假日")
            result = false
          }
        })
        .catch(() => {
          result = false
        })
      return result
    },
    /**
     * 工作日校验
     * 20210707 
     * date 校验的时间
     * zone 所在国家
     * 返回 true false
     */
    async isWorkdayCheck (date, zone) {
      zone = zone ? zone : 'CHN'
      let params = {
        "date": date,
        "zone": zone,
      }
      let result
      await this.$apiadmin.post_calendar_isworkdaycheck({ data: params })
        .then(res => {
          if (res.data) {
            this.$message.info(date + "是工作日")
            result = true
          } else {
            this.$message.info(date + "不是工作日")
            result = false
          }
        })
        .catch(() => {
          result = false
        })
      return result
    },

    /**
    * 查询下一个工作日
    * 20210707 
    * date 校验的时间
    * zone 所在国家
    * 返回 下一个工作日
    * 格式 yyyyMMdd
    */
    async queryNextWorkDay (date, zone) {
      zone = zone ? zone : 'CHN'
      let params = {
        "date": date,
        "zone": zone,
      }
      let result
      await this.$apiadmin.post_calendar_querynextworkday({ data: params })
        .then(res => {
          result = res.data
        })
        .catch(() => {
          result = false
        })
      return result
    },

    /**
    * 查询间隔几个营业日的营业日
    * 20210707 
    * date 起始时间
    * days 间隔天数
    * zone 所在国家
    * 返回 下一个工作日
    * 格式 yyyyMMdd
    */
    async queryNextWorkDayWithInterval (date, days, zone) {
      zone = zone ? zone : 'CHN'
      let params = {
        "date": date,
        "zone": zone,
        "interval": days
      }
      let result
      await this.$apiadmin.post_calendar_querynextworkdaywithinterval({ data: params })
        .then(res => {
          result = res.data
        })
        .catch(() => {
          result = false
        })
      console.log(result, "间隔多少个工作日后的日期");
      return result
    },

    /**
       * 查询银行信息
       * 20210707 
       * bicCode 银行bic
       * pubBankInfo 返回银行信息，pubBankInfo没有的但是接口会返回字段按需添加到add more 后，
       */
    async queryPubBankByBicCode (bicCode) {
      let pubBankInfo = {
        'bicCode': '',//bic
        'engName': '',//英文名
        'engAddr': '',//英文地址
        'rmaFlg': '',//RMA标志s
        'abaNo': '',
        'expAreaCode': '',//邮寄地区
        'countryCode': '',//国家代码
        //add more 
      }
      await this.$apiadmin.post_pubbank_querypubbankbybiccode({ body: bicCode }).then(res => {
        this.$utils.fillObject(pubBankInfo, res.data)
      })
        .catch(() => {
          //pubBankInfo有对象，不处理吧
        }
        )
      return pubBankInfo
    },
    /**
     * 获取会计日
     * 20210707
     * 
     */
    async getAcctDate () {
      let result = ''
      await this.$apiadmin.post_sysarg_queryacctdate().then(res => {
        result = res.data
      })
      return result;
    },


    /**
     * 日期比较
     * 20210707
     * date1 > date2   return 1
     * date1 = date2   return 0
     * date1 < date2   return -1 
     * 
     */
    compareDate (date1, date2) {
      if (this.$utils.isFieldEmpty(date1) || this.$utils.isFieldEmpty(date2)) {
        this.$message.info("日期不可为空")
      }
      let result = this.$utils.stringDateDiff(date1, date2)
      if (result > 0) {
        return 1
      } else if (result == 0) {
        return 0
      } else {
        return -1
      }
    },
    /**
     * 判断date1是否大于date2
     */
    checkDate (date1, date2) {
      let compareFlg = this.compareDate(date1, date2)
      if (compareFlg > 0) {
        return true
      } else {
        return false
      }
    },
    /**
     * 弹出框demo
     * 20210707
     */
    alertDemo () {
      this.$alert('这是一段内容', '标题名称', {
        confirmButtonText: '确定',
        callback: () => {
          //TODO
          console.log("alert test");
        }
      });
    },

    /**
     * 输入框demo
     * 20210707
     */
    promptDemo () {
      this.$prompt('请输入邮箱', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        inputPattern: /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
        inputErrorMessage: '邮箱格式不正确'
      }).then(({ value }) => {
        this.$message({
          type: 'success',
          message: '你的邮箱是: ' + value
        });
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '取消输入'
        });
      });
    },
    /**
     *确认框demo 
     *20210707
     */
    confirmDemo () {
      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        //点击确定后做的事情
        this.$message({
          type: 'success',
          message: '删除成功!'
        });
      }).catch(() => {
        //点击取消后做的事情
        this.$message({
          type: 'info',
          message: '已取消删除'
        });
      })
    },

    /*
    * sysRefNo,bizCode||systemName
    */
    getSysRefNoDetail (sysRefNo, bizCode) {
      sysRefNo = sysRefNo || this.custForm.sysRefNo
      bizCode = bizCode || this.baseModelData.bizCode
      return this[this.bizApi ? this.bizApi : '$apibiz'].post_leftrefill_queryleftbizinfo({
        "body": sysRefNo,
      }, bizCode).then(({ data }) => {
        for (let key in data) {
          if (["txDt", "unitTx", "channel", "sysRefNo", "bizId", "hvpsCode"].indexOf(key) !== -1) continue
          this.custForm[key] = data[key]
        }
      }).catch((err) => {
        console.log(err, 'post_leftrefill_queryleftbizinfo')
      })
    },
    emptyFn (msg) {
      console.warn(msg + '方法未定义')
    },
    bizFn () {
      alert("bizFn");
      console.log("bizFn", this);
    },
    /**
     * override
     */
    bizReturnRowHandler () {
      alert("交易主页面新增 前置查询的处理回调方法：bizReturnRowHandler");
    },
    bizCommonSubmitErrorHandler ({ stepName, result }) {
      console.log("统一提交步骤中断", stepName, result)
    }
  }
};

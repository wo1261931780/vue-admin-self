<template>
  <div>
    <div v-show="rateType=='即期汇率'">
      <div class="framework-component__wrapper">
        <el-tabs-ex v-model="activeName"
                    type="border-card">
          <bizParRateFxsOur ref="bizParRateFxsOur"/>
        </el-tabs-ex>
      </div>
    </div>
    <div v-show="rateType=='远期汇率'">
      <div class="framework-component__wrapper">
        <el-tabs-ex v-model="activeName1"
                    type="border-card">
          <bizParRateFxsOurFw ref="bizParRateFxsOurFw"/>
        </el-tabs-ex>
      </div>
    </div>
  </div>
</template>
<script>
import bizParRateFxsOur from '@/views/app/ebank/ex/prices/bizParRateFxsOur.vue'
import bizParRateFxsOurFw from '@/views/app/ebank/ex/prices/bizParRateFxsOurFw.vue'
import bizMixin from '@/mixins/biz'

export default {
  mixins: [bizMixin],
  components: {bizParRateFxsOur, bizParRateFxsOurFw},
  props: {
    rateType: {
      type: String,
    }
  },
  data() {
    return {
      activeName: "bizParRateFxsOur",
      activeName1: "bizParRateFxsOurFw",
      playAnimation: '',
      remtCcy: "",
      tableData: [],
      farTableData: [],
      tableHeaders: [{
        prop: "ccyPair",
        label: "货币对",
      }, {
        prop: "rateUnit",
        label: "汇率单位",
      }, {
        prop: "rsp",
        label: "汇卖价",
      }, {
        prop: "rpp",
        label: "汇买价",
      }, {
        prop: "midRate",
        label: "汇中间价",
      }, {
        prop: "csp",
        label: "钞卖价",
      }, {
        prop: "cpp",
        label: "钞买价",
      }, {
        prop: "updTime",
        label: "更新时间",
      }],
      pairTextMap: {
        USD: "美元(USD)",
        JPY: "日元(JPY)",
        EUR: "欧元(EUR)",
        GBP: "英镑(GBP)",
        HKD: "港币(HKD)",
        CHF: "法郎(CHF)",
        AUD: "澳元(AUD)"
      },
      page: {
        currPage: 1,
        pageSize: 20,
        totalSize: 0
      },
    }
  },
  watch: {},
  computed: {},
  mounted() {
    this.queryNearRate();
    this.queryFarRate();
  },
  methods: {
    contentFormatter(row, column) {
      var value = row[column.prop],
        formatter = column.formatter || column.options;
      if (typeof formatter == "function") {
        value = formatter.call(this, row, column);
      } else if (Array.isArray(formatter)) {
        for (var index in formatter) {
          var item = formatter[index];
          if (item && (item.value === value || item.code === value || item.key === value)) {
            value = item.label || item.codeValue || item.text;
            break;
          }
        }
      } else if (formatter && typeof formatter == "object") {
        value = formatter[row[column.prop]] || value;
      }
      return value;
    },
    queryNearRate() {
      this.playAnimation = "play-refrash-animation";
      this.$apiadmin.post_rate_getbizparratefxsour({
        data: {"baseCcy": "CNY", "ccy": this.remtCcy},
        page: this.page
      }).then((res) => {
        this.tableData = [];
        for (var i = 0, data = res.data || []; i < data.length; i++) {
          if (!this.pairTextMap[data[i].ccy]) {
            continue;
          }
          data[i].ccyPair = data[i].ccy + '/' + data[i].baseCcy;
          this.tableData.push(data[i]);
        }
        this.playAnimation = '';
      });
    },
    queryFarRate() {
      this.$apiadmin.post_rate_getbizparratefxsourfwbypage({
        data: {
          ccyPair: '',
          crudService: "master",
          currPage: 1,
          formData: {},
          params: [],
          queryName: "pubBizParRateFxsOur"
        },
        page: this.page
      }).then((res) => {
        for (var i = 0, data = res.data.resultList || []; i < data.length; i++) {
          if (!this.pairTextMap[data[i].ccy]) {
            continue;
          }
          data[i].ccyPair = data[i].ccy + '/' + data[i].baseCcy;
          this.farTableData.push(data[i]);
        }
        this.page.totalSize = res.data.totalSize;
        this.playAnimation = '';
      });
    }
  }
}

</script>
<style scoped>
.framework-component__wrapper >>> .el-tabs--border-card > .el-tabs__content {
  padding: 0;
}

>>> .el-table__body-wrapper::-webkit-scrollbar-track {
  /* -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3); */
  background-color: #fff;
}

>>> .el-table__body-wrapper::-webkit-scrollbar {
  width: 6px;
  height: 6px;
  background-color: #fff;
  display: none;
}

>>> .el-table__body-wrapper::-webkit-scrollbar {
  display: block;
}

>>> .el-table__body-wrapper::-webkit-scrollbar-thumb {
  background-color: #dddee0;
  border-radius: 6px;
  /* background-image: -webkit-gradient(
      linear,
      0 0,
      0 100%,
      color-stop(0.5, rgba(255, 255, 255, 0.2)),
      color-stop(0.5, transparent),
      to(transparent)
  ); */
}

>>> .el-icon-refresh {
  margin-left: 8px;
  cursor: pointer;
  color: #1890ff;
}

>>> .play-refrash-animation {
  animation: refrash-rate 0.8s 50ms infinite linear;
}

@keyframes refrash-rate {
  0% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(90deg);
  }
  50% {
    transform: rotate(180deg);
  }
  75% {
    transform: rotate(270deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

>>> .price-table::before {
  display: none;
}

>>> .price-top {
  padding: 0 20px 10px;
  display: none;
}

>>> .price-talbe-paire-column > :first-child {
  height: 14px;
  width: 24px;
  overflow: hidden;
  display: inline-block;
  margin-right: 10px;
  top: 2.5px;
  position: relative;
}

>>> .price-talbe-paire-column > :first-child > img {
  width: 120%;
  height: auto;
  position: relative;
  top: -2px;
  left: -3px;
}
</style>

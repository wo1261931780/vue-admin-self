<template>
  <div>
    <div class="importMenu">
      <div class="box">
        <div class="boxText">
          筹备
        </div>
      </div>
      <div class="line"></div>
      <div class="box purpleBG">
        <div class="boxText">
          设立<br/>
          <span style="fontWeight:400;font-size: 12px;letter-spacing:0px;">（资金流出）</span>
        </div>
        <i class="el-icon-bottom downIcon purple"></i>
      </div>
      <div class="line"></div>
      <div class="box">
        <div class="boxText">
          运营<br/>
          <span style="fontWeight:400;font-size: 12px;letter-spacing:0px;">（资金流出）</span>
        </div>
        <i class="el-icon-bottom downIcon"></i>
      </div>
      <div class="line"></div>
      <div class="box purpleBG">
        <div class="boxText">
          并购/分红
        </div>
        <i class="el-icon-bottom downIcon purple"></i>
      </div>
    </div>
    <div class="menuBox">
      <div class="menuItem"></div>
      <div class="menuItem">
        <div class="btn50 purpleBtn" @click="goMenu('外币汇出汇款')">前期费用汇出</div>
        <div class="btn50 purpleBtn" @click="goMenu('')">订单管理</div>
        <div class="btn50 purpleBtn" @click="goMenu('外币汇出汇款')">投资汇出</div>
        <div class="btn50 purpleBtn" @click="goMenu('')">即期</div>
        <div class="btn50 purpleBtn" @click="goMenu('外币汇出汇款')">境外放款</div>
        <div class="btn50 purpleBtn" @click="goMenu('我要购汇')">远期</div>
        <div class="btn50 purpleBtn" @click="goMenu('外币汇出汇款')">红利汇出</div>
        <div class="btn50 purpleBtn" @click="goMenu('单一期权')">期权</div>
      </div>
      <div class="menuItem">
        <div class="btn50" @click="goMenu('汇入汇款确认')">前期费用汇入</div>
        <div class="btn50" @click="goMenu('')">订单管理</div>
        <div class="btn50" @click="goMenu('汇入汇款确认')">投资款汇入</div>
        <div class="btn50" @click="goMenu('')">即期</div>
        <div class="btn50" @click="goMenu('汇入汇款确认')">外债汇入</div>
        <div class="btn50" @click="goMenu('我要结汇')">远期</div>
        <div class="btn50" @click="goMenu('汇入汇款确认')">红利汇入</div>
        <div class="btn50" @click="goMenu('单一期权')">期权</div>
      </div>
      <div class="menuItem lastItem">
        <div class="btn50 purpleBtn mr2" @click="goMenu('信用证开立申请')">极速开征</div>
        <div class="btn50 purpleBtn" @click="goMenu('')">极速融资</div>
        <div class="btn50 purpleBtn" @click="goMenu('')">跨境资金池</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    menuObj: {
      type: Object,
    },
  },
  data() {
    return {}
  },
  methods: {
    goMenu(route) {
      if (route) {
        this.$router.push(this.menuObj[route])
      } else {
        this.$message.warning('暂未开放！')
      }
    }
  },
}
</script>

<style scoped>
.importMenu {
  margin-top: 20px;
  text-align: center;
  height: 120px;
}

.box {
  position: relative;
  width: 88px;
  height: 88px;
  background: #DFE4F9;
  border: 4px solid #3760FF;
  border-radius: 10px;
  text-align: center;
  display: inline-block;
}

.line {
  width: 152px;
  border-top: 1px solid #bbb;
  height: 44px;
  display: inline-block;
}

.boxText {
  position: absolute;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 72px;
  font-size: 14px;
  font-family: PingFang SC;
  font-weight: bold;
  color: #3760FF;
  letter-spacing: 6px;
  font-weight: 500;
  opacity: 1;
  margin: 0 auto;
}

.downIcon {
  font-weight: 700;
  font-size: 30px;
  position: absolute;
  left: 50%;
  top: 82px;
  transform: translateX(-50%);
  color: #DFE4F9;
}

.menuBox {
  margin: 0 auto;
  width: 958px;
  text-align: center;
  display: flex;
  justify-content: space-around;
}

.menuItem {
  width: 180px;
  display: inline-block;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}

.btn50 {
  cursor: pointer;
  width: 88px;
  height: 24px;
  background: #D7DFFF;
  opacity: 1;
  border-radius: 5px;
  font-size: 12px;
  text-align: center;
  align-items: center;
  line-height: 24px;
  color: #3760FF;
  display: inline-block;
  margin-bottom: 4px;
}

.btn100:hover, .btn50:hover {
  color: #D7DFFF;
  background: #3760FF;
}

.btn100 {
  cursor: pointer;
  width: 180px;
  height: 24px;
  background: #D7DFFF;
  opacity: 1;
  border-radius: 5px;
  font-size: 12px;
  text-align: center;
  align-items: center;
  line-height: 24px;
  color: #3760FF;
  display: inline-block;
  margin-bottom: 4px;
}

.purpleBG {
  border: 4px solid #FFC428;
  background: #FFF9E9;
}

.purpleBG > .boxText {
  color: #FFC428;
}

.purple {
  color: #FFF9E9;
}

.purpleBtn {
  background: #FFF9E9;
  color: #FFC428;
}

.purpleBtn:hover, .purpleBtn:hover {
  color: #FFF9E9;
  background: #FFC428;
}

.lastItem {
  height: 55px;
  text-align: start;
  display: block;
}

.mr2 {
  margin-right: 2px;
}
</style>

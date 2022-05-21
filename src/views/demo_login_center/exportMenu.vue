<template>
  <div>
    <div class="importMenu">
      <div class="box">
        <div class="boxText">
          签署合同
        </div>
        <i class="el-icon-bottom downIcon" />
      </div>
      <div class="line" />
      <div class="box purpleBG">
        <div class="boxText">
          备货
        </div>
      </div>
      <div class="line" />
      <div class="box">
        <div class="boxText">
          发货
        </div>
        <i class="el-icon-bottom downIcon" />
      </div>
      <div class="line" />
      <div class="box purpleBG">
        <div class="boxText">
          交单
        </div>
        <i class="el-icon-bottom downIcon purple" />
      </div>
      <div class="line" />
      <div class="box">
        <div class="boxText">
          收汇
        </div>
        <i class="el-icon-bottom downIcon" />
      </div>
      <div class="line" />
      <div class="box purpleBG">
        <div class="boxText">
          结汇
        </div>
        <i class="el-icon-bottom downIcon purple" />
      </div>
    </div>
    <div class="menuBox">
      <div class="menuItem lastItem">
        <div class="btn50 mr6" @click="goMenu('')">订单管理</div>
        <div class="btn50" @click="goMenu('单一期权')">期权</div>
        <div class="btn100" @click="goMenu('出口信用证/修改通知')">出口信用证/修改通知</div>
        <div class="btn100" @click="goMenu('我要购汇')">远期</div>
      </div>
      <div class="menuItem" />
      <div class="menuItem">
        <div class="btn50" @click="goMenu('')">极速融资</div>
      </div>
      <div class="menuItem" style="width: 162px;">
        <div class="btn50 purpleBtn" style="width: 80px;" @click="goMenu('交单委托书')">交单委托书</div>
        <div class="btn50 purpleBtn" style="width: 80px;" @click="goMenu('')">应收帐款管理</div>
        <div class="btn50 purpleBtn" style="width: 80px;" @click="goMenu('自助托收')">自助托收</div>
        <div class="btn50 purpleBtn" style="width: 80px;" @click="goMenu('出口TT押汇')">出口TT押汇</div>
        <div class="btn100 purpleBtn" style="width: 162px;" @click="goMenu('出口托收押汇')">出口托收押汇</div>
        <div class="btn100 purpleBtn" style="width: 162px;" @click="goMenu('出口信用证押汇')">出口信用证押汇</div>
        <!-- <div @click="goMenu('')" class="btn100 purpleBtn">信用证自助出单</div> -->
      </div>
      <div class="menuItem lastItem">
        <div class="btn100" @click="goMenu('汇入汇款确认')">汇入汇款确认</div>
        <div class="btn100" @click="goMenu('汇入汇款申报补录')">汇入汇款申报补录</div>
        <div class="btn100" @click="goMenu('')">跨境电商</div>
      </div>
      <div class="menuItem">
        <div class="btn50 purpleBtn" @click="goMenu('')">即期</div>
        <div class="btn50 purpleBtn" @click="goMenu('')">存量交割</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    menuObj: {
      type: Object
    }
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
  }
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
  width: 72px;
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
  width: 40px;
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
  width: 148px;
  display: inline-block;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}

.btn50 {
  cursor: pointer;
  width: 70px;
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
  width: 148px;
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

.mr6 {
  margin-right: 6px;
}
</style>

<template>
  <div>
    <div class="importMenu">
      <div class="box">
        <div class="boxText">
          签署合同
        </div>
        <i class="el-icon-bottom downIcon"></i>
      </div>
      <div class="line"></div>
      <div class="box purpleBG">
        <div class="boxText">
          运输
        </div>
        <i class="el-icon-bottom downIcon purple"></i>
      </div>
      <div class="line"></div>
      <div class="box">
        <div class="boxText">
          收货
        </div>
        <i class="el-icon-bottom downIcon"></i>
      </div>
      <div class="line"></div>
      <div class="box purpleBG">
        <div class="boxText">
          购汇
        </div>
        <i class="el-icon-bottom downIcon purple"></i>
      </div>
      <div class="line"></div>
      <div class="box">
        <div class="boxText">
          付款
        </div>
        <i class="el-icon-bottom downIcon"></i>
      </div>
      <!-- <div class="line"></div>
      <div class="box purpleBG">
          <div class="boxText">
              购汇
          </div>
          <i class="el-icon-bottom downIcon purple"></i>
      </div> -->
    </div>
    <div class="menuBox">
      <div class="menuItem lastItem">
        <div class="btn50 mr6" @click="goMenu('')">订单管理</div>
        <div class="btn50" @click="goMenu('单一期权')">期权</div>
        <div class="btn50 mr6" @click="goMenu('我要结汇')">远期</div>
        <div class="btn50" @click="goMenu('信用证开立申请')">极速开证</div>
      </div>
      <div class="menuItem lastItem">
        <div class="btn100 purpleBtn" @click="goMenu('来单通知及承付')">来单通知及承付</div>
        <div class="btn100 purpleBtn" @click="goMenu('')">代收来单</div>
        <div class="btn100 purpleBtn" @click="goMenu('')">应付账款管理</div>
      </div>
      <!-- <div class="menuItem">
          <div @click="goMenu('')" class="btn50">收货</div>
      </div> -->
      <div class="menuItem">
        <div class="btn100" @click="goMenu('进口信用证代付申请')">进口信用证代付申请</div>
        <div class="btn100" @click="goMenu('进口代收代付申请')">进口代收代付申请</div>
        <div class="btn100" @click="goMenu('进口T/T代付申请')">进口T/T代付申请</div>
      </div>
      <div class="menuItem">
        <div class="btn50 purpleBtn" @click="goMenu('外币汇出汇款')">汇出汇款</div>
        <div class="btn100 purpleBtn" @click="goMenu('')">进口代收付汇</div>
        <div class="btn100 purpleBtn" @click="goMenu('进口信用证付汇')">进口信用证付汇</div>
      </div>
      <div class="menuItem">
        <div class="btn50" @click="goMenu('')">即期</div>
        <div class="btn50" @click="goMenu('')">存量交割</div>
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
  width: 104px;
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

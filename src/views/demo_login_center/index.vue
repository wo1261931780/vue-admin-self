<template>
  <el-container>
    <!-- <el-aside class="leftMenu" > -->
    <div>
      <el-card class="leftMenu" style="marglin:0">
        <!--        上面模块-->
        <div class="div1">
          <!--          <svg-icon class='leftIconCls' />-->
          <div class="touxiang" />
          <div style="height:6px;" />
          <span class="caozuo">操作员操作员…</span>
        </div>
        <div class="div2">
          <div class="text0" style="display: inline-block;">
            <div class="text3">666</div>
            <div class="text1">经办id</div>
          </div>
          <div class="shugang" style="display: inline-block;" />
          <div class="text2" style="display: inline-block;">
            <div class="text3">777</div>
            <div class="text1">积分</div>
          </div>
        </div>
        <div style="height:10px" />
        <div class="div3">091827504</div>
        <div class="div4">上次登录时间：2022/02/11 06:36</div>
        <!--        <div style="text-align:left">-->
        <!--          <span style="margin-left:10px">经办</span>-->
        <!--        </div>-->
        <!--        <span>{{ userId }}</span><br>-->
        <!--        <span>上次登录时间: {{ lastLoginTime }}</span>-->
        <div class="buttonmargin">
          <el-button class="leftButton" round size="small">手机银行</el-button>
          <el-button class="leftButton" round size="small">微信银行</el-button>
        </div>
      </el-card>
      <div style="height:8px" />
      <el-card class="leftMenu2">
        <div style="text-align:left">
          <div class="leftbanner">业务提醒</div>
        </div>
        <div class="smallbolck">
          <svg-icon class="icondemo3" icon-class="收汇" />
          <div class="innertext3">跨境E站通</div>
        </div>
        <div style="width:18px;display: inline-block;" />
        <div class="smallbolck">
          <svg-icon class="icondemo3" icon-class="收汇" />
          <div class="innertext3">投资理财</div>
        </div>
        <div style="width:18px;display: inline-block;" />
        <div class="smallbolck">
          <svg-icon class="icondemo3" icon-class="收汇" />
          <div class="innertext3">票据业务</div>
        </div>
        <div style="height:20px;" />
        <div class="smallbolck">
          <svg-icon class="icondemo3" icon-class="收汇" />
          <div class="innertext3">其他提醒</div>
        </div>
        <div style="width:20px;display: inline-block;" />
        <div class="smallbolck">
          <svg-icon class="icondemo3" icon-class="收汇" />
          <div class="innertext3">转账提醒</div>
        </div>
      </el-card>
    </div>
    <!-- </el-aside> -->
    <div style="padding-left:10px" />
    <!--    <el-main style="padding:0px">-->
    <div class="rightblock">
      <!--        常用功能+卡片-->
      <div class="divright1">
        <!--          常用功能-->
        <div style="text-align:left">
          <div class="rightbanner" style="display: inline-block;">常用功能</div>
          <div style="height:9px" />
        </div>
        <!--          所有的卡片-->
        <div>
          <el-card class="rightcard">
            <div class="innerblueblock">
              <svg-icon class="icondemo2" icon-class="收汇" />
            </div>
            <div class="innerbluebtext">
              账户余额查询
            </div>
          </el-card>
          <!--            <div style="height:11px;"/>-->
          <div style="width:10px;display:inline-block;" />
          <el-card class="rightcard">
            <div class="innerblueblock" style="background: #FFF9E9;">
              <svg-icon class="icondemo2" icon-class="收汇" />
            </div>
            <div class="innerbluebtext">
              账户明细查询
            </div>
          </el-card>
          <div style="width:10px;display:inline-block;" />
          <el-card class="rightcard">
            <div class="innerblueblock" style="background: #FFF3EE;">
              <svg-icon class="icondemo2" icon-class="收汇" />
            </div>
            <div class="innerbluebtext">
              业务凭证打印
            </div>
          </el-card>
          <div style="width:10px;display:inline-block;" />
          <el-card class="rightcard">
            <div class="innerblueblock">
              <svg-icon class="icondemo2" icon-class="收汇" />
            </div>
            <div class="innerbluebtext">
              一站式转账
            </div>
          </el-card>
        </div>
        <div style="height:10px;" />
        <div>
          <el-card class="rightcard">
            <div class="innerblueblock" style="background: #FFF9E9;">
              <svg-icon class="icondemo2" icon-class="收汇" />
            </div>
            <div class="innerbluebtext">
              智能代发
            </div>
          </el-card>
          <div style="width:10px;display:inline-block;" />
          <el-card class="rightcard">
            <div class="innerblueblock" style="background: #FFF3EE;">
              <svg-icon class="icondemo2" icon-class="收汇" />
            </div>
            <div class="innerbluebtext">
              批量转账
            </div>
          </el-card>
          <div style="width:10px;display:inline-block;" />
          <el-card class="rightcard">
            <div class="innerblueblock">
              <svg-icon class="icondemo2" icon-class="收汇" />
            </div>
            <div class="innerbluebtext">
              T/T汇出汇款申请
            </div>
          </el-card>
          <div style="width:10px;display:inline-block;" />
          <el-card class="rightcard">
            <div class="innerblueblock" style="background: #FFF9E9;">
              <svg-icon class="icondemo2" icon-class="收汇" />
            </div>
            <div class="innerbluebtext">
              结汇划转直通车
            </div>
          </el-card>

        </div>

      </div>
      <div style="height:20px" />
      <!--          公告+内部的消息-->
      <div class="divright2">
        <div style="text-align:left">
          <div class="rightbanner" style="display: inline-block;">公告</div>
          <div class="rightbanner3" style="display: inline-block;">更多公告﹥</div>
        </div>
        <div style="height:12px" />
        <!--          每条独立公告-->
        <div class="divright3">
          <!--            小的图标-->
          <svg-icon class="icondemo" icon-class="收汇" style="display: inline-block;" />
          <div style="width:8px;display: inline-block;" />
          <div class="innertext" style="display: inline-block;">(2020-03-18) 关于出口贸易融资业务政策调整的通知(2020-03-18)
            关于出口贸易融资业务政策调整
          </div>
        </div>
        <div style="height:8px;" />
        <div class="divright3">
          <!--            小的图标-->
          <svg-icon class="icondemo" icon-class="收汇" style="display: inline-block;" />
          <div style="width:8px;display: inline-block;" />
          <div class="innertext" style="display: inline-block;">(2020-03-18) 关于出口贸易融资业务政策调整的通知
          </div>
        </div>
        <div style="height:8px;" />

        <div class="divright3">
          <!--            小的图标-->
          <svg-icon class="icondemo" icon-class="收汇" style="display: inline-block;" />
          <div style="width:8px;display: inline-block;" />
          <div class="innertext" style="display: inline-block;">(2020-03-18) 关于出口贸易融资业务政策调整的通知(2020-03-18) 关于出口
          </div>
        </div>
        <div style="height:8px;" />

        <div class="divright3">
          <!--            小的图标-->
          <svg-icon class="icondemo" icon-class="收汇" style="display: inline-block;" />
          <div style="width:8px;display: inline-block;" />
          <div class="innertext" style="display: inline-block;">(2020-03-18) 关于出口贸易融资业务政策调整的通知(2020-03-18) 关于出口贸易融资业务
          </div>
        </div>
        <div style="height:8px;" />

        <div class="divright3">
          <!--            小的图标-->
          <svg-icon class="icondemo" icon-class="收汇" style="display: inline-block;" />
          <div style="width:8px;display: inline-block;" />
          <div class="innertext" style="display: inline-block;">(2020-03-18) 关于出口贸易融资业务政策调整的通知(2020-
          </div>
        </div>
        <div style="height:8px;" />

        <div class="divright3">
          <!--            小的图标-->
          <svg-icon class="icondemo" icon-class="收汇" style="display: inline-block;" />
          <div style="width:8px;display: inline-block;" />
          <div class="innertext" style="display: inline-block;">(2020-03-18) 关于出口贸易融资业务政策调整
          </div>
        </div>
        <div style="height:8px;" />

        <div class="divright3">
          <!--            小的图标-->
          <svg-icon class="icondemo" icon-class="收汇" style="display: inline-block;" />
          <div style="width:8px;display: inline-block;" />
          <div class="innertext" style="display: inline-block;">(2020-03-18) 关于出口贸易融资业务政策调整的通知(2020-03-18)
            关于出口贸易融资业务政策调整的
          </div>
        </div>
        <div style="height:8px" />

      </div>

    </div>
    <!--    </el-main>-->
  </el-container>
</template>

<script>
// import { mapState } from 'vuex'
import rate from './rate.vue'
import importMenu from './importMenu.vue'
import exportMenu from './exportMenu.vue'
import crossBorderFundingMenu from './crossBorderFundingMenu.vue'

export default {
  name: 'EbankHome',
  components: { rate, importMenu, exportMenu, crossBorderFundingMenu },
  data() {
    return {
      userId: '091827504',
      lastLoginTime: '2022/04/12 15:20'
    }
  }
}
</script>

<style scoped>
.el-main {
  text-align: center;
}

.text0 {
  /*width: 31px;*/
  /*height: 17px;*/
  padding-top: 0px;
  padding-left: 41px;
}

.text1 {
  /*width: 31px;*/
  /*height: 17px;*/
  font-size: 12px;
  font-family: PingFang SC;
  font-weight: 400;
  /*line-height: 0px;*/
  color: #999999;
  opacity: 1;
  /*padding-top: 27px;*/
  /*padding-left: 41px;*/
}

.text2 {
  /*width: 31px;*/
  /*height: 17px;*/
  font-size: 12px;
  font-family: PingFang SC;
  font-weight: 400;
  /*line-height: 0px;*/
  color: #999999;
  opacity: 1;
  padding-top: 27px;
  padding-left: 43px;
}

.text3 {
  width: 29px;
  height: 22px;
  font-size: 16px;
  font-family: PingFang SC;
  font-weight: bold;
  line-height: 0px;
  color: #3760FF;
  opacity: 1;
}

.innertext3 {
  /*width: 56px;*/
  /*height: 17px;*/
  font-size: 12px;
  font-family: PingFang SC;
  font-weight: 400;
  /*line-height: 0px;*/
  color: #333333;
  opacity: 1;
  text-align: center;
}

.shugang {
  width: 0px;
  height: 47px;
  border: 1px solid #C4D0FF;
  opacity: 1;
  margin-left: 43px;
}

.icondemo3 {
  width: 30px;
  height: 27px;
  opacity: 1;
  /*background: #000000;*/
  margin-left: 13px;
  margin-bottom: 16px;

}

.buttonmargin {
  padding-left: 24px;
}

.touxiang {
  width: 80px;
  height: 80px;
  background: #20a0ff;
  margin-left: 24px;
}

.rightbanner3 {
  font-size: 14px;
  font-family: PingFang SC;
  /*font-weight: 400;*/
  /*line-height: 0px;*/
  color: #3760FF;
  opacity: 1;
  padding-left: 728px;
}

.icondemo2 {
  width: 34px;
  height: 31px;
  opacity: 1;
  /*background: #000000;*/
}

.innerblueblock {
  width: 54px;
  height: 50px;
  background: #EFF2FF;
  opacity: 1;
  border-radius: 5px;
  padding: 10px;
  display: inline-block;
}

.innertext {
  width: 746px;
  height: 22px;
  font-size: 16px;
  font-family: PingFang SC;
  font-weight: 400;
  line-height: 0px;
  /*color: #333333;*/
  opacity: 1;
  text-align: left;
  /*background: #5074FF;*/
}

.icondemo {
  width: 19px;
  height: 20px;
  /*background: #5074FF;*/
  opacity: 1;
}

.leftbanner {
  font-weight: bold;
  color: black;
  padding-bottom: 10px;
}

.rightbanner {
  /*padding-left: 20px;*/
  /*padding-top: 20px;*/
  font-weight: bold;
  color: black;
}

.divright3 {
  width: 830px;
  height: 40px;
  padding-left: 20px;
  padding-top: 9px;
  background: #F7F9FF;
  opacity: 1;
  border-radius: 5px;
}

.rightbanner2 {
  padding: 20px;
  width: 50px;
  height: 22px;
  font-size: 16px;
  font-family: PingFang SC;
  font-weight: 400;
  line-height: 0px;
  color: #333333;
  opacity: 1;
}

.divright1 {
  /*padding: 20px;*/
  width: 830px;
  height: 250px;
  opacity: 1;
  /*background: #fff8f8;*/
}

.divright2 {
  width: 830px;
  height: 362px;
  /*padding: 20px;*/
  opacity: 1;

  /*background: #fff8f8;*/
}

.innerbluebtext {
  /*width: 96px;*/
  /*height: 22px;*/
  font-size: 16px;
  font-family: PingFang SC;
  font-weight: bold;
  line-height: 0px;
  color: #333333;
  opacity: 1;
  /*padding-top: 4px;*/
  padding-left: 6px;
  display: inline-block;
}

.rightcard {
  width: 200px;
  height: 104px;
  background: #FFFFFF;
  box-shadow: 0px 0px 8px rgba(11, 20, 57, 0.14);
  opacity: 1;
  border-radius: 5px;
  padding-top: 7px;
  /*padding-left: -4px;这个无法生效*/
  align-items: center;
  display: inline-block;

}

.smallbolck {
  width: 70px;
  height: 70px;
  background: #F6F8FF;
  opacity: 1;
  border-radius: 5px;
  font-size: 12px;
  font-family: PingFang SC;
  font-weight: 400;
  line-height: 0px;
  color: #333333;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 7px;
  display: inline-block;

}

.rightblock {
  width: 870px;
  height: 680px;
  background: #FFFFFF;
  opacity: 1;
  border-radius: 5px;
  padding: 20px;
}

.div1 {
  width: 129px;
  height: 106px;
  margin-left: 51px;
  opacity: 1;
  /*line-height: 214px;*/
  /*background: #fff8f8;*/
  /*padding-left: 24px;*/
}

.div2 {
  width: 230px;
  height: 70px;
  margin-top: 10px;
  background: #F6F8FF;
  opacity: 1;
  border-radius: 5px;
  background: #F6F8FF;
  /*padding-top: 12px;*/
  /*padding-left: 158px;*/
}

.div3 {
  width: 97px;
  height: 25px;
  font-size: 18px;
  font-family: PingFang SC;
  font-weight: 400;
  line-height: 0px;
  color: #333333;
  opacity: 1;
  margin-top: 10px;
  margin-left: 67px;
  /*background: #F6F8FF;*/
}

.div4 {
  width: 190px;
  height: 17px;
  font-size: 12px;
  font-family: PingFang SC;
  font-weight: 400;
  line-height: 0px;
  color: #333333;
  opacity: 1;
  /*background: #F6F8FF;*/
  margin-top: 2px;
  margin-left: 20px;

}

.smalltext {
  width: 56px;
  height: 17px;
  font-size: 12px;
  font-family: PingFang SC;
  font-weight: 400;
  line-height: 0px;
  color: #333333;
  opacity: 1;
  margin-left: 7px;
  margin-right: 7px;
  margin-top: 43px;
  margin-bottom: 10px;
}

.caozuo {
  width: 112px;
  height: 22px;
  font-size: 16px;
  font-family: PingFang SC;
  font-weight: 400;
  line-height: 0px;
  color: #333333;
  opacity: 1;
  padding-top: 114px;
}

.leftIconCls {
  width: 30px;
  height: 27px;
  opacity: 1;
  /*width: 70px;*/
  /*height: 70px;*/
  /*background: #F6F8FF;*/
  /*opacity: 1;*/
  /*border-radius: 5px;*/
}

.leftMenu {
  width: 290px;
  height: 350px;
  background: #FFFFFF;
  opacity: 1;
  border-radius: 5px;
  padding: 10px;
}

.leftMenu2 {
  width: 290px;
  height: 322px;
  background: #FFFFFF;
  opacity: 1;
  border-radius: 5px;
}

.leftButton {
  background: #5074FF;
  border: 2px solid white;
  color: white;
  /*padding-left: 24px;*/
  /*margin-left: 10px;*/
  /*width: 86px;*/
  /*height: 30px;*/
  opacity: 1;
  border-radius: 6px;
}

.leftButton:hover {
  background-color: white;
  border: 2px solid blue;
  color: blue;
}

.mainMenuCard {
  margin-left: 5px;
  height: 700px;
}
</style>

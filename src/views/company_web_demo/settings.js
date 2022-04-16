// import Cookies from 'js-cookie'
// 加载默认配置,有缓存从缓存取
let theme = window.localStorage.getItem('TFBTHEME')
let layout = window.localStorage.getItem('TFBLAYOUT')
theme = theme || 'tfb-theme__custom'
layout = layout || 'tfb-layout__dialog'

export default {
  showSettings: true, // 是否开启动态配置
  /** *框架主题设置 */
  theme: theme, // 主题，配色方案
  layout: layout, // 布局，菜单位置等
  /** *页面元素设置 */
  fixedHeader: true, // 顶部Header是否fixed固定布局
  tagsView: true, // 是否开启多标签栏位
  fixedTags: true, // 多标签栏位是否fixed固定布局
  tagsStyle: '', // 多标签风格
  showTools: true, // 是否显示右侧工具栏（fixed布局）
  showFooter: false, // 是否显示底部页脚
  /** *首页布局设置 */
  dashboardLayout: 'HomePage', // Home|HomePage|HomeData
  /** *交易表单设置 */
  span: 12, // 表单栅格布局默认占比
  labelPosition: 'left', // 表单标签对齐方式 left/right/top
  labelWidth: '120px', // 表单标签宽度 left/right有效
  tabsStyle: '', // 交易表单内部的的标签页风格
  // isTagsFixedDisabled: false,
  /** *弹窗设置 */
  dialogStyle: '', // 弹窗风格设置
  dialogWidth: '', // 弹窗默认宽度
  // dialogJustify: 'end', // 弹窗按钮位置 左中右
  /** *表格风格 */
  tableStyle: '',
  /** *其他设置 */

  // isShowOverFlowMenu: false, //是否显示顶部的隐藏菜单按钮
  // isShowOverFlowMenuIndex: 0,//从第几个菜单开始隐藏
  // menuDataSplitIndex: '',//拆分菜单时，顶部选中菜单的id
  // menuDataSplitIndexPath: '',//拆分菜单时，顶部选中菜单的id的path,用于传入到左侧菜单，作为basePath

  /** 分割线 2021-12-21 */
  isDebug: false,
  portal: '', // 门户系统url地址 window.location.origin 打包报错
  title: '智慧国结',
  customName: '至恒融兴', // logo显示名字
  autoCloseSideBar: 'false', // 点击右侧，自动收起菜单
  dialogJustify: 'end', // 弹窗按钮位置
  systemName: '', // 改参数可以复用subSysEngNm 但是，有bug,菜单获取不正常20210413
  // 根据系统名或者模块名拉取菜单，若两个参数都传，只读取系统名
  bizModuleNm: 'LC,ST,BP,PB,OR,LD,LG,DL,FINC,CBS', // 模块名，支持多个模块,逗号隔开,如: ST,DL
  /**
   * @type {boolean} true | false
   * @description Whether show the settings right-panel
   */
  // showSettings: true,
  // autoCloseSideBar: "false",//点击右侧，自动收起菜单

  // errorMsgBoxList: ["logId", "message", "code", "loginIp", "staffName", "showTime", "url"],//错误提示展示的信息
  // 根据系统名或者模块名拉取菜单，若两个参数都传，只读取系统名
  subSysEngNm: undefined, // 系统名 SETTING

  /**
   * @type {boolean} true | false
   * @description Whether show the logo in sidebar
   */
  sidebarLogo: true,

  /**
   * @type {string | array} 'production' | ['production', 'development']
   * @description Need show err logs component.
   * The default is only used in the production env
   * If you want to also use it in dev, you can pass ['production', 'development']
   */
  errorLog: 'production'
}

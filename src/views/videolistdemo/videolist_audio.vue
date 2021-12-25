<template>
  <div class="dashboard-container">
    <div style="margin-top: 40px">
      <el-input
        v-model="queryinput.title"
        class="input-with-select"
        placeholder="请输入内容,目前支持标题--序号--配音--美工搜索(╯°Д°)╯︵┻━┻"
        @change="querydemo"
      >
        <el-select
          slot="prepend"
          v-model="select"
          class="el-selectdemo"
          placeholder="文稿标题title"
        >
          <el-option label="文稿标题title" value="1" />
          <el-option label="稿件序号keyword" value="2" />
        </el-select>
        <el-button
          slot="append"
          icon="el-icon-search"
          @click="querydemo"
        />
      </el-input>
    </div>
    <!--        <el-button size="small" type="primary" @click="querydemo">查询</el-button>-->
    <br>
    <el-form :inline="true">
      <el-col :span="10">
        <el-form-item label="作者：">
          <el-select
            v-model="model.author"
            value-key="id"
            filterable
            placeholder="请选择作者"
          >
            <el-option
              v-for="item in authorselectoptions"
              :key="item.id"
              :label="item.author"
              :value="item.id"
            />
          </el-select>
        </el-form-item>
      </el-col>

      <el-col :span="5">
        <el-form-item label="主题：">
          <el-select v-model="model.theme" filterable placeholder="请选择主题">
            <el-option
              v-for="item in themeselectoptions"
              :key="item.id"
              :label="item.theme"
              :value="item.id"
            />
          </el-select>
        </el-form-item>
      </el-col>
      <el-col :span="9">
        <el-form-item label="状态：">
          <el-select v-model="model.status" filterable placeholder="请选择状态">
            <el-option
              v-for="item in statusselectoptions"
              :key="item.id"
              :label="item.status"
              :value="item.id"
            />
          </el-select>
        </el-form-item>
        <el-button
          icon="el-icon-link"
          plain
          type="primary"
          @click="drawer = true"
        >更新记录
        </el-button>
        <el-button @click="setCurrent()">取消选择</el-button>
      </el-col>
    </el-form>

    <!--    <el-form>-->
    <!--                :data="tableData"-->
    <!--        :data="pager.rows"-->
    <el-main>
      <el-table
        ref="singleTable"
        :data="videolistData"
        :summary-method="getScummaries"
        border
        height="500"
        highlight-current-row
        style="width: 100%"
        @current-change="handleCurrentChange"
      >
        <el-table-column
          :index="indexMethod"
          fixed
          align="center"
          label="排序index"
          type="index"
          width="100%"
        />
        <el-table-column
          label="优先级priority"
          prop="priority"
          align="center"
          sortable
          width="100%"
        >
          <template slot-scope="scope">
            <!--点击一次加急，点击两次取消加急-->
            <!--                        点击事件，需要修改数据库，需要后台变动-->
            <el-button
              :type="scope.row.priority === 1 ? 'danger' : ''"
              size="mini"
              plain
            >
              <div v-if="scope.row.priority === 1">优先</div>
              <div v-else>
                <!--                                {{ scope.row.priority }}-->
                普通
              </div>
            </el-button>
          </template>
        </el-table-column>

        <el-table-column
          label="文稿标题title"
          prop="title"
          style="width: 40%"
          align="center"
        />
        <el-table-column
          label="作者+时间author"
          prop="author"
          width="150px"
          align="center"
        >
          <template slot-scope="scope">
            <!--                        {{scope.row.author+"&#10;"+scope.row.createtime}}-->
            {{ scope.row.author }}<br>{{ scope.row.createtime }}
          </template>
          <!--                    <el-tooltip class="item" effect="dark" content="Top Center 提示文字" placement="top">-->
          <!--                    </el-tooltip>-->
        </el-table-column>
        <el-table-column
          align="center"
          label="文档操作content"
          prop="content"
          width="150px"
        >
          <!-- <template slot-scope="scope">
            <el-button size="mini">文档下载</el-button>
          </template> -->
        </el-table-column>
        <el-table-column
          align="center"
          label="配音员audioid+配音操作content"
          prop="audioid"
          width="200px"
        >
          <template slot-scope="scope">
            {{ scope.row.audioid }}
            <br>
            <el-button
              size="mini"
              @click="dialogVisible9 = true"
            >配音修改</el-button>
            <br>
            <div v-if="(fileList = null)">
              <el-button size="mini" disabled>配音下载</el-button>
            </div>
            <div v-else>
              <el-button size="mini">配音下载</el-button>
            </div>
          </template>
        </el-table-column>
      </el-table>
      <el-drawer
        :before-close="handleClose"
        :direction="direction"
        :visible.sync="drawer"
        title="更新记录，2021年8月24日12:47:28"
      >
        <!--                <span>还没搞定，嘻嘻!</span>-->
        <pre>
   -------------------------------
   ---------平台更新提醒---------
   -------------------------------
   版本号：2021-08-24.01
   停机时间：2021年8月24日12：00-12：10
   停机时长：10分钟
   更新内容：
   1.修复图文和视文列表中，无法自动显示汽车
   稿件的bug
   2.修复视频列表，已通过图文，已通过视文的
   三个页面中，没有汽车栏目的bug
   -------------------------------
   -------------------------------
   -------------------------------
                </pre>
      </el-drawer>

      <el-dialog
        :before-close="handleClose9"
        :visible.sync="dialogVisible9"
        title="上传配音"
        width="40%"
      >
        <el-form :inline="true">
          <el-form-item label="选择配音：">
            <el-select
              v-model="model.audiocreator"
              filterable
              placeholder="请选择配音"
            >
              <el-option
                v-for="item in audiocreatorselectoptions"
                :key="item.id"
                :label="item.audiocreator"
                :value="item.id"
              />
            </el-select>
          </el-form-item>
        </el-form>
        <span class="el-dialog__body">
          <el-upload
            class="upload-demo"
            action=""
            :on-preview="handlePreview"
            :on-remove="handleRemove"
            :file-list="fileList"
            list-type="picture"
          >
            <el-form :inline="true">
              <el-form-item label="选择文件：">
                <el-button size="small" type="primary">点击上传配音</el-button>
              </el-form-item>
            </el-form>
            <div slot="tip" class="el-upload__tip">
              文件不支持多选，只能上传jpg/png文件，且不超过500kb
            </div>
            <div slot="tip" class="el-upload__tip">
              配音文件只存在一个，这里需要接口中设置覆盖
            </div>
          </el-upload>
        </span>
        <span slot="footer" class="dialog-footer">
          <el-button
            type="primary"
            @click="submitForm('ruleForm')"
          >保存配音修改
          </el-button>
          <el-button @click="dialogVisible9 = false">取消</el-button>
        </span>
      </el-dialog>
    </el-main>
  </div>
</template>

<script>
// import {userRequest, videolistRequest} from "@/api/system";
// import Treeselect from "@riophae/vue-treeselect";
// import request from '@/utils/request'

export default {
  state: {
    demoxx: '11'
  },
  name: 'Videolistdemo',
  // computed: {},
  // components: {Treeselect},
  data() {
    return {
      formLabelWidth: '200px',
      drawer: false,
      dialogVisible9: false,
      direction: 'rtl',
      fileList: [{ name: '', url: '' }],
      value: '',
      model: {
        id: '',
        title: '', //
        subtitle: '', //
        author: '', //
        // create_time: new Date(),
        coauthor: '', //
        keyword: '', //
        contentsource: null, //
        theme: '',
        priority: '', //
        content: '', //
        creator: '', //
        createtime: '', //
        updmperson: '', //
        updmtime: '', //
        status: '', //
        videoid: '', //
        videocreator: '', //
        videotime: '', //
        audiocreator: '', //
        audioid: '', //
        audiotime: '', //
        coverdesignerid: '', //
        pubtime: '', //
        pubperson: '', //
        pubplateform: '', //
        isdel: '', //
        requirement: '' //
      },
      pager: { currentPage: 1, pageSize: 20, total: 0, rows: [] }, // 分页参数
      //   videolistData: new Array(), // 查询数据机构数据
      //   authorselectoptions: new Array(), // 作者下拉框
      //   themeselectoptions: new Array(), // 主题下拉框
      //   statusselectoptions: new Array(), // 状态下拉框
      //   audiocreatorselectoptions: new Array(), // 配音下拉框
      //   tagdemo: new Array(), // 配音下拉框
      currentRow: null,
      queryinput: {
        // 查询条件
        title: '',
        keyword: '',
        audioid: ''
      },
      rules: {
        // 这里测试发布
        theme1: [
          { required: true, message: '请输入活动名称', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ]
      },
      radio: 3,
      select: '',
      top_mix_query: ''
    }
  },
  mounted() {
    this.querydemo()
    this.authorquery()
    this.themequery()
    this.statusquery()
    this.audiocreatorquery()
  },
  methods: {
    changecolor() {
    //   type = 'danger'
    },
    // 解决索引只排序当前页的问题,增加函数自定义索引序号
    indexMethod(index) {
      return (this.pager.currentPage - 1) * this.pager.pageSize + index + 1
    },
    // videolistRequest.querydemo = (con) =>{
    //     return request.post(videolistRequest.commonPath+"querydemo",con);
    // }
    querydemo() {
    //   let con = {
    //     columns:
    //       'id,title,subtitle,author,iscooperation,coauthor,keyword,contentsource,theme,priority,content,creator,createtime,updmperson,updmtime,status,audiocreator,audioid,audiotime'
    //   }
    //   if (this.queryinput != null) {
    //     con = Object.assign(con, this.queryinput)
    //   }
      debugger
    //   videolistRequest.querydemo(con).then((res) => {
    //     debugger
    //     if (res.code === 200) {
    //       this.videolistData = res.data
    //       // 将查询出来的数据转换成树形结构
    //       // this.videolistData = this.dataChangeToTree(res.data);
    //     } else {
    //       this.$message.error(res.msg)
    //     //   this.videolistData = new Array()
    //     }
    //   })
    },
    // 查询作者，合作问题，暂不清楚
    // authorquery() {
    //   debugger
    //   const con = {
    //     columns: 'id,title,subtitle,author'
    //   }
    //   videolistRequest
    //     .querydemo(con)
    //     .then((res) => {
    //       debugger
    //       if (res.code === 200) {
    //         this.authorselectoptions = res.data
    //       } else {
    //         this.$message.error(res.msg)
    //       }
    //     })
    //     .catch((error) => {
    //       this.$message({
    //         message: '作者查询无结果，请将此信息截图发送给技术',
    //         type: 'warning'
    //       })
    //     })
    // },
    // 主题搜索,themeselectoptions
    // themequery() {
    //   debugger
    //   const con = {
    //     columns: 'id,theme'
    //   }
    //   videolistRequest
    //     .querydemo(con)
    //     .then((res) => {
    //       debugger
    //       if (res.code === 200) {
    //         this.themeselectoptions = res.data
    //       } else {
    //         this.$message.error(res.msg)
    //       }
    //     })
    //     .catch((error) => {
    //       this.$message({
    //         message: '主题查询无结果，请将此信息截图发送给技术',
    //         type: 'warning'
    //       })
    //     })
    // },
    // 状态搜索，statusselectoptions
    // statusquery() {
    //   debugger
    //   const con = {
    //     columns: 'id,status'
    //   }
    //   videolistRequest
    //     .querydemo(con)
    //     .then((res) => {
    //       debugger
    //       if (res.code === 200) {
    //         this.statusselectoptions = res.data
    //         // tagdemo
    //         this.tagdemo = res.data
    //       } else {
    //         this.$message.error(res.msg)
    //       }
    //     })
    //     .catch((error) => {
    //       this.$message({
    //         message: '状态查询无结果，请将此信息截图发送给技术',
    //         type: 'warning'
    //       })
    //     })
    // },
    // 配音员搜索，audiocreatorselectoptions
    // audiocreatorquery() {
    //   debugger
    //   const con = {
    //     columns: 'id,audiocreator'
    //   }
    //   videolistRequest
    //     .querydemo(con)
    //     .then((res) => {
    //       debugger
    //       if (res.code === 200) {
    //         this.audiocreatorselectoptions = res.data
    //       } else {
    //         this.$message.error(res.msg)
    //       }
    //     })
    //     .catch((error) => {
    //       this.$message({
    //         message: '配音员查询无结果，请将此信息截图发送给技术',
    //         type: 'warning'
    //       })
    //     })
    // },
    // tagdemo

    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    // 2021年8月24日12:55:29，小提示框，无法满足需求
    oncereview: function() {
      this.$confirm(`确定清除视频？`)
    },
    handleRemove(file, fileList) {
      console.log(file, fileList)
    },
    handlePreview(file) {
      console.log(file)
    },
    handleExceed(files, fileList) {
      this.$message.warning(
        `当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${
          files.length + fileList.length
        } 个文件`
      )
    },
    beforeRemove(file, fileList) {
      return this.$confirm(`确定移除 ${file.name}？`)
    },
    getSummaries(param) {
      const { columns, data } = param
      const sums = []
      columns.forEach((column, index) => {
        if (index === 0) {
          sums[index] = '合计行'
          return
        }
        const values = data.map((item) => Number(item[column.property]))
        if (!values.every((value) => isNaN(value))) {
          sums[index] = values.reduce((prev, curr) => {
            const value = Number(curr)
            if (!isNaN(value)) {
              return prev + curr
            } else {
              return prev
            }
          }, 0)
          sums[index] += ' 个（这里必须是数字）'
        } else {
          // sums[index] = 'N/A';
        }
      })

      return sums
    },
    setCurrent(row) {
      this.$refs.singleTable.setCurrentRow(row)
    },
    resetDateFilter() {
      this.$refs.filterTable.clearFilter('date')
    },
    clearFilter() {
      this.$refs.filterTable.clearFilter()
    },
    formatter(row, column) {
      return row.title
    },
    filterprovince(value, row) {
      return row.status === value
    },
    filterHandler(value, row, column) {
      const property = column['property']
      return row[property] === value
    }
  }
}
</script>

<style scoped>
.el-selectdemo {
  width: 150px;
}

.input-with-select .el-input-group__prepend {
  background-color: #fff;
}
</style>

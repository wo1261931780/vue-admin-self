<template>
  <div style="padding:10px;">
    <el-form
      :inline="true"
      label-suffix=":"
      :disabled="isAjax"
    >
      <el-form-item label="库表选择">
        <el-radio-group v-model="crudService">
          <el-radio-button
            v-for="(item,index) in crudList"
            :key="index"
            :label="item.code"
          >{{ item.codeValue }}</el-radio-button>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="功能选择">
        <el-radio-group v-model="queryOnly">
          <el-radio-button
            v-for="(item,index) in queryOnlyList"
            :key="index"
            :label="item.label"
          >{{ item.title }}</el-radio-button>
          <el-radio-button
            :disabled="crudService!=='master'"
            label="2"
          >单表 - 增删改查 - 走流程</el-radio-button>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="筛选">
        <el-input
          v-model.trim="keywords"
          clearable
          style="width:220px;"
          placeholder="当前页筛选"
          @keypress.native.enter="searchAll"
        >
          <el-button
            slot="append"
            icon="el-icon-search"
            @click="searchAll"
          >全部筛选</el-button>
        </el-input>
      </el-form-item>
      <el-form-item>
        <el-button
          circle
          icon="el-icon-refresh"
          @click.native="doSearch"
        />
      </el-form-item>
      <el-form-item>
        <el-button
          type="primary"
          icon="el-icon-plus"
          circle
          @click.native="addHandler"
        />
      </el-form-item>
    </el-form>
    <el-table
      v-loading="isAjax"
      :data="tableData.filter((item)=>{
        return !keywords || item.queryName && item.queryName.toLowerCase().includes(keywords.toLowerCase())||
          item.chnName && item.chnName.toLowerCase().includes(keywords.toLowerCase())||
          item.tableName && item.tableName.toLowerCase().includes(keywords.toLowerCase())
      })"
      fit
    >
      <el-table-column
        type="index"
        :index="indexMethod"
      />
      <el-table-column
        prop="queryName"
        sortable
        :label="queryOnly==='1'?'查询名称':'CRUD名称'"
        width="180"
      />
      <el-table-column
        prop="chnName"
        label="名称"
        width="180"
      />
      <!-- <el-table-column
        prop=""
        label="模块"
        width="180"
      />
      <el-table-column
        prop=""
        label="类型"
        width="180"
      /> -->
      <el-table-column
        prop="tableName"
        label="表名"
        width="180"
      />
      <el-table-column
        prop="queryContent"
        label="查询SQL"
        width="300"
        show-overflow-tooltip
      />
      <el-table-column
        prop="userName"
        label="维护人员"
        sortable
        width="120"
        show-overflow-tooltip
      />
      <el-table-column
        prop="remark"
        label="备注"
        show-overflow-tooltip
      />
      <el-table-column
        fixed="right"
        label="操作"
        width="100"
      >
        <template slot-scope="{row}">
          <el-button
            type="text"
            @click.native="editHandler(row)"
          >编辑</el-button>
          &nbsp;&nbsp;
          <el-button
            type="text"
            @click.native="previewHandler(row)"
          >预览</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      :current-page="page.currPage"
      :page-size="page.pageSize"
      :page-sizes="[10,20,50,100, 200, 300, 400,600,1000]"
      layout="total, sizes, prev, pager, next, jumper"
      :total="totalSize"
      @size-change="(pageSize)=>{page.pageSize=pageSize;doSearch()}"
      @current-change="(currPage)=>{page.currPage=currPage;doSearch()}"
    />

    <el-dialog-ex
      v-if="addFlag"
      fullscreen
      :title="'新建 - '+dialogTitle"
      :close-on-click-modal="false"
      :close-on-press-escape="false"
      append-to-body
      :visible.sync="addFlag"
    >
      <search-setting
        :crud-service="crudService"
        :query-only="queryOnly"
        @refreshList="doSearch"
      />
    </el-dialog-ex>
    <el-dialog-ex
      v-if="editFlag"
      fullscreen
      :title="currentRow.chnName?currentRow.chnName:'编辑 - '+dialogTitle"
      :close-on-click-modal="false"
      :close-on-press-escape="false"
      append-to-body
      :visible.sync="editFlag"
    >
      <search-setting
        :crud-service="crudService"
        :query-only="queryOnly"
        :query-name="queryName"
        @refreshList="doSearch"
      />
    </el-dialog-ex>
    <el-dialog-ex
      v-if="previewFlag"
      fullscreen
      :title="currentRow.chnName?currentRow.chnName:'预览 - '+dialogTitle"
      :close-on-click-modal="false"
      :close-on-press-escape="false"
      append-to-body
      :visible.sync="previewFlag"
    >
      <search
        :crud-service="crudService"
        :query-only="queryOnly"
        :query-name="queryName"
      />
    </el-dialog-ex>
  </div>
</template>
<script>
// import defaultSettings from './settings'
import comMixin from './com.js'
export default {
  name: 'CrudList',
  components: {},
  mixins: [comMixin],
  data() {
    const queryOnlyList = [
      {
        label: '1',
        title: '多表 - 通用查询'
      },
      {
        label: '0',
        title: '单表 - 增删改查'
      }
    ]
    return {
      queryOnlyList,
      isAjax: false,
      keywords: '',
      crudService: undefined,
      crudList: [],
      queryOnly: '1',
      totalSize: 0,
      currentRow: {},
      page: {
        currPage: 1,
        pageSize: 20
      },
      queryName: '',
      addFlag: false,
      editFlag: false,
      previewFlag: false,
      tableData: []
    }
  },
  computed: {
    bizApi() {
      return this.biz.bizApi ? this.biz.bizApi : '$apibiz'
    },
    dialogTitle() {
      let dialogTitle = ''
      for (let i = 0; i < this.queryOnlyList.length; i++) {
        if (this.queryOnlyList[i].label === this.queryOnly) {
          dialogTitle = this.queryOnlyList[i].title
          break
        }
      }
      return dialogTitle
    },
    headers() {
      return {
        dataSourceType: this.crudService
      }
    }
  },
  watch: {
    'queryOnly': {
      handler(nVal) {
        this.doSearch()
      }
    },
    'crudService': {
      handler(nVal) {
        this.page.currPage = 1
        this.doSearch()
      }
    }
  },
  mounted() {
    this.initCrudList()
  },
  methods: {
    indexMethod(index) {
      return 1 + index + this.page.pageSize * (this.page.currPage - 1)
    },
    searchAll() {
      this.page.currPage = 1
      this.page.pageSize = this.totalSize
      this.doSearch()
    },
    initCrudList() {
      // this.$apiadmin.post_code_querycodeinfodetail({
      //   data: {
      //     codeType: 'dataSourceType'
      //   }
      // }).then(({ data }) => {
      //   this.crudList = data.resultList
      //   if (this.crudList && this.crudList.length > 0) {
      //     this.crudService = this.crudList[0].code;
      //   }
      // })
      this.crudList = this.$codeTypeInfo['dataSourceType']
      if (this.crudList && this.crudList.length > 0) {
        this.crudService = this.crudList[0].code
      }
    },
    doSearch() {
      if (this.isAjax) return
      this.isAjax = true
      this.addFlag = false
      this.editFlag = false
      this.tableData = []
      this.$apicrud.post_query_selectquery({
        headers: this.headers,
        data: {
          queryOnly: this.queryOnly,
          crudService: this.crudService
        },
        page: this.page
      }).then(res => {
        console.log('selectQuery:', res)
        this.tableData = res.data.resultList
        this.totalSize = res.data.totalSize
      }).catch(() => {

      })
        .finally(() => { this.isAjax = false })
    },
    addHandler() {
      this.queryName = ''
      this.addFlag = true
    },
    editHandler(row) {
      this.currentRow = row
      this.queryName = row.queryName
      this.editFlag = true
    },
    previewHandler(row) {
      this.currentRow = row
      this.queryName = row.queryName
      this.previewFlag = true
    }
  }
}

</script>
<style scoped>
</style>

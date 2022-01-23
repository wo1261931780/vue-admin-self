<!--
 * @Author: your name
 * @Date: 2022-01-06 20:30:01
 * @LastEditTime: 2022-01-13 17:30:29
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \vue-admin-self\src\views\showdemo\demo.vue
-->
<template>
  <div>
    <el-container>
      <el-header>Header
        <div>自动获取employee的token，然后获得相应岗位下的数据</div>
        <div>根据数据查询</div>
      </el-header>
      <el-main>

        <el-form
          :inline="true"
          :model="formInline"
        >
          <el-form-item label="封面设计师：">
            <el-select
              placeholder="封面设计师"
              filterable
            >
              <el-option
                v-for="item in tabledata"
                :label="item.table_designer"
              />
            </el-select>
          </el-form-item>
          <el-form-item label="配音员：">
            <el-select placeholder="配音员">
              <el-option
                v-for="item in tabledata"
                :label="item.table_audio"
              />
            </el-select>
          </el-form-item>
          <el-form-item label="文章作者：">
            <el-select placeholder="文章作者">
              <el-option
                v-for="item in tabledata"
                :label="item.average_each_d"
              />
            </el-select>
          </el-form-item>
          <el-form-item label="剪辑师：">
            <el-select placeholder="剪辑师">
              <el-option
                v-for="item in tabledata"
                :label="item.table_cutter"
              />
            </el-select>
          </el-form-item>

          <br>
          <el-form-item label="时间选择：">
            <el-date-picker
              type="daterange"
              align="right"
              unlink-panels
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
              :place-options="pickeroptions"
            />
          </el-form-item>
          <el-form-item>
            <el-button @click="query">查询</el-button>
            <el-button @click="query">30天</el-button>
            <el-button @click="query">当月</el-button>
            <el-button @click="query">全年</el-button>

            <el-button
              plain
              type="primary"
              style="margin-left:16px;"
              @click="drawer=true"
            >更新记录</el-button>

            <el-button @click="reset_choice">取消选择</el-button>
          </el-form-item>
        </el-form>

        <el-table
          :data="tabledata"
          style="width:100%"
          stripe
        >
          <el-table-column
            fixed
            type="index"
            :index-method="table_index"
            label="序号index"
            width="90px"
            align="center"
            sortable
          />
          <el-table-column prop="table_article_num" label="稿件数量table_article_num" width="150px" align="center" sortable />
          <el-table-column prop="total_fl" label="总流量total_fl" width="150px" align="center" sortable />
          <el-table-column prop="average_each_p" label="平均流量/篇average_each_p" width="150px" align="center" />
          <el-table-column prop="average_each_d" label="平均流量/日average_each_d" width="150px" align="center" />
          <el-table-column
            prop="article_pass"
            label="稿件通过数"
            width="150px"
            align="center"
          />
          <el-table-column
            prop="table_audio"
            label="稿件通过率"
            width="150px"
            align="center"
          />
          <el-table-column
            prop="table_cutter"
            label="日均稿件数"
            width="150px"
            align="center"
          />

          <el-table-column
            prop="table_office"
            label="所在部门table_office"
            width="150px"
            align="center"
            sortable
            :filters="[{text:'内容部门',value:'contains'},{text:'海外部门',value:'overboards'}]"
            :filter-method="prioritytag"
          ><template slot-scope="scope">
            <el-tag
              :type="scope.row.table_office==='contains'?'primary':'danger'"
            >
              {{ scope.row.table_office }}
            </el-tag>
          </template>

          </el-table-column>

          <el-table-column
            prop="table_manager"
            label="部门主管table_manager"
            width="150px"
            align="center"
            sortable
            :filters="[{text:'刘1',value:'liu1'},{text:'刘2',value:'liu2'}]"
            :filter-method="prioritytag"
          ><template slot-scope="scope">
            <el-tag
              :type="scope.row.table_manager==='liu1'?'primary':'danger'"
            >
              {{ scope.row.table_manager }}
            </el-tag>
          </template>

          </el-table-column>
          <el-table-column
            fixed="right"
            label="个人绩效分析"
            width="200px"
            align="center"
          > <template>
            <el-button type="primary" plain @click="table_query">发布视频</el-button>
          </template>
          </el-table-column>

        </el-table>
        <el-pagination
          :current-page="current_page"
          :page-sizes="[50,100,200]"
          :page-size="1000"
          layout="total,sizes,prev,pager,next,jumper"
          :total="1000"
          @size-change="get_page_size"
          @current-change="get_page_change"
        />
        <el-dialog
          title="修改封面"
          :visible.sync="cover_dialog"
        >

          <el-form>
            <el-form-item
              label="当前设计师："
            >
              <el-select filterable>
                <el-option
                  v-for="item in tabledata"
                  :label="item.table_designer"
                  :value="item.table_designer"
                />
              </el-select>
            </el-form-item>
            <el-form-item label="修改封面文件：">
              <el-upload
                class="upload-demo"
                list-type="picture"
                :on-preview="coverdesign_preview"
                :on-remove="coverdesign_remove"
                :file-list="coverdesign_filelist"
              >
                <el-button>上传封面文件 </el-button>
                <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
              </el-upload>
            </el-form-item>
            <hr>
            <el-form-item label="封面相关修改：">
              <el-button>提交封面修改 </el-button>

              <el-button>取消操作 </el-button>
            </el-form-item>
          </el-form>
        </el-dialog>
        <el-dialog
          title="配音修改"
          :visible.sync="audio_dialog"
        >
          <el-form>
            <el-form-item label="当前配音">
              <el-select filterable>
                <el-option
                  v-for="item in tabledata"
                  :label="item.table_audio"
                  :value="item.table_audio"
                />
              </el-select>
            </el-form-item>
            <el-form-item label="修改配音文件">
              <el-upload
                class="upload-demo"
                :file-list="audio_filelist"
                on-change="audio_change"
              >
                <el-button>上传配音文件 </el-button>
                <div slot="tip" class="el-upload__tip">只能上传wmv文件，且不超过100mb</div>
              </el-upload>
            </el-form-item>
            <el-form-item label="配音相关修改">
              <el-button>提交配音修改 </el-button>

              <el-button>取消操作 </el-button>
            </el-form-item>
          </el-form>
        </el-dialog>
        <el-dialog
          title="剪辑修改"
          :visible.sync="cutter_dialog"
        >
          <el-form>
            <el-form-item label="当前剪辑：">
              <el-select filterable>
                <el-option
                  v-for="item in tabledata"
                  :label="item.table_cutter"
                  :value="item.table_cutter"
                />
              </el-select>
            </el-form-item>
            <el-form-item label="修改剪辑文件：">
              <el-upload
                class="upload-demo"
                :file-list="video_fileist"
                :on-change="video_change"
              >
                <el-button>上传视频文件 </el-button>
                <div slot="tip" class="el-upload__tip">只能上传mp4文件，且不超过1Gb</div>
              </el-upload>
            </el-form-item>
            <el-form-item label="剪辑相关修改：">
              <el-button>提交剪辑修改 </el-button>

              <el-button>取消操作 </el-button>
            </el-form-item>
          </el-form>
        </el-dialog>
        <el-dialog
          title="人工审核"
          :visible.sync="reviews_dialog"
        >
          <el-table
            :data="reviews_table_data"
          >
            <el-table-column
              label="人工审核进度"
              property="reviews_table_info"
            />
            <el-table-column
              label="审核时间"
              property="reviews_table_time"
            /><el-table-column
              label="审核人"
              property="reviews_table_name"
            />
            <el-table-column
              label="审核意见"
              property="reviews_table_point"
            >
              <template slot-scope="tabledata">
                <el-button size="mini">通过</el-button>
                <br>
                <el-button size="mini">不通过</el-button>
              </template></el-table-column>
            <el-table-column
              label="操作"
              property="reviews_table_operate"
            >
              <template>
                <el-button size="mini">修改审核意见</el-button>
              </template>
            </el-table-column>
          </el-table>
        </el-dialog>
        <el-dialog
          title="机器审核"
          :visible.sync="machine_reviews_result"
        >
          <el-form>
            <el-form-item label="机审操作：">
              <el-button>发送机审</el-button>
              <el-button>刷新机审结果 </el-button>
            </el-form-item>
            <el-form-item label="机审时间：">
              <el-input placeholder="2022年1月11日16:27:04，不能选择" disabled class="machine_input" />
            </el-form-item>
            <el-form-item label="机审结果：">
              <el-input placeholder="未通过，疑似xx，违规xx" disabled class="machine_input" />
            </el-form-item>
            <el-form-item label="机审详情：">
              <el-input placeholder="未通过，疑似xx，违规xx" type="textarea" />
            </el-form-item>

            <el-form-item label="终审意见：">

              <el-radio-group>
                <el-radio label="通过" name="" />
                <el-radio label="不通过" name="" />
                <el-button>给出终审意见</el-button>
              </el-radio-group>
              <el-input placeholder="不限制字符数" />
            </el-form-item>

          </el-form>
        </el-dialog>
        <el-dialog
          title="平台选择"
          :visible.sync="choose_plateform"
        >
          <el-form>
            <el-form-item
              label="平台选择"
            > <el-radio-group>
              <el-radio label="待选平台" />
              <el-radio label="待选平台2" />
              <el-radio label="待选平台3" />
              <el-radio label="待选平台4" />
              <el-radio label="待选平台5" />
            </el-radio-group>
            </el-form-item>
            <el-form-item
              label="平台选择2"
            >
              <el-radio-group>
                <el-radio label="待选平台" />
                <el-radio label="待选平台2" />
                <el-radio label="待选平台3" />
              </el-radio-group>
            </el-form-item>
            <el-button type="primary" plain>提交</el-button>
            <el-button type="danger" plain>取消选择</el-button>
            <el-button>重置选择</el-button>
          </el-form>
        </el-dialog>

        <el-drawer
          title="我是更新记录"
          :visible.sync="drawer"
          :with-header="false"
        >
          <span>我是更新记录</span>
        </el-drawer>
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {

  data() {
    return {
      input3: '',
      select: '',
      formInline: {
        user: '',
        region: ''
      },
      drawer: false,
      cover_dialog: false,
      audio_dialog: false,
      cutter_dialog: false,
      reviews_dialog: false,
      machine_reviews_result: false,
      choose_plateform: false,
      current_page: 10,
      coverdesign_filelist: [{
        name: 'food.jpeg',
        url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100' }],
      audio_filelist: [
        {
          name: 'food.jpeg',
          url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100' },
        {
          name: 'food.jpeg',
          url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100' }

      ],
      video_fileist: [{
        name: 'food.jpeg',
        url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100' }
      ],
      table_top_query: [{
        table_items: 'average_each_p' },
      { table_items: 'table_designer' },
      { table_items: 'table_audio' },
      { table_items: 'table_cutter' },
      { table_items: 'table_reviews' },
      { table_items: 'average_each_d' }
      ],

      reviews_table_data: [{
        reviews_table_info: '一次审核reviews_table_info',
        reviews_table_name: 'reviews_table_name',
        reviews_table_time: 'reviews_table_time',
        reviews_table_point: 'reviews_table_point',
        reviews_table_operate: 'reviews_table_operate'
      },
      {
        reviews_table_info: '二次审核reviews_table_info2',
        reviews_table_name: 'reviews_table_name2',
        reviews_table_time: 'reviews_table_time2',
        reviews_table_point: 'reviews_table_point2',
        reviews_table_operate: 'reviews_table_operate2'
      }
      ],

      tabledata: [{
        table_index: 'table_index',
        table_article_num: '102',
        table_office: 'overboards',
        table_manager: 'liu1',
        total_fl: '2013.41',
        average_each_p: 'average_each_p',
        average_each_d: 'average_each_d',
        article_pass: '1234',
        table_designer: 'table_designer',
        table_audio: 'table_audio',
        table_audio_url: 'table_audio_url',
        table_cutter: 'table_cutter',
        table_cutter_url: 'table_cutter_url',
        table_reviews: 'table_reviews',
        table_reviews_date: 'table_reviews_date',
        table_reviews_staff: 'table_reviews_staff',
        table_reviews_second: 'table_reviews_second',
        table_reviews_second_date: 'table_reviews_second_date',
        table_reviews_second_staff: 'table_reviews_second_staff',
        table_reviews_machine: 'table_reviews_machine',
        table_reviews_machine_date: 'table_reviews_machine_date',
        table_reviews_final: 'table_reviews_final',
        table_reviews_final_date: 'table_reviews_final_date',
        table_reviews_final_staff: 'table_reviews_final_staff',
        table_plateform: 'table_plateform'
      }, {
        table_index: 'table_index2',
        table_article_num: '110',
        table_office: 'overboards',
        table_manager: 'liu2',

        total_fl: '1895.23',
        average_each_p: 'average_each_p2',
        average_each_d: 'average_each_d2',
        article_pass: '345',
        table_designer: 'table_designer2',
        table_audio: 'table_audio2',
        table_audio_url: 'table_audio_url2',
        table_cutter: 'table_cutter2',
        table_cutter_url: 'table_cutter_url2',
        table_reviews: 'table_reviews2',
        table_reviews_date: 'table_reviews_date2',
        table_reviews_staff: 'table_reviews_staff2',
        table_reviews_second: 'table_reviews_second2',
        table_reviews_second_date: 'table_reviews_second_date2',
        table_reviews_second_staff: 'table_reviews_second_staff2',
        table_reviews_machine: 'table_reviews_machine2',
        table_reviews_machine_date: 'table_reviews_machine_date2',
        table_reviews_final: 'table_reviews_final2',
        table_reviews_final_date: 'table_reviews_final_date2',
        table_reviews_final_staff: 'table_reviews_final_staff2',
        table_plateform: 'table_plateform2'
      }, {
        table_index: 'table_index3',
        table_article_num: '104',
        table_office: 'contains',
        table_manager: 'liu1',

        total_fl: '2342.23',
        average_each_p: 'average_each_p3',
        average_each_d: 'average_each_d3',
        article_pass: '231',
        table_designer: 'table_designer3',
        table_audio: 'table_audio3',
        table_audio_url: 'table_audio_url3',
        table_cutter: 'table_cutter3',
        table_cutter_url: 'table_cutter_url3',
        table_reviews: 'table_reviews3',
        table_reviews_date: 'table_reviews_date3',
        table_reviews_staff: 'table_reviews_staff3',
        table_reviews_second: 'table_reviews_second3',
        table_reviews_second_date: 'table_reviews_second_date3',
        table_reviews_second_staff: 'table_reviews_second_staff3',
        table_reviews_machine: 'table_reviews_machine3',
        table_reviews_machine_date: 'table_reviews_machine_date3',
        table_reviews_final: 'table_reviews_final3',
        table_reviews_final_date: 'table_reviews_final_date3',
        table_reviews_final_staff: 'table_reviews_final_staff3',
        table_plateform: 'table_plateform3'
      }, {
        table_index: 'table_index4',
        table_article_num: '74',
        table_office: 'contains',
        table_manager: 'liu2',

        total_fl: '2346.67',
        average_each_p: 'average_each_p4',
        average_each_d: 'average_each_d4',
        article_pass: '1234',
        table_designer: 'table_designer4',
        table_audio: 'table_audio4',
        table_audio_url: 'table_audio_url4',
        table_cutter: 'table_cutter4',
        table_cutter_url: 'table_cutter_url4',
        table_reviews: 'table_reviews4',
        table_reviews_date: 'table_reviews_date4',
        table_reviews_staff: 'table_reviews_staff4',
        table_reviews_second: 'table_reviews_second4',
        table_reviews_second_date: 'table_reviews_second_date4',
        table_reviews_second_staff: 'table_reviews_second_staff4',
        table_reviews_machine: 'table_reviews_machine4',
        table_reviews_machine_date: 'table_reviews_machine_date4',
        table_reviews_final: 'table_reviews_final4',
        table_reviews_final_date: 'table_reviews_final_date4',
        table_reviews_final_staff: 'table_reviews_final_staff4',
        table_plateform: 'table_plateform4'
      }, {
        table_index: 'table_index5',
        table_article_num: '66',
        table_office: 'overboards',
        table_manager: 'liu1',

        total_fl: '1252.23',
        average_each_p: 'average_each_p5',
        average_each_d: 'average_each_d5',
        article_pass: '123',
        table_designer: 'table_designer5',
        table_audio: 'table_audio5',
        table_audio_url: 'table_audio_url5',
        table_cutter: 'table_cutter5',
        table_cutter_url: 'table_cutter_url5',
        table_reviews: 'table_reviews5',
        table_reviews_date: 'table_reviews_date5',
        table_reviews_staff: 'table_reviews_staff5',
        table_reviews_second: 'table_reviews_second5',
        table_reviews_second_date: 'table_reviews_second_date5',
        table_reviews_second_staff: 'table_reviews_second_staff5',
        table_reviews_machine: 'table_reviews_machine5',
        table_reviews_machine_date: 'table_reviews_machine_date5',
        table_reviews_final: 'table_reviews_final5',
        table_reviews_final_date: 'table_reviews_final_date5',
        table_reviews_final_staff: 'table_reviews_final_staff5',
        table_plateform: 'table_plateform5'
      }, {
        table_index: 'table_index6',
        table_article_num: '87',
        table_office: 'contains',
        table_manager: 'liu1',

        total_fl: '1980.33',
        average_each_p: 'average_each_p6',
        average_each_d: 'average_each_d6',
        article_pass: '534',
        table_designer: 'table_designer6',
        table_audio: 'table_audio6',
        table_audio_url: 'table_audio_url6',
        table_cutter: 'table_cutter6',
        table_cutter_url: 'table_cutter_url6',
        table_reviews: 'table_reviews6',
        table_reviews_date: 'table_reviews_date6',
        table_reviews_staff: 'table_reviews_staff6',
        table_reviews_second: 'table_reviews_second6',
        table_reviews_second_date: 'table_reviews_second_date6',
        table_reviews_second_staff: 'table_reviews_second_staff6',
        table_reviews_machine: 'table_reviews_machine6',
        table_reviews_machine_date: 'table_reviews_machine_date6',
        table_reviews_final: 'table_reviews_final6',
        table_reviews_final_date: 'table_reviews_final_date6',
        table_reviews_final_staff: 'table_reviews_final_staff6',
        table_plateform: 'table_plateform6'
      }]
    }
  },
  methods: {
    query() {
      this.$message.success('query')
    },
    table_query() {
      this.$message.error('table_query')
    },
    coverdesign_preview(File, coverdesign_filelist) {
      console.log(File, coverdesign_filelist)
    },
    coverdesign_remove(File) {
      console.log(File)
    },
    audio_change(File, audio_filelist) {
      this.audio_filelist = audio_filelist.slice(-3)
    },
    video_change(File, video_fileist) {
      this.video_fileist = video_fileist.slice(-3)
    },

    article_download() {
      this.$message.warning('article_download')
    },
    audio_download() {
      this.$message.warning('audio_download')
    },
    video_download() {
      this.$message.warning('video_download')
    },
    reset_choice() {
      this.$message.warning('reset_choice')
    },
    prioritytag(table_article_num, row) {
      return row.table_article_num === table_article_num
    },
    get_page_size(val) {
      console.log('每页${val}条')
    },
    get_page_change(val) {
      console.log('当前页：${val}')
    },
    // 2022年1月11日15:53:04，这里一开始设置的是value和tag，需要针对修改，从而实现筛选
    table_index(index) {
      return index
    }
  }
}
</script>

<style>
.el-select .el-input{
    /* 这里单独设置大小，只会调整input中，label的大小，
    进而导致input本体范围不够
     */
width: 130px;
}
.el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    /* line-height: 60px; */
  }
  .machine_input{
      width: 500px;
  }
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    /* line-height: 160px; */
    /* 行高限制了页面的展示效果 */
  }

  body > .el-container {
    margin-bottom: 40px;
  }

  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }

  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>

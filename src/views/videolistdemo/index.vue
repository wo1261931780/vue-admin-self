/* eslint-disable no-array-constructor */
/* eslint-disable no-array-constructor */
<template>
  <div class="dashboard-container">
    <div style="margin-top: 40px">

      <el-input
        v-model="queryinput.title"
        class="input-with-select"
        placeholder="请输入内容,目前支持测试搜索(╯°Д°)╯︵┻━┻"
      >
        <el-select
          slot="prepend"
          v-model="select"
          class="el-selectdemo"
          placeholder="请选择"
        >
          <el-option label="title" value="1"/>
          <el-option label="keyword" value="2"/>
          <el-option label="audioid" value="3"/>
          <el-option label="coverdesignerid" value="4"/>
        </el-select>
<<<<<<< HEAD
        <el-button slot="append" icon="el-icon-search" />
=======
        <el-button slot="append" icon="el-icon-search" @click="querydemo"/>
>>>>>>> e9c2463628da8699d5a7b44a909db65e45cd8840
      </el-input>
      <el-header>
        <!--        <el-button size="small" type="primary" @click="querydemo">查询</el-button>-->

        <el-form :inline="true">
          <el-col :span="5">
            <el-form-item label="author：">
              <el-select
                v-model="queryinput.author"
                filterable
                clearable
                placeholder="请选择author"
              >
                <!--    2021年8月27日16:32:05下拉框应设置为多选，但是会导致查询条件为一个数组，需要在query中修改-->
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
            <el-form-item label="videocutter：">
              <el-select
                v-model="queryinput.videocreator"
                filterable
                clearable
                placeholder="请选择videocutter"
              >
                <el-option
                  v-for="item in videoselectoptions"
                  :key="item.id"
                  :label="item.videocreator"
                  :value="item.id"
                />
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="5">
            <el-form-item label="theme：">
              <el-select
                v-model="queryinput.theme"
                filterable
                clearable
                placeholder="请选择theme"
              >
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
            <el-form-item label="status：">
              <el-select
                v-model="queryinput.status"
                filterable
                clearable
                placeholder="请选择status"
              >
                <el-option
                  v-for="item in statusselectoptions"
                  :key="item.id"
                  :label="item.status"
                  :value="item.id"
                />
              </el-select>
            </el-form-item>
            <el-form>
              <el-button size="mini">查询</el-button>
              <el-button
                icon="el-icon-link"
                plain
                type="primary"
                size="mini"
                @click="drawer = true"
              >更新记录
              </el-button>
              <el-button
                size="mini"
                @click="setCurrent()"

              >取消选择
              </el-button>
            </el-form>
          </el-col>
        </el-form>
      </el-header>
    </div>

    <!--    <el-form>-->
    <!--                :data="tableData"-->
    <!--        :data="pager.rows"-->
    <el-main>
      <el-table
        ref="singleTable"
        :data="videolistData"

        border
        height="500"
        highlight-current-row
        show-summary
        style="width: 100%"
        @current-change="handleCurrentChange"
      >
        <el-table-column
          :index="indexMethod"
          fixed
          align="center"
          label="排序index"
          type="index"
        />
        <!--                <el-table-column-->
        <!--                    fixed-->
        <!--                    label="序号keyword"-->
        <!--                    prop="keyword"-->
        <!--                    align="center"-->
        <!--                    sortable-->
        <!--                    width="120">-->
        <!--                </el-table-column>-->
        <el-table-column
          label="优先级priority"
          prop="priority"
          align="center"
          sortable
          width="80"
        >
          <template slot-scope="scope">
            <!--点击一次加急，点击两次取消加急-->
            <!--点击事件，需要修改数据库，需要后台变动-->
            <el-button
              :type="scope.row.priority === 1 ? 'danger' : ''"
              size="mini"
              plain
            >
              <div v-if="scope.row.priority === 1">优先</div>
              <div v-else>
                <!--        {{ scope.row.priority }}-->
                普通
              </div>
            </el-button>
          </template>
        </el-table-column>
        <!--                <el-table-column-->
        <!--                    :filter-method="filterprovince"-->
        <!--                    :filters="[-->
        <!--            { text: '待配音', value: '10' },-->
        <!--            { text: '待剪辑', value: '11' },-->
        <!--            { text: '待审核', value: '12' },-->
        <!--            { text: '三审进行中', value: '13' },-->
        <!--            { text: '机审已发送', value: '14' },-->
        <!--            { text: '查看机审情况', value: '15' },-->
        <!--            { text: '传要求视频', value: '16' },-->
        <!--            { text: '请发布', value: '17' },-->
        <!--          ]"-->
        <!--                    align="center"-->
        <!--                    filter-placement=""-->
        <!--                    label="状态status"-->
        <!--                    prop="status"-->
        <!--                    width="120"-->
        <!--                >-->
        <!--                    <template slot-scope="scope">-->
        <!--<el-tag-->
        <!--    :type="scope.row.status === '状态1' ? 'primary' : 'success' && scope.row.status === '状态2' ? 'danger' : 'success'"-->
        <!--    disable-transitions>-->
        <!--    {{ scope.row.status }}-->
        <!--</el-tag>-->
        <!--                    </template>-->
        <!--                </el-table-column>-->
        <el-table-column
          label="美工coverdesignerid+上传封面"
          prop="coverdesignerid"
          width="120"
          align="center"
        >
          <template slot-scope="scope">
            {{ scope.row.coverdesignerid }}
            <br>
            <el-button
              size="small"
              @click="dialogVisible8 = true"
            >上传封面
            </el-button>
          </template>
        </el-table-column>
        <!--                <el-table-column label="用稿人+通过时间videotime" prop="videotime" width="120">-->
        <!--                    <template slot-scope="scope">-->
        <!--&lt;!&ndash;{{scope.row.author+"&#10;"+scope.row.createtime}}&ndash;&gt;-->
        <!--{{ scope.row.updmperson }}<br/>{{ scope.row.videotime }}-->
        <!--                    </template>-->
        <!--                </el-table-column>-->
        <!--                <el-table-column-->
        <!--                    label="美工coverdesignerid"-->
        <!--                    prop="coverdesignerid"-->
        <!--                    align="center"-->
        <!--                    sortable-->
        <!--                    width="120"-->
        <!--                >-->
        <!--                </el-table-column>-->
        <!--                <el-table-column label="上传封面" prop="content" width="120" align="center">-->
        <!--                </el-table-column>-->
        <el-table-column
          label="文稿标题title"
          prop="title"
          width="300"
          align="center"
        />
        <el-table-column
          label="作者+时间author"
          prop="author"
          width="120"
          align="center"
        >
          <template slot-scope="scope">
            <!--{{scope.row.author+"&#10;"+scope.row.createtime}}-->
            {{ scope.row.author }}<br>{{ scope.row.createtime }}
          </template>
          <!--                    <el-tooltip class="item" effect="dark" content="Top Center 提示文字" placement="top">-->
          <!--                    </el-tooltip>-->
        </el-table-column>
        <el-table-column
          align="center"
          label="文档操作content"
          prop="content"
          width="120"
        >
          <template>
            <el-button size="mini">文档下载</el-button>
          </template>
        </el-table-column>
        <el-table-column
          align="center"
          label="配音员audioid+配音操作content"
          prop="audioid"
          width="120"
        >
          <template slot-scope="scope">
            {{ scope.row.audioid }}
            <!--<br>-->
            <!--<el-button size="small" @click="dialogVisible9 = true">上传配音</el-button>-->
            <br>
            <el-button
              size="mini"
              @click="dialogVisible9 = true"
            >配音修改
            </el-button>
            <br>
            <div v-if="(fileList = null)">
              <el-button size="mini" disabled>配音下载</el-button>
            </div>
            <div v-else>
              <el-button size="mini">配音下载</el-button>
            </div>

            <!--<br/>-->
            <!--<el-button size="mini">保存修改</el-button>-->
          </template>
          <!--<el-select-->
          <!--    v-model="value"-->
          <!--    filterable-->
          <!--    placeholder="请选择配音"-->
          <!--    size="mini"-->
          <!-- >-->
          <!--    <el-option-->
          <!--        v-for="item in audiooptions"-->
          <!--        :key="item.value"-->
          <!--        :label="item.label"-->
          <!--        :value="item.value"-->
          <!--    >-->
          <!--    </el-option>-->
          <!--</el-select>-->
          <!--<el-select style="width: 100%;" v-model="findConObj.dicType" value-key="id" size="small" filterable clearable placeholder="请选择字典类型">-->
          <!--    <el-option v-for="item in $store.getters['system/filterDictByType'](accordingToTypeReturnDictId('字典类型'))"-->
          <!--               :key="item.id"-->
          <!--               :label="item.dicText"-->
          <!--               :value="item.id"></el-option>-->
          <!--</el-select>-->
        </el-table-column>
        <!--                <el-table-column-->
        <!--                    align="center"-->
        <!--                    label="配音操作content"-->
        <!--                    prop="content"-->
        <!--                    width="120"-->
        <!--                >-->
        <!--                    <template slot-scope="scope">-->
        <!--<el-upload-->
        <!--    :before-remove="beforeRemove"-->
        <!--    :file-list="fileList"-->
        <!--    :limit="3"-->
        <!--    :on-exceed="handleExceed"-->
        <!--    :on-preview="handlePreview"-->
        <!--    :on-remove="handleRemove"-->
        <!--    action=""-->
        <!--    class="upload-demo"-->
        <!--    multiple>-->
        <!--    <el-button size="mini" type="primary">上传配音</el-button>-->
        <!--    &lt;!&ndash;              <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>&ndash;&gt;-->
        <!--</el-upload>-->
        <!--<el-button size="mini">配音下载</el-button>-->
        <!--<br/>-->
        <!--<el-button size="mini">配音修改</el-button>-->
        <!--<br/>-->
        <!--<el-button size="mini">保存修改</el-button>-->
        <!--                    </template>-->
        <!--                </el-table-column>-->
        <el-table-column
          label="剪辑videocreator"
          prop="videocreator"
          align="center"
          width="120"
        >
          <template slot-scope="scope">
            {{ scope.row.videocreator }}<br>{{ scope.row.createtime }}
          </template>
        </el-table-column>
        <el-table-column
          align="center"
          label="剪辑操作"
          prop="content"
          width="120"
        >
          <!--          <el-button size="mini">上传剪辑</el-button>-->
          <template>
            <el-upload
              :before-remove="beforeRemove"
              :file-list="fileList"
              :limit="3"
              :on-exceed="handleExceed"
              :on-preview="handlePreview"
              :on-remove="handleRemove"
              action=""
              class="upload-demo"
              multiple
              show-overflow-tooltip
            >
              <el-button size="mini" type="primary">上传剪辑</el-button>
              <!--              <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>-->
            </el-upload>
            <div v-if="(fileList = null)">
              <el-button size="mini" disabled>剪辑下载</el-button>

              <!--<br>-->
              <!--<el-button size="mini">审核建议</el-button>-->
              <br>
              <el-tooltip
                class="item"
                content="审核建议"
                effect="dark"
                placement="top"
              >
                <el-button size="mini" disabled>重传剪辑</el-button>
              </el-tooltip>
            </div>
            <div v-else>
              <el-button size="mini">剪辑下载</el-button>

              <!--<br>-->
              <!--<el-button size="mini">审核建议</el-button>-->
              <br>
              <el-tooltip
                class="item"
                content="审核建议"
                effect="dark"
                placement="top"
              >
                <el-button size="mini">重传剪辑</el-button>
              </el-tooltip>
            </div>

            <el-button
              size="mini"
              @click="dialogVisible12 = true"
            >分配剪辑
            </el-button>
          </template>
        </el-table-column>
        <el-table-column
          align="center"
          label="审核进度"
          prop="content"
          width="120"
        >
          <template slot-scope="scope">
            <div>
              {{ scope.row.check_user }}<br>{{ scope.row.opinion }}<br>
            </div>
            <!--prop="content"-->
            <!--obj_id: "",-->
            <!--// 审核时间-->
            <!--check_time: "",-->
            <!--// 审核人-->
            <!--check_user: "",-->
            <!--// 审核意见，中文结果-->
            <!--opinion: "",-->
            <!--// 审核结果，不通过1，通过2-->
            <!--check_result: "",-->
            <!--// 审核进度-->
            <!--current_status: "",-->
            <!--// 机审报告-->
            <!--machine_report: ""-->
          </template>
        </el-table-column>
        <el-table-column
          align="center"
          label="审核功能"
          prop="content"
          width="120"
        >
          <!--action="oncereview"-->
          <!--        <el-button type="primary" plain size="mini" v-on:click="oncereview()">一次审核</el-button>-->
          <!--          这里应该设置一个字段，通过一审后，将字段修改为disable，用来控制是否可选-->
          <el-button
            plain
            size="mini"
            type="primary"
            @click="dialogVisible = true"
          >一次审核
          </el-button>
          <br>
          <el-button
            plain
            size="mini"
            type="primary"
            @click="dialogVisible2 = true"
          >二次审核
          </el-button>
          <br>
          <el-button
            plain
            size="mini"
            type="primary"
            @click="dialogVisible3 = true"
          >三次审核
          </el-button>
          <br>
          <el-button
            plain
            size="mini"
            type="primary"
            @click="dialogVisible4 = true"
          >发送机审
          </el-button>
          <br>
          <el-button
            plain
            size="mini"
            type="primary"
            @click="dialogVisible5 = true"
          >机审情况
          </el-button>
        </el-table-column>
        <!--                <el-table-column-->
        <!--                    align="center"-->
        <!--                    label="三审状态"-->
        <!--                    prop="content"-->
        <!--                    width="120">-->
        <!--                    <el-button-->
        <!--plain-->
        <!--size="mini"-->
        <!--type="primary"-->
        <!--@click="dialogVisible3 = true">三次审核-->
        <!--                    </el-button>-->
        <!--                </el-table-column>-->
        <!--                <el-table-column-->
        <!--                    align="center"-->
        <!--                    label="机审操作"-->
        <!--                    prop="content"-->
        <!--                    sortable-->
        <!--                    width="120">-->
        <!--                    <el-button-->
        <!--plain-->
        <!--size="mini"-->
        <!--type="primary"-->
        <!--@click="dialogVisible4 = true">发送机审-->
        <!--                    </el-button-->
        <!--                    >-->
        <!--                    <br/>-->
        <!--                    <el-button-->
        <!--plain-->
        <!--size="mini"-->
        <!--type="primary"-->
        <!--@click="dialogVisible5 = true">机审情况-->
        <!--                    </el-button>-->
        <!--                </el-table-column>-->
        <el-table-column
          label="上传片头"
          prop="requirement"
          width="120"
          align="center"
        >
          <template slot-scope="scope">
            <!--这里要用遍历替换所有字符串，同时设置相关格式-->
            {{ scope.row.requirement.replace('/', '\r\n') }}
            <br>
            <el-button
              plain
              size="small"
              type="danger"
              @click="oncereview()"
            >清除视频
            </el-button>
          </template>
        </el-table-column>
        <!--                <el-table-column-->
        <!--                    label="美工coverdesignerid"-->
        <!--                    prop="coverdesignerid"-->
        <!--                    align="center"-->
        <!--                    sortable-->
        <!--                    width="120"-->
        <!--                >-->
        <!--                </el-table-column>-->
        <!--                <el-table-column label="上传封面" prop="content" width="120" align="center">-->
        <!--                </el-table-column>-->
        <el-table-column
          align="center"
          fixed="right"
          label="操作/发布content"
          prop="content"
          width="120"
        >
          <template>
            <el-button
              plain
              size="small"
              type="primary"
              @click="dialogVisible6 = true"
            >发布
            </el-button>
            <br>
            <el-button
              plain
              size="small"
              type="danger"
              @click="dialogVisible7 = true"
            >修改审核
            </el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-drawer
        :direction="direction"
        :visible.sync="drawer"
        title="更新记录，2021年12月24日18:04:03"
      >
        <!--                <span>还没搞定，嘻嘻!</span>-->
        <pre>
   -------------------------------
   ---------平台更新提醒---------
   -------------------------------
   版本号：2021-12-24
   停机时间：2021年12月24日18:03:07
   停机时长：1分钟
   更新内容：
   1.完成项目的初始化
   2.修改了基本信息
   -------------------------------
   -------------------------------
   -------------------------------
                </pre>
      </el-drawer>
      <el-dialog
        :visible.sync="dialogVisible"
        title="一次审核"
        width="30%"
      >
        <span>是否通过一审？</span>
        <span slot="footer" class="dialog-footer">
          <el-button
            type="primary"
            @click="dialogVisible = false"
          >一审通过</el-button>
          <el-button @click="dialogVisible10 = true">一审不通过</el-button>
          <el-button @click="dialogVisible = false">取消</el-button>
        </span>
      </el-dialog>
      <el-dialog
        :visible.sync="dialogVisible2"
        title="二次审核"
        width="30%"
      >
        <span>是否通过二审？</span>
        <span slot="footer" class="dialog-footer">
          <el-button
            type="primary"
            @click="dialogVisible2 = false"
          >二审通过</el-button>
          <el-button @click="dialogVisible11 = true">二审不通过</el-button>
          <el-button @click="dialogVisible2 = false">取消</el-button>
        </span>
      </el-dialog>
      <el-dialog
        :visible.sync="dialogVisible3"
        title="三次审核"
        width="30%"
      >
        <span>是否通过三审？</span>
        <span slot="footer" class="dialog-footer">
          <el-button
            type="primary"
            @click="dialogVisible3 = false"
          >三审通过</el-button>
          <el-button @click="dialogVisible11 = true">三审不通过</el-button>
          <el-button @click="dialogVisible3 = false">取消</el-button>
        </span>
      </el-dialog>
      <el-dialog
        :visible.sync="dialogVisible4"
        title="发送机审"
        width="30%"
      >
        <span>机审只能发送一次，是否确定？</span>
        <span slot="footer" class="dialog-footer">
          <el-button
            type="primary"
            @click="dialogVisible4 = false"
          >发送机审</el-button>
          <el-button @click="dialogVisible4 = false">不发送机审</el-button>
          <el-button @click="dialogVisible4 = false">取消</el-button>
        </span>
      </el-dialog>
      <el-dialog
        :visible.sync="dialogVisible5"
        title="机审情况"
        width="60%"
      >
        <el-form :inline="true">
          <el-form-item label="机审状态：">
            <el-input v-model="input" :disabled="true"/>
          </el-form-item>

          <el-form-item label="机审时间：">
            <el-input v-model="input" :disabled="true"/>
          </el-form-item>
          <el-form-item label="机审结果：">
            <el-input v-model="input" :disabled="true"/>
          </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
          <el-table :data="pager.rows">
            <el-table-column label="风险类型" property="date" width="150"/>
            <el-table-column label="出现时间" property="name" width="200"/>
            <el-table-column label="是否违规" property="title"/>
            <el-table-column label="文字识别" property="title"/>
            <el-table-column label="图片链接" property="title"/>
          </el-table>
          <div>
            <el-footer>
              <!--2021年8月27日14:56:14，分页尚未完成-->
              <el-pagination
                :current-page="currentPage4"
                :page-sizes="[100, 200, 300, 400]"
                :page-size="100"
                layout="total, sizes, prev, pager, next, jumper"
                :total="400"
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
              />
            </el-footer>
          </div>
          <br>
          <el-button
            type="primary"
            @click="dialogVisible5 = false"
          >终审通过</el-button>
          <el-button @click="dialogVisible11 = true">终审不通过</el-button>
          <el-button @click="dialogVisible5 = false">取消</el-button>
        </span>
      </el-dialog>
      <el-dialog
        :visible.sync="dialogVisible6"
        title="视频发布"
        width="80%"
      >
        <span>发布媒体</span>
        <span class="el-dialog__body">
          <el-form
            ref="pager.rows"
            :model="pager.rows"
            :rules="rules"
            class="demo-ruleForm"
            label-width="100px"
          >
            <el-form-item label="头条" prop="theme1">
              <el-input v-model="pager.rows.theme"/>
            </el-form-item>
            <el-form-item label="企鹅" prop="theme1">
              <el-input v-model="pager.rows.theme"/>
            </el-form-item>
            <el-form-item label="百家" prop="theme1">
              <el-input v-model="pager.rows.theme"/>
            </el-form-item>
          </el-form>
        </span>
        <span>发布状态</span>
        <span class="el-dialog__body">
          <el-radio-group v-model="radio" :rules="rules">
            <el-radio :label="3">已发布</el-radio>
            <el-radio :label="6">发布草稿</el-radio>
            <el-radio :label="9">备选项3</el-radio>
          </el-radio-group>
        </span>
        <span slot="footer" class="dialog-footer">
          <el-button
            type="primary"
            @click="submitForm('ruleForm')"
          >发布视频</el-button>
          <el-button @click="dialogVisible6 = false">不发布</el-button>
          <el-button @click="dialogVisible6 = false">取消</el-button>
        </span>
      </el-dialog>
      <el-dialog
        :visible.sync="dialogVisible7"
        title="修改二审状态"
        width="40%"
      >
        <span>发布状态</span>
        <span class="el-dialog__body">
          <el-radio-group v-model="radio" :rules="rules">
            <el-radio :label="3">重置一审</el-radio>
            <br>
            <el-radio :label="3">需要二审</el-radio>
            <el-radio :label="6">不需要二审</el-radio>
            <br>
            <el-radio :label="3">重置三审</el-radio>
            <br>
            <el-radio :label="3">重置终审</el-radio>
            <el-radio :label="6">备选项3</el-radio>
          </el-radio-group>
        </span>
        <span slot="footer" class="dialog-footer">
          <el-button
            type="primary"
            @click="submitForm('ruleForm')"
          >确定</el-button>
          <el-button @click="dialogVisible7 = false">取消</el-button>
        </span>
      </el-dialog>
      <el-dialog
        :visible.sync="dialogVisible8"
        title="稿件封面上传"
        width="40%"
      >
        <p>点击上传文件，支持多选</p>
        <span class="el-dialog__body">
          <!--                    "http://ms.fruithere.com/data2/fileUpload/Imagetext"-->
          <el-upload
            class="upload-demo"
            action="/"
            :on-preview="handlePreview"
            :on-remove="handleRemove"
            :file-list="fileList"
            multiple
            :limit="3"
            :on-exceed="handleExceed"
            list-type="picture"
          >
            <el-button size="small" type="primary">点击上传封面</el-button>
            <div slot="tip" class="el-upload__tip">
              只能上传jpg/png文件，且不超过500kb
            </div>
          </el-upload>
        </span>
        <span slot="footer" class="dialog-footer">
          <el-button
            type="primary"
            @click="submitForm('ruleForm')"
          >确定
          </el-button>
          <el-button @click="dialogVisible8 = false">取消</el-button>
        </span>
      </el-dialog>
      <el-dialog
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
        <!--                <hr>-->
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
      <el-dialog
        :visible.sync="dialogVisible10"
        title="一审不通过，反馈意见"
        append-to-body
        width="40%"
      >
        <div style="margin: 20px 0"/>
        <el-input
          placeholder="请输入内容"
          maxlength="30"
          show-word-limit
        />
        <span class="el-dialog__body"/>
        <span slot="footer" class="dialog-footer">
          <el-button
            type="primary"
            @click="dialogVisible10 = false"
          >确定
          </el-button>
          <el-button @click="dialogVisible10 = false">取消</el-button>
        </span>
      </el-dialog>
      <el-dialog

        :visible.sync="dialogVisible11"
        title="*审不通过，反馈意见"
        append-to-body
        width="40%"
      >
        <div style="margin: 20px 0"/>
        <el-input
          placeholder="请输入内容"
          maxlength="30"
          show-word-limit
        />
        <span class="el-dialog__body"/>
        <span slot="footer" class="dialog-footer">
          <el-button
            type="primary"
            @click="dialogVisible11 = false"
          >确定
          </el-button>
          <el-button @click="dialogVisible11 = false">取消</el-button>
        </span>
      </el-dialog>
      <el-dialog

        :visible.sync="dialogVisible12"
        title="分配剪辑"
        width="40%"
      >
        <el-form :inline="true">
          <el-form-item label="选择剪辑：">
            <el-select v-model="value" filterable placeholder="请选择剪辑">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </el-form-item>
        </el-form>

        <span class="el-dialog__body"/>
        <span slot="footer" class="dialog-footer">
          <el-button
            type="primary"
            @click="submitForm('ruleForm')"
          >保存剪辑修改
          </el-button>
          <el-button @click="dialogVisible12 = false">取消</el-button>
        </span>
      </el-dialog>
    </el-main>

    <!--      </el-form>-->
  </div>
</template>

<script>
// import {contentCheckRequest} from "@/api/content";

// const cuttercontrol = 'disabled'
// if (videoid.equals("") || videoid.equals(null) ) {
//     cuttercontrol = "";
// }

// import {userRequest, videolistRequest} from "@/api/system";
// import Treeselect from "@riophae/vue-treeselect";
// import request from '@/utils/request'

export default {
  name: 'Videolistdemo',
  // computed: {},
  // components: {Treeselect},
  data() {
    return {
      formLabelWidth: '200px',
      currentPage4: '1',
      drawer: false,
      dialogVisible: false,
      dialogVisible2: false,
      dialogVisible3: false,
      dialogVisible4: false,
      dialogVisible5: false,
      dialogVisible6: false,
      dialogVisible7: false,
      dialogVisible8: false,
      dialogVisible9: false,
      dialogVisible10: false,
      dialogVisible11: false,
      dialogVisible12: false,
      direction: 'rtl',
      fileList: [{ name: '', url: '' }],

      // 下拉框数据
      options: [
        {
          value: '选项1',
          label: '黄金糕'
        },
        {
          value: '选项2',
          label: '双皮奶'
        },
        {
          value: '选项3',
          label: '蚵仔煎'
        },
        {
          value: '选项4',
          label: '龙须面'
        },
        {
          value: '选项5',
          label: '北京烤鸭'
        }
      ],
      audiooptions: [
        {
          value: '选项1',
          label: '测试'
        },
        {
          value: '选项2',
          label: '测试2'
        }
      ],
      value: '',
      // 表格数据
      // tableData: [{
      //     data: 'data',
      //     name: 'name',
      //     province: 'province1',
      //     city: '1.23',
      //     address: 'address',
      //     zip: 'zip',
      //     articleoperate: 'articleoperate',
      //     articleauthor: 'articleauthor',
      // },
      //     {
      //         data: 'data',
      //         name: 'name',
      //         province: 'province',
      //         city: '2.23',
      //         address: 'address',
      //         zip: 'zip',
      //         articleoperate: 'articleoperate',
      //         articleauthor: 'articleauthor',
      //     }
      // ],
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
      pager: { currentPage4: 1, pageSize: 20, total: 0, rows: [] }, // 分页参数
      //   videolistData: new Array(), // 表格数据
      //   authorselectoptions: new Array(), // 作者下拉框
      //   videoselectoptions: new Array(), // 剪辑下拉框
      //   themeselectoptions: new Array(), // 主题下拉框
      //   statusselectoptions: new Array(), // 状态下拉框
      //   audiocreatorselectoptions: new Array(), // 配音下拉框
      //   reviewcodes: new Array(), // 审核记录
      currentRow: null,
      queryinput: {
        // 输入框查询条件
        title: '',
        keyword: '',
        audioid: '',
        coverdesignerid: '',
        author: ''
      },
      reviewcodesearch: {
        // 审核记录查询条件
        // 审核对象，对应文章id
        obj_id: '',
        // 审核时间
        check_time: '',
        // 审核人
        check_user: '',
        // 审核意见，中文结果
        opinion: '',
        // 审核结果，不通过1，通过2
        check_result: '',
        // 审核进度
        current_status: '',
        // 机审报告
        machine_report: ''
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
  //   mounted() {
  //     this.querydemo()
  //     this.authorquery()
  //     this.videocutterquery()
  //     this.themequery()
  //     this.statusquery()
  //     this.audiocreatorquery()
  //     // 2021年8月27日17:16:24，这里是状态查询
  //     this.reviewsprogressquery()
  //   },
  methods: {
    querydemo() {
      this.$message.warning('search')
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`)
    },

    // 解决索引只排序当前页的问题,增加函数自定义索引序号
    indexMethod(index) {
      return (this.pager.currentPage - 1) * this.pager.pageSize + index + 1
    },
    // videolistRequest.querydemo = (con) =>{
    //     return request.post(videolistRequest.commonPath+"querydemo",con);
    // }
    // 2021年8月27日17:16:57，查询审核
    // reviewsprogressquery() {
    //   const con = {
    //     // current_status: '1',
    //     // obj_id,check_time,check_user,opinion,check_result,current_status,machine_report
    //     columns:
    //       'id,obj_id,check_time,check_user,opinion,check_result,current_status,machine_report'
    //   }
    //   contentCheckRequest.fastFind(con).then((xx1) => {
    //     console.log(xx1)
    //     if (res.code === 200) {
    //       this.reviewcodes = res.data
    //     } else {
    //       this.$message.err(res.msg)
    //       this.reviewcodes = new Array()
    //     }
    //   })
    // },
    // querydemo() {
    //   debugger

    //   let con = {
    //     columns:
    //       'id,title,subtitle,author,iscooperation,coauthor,keyword,contentsource,theme,priority,content,creator,createtime,updmperson,updmtime,status,videoid,videocreator,videotime,audiocreator,audioid,audiotime,coverdesignerid,pubtime,pubperson,pubplateform,isdel,requirement'
    //   }
    //   if (this.queryinput != null) {
    //     con = Object.assign(con, this.queryinput)
    //   }
    // 加了这一条会导致无结果
    //   videolistRequest.querydemo(con).then((res) => {
    //     debugger
    //     if (res.code === 200) {
    //       this.videolistData = res.data
    //       // 将查询出来的数据转换成树形结构
    //       // this.videolistData = this.dataChangeToTree(res.data);
    //     } else {
    //       this.$message.error(res.msg)
    //       this.videolistData = new Array()
    //     }
    //   })
    // },
    // 查询作者，合作问题，暂不清楚
    // authorquery() {
    //   const con = {
    //     columns: 'id,title,subtitle,author'
    //   }
    //   videolistRequest
    //     .querydemo(con)
    //     .then((res) => {
    //       if (res.code === 200) {
    //         this.authorselectoptions = res.data
    //       } else {
    //         this.$message.error(res.msg)
    //       }
    //     })
    //     .catch(() => {
    //       this.$message({
    //         message: '作者查询无结果，请将此信息截图发送给技术',
    //         type: 'warning'
    //       })
    //     })
    // },
    // 剪辑搜索,videoselectoptions
    // videocutterquery() {
    //   const con = {
    //     columns: 'id,videoid,videocreator'
    //   }
    //   videolistRequest
    //     .querydemo(con)
    //     .then((res) => {
    //       if (res.code === 200) {
    //         this.videoselectoptions = res.data
    //       } else {
    //         this.$message.error(res.msg)
    //       }
    //     })
    //     .catch(() => {
    //       this.$message({
    //         message: '作者查询无结果，请将此信息截图发送给技术',
    //         type: 'warning'
    //       })
    //     })
    // },
    // 主题搜索,themeselectoptions
    // themequery() {
    //   const con = {
    //     columns: 'id,theme'
    //   }
    //   videolistRequest
    //     .querydemo(con)
    //     .then((res) => {
    //       if (res.code === 200) {
    //         this.themeselectoptions = res.data
    //       } else {
    //         this.$message.error(res.msg)
    //       }
    //     })
    //     .catch(() => {
    //       this.$message({
    //         message: '主题查询无结果，请将此信息截图发送给技术',
    //         type: 'warning'
    //       })
    //     })
    // },
    // 状态搜索，statusselectoptions
    // statusquery() {
    //   const con = {
    //     columns: 'id,status'
    //   }
    //   videolistRequest
    //     .querydemo(con)
    //     .then((res) => {
    //       if (res.code === 200) {
    //         this.statusselectoptions = res.data
    //       } else {
    //         this.$message.error(res.msg)
    //       }
    //     })
    //     .catch(() => {
    //       this.$message({
    //         message: '状态查询无结果，请将此信息截图发送给技术',
    //         type: 'warning'
    //       })
    //     })
    // },
    // // 配音员搜索，audiocreatorselectoptions
    // audiocreatorquery() {
    //   const con = {
    //     columns: 'id,audiocreator'
    //   }
    //   videolistRequest
    //     .querydemo(con)
    //     .then((res) => {
    //       if (res.code === 200) {
    //         this.audiocreatorselectoptions = res.data
    //       } else {
    //         this.$message.error(res.msg)
    //       }
    //     })
    //     .catch(() => {
    //       this.$message({
    //         message: '配音员查询无结果，请将此信息截图发送给技术',
    //         type: 'warning'
    //       })
    //     })
    // },
    // querydemo() {
    //     debugger
    //     let that = this;
    //     let con = {
    //         currentPage: that.pager.currentPage,//分页数据
    //         pageSize: that.pager.pageSize,//分页数据
    //     };
    //     if (that.demo11 != null) {
    //         con = Object.assign(con, that.demo11);
    //     }
    //     debugger
    //     videolistRequest.querydemo(con).then(result => {
    //         if (result.code == 200) {
    //             let obj = {
    //                 currentPage: result.data.current,
    //                 pageSize: result.data.size,
    //                 total: result.data.total,
    //                 rows: result.data.records
    //             };
    //             that.pager = Object.assign(obj);
    //         } else {
    //             that.pager = {currentPage: 1, pageSize: 10, total: 0, rows: []};
    //         }
    //     })
    // },

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
    // handleClose(done) {
    //   this.$confirm('确认关闭右侧抽屉？')
    //     .then(_ => {
    //       done();
    //     })
    //     .catch(_ => {
    //     });
    // },
    // 一审提示
    handleClose1(done) {
      this.$confirm('确认关闭一审？')
        .then((_) => {
          done()
        })
        .catch((_) => {
        })
    },
    // 二审提示
    handleClose2(done) {
      this.$confirm('确认关闭二审？')
        .then((_) => {
          done()
        })
        .catch((_) => {
        })
    },
    handleClose3(done) {
      this.$confirm('确认关闭三审？')
        .then((_) => {
          done()
        })
        .catch((_) => {
        })
    },
    handleClose4(done) {
      this.$confirm('确认关闭发送机审？')
        .then((_) => {
          done()
        })
        .catch((_) => {
        })
    },
    handleClose5(done) {
      this.$confirm('确认关闭机审详情？')
        .then((_) => {
          done()
        })
        .catch((_) => {
        })
    },
    // handleClose6(done) {
    //   this.$confirm('确认发布视频？')
    //     .then(_ => {
    //       done();
    //     })
    //     .catch(_ => {
    //     });
    // },
    // handleClose7(done) {
    //   this.$confirm('确认修改二审？')
    //     .then(_ => {
    //       done();
    //     })
    //     .catch(_ => {
    //     });
    // },
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
    beforeRemove(file) {
      return this.$confirm(`确定移除 ${file.name}？`)
    },
    // indexMethod(index) {
    //   return index * 2;
    // },出现的序号全部是偶数
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
      this.$message.error('取消成功')
    },
    resetDateFilter() {
      this.$refs.filterTable.clearFilter('date')
    },
    clearFilter() {
      this.$refs.filterTable.clearFilter()
    },
    formatter(row) {
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
/*.el-select {*/
/*  width: 150px;*/
/*}*/
.el-selectdemo {
  width: 150px;
}

.input-with-select .el-input-group__prepend {
  background-color: #fff;
}
</style>

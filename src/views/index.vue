<script setup lang='ts'>
import {onMounted, ref} from "vue";
import ownInfo from "../assets/ownInfo.json";
import TypeIt from "@/components/typeit";

onMounted(() => {
  getHeight()
})
const {own, detail, contractInfo} = ownInfo
const GetWindowHeight = ref({
  height: ""
});
const GetWindowWidth = ref({
  width: ""
});
const getHeight = () => {
  // 获取浏览器高度
  GetWindowHeight.value.height = window.innerHeight + 'px';
  // 获取浏览器宽度
  GetWindowWidth.value.width = window.innerWidth - 400 - 8 + 'px';
}
</script>

<template>
  <div class="content">
    <!--    左侧-->
    <div class="content-left">
      <el-aside class="aside" :style="GetWindowHeight">
        <div class="title">{{ own.title }}</div>
        <div class="img">
          <img src="../assets/cute.jpg" alt="" class="avatar">
        </div>
        <ul style="margin-top: 30px;margin-right: 10px">
          <li class="motto">
            <TypeIt :values="[detail.motto]" :cursor="false" :speed="150"/>
          </li>
        </ul>
      </el-aside>
    </div>
    <!--    中间-->
    <div style="width: 8px;height: 100%;background: #eeeeee;display: flex"></div>
    <!--    右侧-->
    <div class="content-right" animated :style="GetWindowWidth">
      <el-tabs style="margin-left: 50px" class="el-tabs">
        <el-tab-pane label="我的信息">
          <div class="user-info">
            <div>
              <span style="width:8px;height:40px;background: #a7d3f5;transform: skewY(30deg);margin-top: 52px"></span>
              <div
                  style="width:150px;height: 40px;background: #a7d3f5;text-align: center;color: rgba(255, 255, 255, 0.88)">
                <p style="vertical-align: middle;">我的信息</p>
              </div>
            </div>

            <ul>
              <li>姓名：{{ own.name }}</li>
              <li>年龄：{{ own.age }}</li>
              <li>职业：{{ own.excpect_work }}</li>
              <li>手机号：{{ own.phoneNumber }}</li>
              <li>邮箱：{{ own.email }}</li>
            </ul>
          </div>
        </el-tab-pane>
        <el-tab-pane label="项目经验">
          <div class="project-experience"></div>
        </el-tab-pane>
        <el-tab-pane label="工作经验">
          <div class="work-experience"></div>
        </el-tab-pane>
        <el-tab-pane label="联系方式">
          <div class="contract">
            <div></div>
            <div>
              <div>
                <h3>联系方式</h3>
                <span>一段介绍</span>
                <el-form>
                  <el-form-item>
                    <el-icon></el-icon>
                    {{ contractInfo.qq }}
                  </el-form-item>
                  <el-form-item>
                    <el-icon></el-icon>
                    {{ contractInfo.weixin }}
                  </el-form-item>
                  <el-form-item>
                    <el-icon></el-icon>
                    {{ own.phoneNumber }}
                  </el-form-item>
                  <el-form-item>
                    <el-icon></el-icon>
                    {{ own.email }}
                  </el-form-item>
                  <el-form-item>
                    <el-icon></el-icon>
                    {{ contractInfo.github }}
                  </el-form-item>
                  <el-form-item>
                    <el-icon></el-icon>
                    {{ contractInfo.blog }}
                  </el-form-item>
                  <el-form-item>
                    <el-icon></el-icon>
                    {{ contractInfo.address }}
                  </el-form-item>
                </el-form>
              </div>
              <div>
                <h3>聊一聊</h3>
                <el-form>
                  <el-form-item></el-form-item>
                  <el-form-item></el-form-item>
                  <el-form-item></el-form-item>
                  <el-form-item></el-form-item>
                </el-form>
              </div>
            </div>
          </div>
        </el-tab-pane>
      </el-tabs>

    </div>
  </div>
</template>

<style scoped>
ul li {
  list-style: none;
}

.content {
  display: flex;
  position: relative;
  margin: 0 -32px;
}

.content-left {
  float: left;
  background: #b4dcef;
}

.aside {
  width: 400px;
  color: rgba(255, 255, 255, 0.88);
  text-align: center;
}

.title {
  font-size: 40px;
}

.avatar {
  margin-top: 100px;
  width: 200px;
  height: 200px;
  border-radius: 100px;
}

.motto {
  color: rgba(255, 255, 255, 0.88);
}

.motto::after {
  position: relative;
  top: 5px;
  display: inline-block;
  height: 20px;
  margin-left: 5px;
  content: " ";
  -webkit-animation: blink .5s step-end infinite alternate;
  animation: blink .5s step-end infinite alternate;
  border-right: 2px solid;
}

.content-right {
  float: left;
  padding-right: -32px;
  text-align: center;
  position: relative;
}

.user-info {
  animation: slideInRight 1s 0.02s ease backwards;
}
.project-experience {
  animation: slideInLeft 1s 0.02s ease backwards;
}
.work-experience {
  animation: slideInUp 1s 0.02s ease backwards;
}
.contract {
  animation: slideInDown 1s 0.02s ease backwards;
}
</style>

<script setup lang='ts'>
  import {ref} from "vue";
  import {Connection} from "@element-plus/icons-vue";

  const personalName=ref('Mu Feng')
</script>

<template>
  <div>
    <div>
      <el-menu
          :default-active="activeIndex2"
          class="el-menu-demo"
          mode="horizontal"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
          @select="handleSelect"
      >
        <!--    左侧 名字-->
        <el-menu-item>{{ personalName }}</el-menu-item>
        <!--    中间 各部分介绍-->
        <el-menu-item>首页</el-menu-item>
        <el-menu-item>我的信息</el-menu-item>
        <el-menu-item>我的项目</el-menu-item>
        <!--    右侧 主题更换-->
        <el-menu-item><el-icon><Connection /></el-icon></el-menu-item>
      </el-menu>
    </div>
  </div>
</template>

<style scoped>

</style>

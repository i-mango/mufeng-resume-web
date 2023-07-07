<script setup lang='ts'>
import ownInfo from "@/assets/ownInfo.json";

const {own} = ownInfo;
const activeIndex = "1";

// 点击菜单栏的选择，自动滚动到对应的视图
const handleSelect = (index) => {
  let name = ''
  if (index === '1') name = 'homepage'
  if (index === '4') name = 'word-exp'
  if (index === '3') name = 'skills'
  if (index === '2') name = 'profile'
  const targetEle = document.querySelector('.' + name)
  targetEle.scrollIntoView({ behavior: 'smooth' })

};
</script>

<template>
  <div class="menuPage">
    <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        :ellipsis="false"
        @select="handleSelect"
    >
      <el-menu-item><img src="../../assets/favicon.ico" alt="" class="logo-img">{{ own.title }}</el-menu-item>
      <div class="flex-grow" />
      <el-menu-item index="1">首页</el-menu-item>
      <el-menu-item index="2">个人简介</el-menu-item>
      <el-menu-item index="3">个人技能</el-menu-item>
      <el-menu-item index="4">工作经历</el-menu-item>
      <el-menu-item index="5">项目经历</el-menu-item>
    </el-menu>
  </div>
</template>

<style>
.menuPage{
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 100;
  margin-left: -50px;
}
.logo-img{
  width: 40px;
  outline:none;
  vertical-align: middle;
  padding: 5px;
}
.flex-grow {
  flex-grow: 1;
}
</style>

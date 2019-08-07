<template>
  <div style="width: 100%;height: 100%">
    <router-view></router-view>
    <van-tabbar v-model="active" @change="handleTabChange"  active-color="#ee1a1a" route>
      <van-tabbar-item icon="newspaper-o"  replace to="/index">新闻</van-tabbar-item>
      <van-tabbar-item icon="search"      replace to="/search" >搜索</van-tabbar-item>
      <van-tabbar-item icon="tv-o"         replace to="/videolist">视频</van-tabbar-item>
      <van-tabbar-item icon="friends-o"    replace to="/user" >我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
export default {
  name: 'App',
  data() {
    return {
      active: 0,
    }
  },
  methods:{
    handleTabChange(active){

    },
  },
}
</script>

<style>
</style>

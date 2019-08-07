<template>
  <div class="content">
    <van-pull-refresh v-model="isLoading"  @refresh="onRefresh" success-text="成功为你推荐10条新视频">
      <div class="video-warp" v-for="(item,index) in videoList" @click="handleClick({uri:item.mp4_url,
        cover:item.cover})">
        <img :src="item.cover" alt="" :class="[isLoading?'opacity':'',cover]">
        <p class="title" >{{item.title}}</p>
        <van-icon name="play-circle-o"  class="icon" size="50px"/>
      </div>
    </van-pull-refresh>
  </div>
</template>
<script>
  import store from "../store/store"
  import { Toast } from 'vant';
  import {recommendVideoUri,getRecommendVideoUri} from '../../api/api-url';
  import info from '../../store/news-data';
  import axios from "axios"
  export default {
    name:"Video",
    data(){
      return {
        videoList:[],     //存储视频信息
        isLoading:false,  //是否是在加载状态，以便判断是否是显示下拉加载动画
        cover: "cover"    //绑定cover类名
      }
    },
    mounted(){
      Toast.loading({
        mask: false,
        message: '数据获取中...',
        loadingType: 'spinner',
      });    //一旦挂载到dom，就发起请求，显示提示
      axios({
        method:'post',
        url: recommendVideoUri,
        data: {
          requestUri:getRecommendVideoUri()
        }
      }).then((res)=>{
        this.$data.videoList=res.data["视频"]
        Toast.clear();
      })
    },
    methods:{
      onRefresh() {
        Toast.loading({                              //下拉刷新时展示动画，展示提示
          mask: false,
          message: '数据获取中...',
          loadingType: 'spinner',
        });
        axios({
          method:'post',
          url: recommendVideoUri,
          data: {
            requestUri:getRecommendVideoUri()
          }
        }).then((res)=>{
          this.$data.videoList=res.data["视频"]
          Toast.clear();
          this.isLoading = false;
        })
      },
      handleClick(videoMsg){
        console.log(videoMsg);
        this.$router.push({
          name:"videoplayer",
          params:{
            videoMsg:videoMsg
          }
        })
      }
    }
  }
</script>
<style>

</style>

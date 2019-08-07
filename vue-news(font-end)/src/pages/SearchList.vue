<template>
  <div class="content">
    <van-card
      class="pointer"
      v-for="(item,index) in resultList"
      currency=""
      :desc="item.description"
      :title="item.title"
      :thumb="item.pics[0]"
      :key="item.title"
    />
  </div>
</template>
<script>
  import store from "../store/store"
  import { Toast } from 'vant';
  import {searchUri,getSearch} from '../../api/api-url';
  import info from '../../store/news-data';
  import axios from "axios"
  export default {
    name:"SearchList",
    data(){
      return {
        keyword:this.$route.query.keyword,
        resultList:[],
        offset:1
      }
    },
    mounted(){
      Toast.loading({
        mask: false,
        message: '数据获取中...',
        loadingType: 'spinner',
      });
      axios({
        method:'post',
        url: searchUri,
        data: {
          requestUri:getSearch(this.$route.query.keyword,this.$data.offset)     //一旦挂载根据路由传参传过来的数据向搜索接口发送请求
        }
      }).then((res)=>{
        res.data.resultList.forEach((item,index)=>{
          if (item.pics.length!=0){
            this.$data.resultList.push(item);

          }
        })
        Toast.clear();
      })
    },
    methods:{
      next(){

      }
    },
  }
</script>
<style>

</style>

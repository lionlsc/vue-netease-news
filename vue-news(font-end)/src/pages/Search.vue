<template>
  <van-cell-group>
    <van-search
      v-model="value"
      placeholder="请输入搜索关键词"
      show-action
      shape="round"
      @search="onSearch"
    >
      <div slot="action" @click="onSearch">搜索</div>
    </van-search>
    <van-cell
      v-for="(item,index) in hotwords"
      :value="item.hotWord"
      :key="item.hotWord"
    />
  </van-cell-group>
</template>
<script>
  import store from "../store/store"
  import { Toast } from 'vant';
  import {recommendUri} from '../../api/api-url';
  import info from '../../store/news-data';
  import axios from "axios"
  export default {
    name:"Search",
    data(){
      return {
        value:'',
        hotwords:[] //搜索热词数组
      }
    },
    methods:{
      onSearch(){                //路由传参给/searhlist
        this.$router.push({
          path: '/searchlist',
          query: {
            keyword:this.value
          }
        })
      }
    },
    mounted(){                  //一旦挂载就取获取数据
      Toast.loading({
        mask: false,
        message: '获取热搜中...',
        loadingType: 'spinner',
      });
      axios.get(recommendUri).then((res)=>{
        this.$data.hotwords=res.data.hotWordList
        Toast.clear();
      })
    },
  }
</script>
<style>

</style>

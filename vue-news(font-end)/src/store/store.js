import Vue from 'vue'
import Vuex from "vuex";
Vue.use(Vuex);
const store = new Vuex.Store({
  state: {
    startIndex:-10, //起始页码
    newsCount:10,   //获取多少页的数据
    list:[],         //新闻数组
    searchList:[]    //搜索关键词获取的数组
  },
  mutations: {
    nextPage(state){
      state.startIndex+=10
    },     /*翻页，下一页*/
    prePage(state){
      state.startIndex-=10;
    },      /*翻页，上一页*/
    clearNews(state){
      state.list.length=0;
    },    /*每次翻页时候要上一页的数据清空*/
    getNews(state,newsArray){
      state.list=newsArray
    }, /*将接口请求到的数据*/
    init(state){
      state.startIndex=0;
      state.list.length=0;
    },

  }
})
export default store;

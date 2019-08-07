<template>
  <van-tabs  @change="handleTabChange" v-model="active">
    <van-tab v-for="(item,index) in title" :title="item" :key="item.digest" >
      <div class="content">
        <van-card
          class="pointer"
          v-for="(item,index) in $store.state.list"
          currency=""
          :desc="item.digest"
          :title="item.title"
          :thumb="item.imgsrc"
          :price="item.ptime"
          @click="handleClick(item.url)"
          :key="item.digest"
        />
        <div class="button-area">
          <van-button  size="normal" @click="prve">上一页</van-button>
          <van-button  size="normal" @click="next">下一页</van-button>
        </div>
      </div>
    </van-tab>
  </van-tabs>
</template>

<script>
  import store from "../store/store"
  import { Toast } from 'vant';
  import {newsUri,getNewsUri,amuseUri,getAmuseUri,sportUri,getSportUri,financeUri,getFinanceUri,
    warUri,getWarUri,techUri,getTechUri,mobileUri,getMobileUri,digitalUri,getDigitalUri} from '../../api/api-url';
  import info from '../../store/news-data';
  import axios from "axios"
  export default {
    name:"Index",
    data(){
      return{
        title:["新闻","娱乐","运动","金融","军事","科技","手机","数字"], //tab页类别
        active: 0
      }
    },methods:{
      handleTabChange(name,title){
        this.$store.commit("init");
        let url='';
        let requestUri='';
        let responseEncode='';
        if (name==0){
          url=newsUri;
          requestUri=getNewsUri(this.$store.state.startIndex,this.$store.state.newsCount)
          responseEncode=info.newsInfo.responseEncode
        } else if(name==1){
          url=amuseUri;
          requestUri=getAmuseUri(this.$store.state.startIndex,this.$store.state.newsCount)
          responseEncode=info.amuseInfo.responseEncode
        } else if(name==2){
          url=sportUri
          requestUri=getSportUri(this.$store.state.startIndex,this.$store.state.newsCount)
          responseEncode=info.sportInfo.responseEncode
        } else if(name==3){
          url=financeUri
          requestUri=getFinanceUri(this.$store.state.startIndex,this.$store.state.newsCount)
          responseEncode=info.financeInfo.responseEncode
        } else if(name==4){
          url=warUri
          requestUri=getWarUri(this.$store.state.startIndex,this.$store.state.newsCount)
          responseEncode=info.warInfo.responseEncode
        } else if(name==5){
          url=techUri
          requestUri=getTechUri(this.$store.state.startIndex,this.$store.state.newsCount)
          responseEncode=info.techInfo.responseEncode
        } else if(name==6){
          url=mobileUri
          requestUri=getMobileUri(this.$store.state.startIndex,this.$store.state.newsCount)
          responseEncode=info.mobileInfo.responseEncode
        } else if(name==7){
          url=digitalUri
          requestUri=getDigitalUri(this.$store.state.startIndex,this.$store.state.newsCount)
          responseEncode=info.digitalInfo.responseEncode
        }
        Toast.loading({
          mask: false,
          message: '数据获取中...',
          loadingType: 'spinner',
        });
        axios({
          method:'post',
          url: url,
          data: {
            requestUri:requestUri
          }
        }).then((res)=>{
          const data=JSON.parse(res.data.slice(res.data.indexOf('{'), res.data.lastIndexOf('}') + 1));
          let newsArray=data[responseEncode];
          this.$store.commit("getNews",newsArray);
          Toast.clear();
        })
      },  //tab改变，清除展示的新闻，重新根据tab项获取相应数据
      handleClick(address){
        window.location.href=address
      },//点击跳转到网易新闻的真实地址
      prve(){
        if(this.$store.state.startIndex==0){
          Toast.fail('已经是第一页');
        }else{
          Toast.loading({
            mask: false,
            message: '数据获取中...',
            loadingType: 'spinner',
          });
          this.$store.commit("prePage");
          this.$store.commit("clearNews");
          let url='';
          let requestUri='';
          let responseEncode='';
          if (this.active==0){
            url=newsUri;
            requestUri=getNewsUri(this.$store.state.startIndex,this.$store.state.newsCount)
            responseEncode=info.newsInfo.responseEncode
          } else if(this.active==1){
            url=amuseUri;
            requestUri=getAmuseUri(this.$store.state.startIndex,this.$store.state.newsCount)
            responseEncode=info.amuseInfo.responseEncode
          } else if(this.active==2){
            url=sportUri
            requestUri=getSportUri(this.$store.state.startIndex,this.$store.state.newsCount)
            responseEncode=info.sportInfo.responseEncode
          } else if(this.active==3){
            url=financeUri
            requestUri=getFinanceUri(this.$store.state.startIndex,this.$store.state.newsCount)
            responseEncode=info.financeInfo.responseEncode
          } else if(this.active==4){
            url=warUri
            requestUri=getWarUri(this.$store.state.startIndex,this.$store.state.newsCount)
            responseEncode=info.warInfo.responseEncode
          } else if(this.active==5){
            url=techUri
            requestUri=getTechUri(this.$store.state.startIndex,this.$store.state.newsCount)
            responseEncode=info.techInfo.responseEncode
          } else if(this.active==6){
            url=mobileUri
            requestUri=getMobileUri(this.$store.state.startIndex,this.$store.state.newsCount)
            responseEncode=info.mobileInfo.responseEncode
          } else if(this.active==7){
            url=digitalUri
            requestUri=getDigitalUri(this.$store.state.startIndex,this.$store.state.newsCount)
            responseEncode=info.digitalInfo.responseEncode
          }
          axios({
            method:'post',
            url: url,
            data: {
              requestUri:requestUri
            }
          }).then((res)=>{
            const data=JSON.parse(res.data.slice(res.data.indexOf('{'), res.data.lastIndexOf('}') + 1));
            let newsArray=data[responseEncode];
            this.$store.commit("getNews",newsArray);
            Toast.clear();
          })
        }
      },        //上一页
      next(){
        Toast.loading({
          mask: false,
          message: '数据获取中...',
          loadingType: 'spinner',
        });
        this.$store.commit("clearNews")
        this.$store.commit("nextPage");
        let url='';
        let requestUri='';
        let responseEncode='';
        if (this.active==0){
          url=newsUri;
          requestUri=getNewsUri(this.$store.state.startIndex,this.$store.state.newsCount)
          responseEncode=info.newsInfo.responseEncode
        } else if(this.active==1){
          url=amuseUri;
          requestUri=getAmuseUri(this.$store.state.startIndex,this.$store.state.newsCount)
          responseEncode=info.amuseInfo.responseEncode
        } else if(this.active==2){
          url=sportUri
          requestUri=getSportUri(this.$store.state.startIndex,this.$store.state.newsCount)
          responseEncode=info.sportInfo.responseEncode
        } else if(this.active==3){
          url=financeUri
          requestUri=getFinanceUri(this.$store.state.startIndex,this.$store.state.newsCount)
          responseEncode=info.financeInfo.responseEncode
        } else if(this.active==4){
          url=warUri
          requestUri=getWarUri(this.$store.state.startIndex,this.$store.state.newsCount)
          responseEncode=info.warInfo.responseEncode
        } else if(this.active==5){
          url=techUri
          requestUri=getTechUri(this.$store.state.startIndex,this.$store.state.newsCount)
          responseEncode=info.techInfo.responseEncode
        } else if(this.active==6){
          url=mobileUri
          requestUri=getMobileUri(this.$store.state.startIndex,this.$store.state.newsCount)
          responseEncode=info.mobileInfo.responseEncode
        } else if(this.active==7){
          url=digitalUri
          requestUri=getDigitalUri(this.$store.state.startIndex,this.$store.state.newsCount)
          responseEncode=info.digitalInfo.responseEncode
        }
        axios({
          method:'post',
          url: url,
          data: {
            requestUri:requestUri
          }
        }).then((res)=>{
          const data=JSON.parse(res.data.slice(res.data.indexOf('{'), res.data.lastIndexOf('}') + 1));
          let newsArray=data[responseEncode];
          this.$store.commit("getNews",newsArray);
          Toast.clear();
        })
      }         //下一页
    },
    mounted(){
      Toast.loading({
        mask: false,
        message: '数据获取中...',
        loadingType: 'spinner',
      });
      this.$store.commit("clearNews")
      this.$store.commit("nextPage");
      axios({
        method:'post',
        url: newsUri,
        data: {
          requestUri:getNewsUri(this.$store.state.startIndex,this.$store.state.newsCount)
        }
      }).then((res)=>{
        const data=JSON.parse(res.data.slice(res.data.indexOf('{'), res.data.lastIndexOf('}') + 1));
        let newsArray=data[info.newsInfo.responseEncode];
        this.$store.commit("getNews",newsArray);
        Toast.clear();
      })
    },       //一旦挂载就去获取数据
  }
</script>

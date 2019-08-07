<template>
  <div class="prism-player" id="player-con"></div>
</template>
<script>
export default {
  name:"VideoPage",
  mounted(){
    var player = new Aliplayer({     //利用aliplayer播放视频。虽然不能真实播放，但是能够展示封面
        "id": "player-con",
        "source": this.$route.params.videoMsg.uri,
        "width": "100%",
        "height": "100%",
        "autoplay": false,
        "isLive": false,
        "cover": this.$route.params.videoMsg.cover,
        "rePlay": false,
        "playsinline": false,
        "preload": false,
        "controlBarVisibility": "hover",
        "useH5Prism": true
      }, function (player) {
        console.log("The player is created");
      }
    );
  }
}
</script>
<style>

</style>

<template>
    <a @click="toggle" :class="{active:isfull}"><i class="fa fa-expand fa-fw text"></i> <i class="fa fa-compress fa-fw text-active"></i></a>
</template>
<script>
export default {
  data() {
    return {
      isfull: false
    }
  },
  methods: {
    fullscreenElement() {
      var fullscreenEle = document.fullscreenElement ||
        document.mozFullScreenElement ||
        document.webkitFullscreenElement;
      //注意：要在用户授权全屏后才能获取全屏的元素，否则 fullscreenEle为null
      // console.log("全屏元素：" + fullscreenEle);
      return fullscreenEle;
    },
    toggle() {
      if (this.fullscreenElement()) {
        if (document.exitFullscreen) {
          document.exitFullscreen();
        } else if (document.mozCancelFullScreen) { //兼容moz
          document.mozCancelFullScreen();
        } else if (document.webkitExitFullscreen) { //兼容webkit
          document.webkitExitFullscreen();
        }
        this.isfull=false;
      } else {
        var element = document.documentElement;
        if (element.requestFullscreen) {
          element.requestFullscreen();
        } else if (element.mozRequestFullScreen) {
          element.mozRequestFullScreen();
        } else if (element.webkitRequestFullscreen) {
          element.webkitRequestFullscreen();
        } else if (element.msRequestFullscreen) {
          element.msRequestFullscreen();
        }
         this.isfull=true;
      }
    }
  }
}

</script>

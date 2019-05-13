Page({
  data:{
    src: "http://flv.bn.netease.com/tvmrepo/2012/7/C/7/E868IGRC7-mobile.mp4",
    play:true,
    pause:false,
  },
    onLoad() {
    this.videoContext = my.createVideoContext('myVideo');
  },
  
  play() {
    this.videoContext.play();
    this.setData({
      pause:true,
      play:false
    })
  },

  pause() {
    this.videoContext.pause();
    this.setData({
      play:true,
      pause:false
    })
  },
})
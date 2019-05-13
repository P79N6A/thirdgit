Page({
  onLoad() {
    my.onUserCaptureScreen(
      function (res) {
        console.log('用户截屏了')
        my.alert({ content: '截屏信息' + JSON.stringify(res), });
      fail: (error) => {
        my.alert({ content: '调用失败' + JSON.stringify(error), });
      }
    });
  },
  onUnload() {
    my.offUserCaptureScreen();
  },
});

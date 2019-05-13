Page({
  onLoad() {
    this.callback = (res) => {
      var levelString = 'iOS 设备, 无 level 传入.';
      switch (res.level) {
        case 10:
          levelString = 'Android 设备, level = TRIM_MEMORY_RUNNING_LOW';
          break;
        case 15:
          levelString = 'Android 设备, level = TRIM_MEMORY_RUNNING_CRITICAL';
          break;
      }
      my.alert({
        title: '收到内存不足告警',
        content: levelString
      });
    };
  },
  onMemoryWarning() {
    my.onMemoryWarning(this.callback, {
      success: (callback) => {
        my.alert({ content: '开始监听' + JSON.stringify(callback) });
      },
      fail: (callback) => {
        my.alert({ content: '操作失败' + JSON.stringify(callback), });
      },
      complete: (callback) => {
        my.alert({ title: 'complete回调', });
      },
    });
  },
  onUnload() {
    my.offMemoryWarning(this.callback);
    my.alert({
      title: '退出监听，OffLoad',
      content: '退出监听，OffLoad'
    });
  }
});

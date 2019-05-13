Page({

  getServerTime() {
    my.getServerTime({
      success: (res) => {
        my.alert({ content: JSON.stringify(res) });
      },
      fail: (error) => {
        my.alert({ content: '获取失败' + JSON.stringify(error) });
      },
      complete: () => {
        my.alert({ content: 'complete回调！', });
      },
    });
  }
})

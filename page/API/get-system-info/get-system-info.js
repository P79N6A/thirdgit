Page({
  data: {
    systemInfo: {}
  },
  getSystemInfo() {
    my.getSystemInfo({
      success: (res) => {
        my.alert({content: '系统信息：'+JSON.stringify(res),});
        this.setData({
          systemInfo: res
        })
      },
      fail: (error) => {
        my.alert({ content: '获取失败' + JSON.stringify(error), });
      },
      complete: () => {
        my.alert({ title: 'complete回调', });
      },
    })
  },
  getSystemInfoSync() {
    this.setData({
      systemInfo: my.getSystemInfoSync(),
    });
     my.alert({content: '系统信息：'+JSON.stringify(this.data.systemInfo),});
  },
})

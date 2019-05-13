Page({
  data: {
    hasNetworkType: false
  },
  getNetworkType() {
    my.getNetworkType({
      success: (res) => {
        this.setData({
          hasNetworkType: true,
          networkType: res.networkType
        })
      },
      fail: (error) => {
        my.alert({ content: '获取失败' + JSON.stringify(error), });
      },
      complete: () => {
        my.alert({ content: 'complete回调', });
      },
    })
  },
  clear() {
    this.setData({
      hasNetworkType: false,
      networkType: ''
    })
  },

  onNetworkStatusChange() {
    my.onNetworkStatusChange(
      function (res) {
        console.log('网络状态')
        my.alert({ content: '网络状态' + JSON.stringify(res), });
        fail: (error) => {
          my.alert({ content: '调用失败' + JSON.stringify(error), });
        }
      });
  },

  getWifiInfo() {
     my.call('getWifiInfo', {
      success: (res) => {
        my.alert({
          title: 'ok', // alert 框的标题
          content: JSON.stringify(res),
        });
      },
      fail: (res) => {
        my.alert({
          title: 'fail', // alert 框的标题
          content: JSON.stringify(res),
        });
      },
    });
  },

  onUnload() {
    my.offNetworkStatusChange();
  },
});

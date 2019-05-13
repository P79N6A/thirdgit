Page({
 openTao() {
    my.ap.openTaobao({
      url: 'taobao://m.taobao.com/index.htm?visa=f4174ad7b568c2a8&source=alipay_wallet&version=1.0',
      login: true,
      success: (res) => {
        my.alert({ title: '操作成功' + JSON.stringify(res), });
      },
      fail: (error) => {
        my.alert({ title: '操作失败' + JSON.stringify(error), });
      },
    });
  },
  
  getLoginToken() {
    my.call('getLoginToken', {
      success: (res) => {
        my.alert({ title: '操作成功' + JSON.stringify(res), });
      },
      fail: (error) => {
        my.alert({ title: '操作失败' + JSON.stringify(error), });
      },
    });
  },
clearStorage4Debug() {
    console.error('执行清除数据...........................')
    my.call('clearStorage4Debug', {
      success: (res) => {
        my.alert({ title: '清除成功' + JSON.stringify(res), });
      },
      fail: (error) => {
        my.alert({ title: '清除失败' + JSON.stringify(error), });
      },
    });
  },

});

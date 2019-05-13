Page({
  data: {},
  updateAlipayClient1() {
    my.ap.updateAlipayClient()({
      success: (res) => {
        console.log('调用成功'+JSON.stringify(res));
        my.alert({ content: '操作成功' + JSON.stringify(res), });
      },
      fail: (error) => {
        console.log('调用成功'+JSON.stringify(error));
        my.alert({ title: 'fail', content: JSON.stringify(error), });
      },
    });
  },
    updateAlipayClient2() {
    my.call('updateAlipayClient',{
      success: (res) => {
        console.log('调用成功'+JSON.stringify(res));
        my.alert({ content: '操作成功' + JSON.stringify(res), });
      },
      fail: (error) => {
        console.log('调用成功'+JSON.stringify(error));
        my.alert({ title: 'fail', content: JSON.stringify(error), });
      },
    });
  },
});

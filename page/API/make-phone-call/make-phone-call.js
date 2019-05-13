Page({
  makePhoneCall() {
    my.makePhoneCall({
      number: '95888',
      success: () => {
        my.alert({ title: '操作成功', });
      },
      fail: () => {
        my.alert({ title: '操作失败', });
      },
      complete: () => {
        my.alert({ title: 'complete回调', });
      },
    });
  },
});

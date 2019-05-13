Page({
  data: {},
  onLoad() { },
  chooseAddress() {
    my.chooseAddress({
      success: (res) => {
        my.alert({ content: '操作成功：' + JSON.stringify(res), });
      },
      fail: (error) => {
        my.alert({ content: '操作失败：' + JSON.stringify(error), });
      },
    });
  },
});

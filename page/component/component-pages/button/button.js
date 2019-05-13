
Page({
  data: {},
  onShareAppMessage() {
    return {
      title: '好友渠道分享 View 组件',
      desc: '好友渠道View 组件很通用',
      path: 'page/component/component-pages/view/view',
      imageUrl: '/image/view.png',//https://t.alipayobjects.com/images/publichome/T1AVxrXjJcXXaCwpjX.png_128x.png
      content: '吱口令分享自定义内容@￥@*****',
    };
  },
  onSubmit() {
    my.alert({ title: 'You click submit' });
  },
  onReset() {
    my.alert({ title: 'You click reset' });
  },
  getSetting() {
    my.getSetting({
      success: (res) => {
        my.alert({ content: '操作成功' + JSON.stringify(res) });
      },
      fail: (error) => {
        my.alert({ content: '操作失败' + JSON.stringify(error), });
      },
      complete: () => {
        my.alert({ title: 'complete回调', });
      },
    });
  },

  openSetting() {
    my.openSetting({
      success: (res) => {
        my.alert({ content: '操作成功' + JSON.stringify(res) });
      },
      fail: (error) => {
        my.alert({ content: '操作失败' + JSON.stringify(error), });
      },
      complete: () => {
        my.alert({ title: 'complete回调', });
      },
    });
  },

});

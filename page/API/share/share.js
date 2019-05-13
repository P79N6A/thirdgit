Page({
  onShareAppMessage() {
    return {
      title: '分享 View 组件',
      desc: 'View 组件很通用',
      path: 'page/component/component-pages/view/view',
      imageUrl: 'https://t.alipayobjects.com/images/publichome/T1AVxrXjJcXXaCwpjX.png_128x.png',
      content:'吱口令分享自定义内容长度修改到28个字@￥@。。。test*****',
      success: (res) => {
        my.alert({ content: '分享成功' + JSON.stringify(res), });
      },
      fail: (error) => {
        my.alert({ content: '分享失败' + JSON.stringify(error), });
      },
    };
  },

  share() {
     my.hideShareMenu({
      success: (res) => {
        my.alert({ content: '操作成功' + JSON.stringify(res), });
      },
      fail: (error) => {
        my.alert({ title: 'fail', content: JSON.stringify(error), });
      },
    });
  },
});

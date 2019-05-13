Page({
  data: {},
  onLoad() {},
   onShareAppMessage() {
    return {
      title: '分享 web-View 组件',
      desc: 'View 组件很通用',
      path: 'page/component/component-pages/webview/custom',
    };
  },
});
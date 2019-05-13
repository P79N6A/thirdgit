Page({
  data: {},
  onReady() {
    this.ctx = my.createWebViewContext('test');
  },
  onmessage(e){
    my.alert({
      content: '拿到数据'+JSON.stringify(e), 
    });
    this.ctx.postMessage({name: 'renqiang', age: 2});
  },
    onShareAppMessage(options) {
    my.showToast({content:JSON.stringify(options.webViewUrl)});
    return {
      title: '分享百度页面',
      desc: '百度',
      path: 'page/component/component-pages/webview/baidu',
      'web-view': options.webViewUrl,
    };
  },
});
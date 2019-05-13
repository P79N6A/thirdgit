Page({
  data: {},
  onLoad() { },
  baidu() {
    my.navigateTo({
      url: '../webview/baidu',
    });
  },
  NetEase() {
    my.navigateTo({
      url: '../webview/custom',
    });
  },
  custom() {
    my.navigateTo({
      url: '../webview/custom2',
    });
  },

  //打开本地file地址
  custom_file() {
    my.navigateTo({
      url: '../webview/file',
    });
  },
  //打开本地html网页
  local_html() {
    my.navigateTo({
      url: '../webview/local_html',
    });
  },
      //打开离线包appid
  webview_appid() {
    my.navigateTo({
      url: '../webview/webview_appid',
    });
  },
  //打开本地js
  local_js() {
    my.navigateTo({
      url: '../webview/local_js',
    });
  },
  //参数为空
  custom_null() {
    my.navigateTo({
      url: '../webview/custom_null',
    });
  },
  //参数为占位符
  custom_nuber() {
    my.navigateTo({
      url: '../webview/custom_nuber',
    });
  },
  //多个web-view嵌入一个页面
  webview_more() {
    my.navigateTo({
      url: '../webview/webview_more',
    });
  },
  //有web-view，还有其他控件
  webview_component() {
    my.navigateTo({
      url: '../webview/webview_component',
    });
  },
  webview_error() {
    my.navigateTo({
      url: '../webview/webview_error',
    });
  },
  webview_jsapi() {
    my.navigateTo({
      url: '../webview/webview_jsapi',
    });
  },
  webview_navigator() {
    my.navigateTo({
      url: '../webview/navigator',
    });
  },
  webview_iframe() {
    my.navigateTo({
      url: '../webview/iframe',
    });
  },
  openH5() {
    my.call('startApp', { appId: '20000067', param: { url: 'https://private-alipayobjects.alipay.com/alipay-rmsdeploy-image/rmsportal/GFoqPpRCnefTqoaGYTJa.html' } });
  },
  contraband() {
    my.navigateTo({
      url: '../webview/contraband',
    });
  },
  photo_contraband() {
    my.navigateTo({
      url: '../webview/photo_contraband',
    });
  },
});

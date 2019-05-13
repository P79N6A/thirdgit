Page({
  data: {},
  onLoad() { },
  //会员卡开卡授权接口
  addCardAuth() {
    my.addCardAuth({
      url: 'https://memberprod.alipay.com/account/openform/activecard.htm?template_id=20170317000000000182103000300198&__webview_options__=canPullDown%3dNO%26transparentTitle%3dauto&app_id=2015101400446982&out_string=201928393932',
      success: (res) => {
        my.alert({ content: 'success:' + JSON.stringify(res) });
      },
      fail: (res) => {
        my.alert({ content: 'fail: ' + JSON.stringify(res) });
      },
      complete: () => {
        my.alert({ title: 'complete回调！', });
      },
    });
  },
  addCardAuth_null() {
    my.addCardAuth({
      url: null,
      success: (res) => {
        my.alert({ content: 'success:' + JSON.stringify(res) });
      },
      fail: (res) => {
        my.alert({ content: 'fail: ' + JSON.stringify(res) });
      },
    });
  },
  addCardAuth_number() {
    my.addCardAuth({
      url: 0,
      success: (res) => {
        my.alert({ content: 'success:' + JSON.stringify(res) });
      },
      fail: (res) => {
        my.alert({ content: 'fail: ' + JSON.stringify(res) });
      },
    });
  },
  addCardAuth_array() {
    my.addCardAuth({
      url: [0, 1, 2],
      success: (res) => {
        my.alert({ content: 'success:' + JSON.stringify(res) });
      },
      fail: (res) => {
        my.alert({ content: 'fail: ' + JSON.stringify(res) });
      },
    });
  },
  addCardAuth_bool() {
    my.addCardAuth({
      url: false,
      success: (res) => {
        my.alert({ content: 'success:' + JSON.stringify(res) });
      },
      fail: (res) => {
        my.alert({ content: 'fail: ' + JSON.stringify(res) });
      },
    });
  },
});

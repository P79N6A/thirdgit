const app = getApp();
Page({
  getAuthCode: () => {
    my.getAuthCode({
      //scopes: 'auth_user',
      success: (res) => {
        my.alert({ content: JSON.stringify(res) });
      },
      fail: (error) => {
        my.alert({ content: JSON.stringify(error) });
      },
      complete: () => {
        my.showToast({ content: 'complet回调', });
      }
    });
  },
  baseGetAuthCode() {
    my.getAuthCode({
      scopes: 'auth_base',
      success: (res) => {
        my.alert({ content: '静默获取成功' + JSON.stringify(res) });
      },
      fail: (error) => {
        my.alert({ content: JSON.stringify(error) });
      },
    });
  },
  zhimaGetAuthCode() {
    my.getAuthCode({
      scopes: 'auth_zhima',
      success: (res) => {
        my.alert({ content: '芝麻授权码获取成功' + JSON.stringify(res) });
      },
      fail: (error) => {
        my.alert({ content: JSON.stringify(error) });
      },
    });
  },
  errorGetAuthCode() {
    my.getAuthCode({
      scopes: 'xxx',
      success: (res) => {
        my.alert({ content: JSON.stringify(res) });
      },
      fail: (error) => {
        my.alert({ content: '操作失败' + JSON.stringify(error) });
      },
    });
  },
})

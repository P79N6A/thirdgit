var app = getApp()
Page({
  data: {
    hasUserInfo: false
  },
  getUserInfo() {
    my.getAuthCode({
      scopes: 'auth_user',
      fail: (error) => {
        console.error('getAuthCode', error);
      },
      success: () => {
        my.getAuthUserInfo({
          success: (userInfo) => {
            this.setData({
              userInfo,
              hasUserInfo: true,
            });
          },
          fail: (error) => {
            my.alert({ content: '操作失败' + JSON.stringify(error) });
          },
          complete: () => {
            my.showToast({ content: 'complet回调', });
          },
        });
      }
    });
  },

  baseGetUserInfo() {
    my.getAuthCode({
      scopes: 'auth_base',
      fail: (error) => {
        my.alert({ content: 'getAuthCode失败' + JSON.stringify(error) });
      },
      success: () => {
        my.getAuthUserInfo({
          success: (userInfo) => {
            console.log(`userInfo:`, userInfo);
            this.setData({
              userInfo,
              hasUserInfo: true,
            });
          },
          fail: (error) => {
            my.alert({ content: '操作失败' + JSON.stringify(error) });
          },
        });
      }
    });
  },
  clear() {
    this.setData({
      hasUserInfo: false,
      userInfo: {}
    })
  }
})

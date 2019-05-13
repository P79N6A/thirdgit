Page({
  navigateTo() {
    my.navigateTo({
      url: '../get-user-info/get-user-info',
      success: () => {
        my.showToast({
          content: '成功',
          type: 'success',
          duration: 4000
        });
      },
      fail: () => {
        my.alert({ title: '失败', });
      },
      complete: () => {
        my.alert({ title: 'complete回调', });
      },
    })
  },
  navigateBack() {
    my.navigateBack();
  },
  redirectTo() {
    my.redirectTo({
      url: '../get-user-info/get-user-info',
      success: () => {
        my.showToast({
          content: '成功',
          type: 'success',
          duration: 4000
        });
      },
      fail: () => {
        my.alert({ title: '失败', });
      },
      complete: () => {
        my.alert({ title: 'complete回调', });
      },
    })
  },
  switchTab() {
    my.switchTab({
      url: '/page/stability/stability',
      success: () => {
        my.showToast({
          content: '成功',
          type: 'success',
          duration: 4000
        });
      },
      fail: () => {
        my.alert({
          title: '失败',
        });
      },
      complete: () => {
        my.alert({
          title: '完成跳转！！！',
        });
      },
    }
    );
  },
  reLaunch() {
    my.reLaunch({
      url: '/page/component/index'
    });
  },
  reLaunch_null() {
    my.reLaunch({
      url: null,
    });
  },
  reLaunch_array() {
    my.reLaunch({
      url: [0, 1, 2],
    });
  },
  reLaunch_number() {
    my.reLaunch({
      url: 0,
    });
  },
})

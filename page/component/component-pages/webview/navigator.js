Page({
  data: {},
  onLoad() {

// my.navigateBack();

    my.navigateTo({
      url: '../icon/icon',
      success: () => {
        my.showToast({
          content: '成功',
          type: 'success',
          duration: 4000
        });
      },
    });

    //  my.switchTab({
    //   url: '/page/stability/stability',
    //   success: () => {
    //     my.showToast({
    //       content: '成功',
    //       type: 'success',
    //       duration: 4000
    //     });
    //     },
    //  });

    // my.reLaunch({
    //   url: '/page/component/index'
    // });
},
    
});
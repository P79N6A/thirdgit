Page({
  showLoading() {
    my.showLoading({
      content: '加载中...',
      delay: '1000',
      success: () => {
      my.alert({
        title: '加载成功',
      });
     } ,
      fail: () => {
        my.alert({
          title: '加载失败',
        });
      },
      complete: () => {
        my.alert({
          title: '完成加载！！！',
        });
      },
    });
    setTimeout(() => {
      my.hideLoading();
    }, 5000);
  },
});

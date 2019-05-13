Page({
  data: {},
  onLoad() { },
  onHide(){
     console.log('startapp启动后触发--page Hide')
   // my.alert({ content: 'page，，页面隐藏了，触发&&&&&&&', });
  },

onLoad(query) {
    // 页面加载
   //  my.alert({ content: 'page，，页面加载中...', }); 
      console.log('page，，页面加载中...')
  },
  onReady() {
    // 页面加载完成
    // my.alert({ content: 'page，，页面加载完成', }); 
     console.log('page，，页面加载完成')
  },
  onShow() {
    // 页面显示
     //my.alert({ content: 'page，，页面显示了', }); 
      console.log('page，，页面显示了')
  },
  onUnload() {
    // 页面被关闭
   //  my.alert({ content: 'page，，页面关闭了', }); 
     console.log('page，，页面关闭了')
  },
  onTitleClick() {
    // 标题被点击
    //   my.alert({ content: 'page，，标题被点击了', }); 
       console.log('page，，标题被点击了')
  },
  onPullDownRefresh() {
    // 页面被下拉
    // my.alert({ content: 'page，，页面下拉了', }); 
     console.log('page，，页面下拉了')
  },
  onReachBottom() {
    // 页面被拉到底部
    // my.alert({ content: 'page，，页面拉到底部', }); 
     console.log('page，，页面拉到底部')
  },
  getapp() {
    my.call('getAppType', {
      appId: '66666819',
      success: (res) => {
        my.alert({
          title: 'ok', // alert 框的标题
          content: JSON.stringify(res),
        });
      },
      fail: (res) => {
        my.alert({
          title: 'fail', // alert 框的标题
          content: JSON.stringify(res),
        });
      },
    });
  },
  getsmall_routine() {
    my.call('getAppType', {
      appId: '2017041206668232',
      success: (res) => {
        my.alert({
          title: 'ok', // alert 框的标题
          content: JSON.stringify(res),
        });
      },
      fail: (res) => {
        my.alert({
          title: 'fail', // alert 框的标题
          content: JSON.stringify(res),
        });
      },
    });
  },
  getType_null() {
    my.call('getAppType', {
      appId: null,
      success: (res) => {
        my.alert({ content: JSON.stringify(res), });
      },
      fail: (res) => {
        my.alert({ content: '操作失败：' + JSON.stringify(res), });
      },
    });
  },
  startApp() {
    my.call('startApp', { appId: '20000067', param: { url:'alipays://platformapi/startApp?appId=2017072607907880&page=page/component/index' } });
  }

});

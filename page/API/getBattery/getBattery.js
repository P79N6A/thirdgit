Page({
  data: {
    //getBatteryInfo: {}
  },
  
  //异步接口    两端测试通过
  getBatteryInfo() {
    my.getBatteryInfo({
      success: (res) => {
        my.alert({content: '系统信息：'+JSON.stringify(res),});
        console.log({content: '系统信息：'+JSON.stringify(res),});
    
      },    
      fail: (error) => {
        my.alert({ content: '获取失败' + JSON.stringify(error), });
      },
      complete: () => {
        my.alert({ title: 'complete回调', });
      },
    })
  },

//MY.CALL   两端端测试通过
  // getBatteryInfo: function() {
  //   my.call('getBatteryInfo', {
  //     success: (res) => {
  //       my.alert({content: '系统信息：'+JSON.stringify(res),});
  //        console.log({content: '成功调用：'+JSON.stringify(res),});
  //     },    
  //     fail: (error) => {
  //       my.alert({ content: '获取失败' + JSON.stringify(error), });
  //        console.log({ content: '获取失败' + JSON.stringify(error), });
  //     },
  //     complete: () => {
  //       my.alert({ title: 'complete回调', });
  //     },
  //   });
  // },


 
  //同步接口    无法使用my.call的方式写
    getBatteryInfoSync() {
    var res = my.getBatteryInfoSync();
         my.alert({content: '系统信息：'+JSON.stringify(res)});
         console.log({content: '系统信息：'+JSON.stringify(res),});
         
  },
})

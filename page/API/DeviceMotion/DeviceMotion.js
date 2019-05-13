Page({
//offDeviceMotionChange  appx封装，my.call无法调用，只能my.XXX
//offDeviceMotionChange   my.xxxxx
   offDeviceMotionChange() {
    my.offDeviceMotionChange({
      success: (res) => {
      my.alert({content: 'off调用成功：'+JSON.stringify(res),});
       console.log({content: 'off调用成功：'+JSON.stringify(res),});
      },
      fail: (res) => {
         my.alert({content: 'off调用失败：'+JSON.stringify(res),});
          console.log({content: 'off调用失败：'+JSON.stringify(res),});
      },
      
    });
  },

    onDeviceMotionChange() {
    my.onDeviceMotionChange({
      //
      success: (res) => {
      console.log({content: 'on调用成功：'+JSON.stringify(res),});
     //  my.alert({content: 'on调用成功：'+JSON.stringify(res),});
      
      },
      fail: (error) => {
        console.log({ content: 'on调用失败' + JSON.stringify(error),});
      //   my.alert({ content: 'on调用失败' + JSON.stringify(error),});
      },
      complete: () => {
        console.log({ title: 'complete回调', });
      },
    })
  },




 startDeviceMotionListening: function() {
    my.call('startDeviceMotionListening', {
      success: (res) => {
       // my.alert({content: 'start调用成功：'+JSON.stringify(res),});
       console.log({content: 'start调用成功：'+JSON.stringify(res),});
      },    
      fail: (error) => {
      //  my.alert({ content: 'start获取失败' + JSON.stringify(error), });
        console.log({content: 'start调用失败：'+JSON.stringify(res),});
      },
      complete: () => {
        my.alert({ title: 'complete回调', });
      },
    });
  },


  stopDeviceMotionListening: function() {
    my.call('stopDeviceMotionListening', {
      success: (res) => {
        my.alert({content: 'stop调用成功：'+JSON.stringify(res),});
       console.log({content: 'stop调用成功：'+JSON.stringify(res),});
      },    
      fail: (error) => {
        my.alert({ content: 'stop获取失败' + JSON.stringify(error), });
        console.log({content: 'stop调用失败：'+JSON.stringify(res),});

      },
      complete: () => {
        my.alert({ title: 'complete回调', });
      },
    });
  },






});

  




  // onDeviceMotionChange: function() {
  //   my.call(' onDeviceMotionChange', {
  //     success: (res) => {
  //       my.alert({content: '系统信息：'+JSON.stringify(res),});
      
  //     },    
  //     fail: (error) => {
  //       my.alert({ content: '获取失败' + JSON.stringify(error), });
  //     },
  //     complete: () => {
  //       my.alert({ title: 'complete回调', });
  //     },
  //   });
  // },
   // z这个接口只有 my.on   和 my.off  覆盖测试通过
//  startDeviceMotionListening() {
//     my.startDeviceMotionListening({
//       success: (res) => {
//         my.alert({content: '系统信息：'+JSON.stringify(res),});
      
//       },
      
//       fail: (error) => {
//         my.alert({ content: '获取失败' + JSON.stringify(error), });
//       },
//       complete: () => {
//         my.alert({ title: 'complete回调', });
//       },
//     })
//   },

  //ios  1001，不支持相关能力，ios为success：true
//  startDeviceMotionListening: function() {
//     my.call('startDeviceMotionListening', {
//       success: (res) => {
//         my.alert({content: '系统信息：'+JSON.stringify(res),});
      
//       },    
//       fail: (error) => {
//         my.alert({ content: '获取失败' + JSON.stringify(error), });
//       },
//       complete: () => {
//         my.alert({ title: 'complete回调', });
//       },
//     });
//   },















































// Page({
//   alert() {
//     my.getSetting({
//       success: (res) => {
//         my.alert({ content: '操作成功' + JSON.stringify(res) });
//       },
//       fail: (error) => {
//         my.alert({ content: '操作失败' + JSON.stringify(error
//         ),});
//       },
//       complete: () => {
//         my.alert({ title: 'complete回调', });
//       },
//     });
//     },
// })


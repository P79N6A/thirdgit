Page({
  //调整为长亮模式
  setKeepScreenOn() {
    my.setKeepScreenOn({
      keepScreenOn:true,
      success: (res) => {
        my.alert({ content: '长亮模式' + JSON.stringify(res), });
      },
      fail: (error) => {
        my.alert({ content: '调用失败' + JSON.stringify(error), });
      },
    })
  },

//获取当前亮度
  getScreenBrightness() {
    my.getScreenBrightness({
      success: (res) => {
        my.alert({ content: '获取当前亮度' + JSON.stringify(res), });
      },
      fail: (error) => {
        my.alert({ content: '调用失败' + JSON.stringify(res), });
      },
    })
  },
//调整屏幕亮度
  setScreenBrightness() {
    my.setScreenBrightness({
      brightness: 0.5,
      success: (res) => {
        my.alert({ content: '调整亮度' + JSON.stringify(res), });
      },
      fail: (error) => {
        my.alert({ content: '调用失败' + JSON.stringify(error), });
      },
    })
  },
});

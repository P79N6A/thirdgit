Page({
  watchShake() {
    my.watchShake({
      success: (res) => {
        console.log('动起来了')
        my.alert({ title:'动起来了 o.o'});
      }
    });
  },
  vibrate() {
    my.vibrate({
      success: () => {
        my.alert({ title: '震动起来了' });
      }
    });
  },
  //方向信息
  onCompassChange() {
    my.navigateTo({
      url: '../on-compass-change/on-compass-change',
    });
  },
  //加速度计
  onAccelerometerChange() {
    my.navigateTo({
      url: '../on-accelerometer-change/on-accelerometer-change',
    });
  },
  //陀螺仪
  GyroscopeChange() {
    my.onGyroscopeChange((res) => {
      my.showToast({ content: '监听陀螺仪变化：' + JSON.stringify(res) });
    });
  },
  offGyroscopeChange() {
    my.offGyroscopeChange();
  },
});

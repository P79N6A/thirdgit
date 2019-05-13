Page({
  vibrate() {
    my.vibrate({
      success: () => {
        my.alert({ title: '震动起来了'});
      }
    });
  },
    vibrateLong() {
    my.vibrateLong((res) => {});
  },
  vibrateShort() {
    my.vibrateShort((res) => {});
  }
})

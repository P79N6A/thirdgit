Page({
  data: {
    direction: '0',
  },
  onLoad() {
    this.onCompassChange = this.onCompassChange.bind(this);
  },
  onCompassChange(res) {
    //console.log('onCompassChange' + JSON.stringify(res));
    this.setData({
      direction: JSON.stringify(res.direction)
    });
  },
  onShow() {
    my.onCompassChange(this.onCompassChange);
  },
  onHide() {
    my.offCompassChange();
  },
  onUnload() {
    my.offCompassChange();
  },
})

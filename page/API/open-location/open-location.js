Page({
  data: {
    longitude: '120.126293',
    latitude: '30.274653',
    name: '黄龙万科中心',
    address: '学院路77号',
  },

  openLocation() {
    my.openLocation({
      longitude: this.data.longitude,
      latitude: this.data.latitude,
      name: this.data.name,
      address: this.data.address,
      scale: 5,
      success: () => {
        my.alert({ title: '定位成功！', });
      },
      fail() {
        my.alert({ title: '定位失败' });
      },
       complete: () => {
        my.alert({ title: 'complete回调！', });
      },
    });
  }
})

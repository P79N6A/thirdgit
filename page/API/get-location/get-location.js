import formatLocation from './format-location.js';
Page({
  data: {
    hasLocation: false,
  },
  getLocation() {
    var that = this;
    my.showLoading();
    my.getLocation({
      //timeout: 0,
      success(res) {
        my.hideLoading();
        console.log(res)
         my.alert({ content: '数据'+JSON.stringify(res), });
        that.setData({
          hasLocation: true,
          location: formatLocation(res.longitude, res.latitude)
        })
      },
      fail(error) {
        my.hideLoading();
        my.alert({ content: '定位失败'+JSON.stringify(error)});
      },
      complete: () => {
        my.alert({ content: 'complete回调！', });
      },
    })
  },
  clear() {
    this.setData({
      hasLocation: false
    })
  },
  getLocation_1(){
     my.getLocation({
       type:1,
      success(res) {
         my.alert({ content: '获取成功：'+JSON.stringify(res)});
      },
      fail(error) {
        my.alert({ content: '定位失败'+JSON.stringify(error)});
      },
    })
  },
   getLocation_2(){
     my.getLocation({
       type:2,
      success(res) {
         my.alert({ content: '获取成功：'+JSON.stringify(res)});
      },
      fail(error) {
        my.alert({ content: '定位失败'+JSON.stringify(error)});
      },
    })
  },
   getLocation_3(){
     my.getLocation({
       type:3,
      success(res) {
         my.alert({ content: '获取成功：'+JSON.stringify(res)});
      },
      fail(error) {
        my.alert({ content: '定位失败'+JSON.stringify(error)});
      },
    })
  }
})

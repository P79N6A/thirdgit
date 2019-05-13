Page({
  onPullDownRefresh() {
    console.log('onPullDownRefresh', new Date())
  },
  onPullDownRefresh1() {
      my.setBackgroundTextStyle({
        textStyle: 'dark',
        success: (res) => {
          my.alert({ content: '操作成功' + JSON.stringify(res) });
        },
        fail: (error) => {
          my.alert({ content: '操作失败' + JSON.stringify(error), });
        },
      });
  },
    onPullDownRefresh2() {
      my.setBackgroundTextStyle({
        textStyle: 'light',
        success: (res) => {
          my.alert({ content: '操作成功' + JSON.stringify(res) });
        },
        fail: (error) => {
          my.alert({ content: '操作失败' + JSON.stringify(error), });
        },
      });
  },
  stopPullDownRefresh() {
    my.stopPullDownRefresh({
      success(res){
        // 
        console.log(1111)
      },
      complete(res) {
        console.log(res, new Date())
      }
    })
  }
})

Page({
  data: {},
 tradePay() {
    my.tradePay({
      tradeNO: '2017121321001001630200400526',
      success: (res) => {
        my.alert({ content: "success回调,返回：" + res.resultCode,});
      },
      fail: (error) => {
        my.alert({content: "fail回调，返回：" + JSON.stringify(res),});
      },
      complete: (res) => {
        my.showToast({ content: "tradePay接口complete回调！"});
      },
    });
  },

  tradePay_error() {
    my.tradePay({
      orderStr: 'xxx',
      success: (res) => {
        my.alert({
          content: "success回调,返回：" + res.resultCode,
        });
      },
      fail: (error) => {
        my.alert({
          content: "fail回调，返回：" + JSON.stringify(res),
        });
      },
    });
  },

  tradePay_null() {
    my.tradePay({
      orderStr: null,
      tradeNO:null,
      success: (res) => {
        my.alert({
          content: "success回调,返回：" + res.resultCode,
        });
      },
      fail: (res) => {
        my.alert({
          content: "fail回调，返回：" + JSON.stringify(res),
        });
      },
    });
  },
})

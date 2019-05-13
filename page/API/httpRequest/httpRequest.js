Page({
  requestHttp() {
    my.httpRequest({
      url: 'http://httpbin.org/post',
      method: 'POST',
      data: {
        from: '支付宝',
        production: 'AlipayJSAPI',
      },
       headers: {
        'content-type':'application/json'
      },
      timeout: 20000,
      dataType: 'json',
      success: function (res) {
        my.alert({ content: JSON.stringify(res) });
      },
      fail: function (error) {
        my.alert({ content: JSON.stringify(error) });
      },
      complete: function (res) {
        my.alert({ content: 'complet回调', });
      }
    });
  },
  //发送请求Https
  requestHttps() {
    my.request({
      url: 'https://johnnyzhang.cn/wxxcx/set/signature',
      data: {
        id: 1,
         signature: "new_signature",
      },
      dataType: 'json',
      success: function (res) {
        my.alert({ content: JSON.stringify(res) });
      },
      fail: function (error) {
        my.alert({ content: JSON.stringify(error) });
      },
    });
  },

  //get获取数据
  request_getHttp() {
    my.httpRequest({
      url: 'http://www.jsssha.com?json=1',
      method: 'GET',
      data: {},
      header: {
        'Accept': 'application/json'
      },
      dataType: 'json',
      success: function (res) {
        my.alert({ content: JSON.stringify(res) });
      },
      fail: function (error) {
        my.alert({ content: JSON.stringify(error) });
      },
    });
  },
  //get获取数据https类型
  request_getHttps() {
    my.httpRequest({
      url: 'https://johnnyzhang.cn/wxxcx/get/book',
      method: 'GET',
      data: {},
      success: function (res) {
        my.alert({ content: JSON.stringify(res) });
      },
      fail: function (error) {
        my.alert({ content: JSON.stringify(error) });
      },
    });
  },
  request_urlerror() {
    my.httpRequest({
      url: 'xxx',
      success: (res) => {
        my.alert({ content: JSON.stringify(res) });
      },
      fail: (error) => {
        my.alert({ content: '请求失败' + JSON.stringify(error) });
      },
    });
  },

  request_timeout() {
    my.httpRequest({
      url: 'http://httpbin.org/post',
      method: 'POST',
      data: {
        from: '支付宝',
        production: 'AlipayJSAPI',
      },
      timeout: 500,
      dataType: 'json',
      success: function (res) {
        my.alert({ content: JSON.stringify(res) });
      },
      fail: function (error) {
        my.alert({ content: JSON.stringify(error) });
      },
    });
  },

});

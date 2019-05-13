Page({
  data: {
    result: ''
  },
  startWifi: function() {
    my.call('startWifi', {
      success: (res) => {
        this.setData({
          result: 'start' + JSON.stringify(res),
        });
      },
      fail: (res) => {
        this.setData({
          result: 'start' + JSON.stringify(res),
        });
      },
      complete: (res) => {
        this.setData({
          result: 'start' + JSON.stringify(res),
        });
      }
    });
  },
  stopWifi: function() {
    my.call('stopWifi', {
      success: (res) => {
        this.setData({
          result: 'stop' + JSON.stringify(res),
        });
      },
      fail: (res) => {
        this.setData({
          result: 'stop' + JSON.stringify(res),
        });
      },
    });
  },
  getWifiList: function() {
    my.onGetWifiList((res) => {
      this.setData({
        result: JSON.stringify(res.wifiList),
      });
      if (res.wifiList.length) {
        my.setWifiList({
          wifiList: [{
          // 'SSID': 'da',
          // 'BSSID': '70:d9:23:32:8d:02',
          // 'password': '04210331',
          'SSID': '3B',
          'BSSID': 'cs:a8:23:df:7d:3b',
          'password': '33334444',
           // SSID: res.wifiList[5].SSID,
           // BSSID: res.wifiList[5].BSSID,
           // password: '04210331'
          }]
        })
      } else {
        my.setWifiList({
          wifiList: []
        })
      }
    });
    my.call('getWifiList', {
      success: (res) => {
        this.setData({
          result: 'getWifi' + JSON.stringify(res),
        });
      },

      fail: (res) => {
        this.setData({
          result: 'getWifi' + JSON.stringify(res),
        });
      }
    });
  },

  
  connectWifi: function() {
    my.call('connectWifi', {
      // 'SSID': 'da',
      // 'BSSID': '70:d9:23:32:8d:02',
      // 'password': '04210331',
          'SSID': '大飞123',
          'BSSID': 'cs:a8:23:df:7d:3b',
          'password': '33334444',
          'isWEP':  false,//控制wifi的类型，如果为true则无法链接手机wifi
      success: (res) => {
        this.setData({
          result: JSON.stringify(res),
        });
      },
      fail: (res) => {
        this.setData({
          result: JSON.stringify(res),
        });
      },
    });
  },


  //密码不足8位，安卓为12011，ios为12002
 connectWifi: function() {
    my.call('connectWifi', {
      // 'SSID': 'da',
      // 'BSSID': '70:d9:23:32:8d:02',
      // 'password': '04210331',
          'SSID': '大飞123',
          'BSSID': 'cs:a8:23:df:7d:3b',
          'password': '333344',
          'isWEP':  false,//控制wifi的类型，如果为true则无法链接手机wifi
      success: (res) => {
        this.setData({
          result: JSON.stringify(res),
        });
      },
      fail: (res) => {
        this.setData({
          result: JSON.stringify(res),
        });
      },
    });
  },
 


//8位汉字，isWEP：false预效果 success
 connectWifi: function() {
    my.call('connectWifi', {
      // 'SSID': 'da',
      // 'BSSID': '70:d9:23:32:8d:02',
      // 'password': '04210331',
          'SSID': '大飞123',
          'BSSID': 'cs:a8:23:df:7d:3b',
          'password': '一二三四五六七八',
          'isWEP':  false,//控制wifi的类型，如果为true则无法链接手机wifi
      success: (res) => {
        this.setData({
          result: JSON.stringify(res),
        });
      },
      fail: (res) => {
        this.setData({
          result: JSON.stringify(res),
        });
      },
    });
  },



 //8位特殊符号，iswep：false，预效果：success
connectWifi: function() {
    my.call('connectWifi', {
      // 'SSID': 'da',
      // 'BSSID': '70:d9:23:32:8d:02',
      // 'password': '04210331',
          'SSID': '大飞123',
          'BSSID': 'cs:a8:23:df:7d:3b',
          'password': '@@@@@@@@',
          'isWEP':  false,//控制wifi的类型，如果为true则无法链接手机wifi
      success: (res) => {
        this.setData({
          result: JSON.stringify(res),
        });
      },
      fail: (res) => {
        this.setData({
          result: JSON.stringify(res),
        });
      },
    });
  },



   //密码为布尔值，iswep：false，预效果：fail
connectWifi: function() {
    my.call('connectWifi', {
      // 'SSID': 'da',
      // 'BSSID': '70:d9:23:32:8d:02',
      // 'password': '04210331',
          'SSID': '大飞123',
          'BSSID': 'cs:a8:23:df:7d:3b',
          'password': truefalse,
          'isWEP':  false,//控制wifi的类型，如果为true则无法链接手机wifi
      success: (res) => {
        this.setData({
          result: JSON.stringify(res),
        });
      },
      fail: (res) => {
        this.setData({
          result: JSON.stringify(res),
        });
      },
    });
  },



  //无ssid 
  connectWifi: function() {
    my.call('connectWifi', {
      // 'SSID': 'da',
      // 'BSSID': '70:d9:23:32:8d:02',
      // 'password': '04210331',
          'SSID': '',
          'BSSID': 'cs:a8:23:df:7d:3b',
       'password': '33334444',
          'isWEP':  false,//控制wifi的类型，如果为true则无法链接手机wifi
      success: (res) => {
        this.setData({
          result: JSON.stringify(res),
        });
      },
      fail: (res) => {
        this.setData({
          result: JSON.stringify(res),
        });
      },
    });
  },


  //无密码可开放WiFi
  connectWifi: function() {
    my.call('connectWifi', {
      // 'SSID': 'da',
      // 'BSSID': '70:d9:23:32:8d:02',
      // 'password': '04210331',
          'SSID': '大飞123',
          'BSSID': 'cs:a8:23:df:7d:3b',
       'password': '',
          'isWEP':  false,//控制wifi的类型，如果为true则无法链接手机wifi
      success: (res) => {
        this.setData({
          result: JSON.stringify(res),
        });
      },
      fail: (res) => {
        this.setData({
          result: JSON.stringify(res),
        });
      },
    });
  },



//无bssid
  connectWifi: function() {
    my.call('connectWifi', {
      // 'SSID': 'da',
      // 'BSSID': '70:d9:23:32:8d:02',
      // 'password': '04210331',
          'SSID': '大风',
          //'BSSID': 'cs:a8:23:df:7d:3b',
       'password': '33334444',
          'isWEP':  false,//控制wifi的类型，如果为true则无法链接手机wifi
      success: (res) => {
        this.setData({
          result: JSON.stringify(res),
        });
      },
      fail: (res) => {
        this.setData({
          result: JSON.stringify(res),
        });
      },
    });
  },


//iswep为true
  connectWifi: function() {
    my.call('connectWifi', {
      // 'SSID': 'da',
      // 'BSSID': '70:d9:23:32:8d:02',
      // 'password': '04210331',
          'SSID': '大风',
          'BSSID': 'cs:a8:23:df:7d:3b',
       'password': '33334444',
          'isWEP':  true,//控制wifi的类型，如果为true则无法链接手机wifi
      success: (res) => {
        this.setData({
          result: JSON.stringify(res),
        });
      },
      fail: (res) => {
        this.setData({
          result: JSON.stringify(res),
        });
      },
    });
  },


  getConnectedWifi: function() {
    my.call('getConnectedWifi', {
      success: (res) => {
        this.setData({
          result: 'getConnected' + JSON.stringify(res),
        });
      },
      fail: (res) => {
        this.setData({
          result: 'getConnected' + JSON.stringify(res),
        });
      },
    });
  },
  
  onWifiConnected: function(){
    my.onWifiConnected((res) => {
      this.setData({
        result: JSON.stringify(res.wifi),
      });
    });
  }
});

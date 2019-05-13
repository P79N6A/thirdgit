Page({
  request1() {
    const requestTask = my.request({
      url: 'http://httpbin.org/post',
      method: 'POST',
      data: {
        x: 'alipay',
        y: 'tinyapp'
      },
      header: {
        'content-type': 'application/json'
      },
      dataType: "",
      responseType: "",
      success: function(res) {
        console.log("正常请求" + JSON.stringify(res))
        my.alert({
          content: "正常请求" + JSON.stringify(res)
        })
      },
      fail: function(res) {
        my.alert({
          content: "请求fail" + JSON.stringify(res)
        })
      },
      complete: function(res) {
        my.alert({
          content: "正常请求complete" + JSON.stringify(res)
        })
      }
    })
  },

  request2() {
    const requestTask = my.request({
      url: '',
      method: 'POST',
      data: {
        x: 'alipay',
        y: 'tinyapp'
      },
      header: {
        'content-type': 'application/json'
      },
      success: function(res) {
        console.log(JSON.stringify(res))
        my.alert({
          success: (res) => {
            content: "正常请求" + JSON.stringify(res)
          },
        });
      },
      fail: function(res) {
        my.alert({
          content: "请求fail" + JSON.stringify(res)
        })
      },
      complete: function(res) {
        my.alert({
          content: "正常请求complete" + JSON.stringify(res)
        })
      }
    })
  },

  request3() {
    const requestTask = my.request({
      url: 123,
      method: 'POST',
      data: {
        x: 'alipay',
        y: 'tinyapp'
      },
      header: {
        'content-type': 'application/json'
      },
      success: function(res) {
        console.log("请求正常" + JSON.stringify(res))
        my.alert({
          content: "正常请求" + JSON.stringify(res)
        })
      },
      fail: function(res) {
        my.alert({
          content: "请求fail" + JSON.stringify(res)
        })
      },
      complete: function(res) {
        my.alert({
          content: "正常请求complete" + JSON.stringify(res)
        })
      }
    })
  },

  request4() {
    const requestTask = my.request({
      url: null,
      method: 'POST',
      data: {
        x: 'alipay',
        y: 'tinyapp'
      },
      header: {
        'content-type': 'application/json'
      },
      success: function(res) {
        console.log("请求正常" + JSON.stringify(res))
        my.alert({
          success: (res) => {
            content: "正常请求" + JSON.stringify(res)
          },
        });
      },
      fail: function(res) {
        my.alert({
          content: "请求fail" + JSON.stringify(res)
        })
      },
      complete: function(res) {
        my.alert({
          content: "正常请求complete" + JSON.stringify(res)
        })
      }
    })
  },

  request5() {
    const requestTask = my.request({
      url: '{"1","2"}',
      method: 'POST',
      data: {
        x: 'alipay',
        y: 'tinyapp'
      },
      header: {
        'content-type': 'application/json'
      },
      success: function(res) {
        console.log("请求正常" + JSON.stringify(res))
        my.alert({
          success: (res) => {
            content: "正常请求" + JSON.stringify(res)
          },
        });
      },
      fail: function(res) {
        my.alert({
          content: "请求fail" + JSON.stringify(res)
        })
      },
      complete: function(res) {
        my.alert({
          content: "正常请求complete" + JSON.stringify(res)
        })
      }
    })
  },

  request6() {
    const requestTask = my.request({
      url: 'http://httpbin.org/post',
      method: 'post',
      data: {
        x: 'alipay',
        y: 'tinyapp'
      },
      header: {
        'content-type': 'application/json'
      },
      success: function(res) {
        console.log("请求正常" + JSON.stringify(res))
        my.alert({
          content: "正常请求" + JSON.stringify(res)
        });
      },
      fail: function(res) {
        my.alert({
          content: "请求fail" + JSON.stringify(res)
        })
      },
      complete: function(res) {
        my.alert({
          content: "正常请求complete" + JSON.stringify(res)
        })
      }
    })
  },

  request7() {
    const requestTask = my.request({
      url: 'http://httpbin.org/post',
      method: '',
      data: {
        x: 'alipay',
        y: 'tinyapp'
      },
      header: {
        'content-type': 'application/json'
      },
      success: function(res) {
        console.log("请求正常" + JSON.stringify(res))
        my.alert({
          content: "正常请求" + JSON.stringify(res)
        });
      },
      fail: function(res) {
        my.alert({
          content: "请求fail" + JSON.stringify(res)
        })
      },
      complete: function(res) {
        my.alert({
          content: "正常请求complete" + JSON.stringify(res)
        })
      }
    })
  },

  request8() {
    const requestTask = my.request({
      url: 'http://httpbin.org/post',
      method: null,
      data: {
        x: 'alipay',
        y: 'tinyapp'
      },
      header: {
        'content-type': 'application/json'
      },
      success: function(res) {
        console.log("请求正常" + JSON.stringify(res))
        my.alert({
          content: "正常请求" + JSON.stringify(res)
        });
      },
      fail: function(res) {
        my.alert({
          content: "请求fail" + JSON.stringify(res)
        })
      },
      complete: function(res) {
        my.alert({
          content: "正常请求complete" + JSON.stringify(res)
        })
      }
    })
  },

  request9() {
    const requestTask = my.request({
      url: 'http://httpbin.org/post',
      method: 123,
      data: {
        x: 'alipay',
        y: 'tinyapp'
      },
      header: {
        'content-type': 'application/json'
      },
      success: function(res) {
        console.log("请求正常" + JSON.stringify(res))
        my.alert({
          content: "正常请求" + JSON.stringify(res)
        });
      },
      fail: function(res) {
        my.alert({
          content: "请求fail" + JSON.stringify(res)
        })
      },
      complete: function(res) {
        my.alert({
          content: "正常请求complete" + JSON.stringify(res)
        })
      }
    })
  },

  request10() {
    const requestTask = my.request({
      url: 'http://httpbin.org/post',
      method: '{"1","2"}',
      data: {
        x: 'alipay',
        y: 'tinyapp'
      },
      header: {
        'content-type': 'application/json'
      },
      success: function(res) {
        console.log("请求正常" + JSON.stringify(res))
        my.alert({
          content: "正常请求" + JSON.stringify(res)
        });
      },
      fail: function(res) {
        my.alert({
          content: "请求fail" + JSON.stringify(res)
        })
      },
      complete: function(res) {
        my.alert({
          content: "正常请求complete" + JSON.stringify(res)
        })
      }
    })
  },
  request11() {
    const requestTask = my.request({
      url: 'http://httpbin.org/post',
      method: 'POST',
      data: {
        x: 'alipay',
        y: 'tinyapp'
      },
      header: "",
      dataType: "",
      responseType: "",
      success: function(res) {
        console.log("正常请求" + JSON.stringify(res))
        my.alert({
          content: "正常请求" + JSON.stringify(res)
        })
      },
      fail: function(res) {
        my.alert({
          content: "请求fail" + JSON.stringify(res)
        })
      },
      complete: function(res) {
        my.alert({
          content: "正常请求complete" + JSON.stringify(res)
        })
      }
    })
  },
  request12() {
    const requestTask = my.request({
      url: 'http://httpbin.org/post',
      method: 'POST',
      data: {
        x: 'alipay',
        y: 'tinyapp'
      },
      header: 123,
      dataType: "",
      responseType: "",
      success: function(res) {
        console.log("正常请求" + JSON.stringify(res))
        my.alert({
          content: "正常请求" + JSON.stringify(res)
        })
      },
      fail: function(res) {
        my.alert({
          content: "请求fail" + JSON.stringify(res)
        })
      },
      complete: function(res) {
        my.alert({
          content: "正常请求complete" + JSON.stringify(res)
        })
      }
    })
  },
  request13() {
    const requestTask = my.request({
      url: 'http://httpbin.org/post',
      method: 'POST',
      data: {
        x: 'alipay',
        y: 'tinyapp'
      },
      header: null,
      dataType: "",
      responseType: "",
      success: function(res) {
        console.log("正常请求" + JSON.stringify(res))
        my.alert({
          content: "正常请求" + JSON.stringify(res)
        })
      },
      fail: function(res) {
        my.alert({
          content: "请求fail" + JSON.stringify(res)
        })
      },
      complete: function(res) {
        my.alert({
          content: "正常请求complete" + JSON.stringify(res)
        })
      }
    })
  },

  request14() {
    const requestTask = my.request({
      url: 'http://httpbin.org',
      method: 'GET',
      data: {
        x: 'alipay',
        y: 'tinyapp'
      },
      header: {
        'content-type': 'application/json'
      },
      dataType: "",
      responseType: "",
      success: function(res) {
        console.log("正常请求" + JSON.stringify(res))
        my.alert({
          content: "正常请求" + JSON.stringify(res)
        })
      },
      fail: function(res) {
        my.alert({
          content: "请求fail" + JSON.stringify(res)
        })
      },
      complete: function(res) {
        my.alert({
          content: "正常请求complete" + JSON.stringify(res)
        })
      }
    })
  },
  request15() {
    const requestTask = my.request({
      url: 'http://httpbin.org',
      method: 'HEAD',
      data: {
        x: 'alipay',
        y: 'tinyapp'
      },
      header: {
        'content-type': 'application/json'
      },
      dataType: "",
      responseType: "",
      success: function(res) {
        console.log("正常请求" + JSON.stringify(res))
        my.alert({
          content: "正常请求" + JSON.stringify(res)
        })
      },
      fail: function(res) {
        my.alert({
          content: "请求fail" + JSON.stringify(res)
        })
      },
      complete: function(res) {
        my.alert({
          content: "正常请求complete" + JSON.stringify(res)
        })
      }
    })
  },

  request16() {
    const requestTask = my.request({
      url: 'http://httpbin.org',
      method: 'PUT',
      data: {
        x: 'alipay',
        y: 'tinyapp'
      },
      header: {
        'content-type': 'application/json'
      },
      dataType: "",
      responseType: "",
      success: function(res) {
        console.log("正常请求" + JSON.stringify(res))
        my.alert({
          content: "正常请求" + JSON.stringify(res)
        })
      },
      fail: function(res) {
        my.alert({
          content: "请求fail" + JSON.stringify(res)
        })
      },
      complete: function(res) {
        my.alert({
          content: "正常请求complete" + JSON.stringify(res)
        })
      }
    })
  },

  request17() {
    const requestTask = my.request({
      url: 'http://httpbin.org',
      method: 'DELETE',
      data: {
        x: 'alipay',
        y: 'tinyapp'
      },
      header: {
        'content-type': 'application/json'
      },
      dataType: "",
      responseType: "",
      success: function(res) {
        console.log("正常请求" + JSON.stringify(res))
        my.alert({
          content: "正常请求" + JSON.stringify(res)
        })
      },
      fail: function(res) {
        my.alert({
          content: "请求fail" + JSON.stringify(res)
        })
      },
      complete: function(res) {
        my.alert({
          content: "正常请求complete" + JSON.stringify(res)
        })
      }
    })
  },
  request18() {
    const requestTask = my.request({
      url: 'http://httpbin.org',
      method: 'TRACE',
      data: {
        x: 'alipay',
        y: 'tinyapp'
      },
      header: {
        'content-type': 'application/json'
      },
      dataType: "",
      responseType: "",
      success: function(res) {
        console.log("正常请求" + JSON.stringify(res))
        my.alert({
          content: "正常请求" + JSON.stringify(res)
        })
      },
      fail: function(res) {
        my.alert({
          content: "请求fail" + JSON.stringify(res)
        })
      },
      complete: function(res) {
        my.alert({
          content: "正常请求complete" + JSON.stringify(res)
        })
      }
    })
  },

  request19() {
    const requestTask = my.request({
      url: 'http://httpbin.org',
      method: 'CONNECT',
      data: {
        x: 'alipay',
        y: 'tinyapp'
      },
      header: {
        'content-type': 'application/json'
      },
      dataType: "",
      responseType: "",
      success: function(res) {
        console.log("正常请求" + JSON.stringify(res))
        my.alert({
          content: "正常请求" + JSON.stringify(res)
        })
      },
      fail: function(res) {
        my.alert({
          content: "请求fail" + JSON.stringify(res)
        })
      },
      complete: function(res) {
        my.alert({
          content: "正常请求complete" + JSON.stringify(res)
        })
      }
    })
  },
  request20() {
    const requestTask = my.request({
      url: 'http://httpbin.org/post',
      method: 'POST',
      data: '{"1","2"}',
      header: {
        'content-type': 'application/json'
      },
      dataType: "",
      responseType: "",
      success: function(res) {
        console.log("正常请求" + JSON.stringify(res))
        my.alert({
          content: "正常请求" + JSON.stringify(res)
        })
      },
      fail: function(res) {
        my.alert({
          content: "请求fail" + JSON.stringify(res)
        })
      },
      complete: function(res) {
        my.alert({
          content: "正常请求complete" + JSON.stringify(res)
        })
      }
    })
  },
  request21() {
    const requestTask = my.request({
      url: 'http://httpbin.org/post',
      method: 'POST',
      data: 123,
      header: {
        'content-type': 'application/json'
      },
      dataType: "",
      responseType: "",
      success: function(res) {
        console.log("正常请求" + JSON.stringify(res))
        my.alert({
          content: "正常请求" + JSON.stringify(res)
        })
      },
      fail: function(res) {
        my.alert({
          content: "请求fail" + JSON.stringify(res)
        })
      },
      complete: function(res) {
        my.alert({
          content: "正常请求complete" + JSON.stringify(res)
        })
      }
    })
  },
  request22() {
    const requestTask = my.request({
      url: 'http://httpbin.org/post',
      method: 'POST',
      data: null,
      header: {
        'content-type': 'application/json'
      },
      dataType: "",
      responseType: "",
      success: function(res) {
        console.log("正常请求" + JSON.stringify(res))
        my.alert({
          content: "正常请求" + JSON.stringify(res)
        })
      },
      fail: function(res) {
        my.alert({
          content: "请求fail" + JSON.stringify(res)
        })
      },
      complete: function(res) {
        my.alert({
          content: "正常请求complete" + JSON.stringify(res)
        })
      }
    })
  },
  request23() {
    const requestTask = my.request({
      url: 'http://httpbin.org/post',
      method: 'POST',
      data: "",
      header: {
        'content-type': 'application/json'
      },
      dataType: "",
      responseType: "",
      success: function(res) {
        console.log("正常请求" + JSON.stringify(res))
        my.alert({
          content: "正常请求" + JSON.stringify(res)
        })
      },
      fail: function(res) {
        my.alert({
          content: "请求fail" + JSON.stringify(res)
        })
      },
      complete: function(res) {
        my.alert({
          content: "正常请求complete" + JSON.stringify(res)
        })
      }
    })
  },

  request24() {
    const requestTask = my.request({
      url: 'http://httpbin.org/post',
      method: 'POST',
      data: {
        x: 'alipay',
        y: 'tinyapp'
      },
      header: {
        'content-type': 'application/json'
      },
      dataType: "json",
      responseType: "",
      success: function(res) {
        console.log("正常请求" + JSON.stringify(res))
        my.alert({
          content: "正常请求" + JSON.stringify(res)
        })
      },
      fail: function(res) {
        my.alert({
          content: "请求fail" + JSON.stringify(res)
        })
      },
      complete: function(res) {
        my.alert({
          content: "正常请求complete" + JSON.stringify(res)
        })
      }
    })
  },

  request25() {
    const requestTask = my.request({
      url: 'http://httpbin.org/post',
      method: 'POST',
      data: {
        x: 'alipay',
        y: 'tinyapp'
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      dataType: "",
      responseType: "arraybuffer",
      success: function(res) {
        console.log("正常请求" + JSON.stringify(res))
        my.alert({
          content: "正常请求" + JSON.stringify(res)
        })
      },
      fail: function(res) {
        my.alert({
          content: "请求fail" + JSON.stringify(res)
        })
      },
      complete: function(res) {
        my.alert({
          content: "正常请求complete" + JSON.stringify(res)
        })
      }
    })
  },

  request26() {
    const requestTask = my.request({
      url: 'http://httpbin.org/post',
      method: 'POST',
      data: {
        x: 'alipay',
        y: 'tinyapp'
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      dataType: "",
      responseType: "arraybuffer",
      success: function(res) {
        console.log("正常请求" + JSON.stringify(res))
        my.alert({
          content: "正常请求" + JSON.stringify(res)
        })
      },
      fail: function(res) {
        my.alert({
          content: "请求fail" + JSON.stringify(res)
        })
      },
      complete: function(res) {
        my.alert({
          content: "正常请求complete" + JSON.stringify(res)
        })
      }
    })
  },

  request27() {
    const requestTask = my.request({
      url: 'http://httpbin.org/post',
      method: 'POST',
      data: {
        x: 'alipay',
        y: 'tinyapp'
      },
      header: {
        'content-type': 'application/json'
      },
      dataType: "",
      responseType: "",
      success: function(res) {
        console.log("正常请求" + JSON.stringify(res))
        my.alert({
          content: "正常请求" + JSON.stringify(res)
        })
      },
      fail: function(res) {
        my.alert({
          content: "请求fail" + JSON.stringify(res)
        })
      },
      complete: function(res) {
        my.alert({
          content: "正常请求complete" + JSON.stringify(res)
        })
      }
    })
    setTimeout(function() { requestTask.abort() }, 200);
  },

});

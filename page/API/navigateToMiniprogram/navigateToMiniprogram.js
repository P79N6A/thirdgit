Page({
  data: {
    appid: '',
    envVersion: '',
    version: '',
  },
  handleInput(event) {
    this.setData({
      appid: event.detail.value,
    });
  },

  onInputVersion(event) {
    this.setData({
      version: event.detail.value,
    });
  },

  getValue() {
    my.alert({
      title: '亲，您输入的内容为：',
      content: 'version:' + this.data.version + '   ' + 'appid:' + this.data.appid,
      buttonText: '我知道了',
      success: () => {
        my.alert({ title: '用户点击了「我知道了」', });
      },
      fail: () => {
        my.showToast({ content: 'fail', });
      },
      complete: () => {
        my.alert({ title: 'complete回调！', });
      },
    });
  },
  //  跳转到体验版本
  navigateToTrial() {
    my.navigateToMiniProgram({
      appId: this.data.appid,
      path: "page/API/index/index",
      envVersion: "trial",
      version: this.data.version,
      //version: '0.2.1809111046.51',
      extraData: {
        'test': '132',
        'avds': 'daf',
        'dasf': 'ewfea',
        'xxx': '&&&',
        'asx': '%//'
      },
      success: (res) => {
        my.alert({ content: JSON.stringify(res) })
      },
      fail: (res) => {
        my.alert({ content: JSON.stringify(res) })
      }
    })
  },
  //  跳转到开发版本
  navigateToDevelop() {
    my.navigateToMiniProgram({
     appId: this.data.appid,
      //path: "page/API/index/index",
      envVersion: "develop",
      version: this.data.version,
      extraData: {
        'test': '132',
        'avds': 'daf',
        'dasf': 'ewfea',
        'xxx': '&&&',
        'asx': '%//'
      },
      success: (res) => {
        my.alert({ content: JSON.stringify(res) })
      },
      fail: (res) => {
        my.alert({ content: JSON.stringify(res) })
      }
    })
  },
  //  跳转到审核版本
  navigateToExamine() {
    my.navigateToMiniProgram({
      appId: this.data.appid,
      path: "page/API/index/index",
      envVersion: "examine",
      version: this.data.version,
      extraData: {
        'test': '132',
        'avds': 'daf',
        'dasf': 'ewfea',
        'xxx': '&&&',
        'asx': '%//'
      },
      success: (res) => {
        my.alert({ content: JSON.stringify(res) })
      },
      fail: (res) => {
        my.alert({ content: JSON.stringify(res) })
      }
    })
  },
  //  跳转到release版本
  navigateToRelease() {
    my.navigateToMiniProgram({
      appId: this.data.appid,
      path: "page/API/index/index",
      envVersion: "release",
      version: this.data.version,
      extraData: {
        'test': '132',
        'avds': 'daf',
        'dasf': 'ewfea',
        'xxx': '&&&',
        'asx': '%//'
      },
      success: (res) => {
        my.alert({ content: JSON.stringify(res) })
      },
      fail: (res) => {
        my.alert({ content: JSON.stringify(res) })
      }
    })
  },

  navigateBack() {
    my.navigateBackMiniProgram({
      extraData: { 'test': '132' },
      success: (res) => {
        my.alert({ content: JSON.stringify(res) })
      },
      fail: (res) => {
        my.alert({ content: JSON.stringify(res) })
      }
    })
  },

navigateToExchangeSkin(){
  my.call('startApp', {
      appId: '60000002',
      param: {
        onlyOptionMenu: 'YES',
      },
     }, () => {});
   }
});

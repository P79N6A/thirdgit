Page({
  data: {
    image: "http://30.55.192.76:3000/clock.png",
  },
  chooseImage() {
    my.chooseImage({
      sourceType: ['camera', 'album'],
      count: 2,
      success: (res) => {
        my.alert({ content: JSON.stringify(res), });
        this.setData({
          image: res.apFilePaths[0],
        })
      },
      fail: (error) => {
        my.alert({ content: '选择失败' + JSON.stringify(error), });
      },
      complete: (res) => {
        my.showToast({ content: 'complete回调' + JSON.stringify(res), });
      }
    })
  },
  previewImage() {
    my.previewImage({
      current: 2,
      urls: [
        'https://img.alicdn.com/tps/TB1sXGYIFXXXXc5XpXXXXXXXXXX.jpg',
        'https://img.alicdn.com/tps/TB1pfG4IFXXXXc6XXXXXXXXXXXX.jpg',
        'https://img.alicdn.com/tps/TB1h9xxIFXXXXbKXXXXXXXXXXXX.jpg'],
      success: (res) => {
        my.alert({ content: JSON.stringify(res), });
      },
      fail: (error) => {
        my.alert({ content: '操作失败' + JSON.stringify(error), });
      },
      complete: (res) => {
        my.showToast({ content: 'complete回调' + JSON.stringify(res), });
      }
    });
  },
  saveImage() {
    my.saveImage({
      url: 'https://img.alicdn.com/tps/TB1sXGYIFXXXXc5XpXXXXXXXXXX.jpg',
      showActionSheet: true,
      success: (res) => {
        my.alert({ content: '操作成功' + JSON.stringify(res), });
      },
      fail: (error) => {
        my.alert({ content: '操作失败' + JSON.stringify(error), });
      },
      complete: (res) => {
        my.showToast({ content: 'complete回调' + JSON.stringify(res), });
      }
    });
  },
  saveNoSheet() {
    my.saveImage({
      url: 'http://img.alicdn.com/tfs/TB1x669SXXXXXbdaFXXXXXXXXXX-520-280.jpg',
      showActionSheet: false,
      success: (res) => {
        my.alert({ content: '操作成功' + JSON.stringify(res), });
      },
      fail: (error) => {
        my.alert({ content: '操作失败' + JSON.stringify(error), });
      },
    });
  },
  saveInvalid() {
    my.saveImage({
      url: 'http://FXXXXX',
      showActionSheet: true,
      success: (res) => {
        my.alert({ content: '操作成功' + JSON.stringify(res), });
      },
      fail: (error) => {
        my.alert({ content: '操作失败' + JSON.stringify(error), });
      },
    });
  },
  compressImage() {
    my.chooseImage({
      count: 2,
      success: (res) => {
        //  my.alert({ content: '文件地址' + JSON.stringify(res.apFilePaths), });
        my.compressImage({
          apFilePaths: res.apFilePaths,
          compressLevel: '4',
          success: (res) => {
            my.alert({ content: '压缩成功' + JSON.stringify(res), });
            my.previewImage({
              urls: res.apFilePaths,
            });
            this.setData({
              image: res.apFilePaths[0],
            })
          },
          fail: (error) => {
            my.alert({ content: '操作失败' + JSON.stringify(error), });
          }
        });
      },
    });
  },
  compressImage_error() {
    my.compressImage({
      apFilePaths: xxxx,
      compressLevel: xxxx,
      success: (res) => {
        my.alert({ content: '操作成功' + JSON.stringify(res), });
      },
      fail: (error) => {
        my.alert({ content: '操作失败' + JSON.stringify(error), });
      }
    });
  },
  compressImage_null() {
    my.compressImage({
      apFilePaths: null,
      compressLevel: null,
      success: (res) => {
        my.alert({ content: '操作成功' + JSON.stringify(res), });
      },
      fail: (error) => {
        my.alert({ content: '操作失败' + JSON.stringify(error), });
      }
    });
  },
  compressImage_number() {
    my.compressImage({
      apFilePaths: 0,
      compressLevel: 0,
      success: (res) => {
        my.alert({ content: '操作成功' + JSON.stringify(res), });
      },
      fail: (error) => {
        my.alert({ content: '操作失败' + JSON.stringify(error), });
      }
    });
  },
  compressImage_bool() {
    my.compressImage({
      apFilePaths: false,
      compressLevel: true,
      success: (res) => {
        my.alert({ content: '操作成功' + JSON.stringify(res), });
      },
      fail: (error) => {
        my.alert({ content: '操作失败' + JSON.stringify(error), });
      }
    });
  },
});
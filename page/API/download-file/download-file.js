Page({
  download() {
    my.downloadFile({
      url: 'http://img.alicdn.com/tfs/TB1x669SXXXXXbdaFXXXXXXXXXX-520-280.jpg',
      success: (res) => {
        my.alert({ content: JSON.stringify(res), });
        my.previewImage({
          urls: [res.apFilePath],
        });
      },
      fail: (error) => {
        my.alert({ content: JSON.stringify(error), });
      },
      complete: () => {
        my.alert({ content: 'complet回调!', });
      }
    });
  },

  downloadError() {
    my.downloadFile({
      url: 'http://FXXXXX',
      success: (res) => {
        my.alert({ content: JSON.stringify(res), });
      },
      fail: (error) => {
        my.alert({ content: JSON.stringify(error), });
      },
      complete: () => {
        my.alert({ content: 'complet回调!', });
      }
    });
  },

  downloadone() {
    my.downloadFile({
      url: 'https://www.iana.org/reports/2014/systrust-pe-201311.pdf',
      success: (res) => {
        my.uploadFile({
          url: 'http://httpbin.org/post',
          filePath: res.apFilePath,
          fileName: 'file',
          success: (res) => {
            my.alert({ content: '保存成功' + JSON.stringify(res) });
          },
          fail: (error) => {
            my.alert({ content: '保存失败' + JSON.stringify(error) });
          },
        })
      }
    })
  },

  downloadtwo() {
    my.downloadFile({
      url: 'http://softdown1.hao123.com/hao123-soft-online-bcs/soft/P/pptmo_2010.03.zip',
      success: (res) => {
        my.alert({ content: JSON.stringify(res), });
      },
      fail: (error) => {
        my.alert({ content: JSON.stringify(error), });
      },
      complete: () => {
        my.alert({ content: 'complet回调!', });
      }
    });
  },

  downloadthree() {
    my.downloadFile({
      url: 'https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/mancard/img/loading_deadaef0.gif',
      success: (res) => {
        my.alert({ content: JSON.stringify(res), });
      },
      fail: (error) => {
        my.alert({ content: JSON.stringify(error), });
      },
      complete: () => {
        my.alert({ content: 'complet回调!', });
      }
    });
  },

  downloadfour() {
    my.downloadFile({
      url: 'http://gdown.baidu.com/data/wisegame/21c41b43bf5a27b1/QQ_762.apk',
      success: (res) => {
        my.alert({ content: JSON.stringify(res), });
      },
      fail: (error) => {
        my.alert({ content: JSON.stringify(error), });
      },
      complete: () => {
        my.alert({ content: 'complet回调!', });
      }
    });
  },

  downloadfive() {
    my.downloadFile({
      url: 'https://www.iana.org/reports/2014/systrust-pe-201311.pdf',
      success: (res) => {
        my.alert({ content: JSON.stringify(res), });
      },
      fail: (error) => {
        my.alert({ content: JSON.stringify(error), });
      },
      complete: () => {
        my.alert({ content: 'complet回调!', });
      }
    });
  },

  downloadsix() {
    my.downloadFile({
      url: 'https://dzs.qisuu.com/35/35450/%E8%B6%85%E7%BA%A7%E6%8A%A2%E7%BA%A2%E5%8C%85%E7%B3%BB%E7%BB%9F.txt',
      success: (res) => {
        my.alert({ content: JSON.stringify(res), });
      },
      fail: (error) => {
        my.alert({ content: JSON.stringify(error), });
      },
      complete: () => {
        my.alert({ content: 'complet回调!', });
      }
    });
  },

  downloadFileAbort() {
    const task = my.downloadFile({
      url: 'https://gw.alipayobjects.com/zos/rmsportal/HgOXjZTfuTnMHctEJKxN.jpg',
      success({ apFilePath }) {
        my.previewImage({
          urls: [apFilePath],
          complete: (res) => {
            console.log('下载成功！！！！', JSON.stringify(res))
          },
        });
      },
      fail(res) {
        my.alert({
          content: res.errorMessage || res.error,
        });
      },
    });
    task.onProgressUpdate((res) => {
      console.log('下载进度', res.progress)
      console.log('已经下载的数据长度', res.totalBytesWritten)
      console.log('预期需要下载的数据总长度', res.totalBytesExpectedToWrite)
    })
    setTimeout(() => {
      task.abort()
      console.log('下载任务暂停', JSON.stringify(task))
    }, 1000)
  },

})

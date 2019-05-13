Page({
  uploadFile() {
    my.chooseImage({
      count: 3,
      success: res => {
        const path = res.apFilePaths[0];
        console.log(path);
        my.uploadFile({
          url: 'http://httpbin.org/post',
          fileType: 'image',
          fileName: 'file',
          filePath: path,
          success: (res) => {
            my.alert({ content: '上传成功' });
          },
          fail: (error) => {
            my.alert({ content: '上传失败' + JSON.stringify(error) });
          },
          complete: (res) => {
            my.showToast({ content: 'complet回调', });
          }
        });
      },
    });
  },

  uploadvideo() {
    my.chooseVideo({
      success: res => {
        const path = res.apFilePath;
        console.log(path);
        my.uploadFile({
          url: 'http://httpbin.org/post',
          fileType: 'video',
          fileName: 'file',
          filePath: path,
          success: (res) => {
            my.alert({ content: '上传成功' });
          },
          fail: (error) => {
            my.alert({ content: '上传失败' + JSON.stringify(error) });
          },
        });
      },
    });
  },

  uploadFileError() {
    my.uploadFile({
      url: 'http://httpbin.org/post',
      fileType: 'video',
      fileName: 'file',
      filePath: '/system/test/aaa.mp4',
      success: res => {
        my.alert({ title: '上传成功' });
      },
      fail: (error) => {
        my.alert({ content: '上传失败' + JSON.stringify(error) });
      },
      complete: (error) => {
        my.alert({ title: 'complete' + JSON.stringify(error) });
      }
    });
  },

  uploadUrlError() {
    my.chooseImage({
      success: res => {
        const path = res.apFilePaths[0];
        console.log(path);
        my.uploadFile({
          url: 'http://xxx.com/',
          fileType: 'video',
          fileName: 'file',
          filePath: path,
          success: (res) => {
            my.alert({ title: '上传成功' });
          },
          fail: (error) => {
            my.alert({ content: '上传失败' + JSON.stringify(error) });
          },
        });
      },
    });
  },

  uploadFileAbort() {
    my.chooseVideo({
      success: res => {
        const path = res.apFilePath;
        console.log(path);
        const task = my.uploadFile({
          url: 'http://httpbin.org/post',
          fileType: 'image',
          fileName: 'file',
          filePath: path,
          success: res => {
            my.alert({ title: '上传成功' });
            console.log('上传成功', JSON.stringify(task));
          },
          fail: function (res) {
            my.alert({ title: '上传失败' });
          },
        });
        task.onProgressUpdate((res) => {
          console.log('上传进度', res.progress)
          console.log('已经上传的数据长度', res.totalBytesWritten)
          console.log('预期需要上传的数据总长度', res.totalBytesExpectedToWrite)
        })
        setTimeout(() => {
          task.abort()
          console.log('上传任务暂停', JSON.stringify(task))
        }, 5000)
      },
    });
  },
});

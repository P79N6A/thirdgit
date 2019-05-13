Page({
  data: {
    savedFilePath: '',
  },

  saveFile() {
    var that = this;
    my.chooseImage({
      count: 1,
      success: (res) => {
        my.saveFile({
          apFilePath: res.apFilePaths[0],
          success: (res) => {
            my.alert({ content: '保存成功' + JSON.stringify(res) });
            that.setData({
              savedFilePath: res.apFilePath,
            });
          },
          fail: (error) => {
            my.alert({ content: '保存失败' + JSON.stringify(error) });
          },
          complete: () => {
            my.alert({ content: 'complete回调！', });
          },
        })
      },
      fail: (error) => {
        my.alert({ content: '选择图片失败' + JSON.stringify(error), });
      }
    });
  },
  //保存录音
  saveFile_Record() {
    my.startRecord({
      maxDuration: 6,
      minDuration: 3,
      success: (res) => {
        my.alert({
          content: '录音信息' + JSON.stringify(res),
        });
        my.saveFile({
          apFilePath: res.apFilePath,
          success: (res) => {
            my.alert({ content: '保存录音成功' + JSON.stringify(res) });
            this.setData({
              savedFilePath: res.apFilePath,
            });
          },
          fail: (error) => {
            my.alert({ content: '保存录音失败' + JSON.stringify(error) });
          },
        })
      },
      fail: (error) => {
        my.alert({ content: '录音失败' + JSON.stringify(error), });
      }
    });
  },
  //保存视频
  saveFile_video() {
    my.chooseVideo({
      sourceType: ['camera', 'album'],
      camera: ['font', 'back'],
      maxDuration: 90,
      success: (res) => {
        my.saveFile({
          apFilePath: res.apFilePath,
          success: (res) => {
            my.alert({ content: '保存视频成功' + JSON.stringify(res) });
            this.setData({
              savedFilePath: res.apFilePath,
            });
          },
          fail: (error) => {
            my.alert({ content: '保存视频失败' + JSON.stringify(error) });
          },
        })
      },
      fail: (error) => {
        my.alert({ content: '选择视频失败' + JSON.stringify(error), });
      }
    });
  },
  saveFile_Null() {
    my.saveFile({
      apFilePath: '',
      success: (res) => {
        my.alert({ content: '保存视频成功' + JSON.stringify(res) });
      },
      fail: (error) => {
        my.alert({ content: '保存视频失败' + JSON.stringify(error) });
      },
    });
  },
  saveFile_Error() {
    my.saveFile({
      apFilePath: 'xxxx',
      success: (res) => {
        my.alert({ content: '保存视频成功' + JSON.stringify(res) });
      },
      fail: (error) => {
        my.alert({ content: '保存视频失败' + JSON.stringify(error) });
      },
    });
  },
  //获取本地已保存的文件列表
  getSavedFileList() {
    my.getSavedFileList({
      success: (res) => {
        my.alert({ content: '获取成功' + JSON.stringify(res) });
        console.log(res.fileList);
      },
      fail: (error) => {
        my.alert({ content: '获取失败' + JSON.stringify(error) });
      },
      complete: () => {
        my.alert({ content: 'complete回调！', });
      },
    });
  },
  //获取本地文件的文件信息
  getSavedFileInfo() {
    my.getSavedFileInfo({
      apFilePath: this.data.savedFilePath,
      success: (res) => {
        my.alert({ content: '获取成功' + JSON.stringify(res) });

      },
      fail: (error) => {
        my.alert({ content: '获取失败' + JSON.stringify(error) });
      },
      complete: () => {
        my.alert({ content: 'complete回调！', });
      },
    })
  },
  //删除本地存储的文件
  removeSavedFile() {
    my.removeSavedFile({
      apFilePath: this.data.savedFilePath,
      success: (res) => {
        my.alert({ content: '删除成功' + JSON.stringify(res) });
      },
      fail: (error) => {
        my.alert({ content: '删除失败' + JSON.stringify(error) });
      },
      complete: () => {
        my.alert({ content: 'complete回调！', });
      },
    });
  },
  //获取图片信息
  getImageInfo() {
    my.chooseImage({
      success: (res) => {
        my.getImageInfo({
          src: res.apFilePaths[0],
          success: (res) => {
            my.alert({ content: '获取图片信息成功' + JSON.stringify(res) });
          },
          fail: (error) => {
            my.alert({ content: '获取图片信息失败' + JSON.stringify(error) });
          },
          complete: () => {
            my.alert({ content: 'complete回调！', });
          },
        })
      }
    });
  },
getSavedFileInfo_number(){
 my.getSavedFileInfo({
      apFilePath: 0,
      fail: (error) => {
        my.alert({ content: '获取失败' + JSON.stringify(error) });
      },
    })
},
getSavedFileInfo_error(){
 my.getSavedFileInfo({
      apFilePath:'/storage/emulated/0/DCIM/Camera',
      fail: (error) => {
        my.alert({ content: '获取失败' + JSON.stringify(error) });
      },
    })
},

  getImageInfo_local() {
        my.getImageInfo({
          src: "/image/api.png",
          success: (res) => {
            my.alert({ content: '获取图片信息成功' + JSON.stringify(res) });
          },
          fail: (error) => {
            my.alert({ content: '获取图片信息失败：' + JSON.stringify(error) });
          },
        });
  },
  getImageInfo_network() {
    my.getImageInfo({
      src: 'https://img.alicdn.com/tps/TB1sXGYIFXXXXc5XpXXXXXXXXXX.jpg',
      success: (res) => {
        my.alert({ content: '获取图片信息成功' + JSON.stringify(res) });
      },
      fail: (error) => {
        my.alert({ content: '获取图片信息失败：' + JSON.stringify(error) });
      },
    });
  },
  getImageInfo_null() {
    my.getImageInfo({
      src: null,
      success: (res) => {
        my.alert({ content: '获取图片信息成功' + JSON.stringify(res) });
      },
      fail: (error) => {
        my.alert({ content: '获取图片信息失败：' + JSON.stringify(error) });
      },
    });
  },
  getImageInfo_error() {
    my.getImageInfo({
      src: true,
      success: (res) => {
        my.alert({ content: '获取图片信息成功' + JSON.stringify(res) });
      },
      fail: (error) => {
        my.alert({ content: '获取图片信息失败：' + JSON.stringify(error) });
      },
    });
  },
  getImageInfo_number() {
    my.getImageInfo({
      src: 0,
      success: (res) => {
        my.alert({ content: '获取图片信息成功' + JSON.stringify(res) });
      },
      fail: (error) => {
        my.alert({ content: '获取图片信息失败：' + JSON.stringify(error) });
      },
    });
  },

  //获取本地文件信息-----------------------------------------
  getFileInfo() {
    my.chooseImage({
      count: 2,
      success: (res) => {
        my.getFileInfo({
          apFilePath: res.apFilePaths[0],
          digestAlgorithm: 'sha1',
          success: (res) => {
            my.alert({ content: '获取图片文件成功' + JSON.stringify(res) });
            my.alert({ content: '图片大小' + JSON.stringify(res.size/1024000)+'M' });
          },
          fail: (error) => {
            my.alert({ content: '获取图片文件失败：' + JSON.stringify(error) });
          },
          complete: () => {
            my.alert({ content: 'complete回调！', });
          },
        });
      },
      fail: (error) => {
        my.alert({ content: '选择图片失败' + JSON.stringify(error), });
      }
    });
  },
  getFileInfo_video() {
    my.chooseVideo({
      sourceType: ['camera', 'album'],
      camera: ['font', 'back'],
      maxDuration: 20,
      success: (res) => {
        my.getFileInfo({
          apFilePath: res.apFilePath,
          success: (res) => {
            my.alert({ content: '获取视频文件成功' + JSON.stringify(res) });
          },
          fail: (error) => {
            my.alert({ content: '获取视频文件失败' + JSON.stringify(error) });
          },
        })
      }
    });
  },
  getFileInfo_Record() {
    my.startRecord({
      maxDuration: 6,
      minDuration: 3,
      success: (res) => {
        my.getFileInfo({
          apFilePath: res.apFilePath,
          success: (res) => {
            my.alert({ content: '获取音频文件成功' + JSON.stringify(res) });
          },
          fail: (error) => {
            my.alert({ content: '获取音频文件成功' + JSON.stringify(error) });
          },
        })
      }
    });
  },
  getFileInfo_local() {
        my.getFileInfo({
          apFilePath: "/image/api.png",
          digestAlgorithm: 'sha1',
          success: (res) => {
            my.alert({ content: '获取本地图片文件成功' + JSON.stringify(res) });
          },
          fail: (error) => {
            my.alert({ content: '获取本地图片文件失败：' + JSON.stringify(error) });
          },
        });
  },
  getFileInfo_null() {
    my.getFileInfo({
      apFilePath: null,
      digestAlgorithm: null,
      success: (res) => {
        my.alert({ content: '操作成功' + JSON.stringify(res) });
      },
      fail: (error) => {
        my.alert({ content: '操作失败：' + JSON.stringify(error) });
      },
    });
  },
  getFileInfo_error() {
    my.getFileInfo({
      apFilePath: xxxx,
      digestAlgorithm: xxxx,
      success: (res) => {
        my.alert({ content: '操作成功' + JSON.stringify(res) });
      },
      fail: (error) => {
        my.alert({ content: '操作失败：' + JSON.stringify(error) });
      },
    });
  },
  getFileInfo_number() {
    my.getFileInfo({
      apFilePath: 0,
      digestAlgorithm: 0,
      success: (res) => {
        my.alert({ content: '操作成功' + JSON.stringify(res) });
      },
      fail: (error) => {
        my.alert({ content: '操作失败：' + JSON.stringify(error) });
      },
    });
  },

})

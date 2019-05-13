Page({
  audopFilePath:'',

  startRecord(){
    my.startRecord({
      maxDuration:60,
      minDuration:3,
      success: (res) => {
        this.audopFilePath = res.apFilePath;
        my.alert({
          title: 'startRecord ！',
          content: this.audopFilePath,
        });
        console.log(res);

      }
    });
  },
  stopRecord(){
    my.stopRecord({
      success: (res) => {
        my.alert({
          title: 'stopRecord ！',
          content: this.audopFilePath,
        });
      }
    });
  },
  cancelRecord(){
    my.cancelRecord({
     success: (res) => {
        my.alert({
          content: '取消录音成功！',
        });
      }
    });
  },


  playVoice(){
    my.playVoice({
      filePath: this.audopFilePath,
        success: (res) => {
          my.alert({
            title: '开始播放 ！',
          });
        },
        fail: (res) => {
          my.alert({
            title: '播放失败 ！',
            content:res
          });
          my.alert(res);
        },
        complete: () => {
          my.alert({
            title: '调用playVoice完成',
          });
        }
    })
  },


  pauseVoice(){
    my.pauseVoice({
        success: () => {
          my.alert({
            title: '暂停播放 ！',
          });
        }
    })
  },


  resumeVoice(){
    my.resumeVoice({
        success: () => {
          my.alert({
            title: '继续播放 ！',
          });
        }
    })
  },


  stopVoice(){
    my.stopVoice({
        success: () => {
          my.alert({
            title: '停止播放 ！',
          });
        }
    })
  }

});

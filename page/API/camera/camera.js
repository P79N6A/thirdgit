Page({

  data: {
    url:'',
    videoSrc:'',
    poster:'',

    recordQualityArr : ["high", 'normal', 'low', 'default'],
    recordQualityIndex : 0,
    recordQuality: 'default'
  },

  onLoad() {
    this.ctx = my.createCameraContext("camera11");
    console.log(this.ctx);
    if(typeof(this.ctx) == "undefined") {
      my.alert({content: "create createCameraContext fail 1"})
    }
    if(typeof(this.ctx) === "undefined") {
      my.alert({content: "create createCameraContext fail 2"})
    }    
  },
  takePhoto() {
    //my.alert({ content: "call takePhoto"+ this.data.recordQuality });
    this.ctx.takePhoto({
      quality : this.data.recordQuality,
      success: (res) => {
        my.alert({ content: 'takePhoto success' + JSON.stringify(res), });
        console.log('takePhoto success' + JSON.stringify(res))
        this.setData({
          url: res.tempImagePath,
        })
        my.saveImage({
          url: res.tempImagePath,
          success: (res) => {
            console.log(JSON.stringify(res));
            //my.alert({ content: 'saveImage成功' + JSON.stringify(res) });
          },
          fail: (error) => {
            //my.alert({ content: 'saveImage调用失败' + JSON.stringify(error)});
          }
        });

        var start = (res.tempImagePath).indexOf("resource");
        var end = (res.tempImagePath).indexOf(".image");
        var localID = (res.tempImagePath).substr(start + 9, end - start - 9);
        my.alert({ content: 'localID: ' + localID + "=====" + res.tempImagePath});

        my.call('editImage', {
          //base64: 'xxx',
          localId: localID
        }, function(result) {
          console.log(result);
          my.alert({ content: 'editImage' + JSON.stringify(result) });
        });

      },
      fail: (res) => {
        console.log(res);
        my.alert({ content: 'takePhoto fail' + JSON.stringify(res) });
      },
      complete: (res) => {
        console.log(res);
        my.alert({ content: 'takePhoto complete' + JSON.stringify(res) });
      },
    })
    console.log("stop call  takePhoto");
  },


  takePhotoDefault() {
      this.ctx.takePhoto({
      success: (res) => {
        my.alert({ content: 'takePhoto success' + JSON.stringify(res), });
        console.log('takePhoto success' + JSON.stringify(res))
        this.setData({
          url: res.tempImagePath,
        })
        my.saveImage({
          url: res.tempImagePath,
          success: (res) => {
            my.alert({ content: 'saveImage成功' + JSON.stringify(res), });
          },
          fail: (error) => {
            my.alert({ content: 'saveImage调用失败' + JSON.stringify(error)});
          }
        });
      },
      fail: (res) => {
        console.log(res);
        my.alert({ content: 'takePhoto fail' + JSON.stringify(res) });
      },
      complete: (res) => {
        console.log(res);
        my.alert({ content: 'takePhoto complete' + JSON.stringify(res) });
      },
    })
    console.log("stop call  takePhoto");
  },

  startRecord() {
    console.log("call startRecord");
    my.call('', {
      
    })

    this.ctx.startRecord({
      success: (res) => {
        my.alert({ content: 'startRecord success' + JSON.stringify(res) });
        console.log('startRecord success' + JSON.stringify(res))
      },
      fail :(res) => {
        my.alert({ content: 'startRecord fail' + JSON.stringify(res) });
        console.log('startRecord fail' + JSON.stringify(res) )
      },
      complete: (res) => {
        my.alert({ content: 'startRecord complete' + JSON.stringify(res) });
        console.log('startRecord complete' + JSON.stringify(res))
      },
      timeoutCallback: (res) => {
        this.setData({
          poster: res.tempThumbPath, //设置video组件poster
          videoSrc: res.tempVideoPath //设置video组件src
        })
        my.alert({ content: 'startRecord timeoutCallback' + JSON.stringify(res) });
        console.log('startRecord timeoutCallback' + + JSON.stringify(res) )
      }
    })
  },



  stopRecord() {
    console.log("call stopRecord")
    this.ctx.stopRecord({
      success: (res) => {
        my.alert({ content: 'stopRecord success' + JSON.stringify(res) });
        this.setData({
          poster: res.tempThumbPath, //设置video组件poster
          videoSrc: res.tempVideoPath //设置video组件src
        })
        //在这里测试一拨saveVideoToPhotosAlbum
        my.saveVideoToPhotosAlbum({
          //filePath: res.tempVideoPath,
          src: res.tempVideoPath,
          success(res) {
            my.alert({ content: 'saveVideoToPhotosAlbum tempVideoPath success' + JSON.stringify(res) });
          },
          fail(res) {
            my.alert({ content: 'saveVideoToPhotosAlbum tempVideoPath fail' + JSON.stringify(res) });
          },
          complete(res) {
            my.alert({ content: 'saveVideoToPhotosAlbum tempVideoPath complete' + JSON.stringify(res) });            
          }
        })

        my.saveVideoToPhotosAlbum({
          src: res.tempThumbPath,
          success(res) {
            my.alert({ content: 'saveVideoToPhotosAlbum1 tempThumbPath' + JSON.stringify(res) });
          }
        })
      },
      fail :(res) => {
        my.alert({ content: 'stopRecord fail' + JSON.stringify(res) });
        console.log('stopRecord fail' + JSON.stringify(res) )
      },
      complete: (res) => {
        my.alert({ content: 'stopRecord complete' + JSON.stringify(res) });
        console.log('stopRecord complete' + JSON.stringify(res))
      },
    })
  },
  error(e) {
    console.log(e.detail);
    my.alert({content : "binderror" + JSON.stringify(e)});
  },
  stop(e) {
    console.log(e.detail);
    my.alert({content : "bindstop" + JSON.stringify(e)});
  },
  toNewPage() {
    my.navigateTo();
  },
  chooseRecordQuanlity(e) {
      const index = e.detail.value
      const {recordQualityArr} = this.data;
      var quality = recordQualityArr[index];
      this.data.recordQuality = quality;
  }
  
})
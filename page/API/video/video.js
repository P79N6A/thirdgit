Page({
    data:  {
        filePath:  '',
      videoSrc: 'https://t.alipayobjects.com/images/T1T78eXapfXXXXXXXX.mp4',
        maxDuration: '60',
        maxDurationArr:['60', '70', '0', '30', '-1'],
        maxDurationIndex: 0,

        compressed: false,
        compressedIndex: 0,
        compressedArr : ['true', 'false']
    },

    chooseVideo() {
      let that = this
      my.chooseVideo(
        {
          sourceType:['album', 'camera'],
          compressed: true,
          maxDuration: 60,

          success(res) {
            console.log("chooseVideo success" + JSON.stringify(res));
            my.alert({content : "======chooseVideo success" + JSON.stringify(res)})
            //设置video组件src
            that.setData({
              videoSrc: res.tempFilePath 
            })

            my.saveFile({
              apFilePath: res.apFilePath,
              success: (res) => {
                my.alert({ content: '保存视频成功' + JSON.stringify(res) });
              },
              fail: (error) => {
                my.alert({ content: '保存视频失败' + JSON.stringify(error) });
              },
            })

            /*my.saveVideoToPhotosAlbum({
              src : res['apFilePath'],
              success : function(res) {
                  console.log("saveVideoToPhotosAlbum complete" + JSON.stringify(res));
                  my.alert({content : "saveVideoToPhotosAlbum complete" + JSON.stringify(res)})
              },
              fail : function(res) {
                  console.log("saveVideoToPhotosAlbum complete" + JSON.stringify(res));
                  my.alert({content : "saveVideoToPhotosAlbum complete" + JSON.stringify(res)})
              },
              complete : function(res) {
                  console.log("saveVideoToPhotosAlbum complete" + JSON.stringify(res));
                  my.alert({content : "saveVideoToPhotosAlbum complete" + JSON.stringify(res)})
              }
            });*/
            /*tempFilePath	选定视频的临时文件路径
            duration	选定视频的时间长度
            size	选定视频的数据量大小
            height	返回选定视频的长
            width	返回选定视频的宽*/
          },
          fail(res) {
            console.log("chooseVideo fail" + JSON.stringify(res));
            my.alert({content : "chooseVideo fail" + JSON.stringify(res)})
          },
          complete(res) {
            console.log("chooseVideo complete" + JSON.stringify(res));
            my.alert({content : "chooseVideo complete" + JSON.stringify(res)})
          }
        }
      );
    },
    
    saveVideoToPhotosAlbum() {
      my.alert({content : 'dddddd' + this.data.filePath})
      
      my.saveVideoToPhotosAlbum({
        src : this.data.filePath,
        success : function(res) {
            console.log("saveVideoToPhotosAlbum complete" + JSON.stringify(res));
            my.alert({content : "saveVideoToPhotosAlbum complete" + JSON.stringify(res)})
        },
        fail : function(res) {
            console.log("saveVideoToPhotosAlbum complete" + JSON.stringify(res));
            my.alert({content : "saveVideoToPhotosAlbum complete" + JSON.stringify(res)})
        },
        complete : function(res) {
            console.log("saveVideoToPhotosAlbum complete" + JSON.stringify(res));
            my.alert({content : "saveVideoToPhotosAlbum complete" + JSON.stringify(res)})
        }
      });
    },

    chooseCompressed(e) {
      const index = e.detail.value
      const {compressedArr} = this.data;
      var compressedVal = compressedArr[index];
      this.data.compressed = compressedVal;
    },
    chooseMaxDuration(e) {
      const index = e.detail.value
      const {maxDurationArr} = this.data;
      var maxDuration = maxDurationArr[index];
      this.data.maxDuration = parseInt(maxDuration);
    }

})

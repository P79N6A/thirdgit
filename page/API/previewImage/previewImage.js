Page({
  data: {
    enableShowPhotoDownloadArr:['true', 'false'],
    enableShowPhotoDownloadIndex : 0,
    enableShowPhotoDownloadVal: 'true'
  },
  
  previewImage() {
    my.previewImage({
      current: -1,
      enableShowPhotoDownload : this.data.enableShowPhotoDownloadVal,
      urls: [
        'https://img.alicdn.com/tps/TB1sXGYIFXXXXc5XpXXXXXXXXXX.jpg',
        'https://img.alicdn.com/tps/TB1pfG4IFXXXXc6XXXXXXXXXXXX.jpg',
        'https://img.alicdn.com/tps/TB1h9xxIFXXXXbKXXXXXXXXXXXX.jpg'],
      success: (res) => {
        my.alert({content: 'success回调' + JSON.stringify(res)});
      },
      fail:(error)=>{
        my.alert({content: '操作失败'+JSON.stringify(error)});
      },
      complete:(res)=>{
         my.alert({content: 'complete回调'+JSON.stringify(res),}); 
     }
    });
  }, 

  previewImageDefault1() {
    my.previewImage({
      current: 1,
      urls: [
        'https://img.alicdn.com/tps/TB1sXGYIFXXXXc5XpXXXXXXXXXX.jpg',
        'https://img.alicdn.com/tps/TB1pfG4IFXXXXc6XXXXXXXXXXXX.jpg',
        'https://img.alicdn.com/tps/TB1h9xxIFXXXXbKXXXXXXXXXXXX.jpg'
      ],
      success: (res) => {
        my.alert({content: 'success回调' + JSON.stringify(res)});
      },
      fail:(error)=>{
        my.alert({content: '操作失败'+JSON.stringify(error)});
      },
      complete:(res)=>{
         my.alert({content: 'complete回调'+JSON.stringify(res),}); 
     }
    });
  }, 
  
  setEnableShowPhotoDownloadVal(e) {
      const index = e.detail.value
      const {enableShowPhotoDownloadArr} = this.data;
      var enableShowPhotoDownloadStringVal = enableShowPhotoDownloadArr[index];
      if(enableShowPhotoDownloadStringVal === "true") {
        this.data.enableShowPhotoDownloadVal = true;
      }
      else {
        this.data.enableShowPhotoDownloadVal = false;
      }
  }

})
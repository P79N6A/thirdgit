Page({
  data: {
    key: '',
    data: '',
    keySync: '',
    dataSync: '',
  },

  keyChange(e) {
    console.log(e);
    this.setData({
      key: e.detail.value,
    });
  },

  dataChange(e) {
    this.setData({
      data: e.detail.value,
    });
  },

  keyChangeSync(e) {
    console.log(e);
    this.setData({
      keySync: e.detail.value,
    });
  },

  dataChangeSync(e) {
    this.setData({
      dataSync: e.detail.value,
    });
  },

  getStorage() {
    var key = this.data.key;
    var data = this.data.data;
    console.log('data: ', this.data);
    if (key.length === 0) {
      this.setData({
        key: key,
        data: data,
      });

      my.alert({
        title: '读取数据失败',
        content: 'key 不能为空',
      });
    } else {
      let that = this;
      my.getStorage({
        key,
        success(res) {
          my.alert({
            title: '读取数据成功',
            content: "data: '" + JSON.stringify(res.data) + "'",
          });
           if(res.data===null){
             that.setData({
              data: '',
             });
          }else{
            that.setData({
              data: res.data,
             });
          }
        },
        fail:(error)=>{
        my.alert({content: '读取失败'+JSON.stringify(error),});
        },
        complete:()=>{
         my.showToast({content: 'complete回调',});
        }
      });
      console.log('读取数据成功', my.getStorageSync({ key }).data);
    }
  },

  setStorage() {
    var key = this.data.key;
    var data = this.data.data;
    if (key.length === 0) {
      this.setData({
        key: key,
        data: data,
      });

      my.alert({
        title: '保存数据失败',
        content: 'key 不能为空',
      });
    } else {
      let that = this;
      my.setStorage({
        key: key,
        data: data,
        success() {
          that.setData({
            key: key,
            data: data,
          });
          my.alert({
            title: '存储数据成功',
            content: `${key}: ${data}`,
          });
        },
        fail:(error)=>{
          my.alert({
            content: '写入失败'+JSON.stringify(error),
          });
        },
        complete:(res)=>{
         my.showToast({content: 'complete回调',});
        }
      });
    }
  },

  removeStorage() {
    let that = this;
    my.removeStorage({
      key: that.data.key,
      success(res) {
        that.setData({
          key: '',
          data: '',
        });
        my.alert({
          title: '删除数据成功',
          content: JSON.stringify(res),
        });
        },
        fail:(error)=>{
         my.alert({content: '删除失败'+JSON.stringify(error),});
        },
        complete:(res)=>{
         my.showToast({content: 'complete回调',});
        }
      
    });
  },
  clearStorage() {
    let that = this;
    my.clearStorage({
      key: that.data.key,
      success() {
        that.setData({
          key: '',
          data: '',
        });

        my.alert({
          title: '清除数据成功',
          content: '',
        });
      },
      fail:(error)=>{
        my.alert({content: '清空失败'+JSON.stringify(error),});
      },
      complete:(res)=>{
         my.showToast({content: 'complete回调',});
        }
    });
  },
  getStorageInfo() {
    let that = this;
    my.getStorageInfo({
      success(res) {
        my.alert({
          content: JSON.stringify({
            keys: res.keys,
            currentSize: res.currentSize,
            limitSize: res.limitSize,
          }),
        });
      },
      fail:(error)=>{
       my.alert({content: '操作失败'+JSON.stringify(error),});
      },
      complete:(res)=>{
         my.showToast({content: 'complete回调',});
      }
    });
  },

  getStorageSync() {
    var key = this.data.keySync;
    var data = this.data.dataSync;
    console.log('data: ', this.data);
    if (key.length === 0) {
      this.setData({
        keySync: key,
        dataSync: data,
      });

      my.alert({
        title: '同步读取数据失败',
        content: 'key 不能为空',
      });
    } else {
      let res = my.getStorageSync({ key: key });
      if (!res.error) {
        my.alert({
          title: '同步读取数据成功',
          content: "data: '" + JSON.stringify(res.data) + "'",
        });
          if(res.data===null){
             this.setData({
              dataSync: '',
             });
          }else{
            this.setData({
              dataSync: res.data,
             });
          }
      }
    }
  },

  setStorageSync() {
    var key = this.data.keySync;
    var data = this.data.dataSync;
    if (key.length === 0) {
      this.setData({
        keySync: key,
        dataSync: data,
      });

      my.alert({
        title: '同步保存数据失败',
        content: 'key 不能为空',
      });
    } else {
      let res = my.setStorageSync({ key: key, data: data });
      if (!res.error) {
        this.setData({
          keySync: key,
          dataSync: data,
        });

        my.alert({
          title: '同步存储数据成功',
          content: `${key}: ${data}`,
        });
      }
    }
  },

  removeStorageSync() {
    let res = my.removeStorageSync({ key: this.data.keySync });
    if (!res.error) {
      this.setData({
        keySync: '',
        dataSync: '',
      });

      my.alert({
        title: '同步删除数据成功',
        content: JSON.stringify(res),
      });
    }
  },
  clearStorageSync() {
    let res = my.clearStorageSync();
    if (!res.error) {
      this.setData({
        keySync: '',
        dataSync: '',
      });

      my.alert({
        title: '同步清除数据成功',
        content: '',
      });
    }
  },
  getStorageInfoSync() {
    let res = my.getStorageInfoSync();
    if (!res.error) {
      my.alert({
        content: JSON.stringify({
          keys: res.keys,
          currentSize: res.currentSize,
          limitSize: res.limitSize,
        }),
      });
    }
  },
});

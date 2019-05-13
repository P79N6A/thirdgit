Page({
  data: {
    text: '3.1415926',
    copy: '',
  },

  handleInput(e) {
    this.setData({
      text: e.detail.value,
    });
  },

  handleCopy() {
    my.setClipboard({
      text: this.data.text,
      success: (res) => {
        my.alert({content: '复制数据：' + JSON.stringify(res)})
      },
      fail(error) {
        my.alert({content: '调用失败：' + JSON.stringify(error)})
      }
    });
  },

  handlePaste() {
    my.getClipboard({
      success: ({ text }) => {
        this.setData({ copy: text });
      },
      fail: (error) => {
        my.alert({ content: '粘贴失败' + JSON.stringify(error) });
      },
      complete: () => {
        my.alert({ title: 'complete回调！', });
      },


    });
  },
});

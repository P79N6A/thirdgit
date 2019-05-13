Page({
  data: {
     value: '',
  },
   handleInput(event) {
    this.setData({
      value: event.detail.value,
    });
  },
  measureText() {
    my.call('measureText', {
      text: this.data.value,
      fontSize: 20,
      // fontWeight:'bold',
      success: (res) => {
        my.alert({ content: '物理像素长度：' + JSON.stringify(res), });
      },
      fail: (error) => {
        my.alert({ content: '失败' + JSON.stringify(error), });
      },
    })
  }
});

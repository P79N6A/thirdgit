Page({
  data: {
    height: 20,
    focus: false
  },
  oninput(e) {
    console.log('oninput：' + JSON.stringify(e));
    my.showToast({ content: "input输入的内容:" + JSON.stringify(e) });
  },
  bindButtonTap() {
    setTimeout(() => {
    this.onFocus();
       }, 200);
  },
  onlinechange(e) {
    console.log('onlinechange：' + JSON.stringify(e));
    //my.alert({ content: "onlinechange:" + JSON.stringify(e) });
  },
  onFocus(e) {
    console.log('获得焦点：' + JSON.stringify(e));
    this.setData({
      focus: true,
    });
  },
  onBlur(e) {
    console.log('失去焦点：' + JSON.stringify(e))
    // my.alert({ content: "失去焦点:" + JSON.stringify(e) });
    this.setData({
      focus: false,
    });
  },
  onconfirm(e) {
    console.log('onconfirm：' + JSON.stringify(e))
    my.alert({ content: 'confirm:' + JSON.stringify(e), });
  },
  bindTextAreaBlur(e) {
    console.log(JSON.stringify(e))
  },
  bindFormSubmit(e) {
    my.alert({
      content: '输入内容：' + JSON.stringify(e.detail.value),
    });
  }
})

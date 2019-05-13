Page({
  data: {},
  onLoad() { },

  setBackgroundColor1() {
    my.setBackgroundColor({
      backgroundColor: '#FF3030',
      success: (res) => {
        my.alert({ content: '操作成功' + JSON.stringify(res) });
      },
      fail: (error) => {
        my.alert({ content: '操作失败' + JSON.stringify(error), });
      },
      complete: () => {
        my.alert({ title: 'complete回调', });
      },
    });
  },
  setBackgroundColor2() {
    my.setBackgroundColor({
      backgroundColorTop: '#0000EE',
      success: (res) => {
        my.alert({ content: '操作成功' + JSON.stringify(res) });
      },
      fail: (error) => {
        my.alert({ content: '操作失败' + JSON.stringify(error), });
      },
      complete: () => {
        my.alert({ title: 'complete回调', });
      },
    });
  },
  setBackgroundColor3() {
    my.setBackgroundColor({
      backgroundColorBottom: '#EEEE00',
      success: (res) => {
        my.alert({ content: '操作成功' + JSON.stringify(res) });
      },
      fail: (error) => {
        my.alert({ content: '操作失败' + JSON.stringify(error), });
      },
      complete: () => {
        my.alert({ title: 'complete回调', });
      },
    });
  },
  setBackgroundColor4() {
    my.setBackgroundColor({
      backgroundColor: null,
      backgroundColorTop: null,
      backgroundColorBottom: null,
      success: (res) => {
        my.alert({ content: '操作成功' + JSON.stringify(res) });
      },
      fail: (error) => {
        my.alert({ content: '操作失败' + JSON.stringify(error), });
      },
      complete: () => {
        my.alert({ title: 'complete回调', });
      },
    });
  },
  setBackgroundColor5() {
    my.setBackgroundColor({
      backgroundColor: true,
      backgroundColorTop: false,
      backgroundColorBottom: true,
      success: (res) => {
        my.alert({ content: '操作成功' + JSON.stringify(res) });
      },
      fail: (error) => {
        my.alert({ content: '操作失败' + JSON.stringify(error), });
      },
      complete: () => {
        my.alert({ title: 'complete回调', });
      },
    });
  },
  setBackgroundColor6() {
    my.setBackgroundColor({
      backgroundColor: "",
      backgroundColorTop: '',
      backgroundColorBottom: "",
      success: (res) => {
        my.alert({ content: '操作成功' + JSON.stringify(res) });
      },
      fail: (error) => {
        my.alert({ content: '操作失败' + JSON.stringify(error), });
      },
      complete: () => {
        my.alert({ title: 'complete回调', });
      },
    });
  },


});

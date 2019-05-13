Page({
  data: {
    formData: {
      address: '杭州Z空间',
      time: '2017.09.06',
      name: '卡布奇诺',
      serial: '987654321'
    },
  },

  submitForm(e) {
    my.alert({ content: 'form返回值：' + JSON.stringify(e), });
  },

  submitForm_equally(e) {
    my.alert({ content: 'form返回值：' + JSON.stringify(e), });
  },
  submitForm_User(e) {
    my.alert({ content: 'form返回值：' + JSON.stringify(e), });
  }
});

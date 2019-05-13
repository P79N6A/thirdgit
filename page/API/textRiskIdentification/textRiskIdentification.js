Page({
 data: {
    value: '',
  },
  handleInput(event) {
    this.setData({
      value: event.detail.value,
    });
  },
  textRiskIdentification() {
    my.textRiskIdentification({
      content: this.data.value,
      type: ['keyword', '0', '1', '2', '3'],
      success: (res) => {
        my.alert({
          title: this.data.value,
          content: JSON.stringify(res),
        });
      },
    });
  },

  textRiskIdentification_alipay() {
    my.textRiskIdentification({
      content: '加我微信支付宝',
      type: ['keyword', '0', '1', '2','3'],
      success: (res) => {
        my.alert({
          title: '操作成功', // alert 框的标题
          content: JSON.stringify(res),
        });
      },
      fail: (res) => {
        my.alert({
          title: '操作失败', // alert 框的标题
          content: JSON.stringify(res),
        });
      },
    });
  },
  textRiskIdentification_00(){
  my.textRiskIdentification({
      content: '总刁民想抢朕放屁',
      type: ['keyword', '0', '1', '2'],
      success: (res) => {
        my.alert({
          title: '操作成功', // alert 框的标题
          content: JSON.stringify(res),
        });
      },
      fail: (res) => {
        my.alert({title: '操作失败', // alert 框的标题
          content: JSON.stringify(res),
        });
      },
    });
  },
  textRiskIdentification_22(){
     my.textRiskIdentification({
     content: '小姐包夜包夜包夜裸聊',
      type: ['keyword', '0', '1', '2'],
      success:(res)=>{
        my.alert({content: JSON.stringify(res),});
      },
      fail: (res) => {
        my.alert({content: JSON.stringify(res),});
      },
     });
  },
  textRiskIdentification_null() {
    my.textRiskIdentification({
      content: null,
      type: null,
      success: (res) => {
        my.alert({ content: JSON.stringify(res), });
      },
      fail: (res) => {
        my.alert({ content: JSON.stringify(res), });
      },
    });
  },
  textRiskIdentification_number() {
    my.textRiskIdentification({
      content: 0,
      type: 0,
      success: (res) => {
        my.alert({ content: JSON.stringify(res), });
      },
      fail: (res) => {
        my.alert({ content: JSON.stringify(res), });
      },
    });
  },
  textRiskIdentification_array() {
    my.textRiskIdentification({
      content: [1, 2, 3],
      type: [1, 2, 3],
      success: (res) => {
        my.alert({ content: JSON.stringify(res), });
      },
      fail: (res) => {
        my.alert({ content: JSON.stringify(res), });
      },
    });
  },
  textRiskIdentification_bool() {
    my.textRiskIdentification({
      content: true,
      type: false,
      success: (res) => {
        my.alert({ content: JSON.stringify(res), });
      },
      fail: (res) => {
        my.alert({ content: JSON.stringify(res), });
      },
    });
  },
});

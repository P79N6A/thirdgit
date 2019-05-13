Page({
  data: {},
  onLoad() { },
  openCarService() {
    my.openCarService({
      addressCode: '330100',//地区码
      serviceId: 'CARLIFE016',
      fail: (error) => {
        my.alert({ content: '操作失败：' + JSON.stringify(error), });
      },
    });
  },

  openCarService_null() {
    my.openCarService({
      addressCode: null,//地区码
      serviceId:null,
      fail: (error) => {
        my.alert({ content: '操作失败：' + JSON.stringify(error), });
      },
    });
  },

  openCarService_array() {
    my.openCarService({
      addressCode:['2333'],//地区码
      serviceId:['2333'],
      fail: (error) => {
        my.alert({ content: '操作失败：' + JSON.stringify(error), });
      },
    });
  },

  openCarService_number() {
    my.openCarService({
      addressCode:2333,//地区码
      serviceId:2333,
      fail: (error) => {
        my.alert({ content: '操作失败：' + JSON.stringify(error), });
      },
    });
  },
  
});

Page({
  data: {
    accuracy:'',
  },
  startBeaconDiscovery() {
    my.startBeaconDiscovery({
      uuids: ['0c443a05-412f-4714-a09f-bd5b9786114d', '90143d17-a738-426f-94ab-81d54879ea83','57b87da2-bda4-4a99-ad1e-90eced822e6b','8c132061-4894-422c-96e8-ee2bb1df9706'],
      success: (res) => {
        my.alert({ content: '搜索成功' + JSON.stringify(res), });
      },
      fail(error) {
        my.alert({ content: '搜索失败：' + JSON.stringify(error), });
      },
      complete: () => {
        my.alert({ content: 'complete回调！', });
      },
    });
  },
  startBeaconDiscovery_null() {
    my.startBeaconDiscovery({
      uuids: null,
      success: (res) => {
        my.alert({ content: '搜索成功' + JSON.stringify(res), });
      },
      fail(error) {
        my.alert({ content: '搜索失败：' + JSON.stringify(error), });
      },
    });
  },
  startBeaconDiscovery_number() {
    my.startBeaconDiscovery({
      uuids: 0,
      success: (res) => {
        my.alert({ content: '搜索成功' + JSON.stringify(res), });
      },
      fail(error) {
        my.alert({ content: '搜索失败：' + JSON.stringify(error), });
      },
    });
  },
  startBeaconDiscovery_error() {
    my.startBeaconDiscovery({
      uuids: xasdfasdfasdf,
      success: (res) => {
        my.alert({ content: '搜索成功' + JSON.stringify(res), });
      },
      fail(error) {
        my.alert({ content: '搜索失败：' + JSON.stringify(error), });
      },
    });

  },
  stopBeaconDiscovery() {
    my.stopBeaconDiscovery({
      success: (res) => {
        my.alert({ content: '已停止搜索！', });
      },
      fail(error) {
        my.alert({ content: '停止搜索失败：' + JSON.stringify(error), });
      },
      complete: () => {
        my.alert({ content: 'complete回调！', });
      },
    });
  },

  getBeacons() {
    my.getBeacons({
      success: (res) => {
        my.alert({ content: '所有搜索到的设备' + JSON.stringify(res), });
      },
      fail(error) {
        my.alert({ content: '获取信息失败：' + JSON.stringify(error), });
      },
      complete: () => {
        my.alert({ content: 'complete回调！', });
      },

    })

  },
  //监听 iBeacon 设备的更新事件
  onBeaconUpdate() {
  let that = this;
    my.onBeaconUpdate({
      success: (res) => {
        my.showToast({ content: 'update：' + JSON.stringify(res), });
        //  that.setData({
        //    accuracy : res.beacons[0].accuracy,
        //  });
      },
      fail(error) {
        my.alert({ content: '监听设备更新失败：：' + JSON.stringify(error), });
      },
    });
  },
  onBeaconServiceChange() {
    my.onBeaconServiceChange({
      success: (res) => {
        my.alert({ content: '服务目前是否可用' + JSON.stringify(res), });
      },
      fail(error) {
        my.alert({ content: '获取服务状态失败：' + JSON.stringify(error), });
      },
      complete: () => {
        my.alert({ content: 'complete回调！', });
      },
    });
  },
  offBeaconUpdate() {
    my.offBeaconUpdate();
  },
  offBeaconServiceChange() {
    my.offBeaconServiceChange();
  },

});

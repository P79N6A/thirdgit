Page({
  data: {},
  onLoad() { },
  setCustomPopMenu() {
    my.setCustomPopMenu({
      menus: [{ name: '自定义0' }, { name: '自定义1' }, { name: '自定义2' }, { name: '自定义3' }, { name: '自定义4' }, { name: '自定义5' }, { name: '自定义6' }, { name: '自定义7' }, { name: '自定义8' }],

      success: (res) => {
        my.alert({ content: '操作成功' + JSON.stringify(res) });
      },
      fail: (error) => {
        my.alert({ content: '操作失败' + JSON.stringify(error), });
      },
      complete: () => {
        my.alert({ title: 'complete回调', });
      },
    })
  },
  onPopMenuClick(data) {
    my.alert({ content: '您点击了自定义菜单：' + JSON.stringify(data), });
  },
});

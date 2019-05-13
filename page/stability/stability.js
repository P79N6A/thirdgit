import lifecycle from '/util/lifecycle';

Page({
  ...lifecycle,
  data: {
    pageName: 'stability/stability',
    pageInfo: {
      pageId: 0,
    },
    curIndex: 0,
    arr: {
      onItemTap: 'onGridItemTap',
      list: [{
        icon: '/image/icon_component.png',
        title: '蓝牙',
        entitle: 'Collapse',
        page: '/page/stability/pages/bluetooth/bluetooth'
      },{
        icon: '/image/icon_component.png',
        title: '获取缓存数据',
        entitle: 'getStorage',
        page: '/page/stability/pages/getStorage/getStorage'
      },{
        icon: '/image/icon_component.png',
        title: '同步获取缓存数据',
        entitle: 'getStorageSync',
        page: '/page/stability/pages/getStorageSync/getStorageSync'
      }, {
        icon: '/image/icon_component.png',
        title: '获取位置信息',
        entitle: 'getLocation',
        page: '/page/stability/pages/getLocation/getLocation'
      },{
        icon: '/image/icon_component.png',
        title: '获取系统信息',
        entitle: 'getSystemInfo',
        page: '/page/stability/pages/getSystemInfo/getSystemInfo'
      }, {
        icon: '/image/icon_component.png',
        title: 'http 请求',
        entitle: 'httpRequest',
        page: '/page/stability/pages/httpRequest/httpRequest'
      }, {
        icon: '/image/icon_component.png',
        title: 'navigateTo跳转',
        entitle: 'navigateTo',
        page: '/page/stability/pages/navigateTo/navigateTo'
      }, {
        icon: '/image/icon_component.png',
        title: 'redirectTo跳转',
        entitle: 'redirectTo',
        page: '/page/stability/pages/redirectTo/redirectTo'
      }, {
        icon: '/image/icon_component.png',
        title: 'showLoading加载提示',
        entitle: 'redirectTo',
        page: '/page/stability/pages/showLoading/showLoading'
      }, {
        icon: '/image/icon_component.png',
        title: 'showToast弱提示',
        entitle: 'redirectTo',
        page: '/page/stability/pages/showToast/showToast'
      }, {
        icon: '/image/icon_component.png',
        title: '保存缓存数据',
        entitle: 'setStorage',
        page: '/page/stability/pages/setStorage/setStorage'
      }, {
        icon: '/image/icon_component.png',
        title: '用户授权',
        entitle: 'getAuthCode',
        page: '/page/stability/pages/getAuthCode/getAuthCode',
      }, {
        icon: '/image/icon_component.png',
        title: '发送数据',
        entitle: 'sendSocketMessage',
        page: '/page/stability/pages/sendSocketMessage/sendSocketMessage'
      }, {
        icon: '/image/icon_component.png',
        title: '删除缓存数据',
        entitle: 'removeStorage',
        page: '/page/stability/pages/removeStorage/removeStorage',
      }, {
        icon: '/image/icon_component.png',
        title: '返回上级',
        entitle: 'navigateBack',
        page: '/page/stability/pages/navigateBack/navigateBack',
      }, {
        icon: '/image/icon_component.png',
        title: '扫码',
        entitle: 'scan',
        page: '/page/stability/pages/scan/scan',
      }, {
        icon: '/image/icon_component.png',
        title: '警示框',
        entitle: 'alert',
        page: '/page/stability/pages/alert/alert',
      }, {
        icon: '/image/icon_component.png',
        title: '确认框',
        entitle: 'confirm',
        page: '/page/stability/pages/confirm/confirm',
      }, {
        icon: '/image/icon_component.png',
        title: '设置导航栏',
        entitle: 'setNavigationBar',
        page: '/page/stability/pages/setNavigationBar/setNavigationBar'
      }],
    },
  },
  onGridItemTap(e) {
    const page = this.data.arr.list[e.target.dataset.index].page;
    my.navigateTo({ url: page })
  },
});

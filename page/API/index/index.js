import lifecycle from '/util/lifecycle';
import animModal from '/util/items';

Page({
  ...lifecycle,
  ...animModal.animOp,
  data: {
    pageName: 'API/index',
    hidden: true,
    curIndex: 0,
    ...animModal.data,
    arr: {
      onItemTap: 'onGridItemTap',
      onChildItemTap: 'onChildItemTap',
      list: [{
        icon: '/image/api_open.png',
        title: '开放接口',
        entitle: 'Open API',
        subs: [{
          title: '获取授权码',
          entitle: 'getAuthCode',
          page: '../get-auth-code/get-auth-code'
        }, {
          title: '获取用户信息',
          entitle: 'getUserInfo',
          page: '../get-user-info/get-user-info'
        }, {
          title: '发起支付',
          entitle: 'tradePay',
          page: '../request-payment/request-payment'
        }, {
          title: '授权引导',
          entitle: 'show-auth-guide',
          page: '../show-auth-guide/show-auth-guide'
        }, {
          title: '会员卡开卡授权接口',
          entitle: 'addCardAuth',
          page: '../addCardAuth/addCardAuth'
        }, {
          title: '信用相关',
          entitle: 'zmCreditBorrow',
          page: '../zmCreditBorrow/zmCreditBorrow'
        }, {
          title: '打开聊天窗口界面',
          entitle: 'openChat',
          page: '../open-Chat/open-Chat'
        }, {
          title: '选择收获地址',
          entitle: 'chooseAddress',
          page: '../chooseAddress/chooseAddress'
        }, {
          title: '淘宝相关',
          entitle: 'openTaobao',
          page: '../openTaobao/openTaobao'
        }, {
          title: '小程序间跳转',
          entitle: 'navigateToMiniprogram',
          page: '../navigateToMiniprogram/navigateToMiniprogram'
        }, {
          title: 'ocr能力',
          entitle: 'ocr',
          page: '../ocr/ocr'
        }, {
          title: '选择发票抬头',
          entitle: 'chooseInvoiceTitle',
          page: '../chooseInvoiceTitle/chooseInvoiceTitle'
        }, {
          title: '小服务',
          entitle: 'Small service',
          page: '../small_service/small_service'
        }, {
          title: '容器事件监听',
          entitle: 'onEvent',
          page: '../nebula_event/nebula_event'
        }, {
          title: '升级支付宝最新客户端',
          entitle: 'updateAlipayClient',
          page: '../updateAlipayClient/updateAlipayClient'
        }],
      }, {
        icon: '/image/api_view.png',
        title: '界面',
        entitle: 'Interface',
        subs: [{
          title: '警告框',
          entitle: 'alert',
          page: '../alert/alert'
        }, {
          title: '确认框',
          entitle: 'confirm',
          page: '../confirm/confirm'
        }, {
          title: '弱提示',
          entitle: 'toast',
          page: '../toast/toast'
        }, {
          title: '加载提示',
          entitle: 'loading',
          page: '../loading/loading'
        }, {
          title: '操作菜单',
          entitle: 'showActionSheet',
          page: '../action-sheet/action-sheet'
        }, {
          title: '设置界面导航栏',
          entitle: 'setNavigationBar',
          page: '../set-navigation-bar/set-navigation-bar'
        }, {
          title: '标题栏加载动画',
          entitle: 'navigationBarLoading',
          page: '../navigation-bar-loading/navigation-bar-loading'
        }, {
          title: '页面跳转',
          entitle: 'navigateTo, navigateBack, redirectTo, switchTab',
          page: '../navigator/navigator'
        }, {
          title: '下拉刷新',
          entitle: 'pullDownRefresh',
          page: '../pull-down-refresh/pull-down-refresh'
        }, {
          title: '创建动画',
          entitle: 'createAnimation',
          page: '../animation/animation'
        }, {
          title: '创建绘画',
          entitle: 'createCanvasContext',
          page: '../canvas/canvas'
        }, {
          title: '联系人',
          entitle: 'choosePhoneContact, chooseAlipayContact',
          page: '../contact/contact'
        }, {
          title: '选择城市',
          entitle: 'chooseCity',
          page: '../choose-city/choose-city'
        }, {
          title: '选择日期',
          entitle: 'datePicker',
          page: '../date-picker/date-picker'
        }, {
          title: '滚动页面',
          entitle: 'pageScrollTo',
          page: '../page-scroll-to/page-scroll-to'
        }, {
          title: '隐藏键盘',
          entitle: 'hideKeyboard',
          page: '../keyboard/keyboard'
        }, {
          title: '节点查询',
          entitle: 'selete-query',
          page: '../selete-query/selete-query'
        }, {
          title: 'spliceData设置数据',
          entitle: 'spliceData',
          page: '../spliceData/spliceData'
        }, {
          title: '隐藏menu',
          entitle: 'hideMenu',
          page: '../hideMenu/hideMenu'
        }, {
          title: 'measureText',
          entitle: 'measureText',
          page: '../measureText/measureText'
        }]
      }, {
        icon: '/image/api_device.png',
        title: '设备',
        entitle: 'Device',
        subs: [{
          title: '获取手机网络状态',
          entitle: 'getNetworkType',
          page: '../get-network-type/get-network-type'
        }, {
          title: '获取手机系统信息',
          entitle: 'getSystemInfo',
          page: '../get-system-info/get-system-info'
        }, {
          title: '获取服务器时间',
          entitle: 'getServerTime',
          page: '../get-server-time/get-server-time'
        }, {
          title: '手机传感器接口',
          entitle: 'watchShake',
          page: '../watch-shake/watch-shake'
        }, {
          title: '打电话',
          entitle: 'makePhoneCall',
          page: '../make-phone-call/make-phone-call'
        }, {
          title: '剪贴板',
          entitle: 'clipboard',
          page: '../clipboard/clipboard'
        }, {
          title: '截屏监控',
          entitle: 'screen-shot',
          page: '../screen-shot/screen-shot'
        }, {
          title: '屏幕亮度',
          entitle: 'luminance',
          page: '../luminance/luminance'
        }, {
          title: '获取App类型&startApp',
          entitle: 'getAppType',
          page: '../getAppType/getAppType'
        }, {
          title: '手机内存报警',
          entitle: 'memory-warning',
          page: '../memory-warning/memory-warning'
        }, {
          title: '长短振动',
          entitle: 'vibrate',
          page: '../vibrate/vibrate'
        }, {
          title: 'wifi',
          entitle: '35wifi',
          page: '../wifi/wifi'
        }, {
          title: '星巴克日历',
          entitle: 'addcalendar',
          page: '../add-event-calendar/add-event-calendar'
        }, {
          title: '设备运动方向',
          entitle: 'DeviceMotion',
          page: '../DeviceMotion/DeviceMotion'
        }, {
          title: '设备电量',
          entitle: 'getBattery',
          page: '../getBattery/getBattery'
        },]
      }, {
        icon: '/image/api_network.png',
        title: '网络',
        entitle: 'Network',
        subs: [{
          title: '发起一个请求',
          entitle: 'httpRequest',
          page: '../httpRequest/httpRequest'
        },
        {
          title: '网络请求-有abort（支持task)',
          entitle: 'request',
          page: '../request/request'
        }, {
          title: '上传文件',
          entitle: 'Upload File',
          page: '../upload-file/upload-file'
        }, {
          title: '下载文件',
          entitle: 'Download File',
          page: '../download-file/download-file'
        }]
      }, {
        icon: '/image/api_websocket.png',
        title: 'Websocket',
        entitle: 'Websocket',
        page: '../websocket/websocket'
      }, {
        icon: '/image/api_media.png',
        title: '媒体',
        entitle: 'Media',
        subs: [{
          title: '图片',
          entitle: 'chooseImage/compressImage/saveImage',
          page: '../image/image'
        }, {
          title: '预览图片',
          entitle: 'previewImage',
          page: '../previewImage/previewImage'
        }, {
          title: '视频',
          entitle: 'chooseVideo/createVideoContext',
          page: '../video/video'
        }, {
          title: '语音',
          entitle: 'startRecord/stopRecord',
          page: '../voice/voice'
        }, {
          title: '录音',
          entitle: 'recorderManager',
          page: '../recorder/recorder'
        }, {
          title: '相机',
          entitle: 'camera',
          page: '../camera/camera'
        }, {
          title: '背景音频',
          entitle: 'play/pause/stopAudio',
          page: '../background-audio/background-audio'
        }, {
          title: '文件',
          entitle: 'saveFile/removeSavedFile/getSavedFileList',
          page: '../file/file'
        }]
      }, {
        icon: '/image/api_map.png',
        title: '位置',
        entitle: 'Location',
        subs: [{
          title: '获取当前位置',
          entitle: 'getLocation',
          page: '../get-location/get-location'
        }, {
          title: '使用原生地图查看位置',
          entitle: 'openLocation',
          page: '../open-location/open-location'
        }, {
          title: '选择位置',
          entitle: 'chooseLocation',
          page: '../choose-location/choose-location'
        }]
      }, {
        icon: '/image/api_data.png',
        title: '数据',
        entitle: 'Storage',
        page: '../storage/storage'
      }, {
        icon: '/image/api_scan.png',
        title: '扫码 Scan',
        entitle: 'scan-code',
        page: '../scan-code/scan-code'
      }, {
        icon: '/image/api_share.png',
        title: '自定义分享',
        entitle: 'Share',
        page: '../share/share'
      }, {
        icon: '/image/api_rsa.png',
        title: '安全',
        entitle: 'safety',
        subs: [{
          title: '非对称加密',
          entitle: 'RSA',
          page: '../rsa/rsa'
        }, {
          title: '安全能力',
          entitle: 'textRiskIdentification',
          page: '../textRiskIdentification/textRiskIdentification'
        },]
      }, {
        icon: '/image/api_bluetooth.png',
        title: '蓝牙',
        entitle: 'Bluetooth',
        subs: [{
          title: '蓝牙',
          entitle: 'Bluetooth',
          page: '../bluetooth/bluetooth',
        }, {
          title: 'iBeacon',
          entitle: 'iBeacon',
          page: '../iBeacon/iBeacon',
        }]
      }, {
        icon: '/image/biz_list.png',
        title: '卡劵票',
        entitle: 'cardPack',
        page: '../card-pack/card-pack'
      },]
    }
  },
  onGridItemTap(e) {
    const curIndex = e.target.dataset.index;
    const childList = this.data.arr.list[curIndex];
    if (childList.subs) {
      this.setData({
        hidden: !this.data.hidden,
        curIndex,
      });
      this.createMaskShowAnim();
      this.createContentShowAnim();
    } else {
      const e = {
        target: {
          dataset: { page: childList.page }
        }
      };
      this.onChildItemTap(e);
    }
  },
  onChildItemTap(e) {
    const { page } = e.target.dataset;
    my.navigateTo({ url: page });
  },
  onModalCloseTap() {
    this.createMaskHideAnim();
    this.createContentHideAnim();
    setTimeout(() => {
      this.setData({
        hidden: true,
      });
    }, 210);
  },
})

import lifecycle from '/util/lifecycle';
import animModal from '/util/items';
Page({
...lifecycle,
  ...animModal.animOp,
  data: {
    pageName: 'biz/index',
    hidden: true,
    curIndex: 0,
    ...animModal.data,
    arr: {
      onItemTap: 'onGridItemTap',
      onChildItemTap: 'onChildItemTap',
      list: [{
        icon: '/image/biz_collapse.png',
        title: '折叠面板',
        entitle: 'Collapse',
        page: '/page/biz/pages/collapse/index'
      }, {
        icon: '/image/biz_dropdown.png',
        title: '下拉菜单',
        entitle: 'Dropdown',
        page: '/page/biz/pages/dropdown/index'
      }, {
        icon: '/image/biz_errorview.png',
        title: '通用错误页',
        entitle: 'ErrorView',
        page: '/page/biz/pages/error-view/index'
      }, {
        icon: '/image/biz_grid.png',
        title: '宫格',
        entitle: 'Grid',
        page: '/page/biz/pages/grid/index'
      }, {
        icon: '/image/biz_list.png',
        title: '列表',
        entitle: 'List',
        page: '/page/biz/pages/list/index'
      }, {
        icon: '/image/api_share.png',
        title: '自动化权限开关判断',
        entitle: 'Permission switch',
        page: '/page/biz/pages/permission/permission'
      }, {
        icon: '/image/api_share.png',
        title: 'iot',
        entitle: 'iot',
        page: '/page/biz/pages/iot/iot'
      },{
        icon: '/image/api_view.png',
        title: '界面',
        entitle: 'Interface',
        subs: [ {
          title: '联系人',
          entitle: 'choosePhoneContact',
          page: '/page/API/contact/contact'
        }, {
          title: '选择城市',
          entitle: 'chooseCity',
          page: '/page/API/choose-city/choose-city'
        }, {
          title: '选择日期',
          entitle: 'datePicker',
          page: '/page/API/date-picker/date-picker'
        }, {
          title: '滚动页面',
          entitle: 'pageScrollTo',
          page: '/page/API/page-scroll-to/page-scroll-to'
        }, {
          title: '隐藏键盘',
          entitle: 'hideKeyboard',
          page: '/page/API/keyboard/keyboard'
        }, {
          title: '节点查询',
          entitle: 'selete-query',
          page: '/page/API/selete-query/selete-query'
        },{
          title: '自定义菜单',
          entitle: 'setCustomPopMenu',
          page: '/page/API/setCustomPopMenu/setCustomPopMenu'
        },{
          title: '自定义返回按钮',
          entitle: 'setTabBar',
          page: '/page/API/setBackButton/setBackButton'
        },
        {
          title: '设置窗口背景色',
          entitle: 'setBackgroundColor',
          page: '/page/API/setBackgroundColor/setBackgroundColor'
        }]
      }
    ]
    },
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
});

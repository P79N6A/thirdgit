Page({
   onShareAppMessage() {
    return {
      title: '分享 View 组件',
      desc: 'View 组件很通用',
      path: 'page/component/component-pages/view/view',
      imageUrl:'https://t.alipayobjects.com/images/publichome/T1AVxrXjJcXXaCwpjX.png_128x.png',
      success: (res) => {
        my.alert({ content: '分享成功' + JSON.stringify(res), });
      },
      fail: (error) => {
        my.alert({ content: '分享失败' + JSON.stringify(error), });
      },
    };
  },
  openCardList() {
    my.openCardList();
  },
  openVoucherList() {
    my.openVoucherList();
  },
  openTicketList() {
    my.openTicketList();
  },
  //---------卡/券/票 详情页JSAPI:   passId 或者 partnerId + serialNumber  二选一的入参
  openCardDetail() {
    my.openCardDetail({//卡   不支持partnerId方式
      passId: "12339004637",
    });
  },
  openVoucherDetail() {
    my.openVoucherDetail({
      passId: "15153594937",
      //partnerId:'2088521411242352',
      // serialNumber:'20170904000730023708007XVP2W',
    });
  },
  openTicketDetail() {
    my.openTicketDetail({
      passId:"11688279837",
      //partnerId:'2013080800000754',
      //serialNumber:'T150P4607471458101261',
    });
  },
  //打开口碑券详情
  openKBVoucherDetail() {
    my.openKBVoucherDetail({//卡   不支持partnerId方式
    passId:'13813142037',
       //partnerId:'2088912612862076',
       //serialNumber:'201708010007300237080079G88A',
    });
  },
  //--------------------卡/券/票 单商户列表页:    partnerId  入参
  openMerchantCardList() {
    my.openMerchantCardList({
      partnerId: '2088621202286735',
    });

  },

  openMerchantVoucherList() {
    my.openMerchantVoucherList({
      partnerId: '2088521411242352',
    });

  },

  openMerchantTicketList() {
    my.openMerchantTicketList({
      partnerId: '2013080800000754',
    });
  },
});

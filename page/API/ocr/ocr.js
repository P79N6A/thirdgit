Page({
  data: {},
  onLoad() { },
  ocrNetworkUrl() {
    my.ocr({
      path: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1515576252090&di=07205fc6fbbfb5457b1e49a89ec63f10&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimage%2Fc0%253Dpixel_huitu%252C0%252C0%252C294%252C40%2Fsign%3Db05d0b3c38fa828bc52e95a394672458%2Fd788d43f8794a4c2717d681205f41bd5ad6e39a8.jpg',
      ocrType: 'ocr_idcard',
      side: 'back',
      success: (res) => {
        my.alert({ content: JSON.stringify(res), });
      },
      fail: (res) => {
        my.alert({
          title: 'fail', content: JSON.stringify(res),
        });
      },
    });
  },
  ocrlocal() {
    my.ocr({
      path: '/image/ocr/timg.jpg',
      ocrType: 'ocr_idcard',
      side: 'back',
      success: (res) => {
        my.alert({ content: JSON.stringify(res), });
      },
      fail: (res) => {
        my.alert({
          title: 'fail',
          content: JSON.stringify(res),
        });
      },
    });
  },

  ocrap_face() {
    my.navigateTo({
      url: '../ocr/ocr-idcard-face',
    });
  },

  //ocr识别图片上文字
  ocr_general() {
    my.navigateTo({
      url: '../ocr/ocr-general',
    });
  },
  //ocr银行卡识别
  ocr_bank() {
    my.navigateTo({
      url: '../ocr/ocr-bank-card',
    });
  },
  //ocr火车票识别
  ocr_train() {
    my.navigateTo({
      url: '../ocr/ocr-train-ticket',
    });
  },
  //ocr名片识别
  ocr_business_card() {
    my.navigateTo({
      url: '../ocr/ocr-business-card',
    });
  },
  //ocr车牌识别
  ocr_vehicle_plate() {
    my.navigateTo({
      url: '../ocr/ocr-vehicle-plate',
    });
  },
  //驾驶证识别 ocr_driver_license
  ocr_driver() {
    my.navigateTo({
      url: '../ocr/ocr-driver-license',
    });
  },
  //行驶证识别
  ocr_vehicle() {
    my.navigateTo({
      url: '../ocr/ocr-vehicle',
    });
  },

  //营业执照识别
  ocr_business() {
    my.navigateTo({
      url: '../ocr/ocr-business-license',
    });
  },
  //护照识别
  ocr_passport() {
    my.navigateTo({
      url: '../ocr/ocr-passport',
    });
  },
  //vin识别
  ocr_vin() {
    my.navigateTo({
      url: '../ocr/ocr-vin',
    });
  },
  //异常场景验证
  ocr_number() {
    my.ocr({
      path: 0,
      ocrType: 0,
      side: 0,
      success: (res) => {
        my.alert({ content: JSON.stringify(res), });
      },
      fail: (res) => {
        my.alert({
          title: 'fail',
          content: JSON.stringify(res),
        });
      },
    });
  },
  ocr_array() {
    my.ocr({
      path: [0, 1, 4],
      ocrType: [0, 1, 2],
      side: [0, 1, 2],
      success: (res) => {
        my.alert({ content: JSON.stringify(res), });
      },
      fail: (res) => {
        my.alert({
          title: 'fail',
          content: JSON.stringify(res),
        });
      },
    });
  },
  ocr_null() {
    my.ocr({
      path: null,
      ocrType: null,
      side: null,
      success: (res) => {
        my.alert({ content: JSON.stringify(res), });
      },
      fail: (res) => {
        my.alert({
          title: 'fail',
          content: JSON.stringify(res),
        });
      },
    });
  },
  ocr_bool() {
    my.ocr({
      path: true,
      ocrType: false,
      side: true,
      success: (res) => {
        my.alert({ content: JSON.stringify(res), });
      },
      fail: (res) => {
        my.alert({
          title: 'fail',
          content: JSON.stringify(res),
        });
      },
    });
  },
});

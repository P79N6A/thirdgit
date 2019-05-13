Page({
  //信用借还
  zmCreditBorrow() {
    my.zmCreditBorrow({
      borrow_cycle: "2",
      borrow_cycle_unit: "HOUR",
      borrow_shop_name: "kendeji-wensanlu",
      deposit_amount: "0.50",
      deposit_state: "Y",
      goods_name: "diqun204",
      invoke_return_url: "xxx",
      invoke_type: "TINYAPP",
      out_order_no: "2088011177517794",
      product_code: "w1010100000000002858",
      rent_amount: "0.10",
      rent_info: "2hour-free",
      rent_unit: "HOUR_YUAN",
      success: (res) => {
        my.alert({ content: '借还信息' + JSON.stringify(res), });
      },
      fail: (error) => {
        my.alert({ content: '调用失败' + JSON.stringify(error), });
      }
    });
  },
//代扣
  paySignCenter() {
    my.paySignCenter({
      signStr: 'biz_content=%7B%22access_params%22%3A%7B%22channel%22%3A%22ALIPAYAPP%22%7D%2C%22external_agreement_no%22%3A%22dev_1_1%22%2C%22personal_product_code%22%3A%22GENERAL_WITHHOLDING_P%22%2C%22sign_scene%22%3A%22INDUSTRY%7CCARRENTAL%22%7D&sign=N8HI5Hl5dQPhG%2BKDIeonYQRXcbLx5%2BqSeX%2B4uePTyM561yN1lAspw2wl1glsJvxbsBebi6XQs%2FSAR1az2de4IeR9%2FEbdTLmInpVr7bfQGWDVyRYQIgq6fRyzYGzBQMsSdteRVWGTKk3DoZf1%2BOrEx0bT9bD%2Fd%2BH1TScS0%2FqzYSA%3D&timestamp=2017-09-18+20%3A47%3A29&sign_type=RSA&charset=UTF-8&app_id=2017060101317939&method=alipay.user.agreement.page.sign&version=1.0',
      success: (res) => {
        my.alert({
          title: 'success', // alert 框的标题
          content: JSON.stringify(res)
        });
      },
      fail: (res) => {
        my.alert({
          title: 'fail', // alert 框的标题
          content: JSON.stringify(res)
        });
      }
    })
  },
  //芝麻认证
  startZMVerify() {
    my.startZMVerify({
      bizNo: '26554545',
      success: (res) => {
        my.alert({ title: 'success:' + JSON.stringify(res) });
      },
      fail: (res) => {
        my.alert({ title: 'fail: ' + JSON.stringify(res) });
      },
    });
  },
  //信用租
  startZMCreditRent() {
    my.startZMCreditRent({
      category: "",
      amount: "1000.00",
      out_order_no: "",
      overdue_time: "2018-1-10 00:00:00",
      order_process_url: "http://www.alipay.com",
      item_id: "",
      subject: {
        products: [
          {
            name: "汉服",
            count: 2,
            amount: "100.00",
          },
          {
            name: "汉裤",
            count: 3,
            amount: "300.00",
          }
        ]
      },
      success: (res) => {
        console.log(JSON.stringfy(res))
        my.alert({
          content: '成功' + JSON.stringfy(res)
        })
      },
      fail: (res) => {
        my.alert({
          content: '失败' + JSON.stringfy(res)
        })
        console.log(JSON.stringfy(res))
      }
    });
  },
  //代扣预授权
  zmRentTransition() {
    my.zmRentTransition({
      creditRentType: 'signPay',
      itemId: "",
      channel: "",
      amount: "",
      fromChannel: "",
      deposit: "",
      app_id: "",
      item_id: "",
      category: "",
      out_order_no: "",
      overdue_time: "",
      subject: {
        products: [
          {
            "amount": "100.00",
            "count": 2,
            "name": "product1"
          },
          {
            "amount": "2.00",
            "count": 3,
            "name": "product2"
          }
        ]
      },
      success: (res) => {
        my.alert({ content: '提交成功' + JSON.stringify(res) });
        console.log(JSON.stringfy(res))
      },
      fail: (res) => {
        my.alert({ content: '提交失败' + JSON.stringify(error) });
        console.log(JSON.stringfy(res))
      }
    });
  },
  //芝麻企业信用免押
  zmFreeDeposit() {
    my.zmFreeDeposit({
      url: "https://openapi.alipay.com/gateway.do?app_id=2018021102178311&method=zhima.credit.ep.freedeposit.apply&format=json&charset=utf-8&sign_type=RSA2&timestamp=2018-03-04+14%3A07%3A23&version=1.0&biz_content=%7B%22order_no%22%3A%22201803041520143643175F0000223958%22%2C%22merchant_order_no%22%3A%222bbb157fc4fae1b213aa7313a16aaaf6%22%2C%22merchant_url%22%3A%22https%3A%5C%2F%5C%2Fm.rrzuji.com%5C%2Fapi-mini%5C%2Fnotify%22%7D&sign=Gpbbdp6SFZZlbnpYLwndaJLnbV4C%2FZu%2FEoFqH7qkV%2BJW10N768tWS9D5Z%2BKyGpVlfB8mQs2R%2FdqP51G0ls%2FqGbEUPCxIKhNtIEC%2BCqn89lvJAd%2FANTwy%2BIy75S2VFplR3OL6qbzqqzt8EamBYP29wNBRAMS3bBrqUGdOvtn%2FZZTZSfla3bdC3rJpYCrHVy2p7egyp2OOk%2B4ZUoeu9QjOesb4sr2VyI%2BVi9sq6JkRjJQ2UU0zHsvlQ4zymK6yCF%2FxaZofJQ6h9OPzuJLuVokHJ1zmi5%2FbYBL0lTz2KgZVcQ2rWbkkcTHUzV4YvAtVbUwMeUMkbyw0TSVdRkyrSqq49g%3D%3D",
      success: (zmResult) => {
        my.alert({ content: '数据：' + JSON.stringify(zmResult) });
        if (zmResult.success) {
          // 业务完成（点击结果按钮后）
          // 上传biz_content和sign信息到服务端（此处还需要用户身份信息）
          my.alert({ title: '调用成功 biz_content', content: decodeURIComponent(zmResult.biz_content) });
          my.alert({ title: '调用成功 sign', content: decodeURIComponent(zmResult.sign) });
        } else {
          // 用户手动在某一阶段退出
          my.alert({ title: '流程未完成' });
        }
      },
      fail: (error) => {
        // 异常回退的处理
        my.alert({ content: '调用失败' + JSON.stringify(error) });
      },
    });
  },
  zmFreeDeposit_null() {
    my.zmFreeDeposit({
      url: null,
      success: (res) => {
        my.alert({ content: '操作成功' + JSON.stringify(res) });
      },
      fail: (error) => {
        my.alert({ content: '操作失败' + JSON.stringify(error) });
      },
    });
  },
  zmFreeDeposit_number() {
    my.zmFreeDeposit({
      url: 0,
      success: (res) => {
        my.alert({ content: '操作成功' + JSON.stringify(res) });
      },
      fail: (error) => {
        my.alert({ content: '操作失败' + JSON.stringify(error) });
      },
    });
  },
})

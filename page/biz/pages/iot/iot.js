Page({
  data: {},
  onLoad() { },
  iotCreateService() {
    my.call('iotCreateService', {
      serviceId: '2000009700000', //选填 该服务的id，由协议服务商定义，协议服务商appId范围内唯一即可，用于单个协议服务商唯一标识一个服务(选填，如果不指定则创建默认服务实例)
      serviceName: '测试服务', // 必填 服务名称
      remark: '备注', // 选填 服务备注，如果不填，则默认使用协议服务商小程序的名称
      urlParams: { key1: value1, key2: value2 }, // 选填 url跳转参数map， 服务创建后用户可点击服务进入协议服务商的小程序(通过形如alipays://platformapi/startapp?appId=xxxxx&key1=value1&key2=value2...)，该字段用于给小程序代入额外业务参数
      complete: function (res) {
        my.showToast({ content: JSON.stringify(res) });
      }
    });
  },
  iotCheckService() {
    my.call('iotCheckService', {
      serviceId: '2000009700000', //选填 该服务的id，由协议服务商定义（如果不传，则检验默认服务实例是否已经注册）
      complete: function (res) {
        my.showToast({ content: JSON.stringify(res) });
      }
    });
  },
});


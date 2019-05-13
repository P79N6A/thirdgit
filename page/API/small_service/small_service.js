Page({
  data: {},
   onLoad() {
    console.log('page---onLoad');
  },
  onShow() {
    // 页面显示
      console.log('page--onShow');
  },
   onReady() {
    // 页面加载完成
     console.log('page--onReady');
  },
  onHide() {
    // 页面隐藏
     console.log('page--onHide');
  },
  onUnload() {
    // 页面被关闭
    console.log('page--onUnload');
  },
  miniservice(){
     my.navigateToMiniService({
      serviceId:'2018060860252950',
      servicePage: 'page/component/component-pages/canvas/canvas',
      extraData: {
        name: 'z自定义的值',
        id: 111,
        bool: true,
        arr: [1, 3, 6],
        alipay: "alipays://platformapi/startapp?appId=20067?query=123&ccc=bbb#fragmentId=1234567#page/page/index",
        e1mj: 'add',
        fuhao: '#@%^*()[]?!/',
        url_https: "https://www.alipay.com/path/sub?param=kamk&query=q#extraParam=123123",
        url_http: "http://www.alipay.com/path/sub?param=kamk&query=q#extraParam=123123",
        url_scheme: "alipays://startApp/path/sub?param=kamk&query=q#extraParam=123123",
        object_test: {
          extendInfo: {
            name: "johnny",
            sex: "male",
            age: 18,
            other: {
              phoneNumber: 13500000000,
              hhaa: "asdasdas"
            }
          },
          pic: "xxxxx-pic"
        }

      },
      success: (e) => {
         console.log('小服务返回success数据:'+JSON.stringify(e))
        my.alert({ content: '操作成功:' + JSON.stringify(e) });
        console.log(`navigateToMiniService success callback data: ${JSON.stringify(e)}`);
      },
      fail: (e) => {
        my.alert({ content: '启动小服务失败' + JSON.stringify(e) });
      },
      complete: (res) => {
        my.alert({ content: 'complete回调！'+JSON.stringify(res)});
      }
    });
  },
  miniservice_error(){
     my.navigateToMiniService({
      serviceId: 'xxx',
      extraData: {xxx},
      success: (e) => {
        my.alert({ content: '操作成功:' + JSON.stringify(e) });
      },
      fail: (e) => {
        my.alert({ content: '启动小服务失败' + JSON.stringify(e) });
      },
    });
  },
  miniservice_null(){
     my.navigateToMiniService({
      serviceId: null,
      extraData: null,
      success: (e) => {
        my.alert({ content: '操作成功:' + JSON.stringify(e) });
      },
      fail: (e) => {
        my.alert({ content: '启动小服务失败' + JSON.stringify(e) });
      },
    });
  },

miniservice_number(){
  my.navigateToMiniService({
      serviceId: 0,
      extraData: 0,
      success: (e) => {
        my.alert({ content: '操作成功:' + JSON.stringify(e) });
      },
      fail: (e) => {
        my.alert({ content: '启动小服务失败' + JSON.stringify(e) });
      },
    });
},
miniservice_array(){
  my.navigateToMiniService({
      serviceId: [0,1,2],
      extraData: null,
      success: (e) => {
        my.alert({ content: '操作成功:' + JSON.stringify(e) });
      },
      fail: (e) => {
        my.alert({ content: '启动小服务失败' + JSON.stringify(e) });
      },
    });
},
miniservice_bool(){
   my.navigateToMiniService({
      serviceId: true,
      extraData: false,
      success: (e) => {
        my.alert({ content: '操作成功:' + JSON.stringify(e) });
      },
      fail: (e) => {
        my.alert({ content: '启动小服务失败' + JSON.stringify(e) });
      },
    });
},

backapp(){
   my.navigateBackFromMiniService({
      data: 'data from navigateBackFromMiniService',
      message:{a:111,b:'中文',c:'dsfsdkjfk',d:"http://www.alipay.com/path/sub?param=kamk&query=q#extraParam=123123",
                other: {
                phoneNumber: 13417376940,
                hhaa: "手机号码"
               }},
      urls:['alipays://startApp/path/sub?param=kamk&query=q#extraParam=123123','https://www.alipay.com/path/sub?param=kamk&query=q#extraParam=123123'],
      test:'alipays://platformapi/startapp?appId=20067?query=123&ccc=bbb#fragmentId=1234567#page/page/index',
      success:(res)=>{
        my.alert({content:'操作成功'+JSON.stringify(res)})
        }
    });
},
backapp_error(){
   my.navigateBackFromMiniService({
      data:dsjgkd,
      success:(res)=>{
        my.alert({content:'操作成功'+JSON.stringify(res)})
        }
    });
},
backapp_null(){
   my.navigateBackFromMiniService({
      data: null,
      value:null,
      success:(res)=>{
        my.alert({content:'操作成功'+JSON.stringify(res)})
        },
        fail:(error)=>{
          my.alert({
          content:'失败'+JSON.stringify(error)
          });
        }
    });
},
backapp_number(){
   my.navigateBackFromMiniService({
      data: 888,
      success:(res)=>{
        my.alert({content:'操作成功'+JSON.stringify(res)})
        }
    });
},
backapp_array(){
   my.navigateBackFromMiniService({
      data: [1,2,3],
      success:(res)=>{
        my.alert({content:'操作成功'+JSON.stringify(res)})
        }
    });
},
backapp_bool(){
  my.navigateBackFromMiniService({
      bool: false,
      success:(res)=>{
        my.alert({content:'操作成功'+JSON.stringify(res)})
        }
    });
},
});

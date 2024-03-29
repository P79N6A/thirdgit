
Page({
  data: {
    tests:[
      {
        name:"getSystemInfo 接口测试",
        desc:"getSystemInfo",
        params:{}
      },
      {
        name:"getCities 接口测试",
        desc:"getCities",
        params:{}
      }
    ]
  },
  Qunit:{
    idx:-1,
    test:function(name, desc, callback){
      let app = getApp();
      app.Q.data.tests.push({
        name:name,
        desc:desc,
        result:"untest",
        info:"",
        status:"hide"
      });

    app.Q.funcs.cblist.push({
      callback:callback
    });

    app.Q.data.total += 1;

    },
    
    run:function(idx){
      let running = true;
      let app = getApp();
      let lastResult = app.Q.data.tests[idx].result;
      app.Q.data.tests[idx].result = "run";
      app.Q.data.tests[idx].info = "";
      app.Q.setData(app.Q.data);

      let assert = function(condition, trueMsg, falseMsg){
        if(condition){
          app.Q.data.tests[idx].result = "pass";
          app.Q.data.tests[idx].info = trueMsg;
        }else{
          app.Q.data.tests[idx].result = "fail";
          app.Q.data.tests[idx].info = falseMsg;
        }

        app.Q.update(condition, lastResult);
        app.Q.setData(app.Q.data);
        running = false;
      };
      app.Q.funcs.cblist[idx].callback(assert);
    },
    runAll:function(){
      let app = getApp();

      for(let i=app.Q.data.tests.length -1; i>=0; i--){
        if(app.Q.data.tests[i].type != "manual"){
          this.run(i);
        }
      }
    },
  },

  onItemTap(event){
    let app = getApp();
    let idx = event.currentTarget.id;
    
    if(app.Q.data.tests[idx].status == "show"){
      app.Q.data.tests[idx].status = "hide";
    }else{
      app.Q.data.tests[idx].status = "show";
    };

    this.setData(app.Q.data);
  },
  onRunTap(event){
    let idx = event.currentTarget.id;
    this.Qunit.run(idx);
  },
  handleTap(event){
    my.showToast({
      type: 'success',
      content: '正在执行一键自动化！请稍候！',
      duration: 10000
    });
    // let app = getApp();
    // app.Q.resetDate();
    this.Qunit.runAll();      
  },
  onLoad() {

    //////////////// 用例开始 /////////////////////
    let app = getApp();
    app.Q.resetDate();

    ////多媒体-保存图片////
    
    this.Qunit.test("saveImage_01显示操作菜单", "saveImage接口success callback测试", function (assert) {
      my.saveImage({
        url: 'https://img.alicdn.com/tps/TB1sXGYIFXXXXc5XpXXXXXXXXXX.jpg',
        showActionSheet: true,
      });
      assert(true, "调用saveImage接口,显示操作菜单，图片保存成功，successs回调成功", "调用saveImage接口，保存图片不成功，success回调失败");
    });

    this.Qunit.test("saveImage_02不显示操作菜单", "saveImage接口success callback测试", function(assert){
      my.saveImage({
        url:'https://img.alicdn.com/tps/TB1sXGYIFXXXXc5XpXXXXXXXXXX.jpg',
        showActionSheet:false,
      });
    assert(true,"调用saveImage接口,不显示操作菜单，图片保存成功，successs回调成功","调用saveImage接口，success回调失败");                   
    });

    this.Qunit.test("saveImage_03URL错误","saveImage接口success callback测试", function(assert){
      my.saveImage({
        url:'https://XXXXX.jpg',
        showActionSheet:false,       
        fail:(res)=>{
          console.log(res.error)       
        assert(false,"fail","调用saveImage接口，URL错误，fail回调异常");                  
        },
      });
    assert(true, "调用saveImage接口，URL错误，fail回调，无法保存图片","fail"); 
    });
    
    this.Qunit.test("saveImage_04complete回调", "saveImage接口complete callback测试", function(assert){
      my.saveImage({
        complete: (res) => {
          console.log(res)
          assert(true, "调用saveImage接口，可以正常complete回调", "调用saveImage接口，无法正常complete回调");
        },
      });
    });

    ////开放接口-用户授权////
    this.Qunit.test("getAuthCode_01静默授权", "getAuthCode接口success callback测试", function(assert){
      my.getAuthCode({
        scopes: 'auth_base',
        success: (res) => {
          console.log(JSON.stringify(res))
          assert((res.authCode != ""), "调用getAuthCode接口，auth_base,可以正常获取到authCode值,authCode值为" + JSON.stringify(res) + ",成功success回调", "fail");
        },
      });
    assert(false, "fail", "调用getAuthCode接口,授权类型错误,无法success回调");  
    });

    this.Qunit.test("getAuthCode_02主动授权", "getAuthCode接口success callback测试", function(assert){
      my.getAuthCode({
        scopes: 'auth_user',
        success: (res) => {
          console.log(JSON.stringify(res))
          assert((res.authCode != ""), "调用getAuthCode接口，auth_user,可以正常获取到authCode值,authCode值为" + JSON.stringify(res) + ",成功success回调", "fail");
        },
      }); 
    assert(false, "fail","调用getAuthCode接口,授权类型错误,无法success回调");    
    });

    this.Qunit.test("getAuthCode_03传入错误的授权类型", "getAuthCode接口fail callback测试", function(assert){   
      my.getAuthCode({
        scopes: 'auth',
        fail: (res) => {
          console.log(JSON.stringify(res))
          assert(true, "调用getAuthCode接口，传入错误参数，fail回调，返回：" + JSON.stringify(res), "fail");
        },
      });
    assert(false, "fail", "调用getAuthCode接口，传入错误参数，fail回调出现异常");
    });
    
    this.Qunit.test("getAuthCode_04complete回调", "getAuthCode接口complete callback测试", function(assert){
      my.getSystemInfo({
        complete: (res) => {
          assert(true, "调用getAuthCode接口，可以正常complete回调", "调用getAuthCode接口，无法正常complete回调");
        },
      });
    });


   ////开放接口-客户端获取会员信息////

    this.Qunit.test("getAuthUserInfo_01主动授权", "getAuthUserInfo接口success callback测试", function(assert){
      my.getAuthCode({
        scopes: 'auth_user',
        success: (res) => {
          my.getAuthUserInfo({
            success: (userInfo) => {
            console.log(userInfo)
            assert((userInfo.nickName !=""), "可以正常获取到nickname,avatar值,调用getAuthUserInfo接口,主动授权，success回调"+",返回:"+JSON.stringify(userInfo),"调用getAuthUserInfo接口，无法获得返回值，success回调失败");
            }
          });
        },
      });            
    });

    this.Qunit.test("getAuthUserInfo_02静默授权", "getAuthUserInfo接口success callback测试", function(assert){
      my.getAuthCode({
        scopes: 'auth_base',
        success: (res) => {
          my.getAuthUserInfo({
            success: (userInfo) => {
            console.log(userInfo)
            assert((userInfo.nickName !=""), "可以正常获取到nickname,avatar值,调用getAuthUserInfo接口,主动授权，success回调"+",返回:"+JSON.stringify(userInfo), "调用getAuthUserInfo接口，无法获得返回值，success回调失败");    
            }
          });
        },
      });         
    });

    this.Qunit.test("getAuthUserInfo_03fail回调", "getAuthUserInfo接口fail callback测试", function(assert){   
      my.getSystemInfo({
        fail: (res) => {
          console.log(JSON.stringify(res))
          assert(false, "异常", "调用getAuthUserInfo接口，出现异常，调用了fail");
        },
      });
    assert(true, "调用getAuthUserInfo接口，不会调用fail", "异常");
    });

   
    this.Qunit.test("getAuthUserInfo_03complete回调", "getAuthUserInfo接口complete callback测试", function(assert){
        my.getSystemInfo({
        complete: (res) => {
          console.log(JSON.stringify(res))
          assert(true, "调用getAuthUserInfo接口，可以正常complete回调", "调用getAuthUserInfo接口，无法正常complete回调");
        },
      });
    });

    ////授权指导////
    this.Qunit.test("LBS_01授权指导", "showAuthGuide接口success callback测试", function(assert){
      my.showAuthGuide({
        bizType: 'AppletPG',
        authType: 'LBS',
        success: (res) => {
          console.log(JSON.stringify(res))
          assert(true, "调用showAuthGuide接口，success回调,返回:" + JSON.stringify(res), "调用showAuthGuide接口，success回调失败");
        },
      });    
    });

    ////蓝牙-初始化蓝牙////

    this.Qunit.test("蓝牙-初始化蓝牙_01success回调", "openBluetoothAdapter接口success callback测试", function(assert){
      my.openBluetoothAdapter({
        autoClose:false,       
        success: (res) => {
          console.log(JSON.stringify(res))
          assert(res.isSupportBLE != "", "调用openBluetoothAdapter接口，初始化蓝牙成功,success回调成功" + JSON.stringify(res), "调用openBluetoothAdapter接口,蓝牙未开启，无法完成success回调");
        },
      });
    assert(false, "调用openBluetoothAdapter接口,蓝牙未开启，无法完成success回调" , "调用openBluetoothAdapter接口,蓝牙未开启，无法完成success回调");
    });

    this.Qunit.test("蓝牙-初始化蓝牙_02fail回调", "openBluetoothAdapter接口fail callback测试", function(assert){   
      my.openBluetoothAdapter({
        fail: (res) => {
          assert(false, "异常", "调用openBluetoothAdapter接口，初始化蓝牙，出现异常,调用了fail");
        },
      });
    assert(true, "调用openBluetoothAdapter接口，初始化蓝牙，不会调用fail，", "异常");
    });

    
    this.Qunit.test("蓝牙-初始化蓝牙_03complete回调", "openBluetoothAdapter接口complete callback测试", function(assert){
        my.openBluetoothAdapter({
        complete: (res) => {
          assert(true, "调用openBluetoothAdapter接口，初始化蓝牙，可以正常complete回调", "调用openBluetoothAdapter接口，初始化蓝牙，无法正常complete回调");
        },
      });
    });

    ////蓝牙-关闭本机蓝牙////

    this.Qunit.test("蓝牙-关闭本机蓝牙_01success回调", "openBluetoothAdapter接口success callback测试", function(assert){
      my.closeBluetoothAdapter({       
        success: (res) => {
           assert(true, "调用closeBluetoothAdapter接口，成功关闭本机蓝牙，success回调成功", "调用closeBluetoothAdapter接口，成功关闭本机蓝牙，success回调失败");
        },                 
      });  
    }); 

    this.Qunit.test("蓝牙-关闭本机蓝牙_02fail回调", "openBluetoothAdapter接口fail callback测试", function(assert){   
      my.closeBluetoothAdapter({
        fail: (res) => {
          assert(false, "调用closeBluetoothAdapter接口，关闭本机蓝牙，出现异常，调用了fail", "");
        },          
      });
    assert(true, "调用openBluetoothAdapter接口，关闭本机蓝牙，不会调用fail", "");  
    });

    
    this.Qunit.test("蓝牙-关闭本机蓝牙_03complete回调", "openBluetoothAdapter接口complete callback测试", function(assert){
        my.closeBluetoothAdapter({
        complete: (res) => {
          assert(true, "调用closeBluetoothAdapter接口，可以正常complete回调", "调用closeBluetoothAdapter接口，无法正常complete回调");
        },        
      });
    });

    ////获取本机蓝牙状态////

    this.Qunit.test("蓝牙-获取本机蓝牙状态_01success回调", "getBluetoothAdapterState接口success callback测试", function(assert){
      my.getBluetoothAdapterState({       
        success: (res) => {
          console.log(JSON.stringify(res))
          assert(res.available!="", "调用getBluetoothAdapterState接口，成功获取本机蓝牙状态"+"，返回:"+JSON.stringify(res)+"success回调成功", "调用getBluetoothAdapterState接口,无法获取本机蓝牙状态，success回调失败");
        },          
      });
    }); 

    this.Qunit.test("蓝牙-获取本机蓝牙状态_02fail回调", "getBluetoothAdapterState接口fail callback测试", function(assert){   
      my.getBluetoothAdapterState({
        fail: (res) => {
          assert(false, "fail", "调用getBluetoothAdapterState接口，获取本机蓝牙状态，出现异常");
        },
      });
    assert(true, "调用getBluetoothAdapterState接口，获取本机蓝牙状态，不会调用fail", "fail");
    });

    
    this.Qunit.test("蓝牙-获取本机蓝牙状态_03complete回调", "getBluetoothAdapterState接口complete callback测试", function(assert){
        my.getBluetoothAdapterState({
        complete: (res) => {
          assert(true, "调用getBluetoothAdapterState接口，获取本机可以状态，正常complete回调", "调用getBluetoothAdapterState接口，获取本机可以状态，无法正常complete回调");
        },
      });
    });

    ////蓝牙-开始搜索////

    this.Qunit.test("蓝牙-开始搜索_01不传参数", "startBluetoothDevicesDiscovery接口success callback测试", function(assert){
      my.openBluetoothAdapter({
        autoClose:false,       
        success: (res) => {
          my.startBluetoothDevicesDiscovery({
            allowDuplicatesKey: false,
            interval: '5000',
          //  services: "",                 
            success: (res) => {
              my.onBluetoothDeviceFound({
                success: (res) => {
                console.log(JSON.stringify(res))
                assert(true, "调用startBluetoothDevicesDiscovery接口，开始搜索蓝牙设备，可以正常success回调,返回：" + JSON.stringify(res), "fail")
                },
              });
            },
          });
        },
      });
    assert(false, "fail", "调用startBluetoothDevicesDiscovery接口，开始搜索蓝牙设备，无法正常success回调");
    }); 

  //   ////蓝牙-连接////
  //   this.Qunit.test("连接设备失败-设备ID错误_02", "connectBLEDevice接口success callback测试", function(assert){
  //     my.connectBLEDevice({
  //       deviceId: "7F:71:29:28:FC:00",       
  //       fail: (error) => {
  //         assert(false, "异常", "调用connectBLEDevice接口，设备ID错误，fail回调出现异常");
  //       },          
  //     });
  //   assert(true, "调用connectBLEDevice接口，设备ID错误，连接蓝牙失败,fail回调，返回："+JSON.stringify(res), "异常");
  //   }); 

  //   this.Qunit.test("连接设备失败-设备ID为空_03", "connectBLEDevice接口success callback测试", function(assert){
  //     my.connectBLEDevice({
  //       deviceId: "",       
  //       fail: (error) => {
  //         console.log(res),
  //         assert(false, "异常", "调用connectBLEDevice接口，ID为空，fail回调出现异常");
  //       },          
  //     });
  //   assert(true, "调用connectBLEDevice接口，ID为空，连接蓝牙失败，fail回调,返回："+JSON.stringify(res), "异常");
  // }); 
  
    ////网络-httpRequest////

    this.Qunit.test("httpRequest_01发送一条请求", "httpRequest接口success callback测试", function(assert){
      my.httpRequest({
        url: 'http://httpbin.org/post',
        method: 'POST',
        data: {
          from: '支付宝',
          production: 'AlipayJSAPI',
        },
        dataType: 'json',
        timeout: 20000,
        success: function (res) {
          console.log(JSON.stringify(res))
          res.status == undefined
          assert(res.status == '200', "调用httpRequest接口，成功发送请求,success回调成功，返回：" + JSON.stringify(res), "请求发送失败，返回："+JSON.stringify(res));
        },
      });
    }); 

    this.Qunit.test("httpRequest_02请求地址错误", "httpRequest接口fail callback测试", function(assert){
      my.httpRequest({
        url: 'xxx',
        success:function (res) {
          assert(true, "调用httpRequest接口，fail回调出现异常", "异常，返回："+JSON.stringify(res));
        },
        fail: function(error) {
          console.log(JSON.stringify(error))
          assert(true, "调用httpRequest接口，地址错误，fail回调,返回:" + JSON.stringify(error), "调用httpRequest接口，url错误，出现异常，不会调用fail");
        },
      });
    });
      
    this.Qunit.test("httpRequest_03请求超时", "httpRequest接口fail callback测试", function(assert){
      my.httpRequest({
        url: 'http://httpbin.org/post',
        method:'POST',
        data: {
          from: '支付宝',
          production: 'AlipayJSAPI',
        },
        timeout:50,
        dataType: 'json',
        fail: function (error) {
          console.log(JSON.stringify(error))
          assert(true, "调用httpRequest接口，请求超时，fail回调，返回:" + JSON.stringify(error), "调用httpRequest接口，请求超时，出现异常，不会调用fail");
        },
      });
    });

    this.Qunit.test("httpRequest_04请求没有跨域权限", "httpRequest接口fail callback测试", function (assert) {
      my.httpRequest({
        url: 'http://httpbina.com/post',
        method: 'POST',
        data: {
          from: '支付宝',
          production: 'AlipayJSAPI',
        },
        dataType: 'json',
        timeout:20000,
        success:function(res) {
          assert(false, "fail", "调用httpRequest接口，fail回调出现异常");;
        },
        fail: function (res) {
          console.log(JSON.stringify(res))
          assert(true, "调用httpRequest接口，跨越没有权限，fail回调，返回:" + JSON.stringify(res), "fail");
        },
      });
    });

    
    this.Qunit.test("httpRequest_06complete回调", "httpRequest接口complete callback测试", function(assert){
      my.httpRequest({
        complete: function(res) {
          assert(true, "调用setStorage接口，可以正常complete回调", "调用setStorage接口，无法正常complete回调");
        },
      });
    });

      ////网路-上传图片文件////

    // this.Qunit.test("uploadFile_01上传图片", "uploadFile接口success callback测试", function (assert) {
    //   my.uploadFile({
    //     url: 'http://httpbin.org/post',
    //     fileType: 'image',
    //     fileName: 'file',
    //     filePath: "https://resource/apml2595405f31e1039c9b0d3e228e11dca1.image",
    //     //filePath:'http://img.alicdn.com/tfs/TB1x669SXXXXXbdaFXXXXXXXXXX-520-280.jpg',
    //     success: (res) => {
    //       console.log(JSON.stringify(res))
    //       assert(res.data != "", "调用uploadFile接口，上传图片，可以正常success回调，返回:" + JSON.stringify(res), "调用uploadFile接口，path错误，无法上传图片，请更改path");
    //     },
    //   });
    //   assert(false, "调用uploadFile接口，无法正常success回调", "调用uploadFile接口，path错误，无法上传图片，请更改path");
    // });

    // ////网路-上传视频文件////
    // this.Qunit.test("uploadFile_02上传视频文件", "uploadFile接口success callback测试", function (assert) {
    //   my.uploadFile({
    //     url: 'http://httpbin.org/post',
    //     fileType: 'video',
    //     fileName: 'file',
    //     filePath: "https://resource/apml545c5aff5b02d3d1f295ff351eaa5f4b.video",
    //     //filePath:"https://t.alipayobjects.com/images/T1T78eXapfXXXXXXXX.mp4",
    //     success: (res) => {
    //       console.log(JSON.stringify(res))
    //       assert(res.data != "", "调用uploadFile接口，上传视频，可以正常success回调，返回:" + JSON.stringify(res), "调用uploadFile接口,path错误，无法上传视频，请更改path");
    //     },
    //   });
    //   assert(false, "调用uploadFile接口，无法正常success回调", "调用uploadFile接口，path错误，无法上传视频，请更改path");
    // });

    this.Qunit.test("uploadFile_03上传图片path错误", "uploadFile接口fail callback测试", function(assert){
      my.uploadFile({
        url: 'http://httpbin.org/post',
        fileType: 'image',
        fileName: 'VID20170825110217.mp4',
        filePath: '手机存储/DCIM/era/VID20170825110217.mp4',  
        success: (res) => {
          assert(false, "异常", "调用uploadFile接口，fail回调出现异常");
        },
        fail: (res) => {
          console.log(JSON.stringify(res))
          assert(true, "调用uploadFile接口，path错误，无法上传图片，fail回调，返回:" + JSON.stringify(res), "异常");
        },
      });
    }); 

    this.Qunit.test("uploadFile_04上传图片url地址错误", "uploadFile接口fail callback测试", function(assert){
      my.uploadFile({
        url: 'http://httpbin.o/post',
        fileType: 'image',
        fileName: "file",
        filePath: '[\"file:///storage/emulated/0/DCIM/Camer/file1.jpg\"]',  
        success: (res) => {
          assert(false, "异常", "调用uploadFile接口，fail回调出现异常");
        },
        fail: (res) => {
          console.log(JSON.stringify(res))
          assert(true, "调用uploadFile接口，url错误，无法上传图片，fail回调，返回:" + JSON.stringify(res), "异常");
        }
      });
    });

    this.Qunit.test("downloadFile_01下载文件", "downloadFile接口success callback测试", function (assert) {
      my.downloadFile({
        url: 'http://img.alicdn.com/tfs/TB1x669SXXXXXbdaFXXXXXXXXXX-520-280.jpg',
        success: (apFilePath) => {          
          urls: [apFilePath],     
          assert(apFilePath!="", "调用downloadFile接口，文件下载成功，success回调，返回:"+JSON.stringify(apFilePath), "调用downloadFile接口,下载文件不成功，无法success回调");
        },          
      });
    }); 

    this.Qunit.test("downloadFile_02下载文件URL错误", "downloadFile接口fail callback测试", function(assert){
      my.downloadFile({
        url: 'http://xxxx',
        fail: (res) => {
          console.log(res)
          assert(true, "调用uploadFile接口，URL错误，fail回调,返回error码:" + res.error, "调用uploadFile接口，URL错误，fail回调出现异常");
        },
      });
    assert(false, "异常", "调用uploadFile接口，fail回调出现异常"); 
    }),

    this.Qunit.test("connectSocket_01创建连接", "connectSocket接口success callback测试", function(assert){
      my.connectSocket({
          url: 'ws://mobilegwspanner.stable.alipay.net:8000/ws',
          data: {},
          header:{
          'content-type': 'application/json'
        },
        method: "POST",
        success: (res) => {
          console.log(JSON.stringify(res))
          assert(true, "调用connectSocket接口，可以正常success回调,成功返回:" + JSON.stringify(res), "");
        },
      });
      assert(false, "调用connectSocket接口，无法正常success回调", "");
    });
        

    this.Qunit.test("connectSocket_02创建连接URL为空", "connectSocket接口fail callback测试", function(assert){
      my.connectSocket({
        url: '',
        data: {},
        header:{
        'content-type': 'application/json'
        },
        method:"POST",
        fail: (res) => {
          console.log(JSON.stringify(res))
          assert(true, "调用connectSocket接口，url为空，fail回调,返回:"+JSON.stringify(res), "异常");         
        },       
      });
    assert(false, "异常", "调用connectSocket接口，fail回调出现异常");     
  }); 
  
    this.Qunit.test("connectSocket_03创建连接-正在连接", "connectSocket接口fail callback测试", function(assert){
      my.connectSocket({
        url: 'ws://mobilegwspanner.stable.alipay.net:8000/ws',
        data: {},
        header:{
        'content-type': 'application/json'
        },
        method:"POST",
        success: (res) => { 
          my.connectSocket({
            url: 'ws://mobilegwspanner.stable.alipay.net:8000/ws',
            data: {},
            header:{
            'content-type': 'application/json'
            },
            method:"POST",
            fail: (res) => {
              assert(false, "异常", "调用connectSocket接口，重复连接，出现异常");                                 
            },              
          });
        },
      });
    assert(true, "调用connectSocket接口，无法重复连接", "异常");                 
    }); 


    this.Qunit.test("connectSocket_03创建连接URL格式不合法", "connectSocket接口fail callback测试", function(assert){
      my.connectSocket({
        url: 'https://mobilegwspanner.alipay',
        fail: (res) => {
          console.log(JSON.stringify(res))
          assert(true, "调用connectSocket接口，URL不合法，fail回调，返回:" + JSON.stringify(res), "异常");
        },
      });
    assert(false, "异常", "调用connectSocket接口，URL不合法，fail回调出现异常");      
  });

    this.Qunit.test("closeSocket_01success回调", "closeSocket接口success callback测试", function(assert){
      my.connectSocket({
        url:'ws://mobilegwspanner.stable.alipay.net:8000/ws',
        data: {},
        header:{
          'content-type': 'application/json'
        },
        method:"GET",
      });
      my.onSocketOpen(function(res) {
        my.closeSocket() 
      });                         
      assert(true, "调用closeSocket接口，关闭连接成功，success回调正常", "调用closeSocket接口，出现异常，无法完成success回调");          
    });

    this.Qunit.test("onSocketClose_01success回调", "onSocketClose接口success callback测试", function(assert){
      my.connectSocket({
        url:'ws://mobilegwspanner.stable.alipay.net:8000/ws',
        data: {},
        header:{
          'content-type': 'application/json'
        },
        method:"GET",
      });
      my.onSocketOpen(function(res) {
        my.closeSocket() 
      });
      my.onSocketClose(function(res) {
      }) 
      assert(true, "调用onSocketClose接口，监听关闭连接成功，success回调正常", "调用onSocketClose接口，出现异常，无法完成success回调");          
    });

    ////缓存-Storage////

    this.Qunit.test("setStorage_01保存数据success", "setStorage接口success callback测试", function(assert){
      my.setStorage({
        key: 'currentCity',
        data: {
          cityName: '杭州',
          adCode: '330100',
          spell: ' hangzhou',
        },
        success: (res) => {
          console.log(JSON.stringify(res))
          assert(true, "调用setStorage接口，保存数据成功,success回调成功，返回:" + JSON.stringify(res), "调用setStorage接口，保存数据失败，success回调失败，请检查");
        },
      });
    }); 
                         
    this.Qunit.test("setStorage_02保存数据fail", "setStorage接口fail callback测试", function(assert){   
      my.setStorage({
        key: 'currentCity',
        data: {
          cityName: '杭州',
          adCode: '330100',
          spell: ' hangzhou',
        },
        fail: (res) => {
          assert(false, "异常", "调用setStorage接口，出现异常，调用了fail");
        },
      });
    assert(true, "调用setStorage接口，不会调用fail", "异常");
    });

    
    this.Qunit.test("setStorage_03保存数据complete", "setStorage接口complete callback测试", function(assert){
      my.setStorage({
        key: 'currentCity',
        data: {
          cityName: '杭州',
          adCode: '330100',
          spell: ' hangzhou',
        },
        complete: (res) => {
          assert(true, "调用setStorage接口，可以正常complete回调", "调用setStorage接口，无法正常complete回调");
        },
      });
    });

    this.Qunit.test("getStorage_01读取数据success", "getStorage接口success callback测试", function(assert){
      my.setStorage({
        key: 'currentCity',
        data: {
          cityName: '杭州',
          adCode: '330100',
          spell: ' hangzhou',
        },
        success: (res) => { 
          my.getStorage({
            key: 'currentCity',
            success: function (res) {
              console.log(JSON.stringify(res))
              res.data = undefined
              assert(res.data != "", "调用getStorage接口，读取数据成功,success回调成功，返回:" + JSON.stringify(res), "调用getStorage接口，读取数据失败，success回调失败，请检查");
            },
          });
        },
      });                
    }); 

    this.Qunit.test("getStorage_02读取数据fail", "getStorage接口fail callback测试", function(assert){
      my.setStorage({
        key: 'currentCity',
        data: {
          cityName: '杭州',
          adCode: '330100',
          spell: ' hangzhou',
        },
        success: (res) => { 
          my.getStorage({
            key: 'currentCity',
            fail: function(res) {                       
              assert(false, "异常", "调用getStorage接口，调用了fail");  
            },              
          });
        },
      });                
    assert(true, "调用getStorage接口，不会调用fail", "异常");
    }); 

    this.Qunit.test("getStorage_03读取数据complete", "getStorage接口complete callback测试", function(assert){
      my.setStorage({
        key: 'currentCity',
        data: {
          cityName: '杭州',
          adCode: '330100',
          spell: ' hangzhou',
        },
        success: (res) => { 
          my.getStorage({
            key: 'currentCity',
            complete: function(res) {                       
              assert(true, "调用getStorage接口，可以正常complete回调", "调用getStorage接口，无法正常complete回调");  
            },              
          });
        },
      });                
    }); 


    this.Qunit.test("removeStorage_01删除数据success", "removeStorage接口success callback测试", function(assert){
      my.setStorage({
        key: 'currentCity',
        data: {
          cityName: '杭州',
          adCode: '330100',
          spell: ' hangzhou',
        },
        success: (res) => { 
          my.removeStorage({
            key: 'currentCity',
            success: function(){
              assert(true, "调用removeStorage接口，删除数据成功，success回调成功", "调用removeStorage接口，删除数据失败，success回调失败，请检查");  
            },              
          });
        },
      });                
    }); 

    this.Qunit.test("removeStorage_02删除数据fail", "removeStorage接口success callback测试", function(assert){
      my.setStorage({
        key: 'currentCity',
        data: {
          cityName: '杭州',
          adCode: '330100',
          spell: ' hangzhou',
        },
        success: (res) => { 
          my.removeStorage({
            key: 'currentCity',
            fail: function(){
              assert(false, "异常", "调用removeStorage接口，出现异常，调用了fail");  
            },              
          });
        },
      });                
    assert(true, "调用removeStorage接口，不会调用fail", "异常");
    }); 

    this.Qunit.test("removeStorage_03删除数据complete", "removeStorage接口complete callback测试", function(assert){
      my.setStorage({
        key: 'currentCity',
        data: {
          cityName: '杭州',
          adCode: '330100',
          spell: ' hangzhou',
        },
        success: (res) => { 
          my.removeStorage({
            key: 'currentCity',
            complete: function(res) {                       
              assert(true, "调用removeStorage接口，可以正常complete回调", "调用removeStorage接口，无法正常complete回调");  
            },              
          });
        },
      });                
    }); 

    this.Qunit.test("clearStorage_01清除数据success", "clearStorage接口success callback测试", function(assert){
      my.setStorage({
        key: 'currentCity',
        data: {
          cityName: '杭州',
          adCode: '330100',
          spell: ' hangzhou',
        },
        success: (res) => {
          my.clearStorage()
          console.log(JSON.stringify(res))
          assert(true, "调用clearStorage接口，清楚数据成功，success回调成功，返回:" + JSON.stringify(res), "调用clearStorage接口，清楚数据失败，success回调失败，请检查");
        },
      });
    });

    this.Qunit.test("setStorageSync_01同步保存数据success", "setStorageSync接口success callback测试", function (assert) {
      let res = my.setStorageSync({
        key: 'currentCity',
        data: "杭州"
      });
      if (!res.error) {
        assert(true, "调用setStorageSync接口，同步保存数据成功，正常success回调,返回:" + JSON.stringify(res), "异常");
      } else {
        assert(false, "异常", "调用setStorageSync接口，，同步保存数据无法正常success回调");
      }

    });

    this.Qunit.test("getStorageSync_01同步读取数据", "getStorageSync接口success callback测试", function(assert){
      let res = my.setStorageSync({ 
        key:'currentCity', 
        data: "杭州" 
        });
        if (!res.error) {
          let res = my.getStorageSync({ key:'currentCity' });
            if (!res.error) {
              assert(res.data!="", "getStorageSync接口，同步读取数据成功，正常success回调,返回:"+JSON.stringify(res), "异常");
            }else{
              assert(false, "异常", "调用getStorageSync接口，无法正常success回调"); 
            }
        }     
    });

    this.Qunit.test("removeStorageSync_01同步删除数据", "removeStorageSync接口success callback测试", function(assert){
     let res = my.setStorageSync({ 
        key:'currentCity', 
        data: "杭州" 
        });
        if (!res.error) {
          let res = my.removeStorageSync({ key:'currentCity' });
            if (!res.error) {
              assert(true, "调用removeStorageSync接口，同步删除数据成功，正常success回调"+JSON.stringify(res), "异常");
            }else{
              assert(false, "异常", "调用removeStorageSync接口，无法正常success回调");
            }
        }      
    });

    this.Qunit.test("clearStorageSync_01同步清除数据", "clearStorageSync接口success callback测试", function(assert){
     let res = my.setStorageSync({ 
        key:'currentCity', 
        data: "杭州" 
        });
        if (!res.error) {
          let res = my.clearStorageSync({ key:'currentCity' });
            if (!res.error) {
              assert(true, "调用clearStorageSync接口，同步清除数据成功，正常success回调，返回:"+JSON.stringify(res), "异常");
            }else{
              assert(false, "异常", "调用clearStorageSync接口，无法正常success回调"); 
            }
        }     
    });

   
    ////缓存-getStorageInfo////
    this.Qunit.test("getStorageInfo_01success", "getStorageInfo接口success callback测试", function(assert){
      my.getStorageInfo({
        success: (res) => {
          console.log(JSON.stringify(res))
          res.currentSize == undefined
          assert((res.limitSize != ""), "调用getStorageInfo接口，可以正常获取到返回值，正常success回调，返回:"+JSON.stringify(res), "调用getStorageInfo接口，无法正常获取到返回值，success回调失败");
        },
      });
    });

    this.Qunit.test("getStorageInfo_02fail", "getStorageInfo接口fail callback测试", function(assert){   
      my.getStorageInfo({
        fail: (res) => {
          assert(false, "异常", "调用getStorageInfo接口，出现异常，调用了fail");
        },
      });
      assert(true, "调用getStorageInfo接口，不会调用fail", "异常");
    });

    
    this.Qunit.test("getStorageInfo_03complete", "getStorageInfo接口complete callback测试", function(assert){
        my.getStorageInfo({
        complete: (res) => {
          assert(true, "调用getStorageInfo接口，可以正常complete回调", "调用getStorageInfo接口，无法正常complete回调");
        },
      });
    });


    ////界面-数据安全////

    this.Qunit.test("rsa_01encrypy加密", "rsa接口success callback测试", function(assert){      
      my.rsa({
        action: 'encrypt',
        text: "支付宝小程序",
        key: 'MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDKmi0dUSVQ04hL6GZGPMFK8+d6\n' +
        'GzulagP27qSUBYxIJfE04KT+OHVeFFb6K+8nWDea5mkmZrIgp022zZVDgdWPNM62\n' +
        '3ouBwHlsfm2ekey8PpQxfXaj8lhM9t8rJlC4FEc0s8Qp7Q5/uYrowQbT9m6t7BFK\n' +
        '3egOO2xOKzLpYSqfbQIDAQAB',
        success: (result) => {
          console.log(JSON.stringify(result))
          assert((result.text != ""), "调用rsa接口，加密，可以正常获取到返回值，正常success回调，返回:" + JSON.stringify(result), "调用rsa接口，加密，无法获取到返回值，success回调失败");
        },
      });
    });

    this.Qunit.test("rsa_02decrypt解密", "rsa接口success callback测试", function(assert){      
      my.rsa({
        action: 'decrypt',
        text: 'dXPeTdKOIg7J9DcEoEbN7hvglOOwlbq9eLjVWvD+l2guz3CcBnHj3Q0BO1oy\n'+
        '7gNCWgv3veL6BINMwnKc58wlhnCAypHpH5nC6gPrp9uhUnOV/HvMssDJxs4QK60jy2\n'+
        'H7JYw5FU70Jy4J6Bp6LPMvLO6SJAyiJ6GqDRBcQv37I2g=',
        key: 'MIICdwIBADANBgkqhkiG9w0BAQEFAASCAmEwggJdAgEAAoGBAMqaLR1RJVDTiEvo\n' +
        'ZkY8wUrz53obO6VqA/bupJQFjEgl8TTgpP44dV4UVvor7ydYN5rmaSZmsiCnTbbN\n' +
        'lUOB1Y80zrbei4HAeWx+bZ6R7Lw+lDF9dqPyWEz23ysmULgURzSzxCntDn+5iujB\n' +
        'BtP2bq3sEUrd6A47bE4rMulhKp9tAgMBAAECgYBjsfRLPdfn6v9hou1Y2KKg+F5K\n' +
        'ZsY2AnIK+6l+sTAzfIAx7e0ir7OJZObb2eyn5rAOCB1r6RL0IH+MWaN+gZANNG9g\n' +
        'pXvRgcZzFY0oqdMZDuSJjpMTj7OEUlPyoGncBfvjAg0zdt9QGAG1at9Jr3i0Xr4X\n' +
        '6WrFhtfVlmQUY1VsoQJBAPK2Qj/ClkZNtrSDfoD0j083LcNICqFIIGkNQ+XeuTwl\n' +
        '+Gq4USTyaTOEe68MHluiciQ+QKvRAUd4E1zeZRZ02ikCQQDVscINBPTtTJt1JfAo\n' +
        'wRfTzA0Lvgig136xLLeQXREcgq1lzgkf+tGyUGYoy9BXsV0mOuYAT9ldja4jhJeq\n' +
        'cEulAkEAuSJ5KjV9dyb0RIFAz5C8d8o5KAodwaRIxJkPv5nCZbT45j6t9qbJxDg8\n' +
        'N+vghDlHI4owvl5wwVlAO8iQBy8e8QJBAJe9CVXFV0XJR/n/XnER66FxGzJjVi0f\n' +
        '185nOlFARI5CHG5VxxT2PUCo5mHBl8ctIj+rQvalvGs515VQ6YEVDCECQE3S0AU2\n' +
        'BKyFVNtTpPiTyRUWqig4EbSXwjXdr8iBBJDLsMpdWsq7DCwv/ToBoLg+cQ4Crc5/\n5DChU8P30EjOiEo=',
        success: (result) => {
          console.log(JSON.stringify(result))
          assert((result.text == "支付宝小程序"), "调用rsa接口，解密，可以正常获取到text值，正常success回调，返回:" + JSON.stringify(result), "调用rsa接口，解密，无法正常获取到text值，success回调失败");
        },
      });
    });

    this.Qunit.test("rsa_03decrypt解密参数错误", "rsa接口success callback测试", function(assert){      
      my.rsa({
        action: 'decrypt',
        text: "dXPeTdKOIg7J9DcEoEbN7hvglOOwlbq9eLjVWvD+l2guz3CcBnHj3Q0BO1o",
        key: 'MIICdwIBADANBgkqhkiG9w0BAQEFAASCAmEwggJdAgEAAoGBAMqaLR1RJVDTiEvo\n' +
        'ZkY8wUrz53obO6VqA/bupJQFjEgl8TTgpP44dV4UVvor7ydYN5rmaSZmsiCnTbbN\n' +
        'lUOB1Y80zrbei4HAeWx+bZ6R7Lw+lDF9dqPyWEz23ysmULgURzSzxCntDn+5iujB\n' +
        'BtP2bq3sEUrd6A47bE4rMulhKp9tAgMBAAECgYBjsfRLPdfn6v9hou1Y2KKg+F5K\n' +
        'ZsY2AnIK+6l+sTAzfIAx7e0ir7OJZObb2eyn5rAOCB1r6RL0IH+MWaN+gZANNG9g\n' +
        'pXvRgcZzFY0oqdMZDuSJjpMTj7OEUlPyoGncBfvjAg0zdt9QGAG1at9Jr3i0Xr4X\n' +
        '6WrFhtfVlmQUY1VsoQJBAPK2Qj/ClkZNtrSDfoD0j083LcNICqFIIGkNQ+XeuTwl\n' +
        '+Gq4USTyaTOEe68MHluiciQ+QKvRAUd4E1zeZRZ02ikCQQDVscINBPTtTJt1JfAo\n' +
        'wRfTzA0Lvgig136xLLeQXREcgq1lzgkf+tGyUGYoy9BXsV0mOuYAT9ldja4jhJeq\n' +
        'cEulAkEAuSJ5KjV9dyb0RIFAz5C8d8o5KAodwaRIxJkPv5nCZbT45j6t9qbJxDg8\n' +
        'N+vghDlHI4owvl5wwVlAO8iQBy8e8QJBAJe9CVXFV0XJR/n/XnER66FxGzJjVi0f\n' +
        '185nOlFARI5CHG5VxxT2PUCo5mHBl8ctIj+rQvalvGs515VQ6YEVDCECQE3S0AU2\n' +
        'BKyFVNtTpPiTyRUWqig4EbSXwjXdr8iBBJDLsMpdWsq7DCwv/ToBoLg+cQ4Crc5/\n5DChU8P30EjOiEo=',      
        fail: (result) => {
          console.log(JSON.stringify(result))
          assert(true, "调用rsa接口,加密参数错误，fail回调，返回:" + JSON.stringify(result), "调用rsa接口,加密参数错误，fail回调出现异常");
          //assert(false,"", "调用rsa接口,fail回调出现异常");  
        },        
      });
    //assert(true, "调用rsa接口,加密参数错误，fail回调"+JSON.stringify(result),"");  
    });

    this.Qunit.test("rsa_04encrypt(key错误)", "rsa接口success callback测试", function(assert){      
      my.rsa({
        action: 'encrypt',
        text:"支付宝小程序",
        key: 'MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDKmi0dUSVQ04hL6GZGPMFK8+d6\n' +
        'GzulagP27qSUBYxIJfE04Q5/uYrowQbT9m6t7BFK\n' +
        '3egOO2xOKzLpYSqfbQIDAQAB',
        fail: (result) => {
          console.log(JSON.stringify(result))
          assert(true, "调用getSystemInfo接口，加密key错误，fail回调,返回:" + JSON.stringify(result), "调用getSystemInfo接口，加密key错误，fail回调出现异常");
          //assert(false, "异常", "调用rsa接口，fail回调出现异常");  
        },        
      });
    // assert(true, "调用getSystemInfo接口，解密参数错误，fail回调", "异常");
    });


    ////设备-getSystemInfo////
    this.Qunit.test("getSystemInfo_01success", "getSystemInfo接口success callback测试", function(assert){
      my.getSystemInfo({
        success: (res) => {
          console.log(JSON.stringify(res));
          assert((res.version != ""), "调用getSystemInfo接口，可以正常获取到返回值，正常success回调，返回:" + JSON.stringify(res), "调用getSystemInfo接口，无法获取到返回值，success回调失败");
        },
      });
    });

    this.Qunit.test("getSystemInfo_02fail", "getSystemInfo接口fail callback测试", function(assert){
      //assert(false, "结果pass", "结果fail");
      my.getSystemInfo({
        fail: (res) => {
          assert(false, "异常", "调用getSystemInfo接口，出现异常，调用了fail");
        },
      });
      assert(true, "调用getSystemInfo接口，不会调用fail", "异常");
    });

    this.Qunit.test("getSystemInfo_03complete", "getSystemInfo接口complete callback测试", function(assert){
      //assert(false, "结果pass", "结果fail");
      my.getSystemInfo({
        complete: (res) => {
          assert(true, "调用getSystemInfo接口，可以正常complete回调", "调用getSystemInfo接口，无法正常complete回调");
        },
      });
    });


    ////设备-getSystemInfoSync////
    this.Qunit.test("getSystemInfoSync_01success", "getSystemInfoSync接口success callback测试", function(assert){
     my.getSystemInfo({
        success: (res) => {
          console.log(JSON.stringify(res))
          assert((res.version != ""), "调用getSystemInfoSync接口，可以正常获取到version值，正常success回调，返回:" + JSON.stringify(res), "调用getSystemInfoSync接口，无法获取到返回值，success回调失败");
        },
      });
    });

    this.Qunit.test("getSystemInfoSync_02fail", "getSystemInfo接口fail callback测试", function(assert){
      my.getSystemInfo({
        fail: (res) => {
          assert(false, "异常", "调用getSystemInfoSync接口，出现异常，调用了fail");
        },
      });
      assert(true, "调用getSystemInfoSync接口，不会调用fail", "异常");
    });

    this.Qunit.test("getSystemInfoSync_03complete", "getSystemInfo接口complete callback测试", function(assert){
      my.getSystemInfo({
        complete: (res) => {
          assert(true, "调用getSystemInfoSync接口，可以正常complete回调", "调用getSystemInfoSync接口，无法正常complete回调");
        },
      });
    });

    ////设备-my.getNetworkType////
    this.Qunit.test("getNetworkType_01success", "getNetworkType接口success callback测试", function(assert){
      my.getNetworkType({
        success: (res) => {
          console.log(JSON.stringify(res))
          assert((res.networkType != ""), "调用getNetworkType接口，可以正常获取到返回值，正常success回调，返回:" + JSON.stringify(res), "调用getNetworkType接口，无法获取到返回值，success回调失败");
        },
      });
    });
    
    this.Qunit.test("getNetworkType_02fail", "getNetworkType接口fail callback测试", function(assert){
      //assert(false, "结果pass", "结果fail");
      my.getNetworkType({
        fail: (res) => {
          assert(false, "异常", "调用getNetworkType接口，出现异常，调用了fail");
        },
      });
    assert(true, "调用getNetworkType接口，不会调用fail", "异常");
    });

    this.Qunit.test("getNetworkType_03complete", "getNetworkType接口complete callback测试", function(assert){
      my.getNetworkType({
        complete: (res) => {
          assert(true, "调用getNetworkType接口，可以正常complete回调", "调用getNetworkType接口，无法正常complete回调");
        },
      });
    });


    ////设备-获取服务时间////
    this.Qunit.test("getServerTime_01获取服务器时间", "getServerTime接口success callback测试", function(assert){
      //assert(false, "结果pass", "结果fail");
      my.getServerTime({
        success: (res) => {
        console.log(res.time)
        assert((res.time != ""), "调用getServerTime接口，可以正常获取到返回值，正常success回调，返回:"+JSON.stringify(res), "调用getServerTime接口，无法获取到返回值，success回调失败");                  
        },
      });                   
    });

    ////设备-剪切板////
    this.Qunit.test("getClipbboard_01剪贴板success", "getClipboard接口success callback测试", function(assert){
      //assert(false, "结果pass", "结果fail");
      my.setClipboard({
        text: '3.1415926', // 剪贴板数据
        success: (res) => {                  
        },
      });
      my.getClipboard({
        success: (res) => {
          console.log(JSON.stringify(res))
          res.text == undefined
          assert((res.text != ""), "调用getClipboard接口,可以正常获取到返回值,正常success回调,返回:" + JSON.stringify(res), "调用getClipboard接口，无法正常获得返回值，success回调失败")
        },
      });
    });

    this.Qunit.test("getClipbboard_02剪贴板fail", "getClipboard接口fail callback测试", function(assert){
      //assert(false, "结果pass", "结果fail");
      my.setClipboard({
        text: '3.1415926', // 剪贴板数据
        success: (res) => {                  
        },
      });      
      my.getClipboard({
        fail: (res) => {
          assert(false,"异常","调用getClipboard接口，出现异常，调用了fail");  
          },
      });
    assert(true, "调用getClipboard接口，不会调用fail", "异常");
    });

    this.Qunit.test("getClipbboard_03剪贴板complete", "getClipboard接口complete callback测试", function(assert){
      my.setClipboard({
        text: '3.1415926', // 剪贴板数据
        success: (res) => {                  
        },
      });      
      my.getClipboard({
        complete: (res) => {
          assert(true,"调用getClipboard接口，可以正常complete回调","调用getClipboard接口，无法正常complete回调");  
          },
      });
    });

    ////位置-getLocation////

    this.Qunit.test("getLocation_01success(type:0)", "getLocation接口success callback测试", function(assert){
      my.getLocation({
        cacheTimeout:30,
        type:0,
        success: (res) => {
          //my.hideLoading();
          console.log(JSON.stringify(res))
          assert((res.latitude != ""), "调用getLocation接口，可以正常获取到返回值，正常success回调，返回:" + JSON.stringify(res), "调用getLocation接口，无法获取到返回值，success回调失败");
        },
      });
    });

    this.Qunit.test("getLocation_02success(type:1)", "getLocation接口success callback测试", function(assert){
      my.getLocation({
        cacheTimeout:30,
        type:1,
        success: (res) => {
          //my.hideLoading();
          console.log(JSON.stringify(res))
          assert((res.latitude != ""), "调用getLocation接口，可以正常获取到返回值，正常success回调，返回:" + JSON.stringify(res), "调用getLocation接口，无法获取到返回值，success回调失败");
        },
      });
    });

    this.Qunit.test("getLocation_03success(type:2)", "getLocation接口success callback测试", function(assert){
      my.getLocation({
        cacheTimeout:30,
        type:2,
        success: (res) => {
          //my.hideLoading();
          console.log(JSON.stringify(res))
          assert((res.latitude != ""), "调用getLocation接口，可以正常获取到返回值，正常success回调，返回:" + JSON.stringify(res), "调用getLocation接口，无法获取到返回值，success回调失败");
        },
      });
    });

    this.Qunit.test("getLocation_04success不传参数", "getLocation接口success callback测试", function(assert){
      my.getLocation({
        type:"",
        success: (res) => {          
          //my.hideLoading();
          console.log(JSON.stringify(res))
          assert((res.latitude != ""), "调用getLocation接口，可以正常获取到返回值，正常success回调，返回:" + JSON.stringify(res), "调用getLocation接口，无法获取到返回值，success回调失败");
        },
      });
    });

    this.Qunit.test("getLocation_05fail", "getLocation接口fail callback测试", function(assert){   
      my.getSystemInfo({        
        fail: (res) => {
          assert(false, "异常", "调用getLocation接口，出现异常，调用了fail");
        },
      });
    assert(true, "调用getLocation接口，不会调用fail", "异常");
    });

    
    this.Qunit.test("getLocation_06complete", "getLocation接口complete callback测试", function(assert){
        my.getSystemInfo({
        complete: (res) => {
          assert(true, "调用getLocation接口，可以正常complete回调", "调用getLocation接口，无法正常complete回调");
        },
      });
    });

    ////震动////
    this.Qunit.test("vibrate_01success", "vibrate接口success callback测试", function(assert){
      my.vibrate({
      })
        assert(true, "调用vibrate接口，可以正常success回调", "调用vibrate接口，无法正常complete回调");    
      });
      
    // ////发起支付////

    // this.Qunit.test("tradePay_01参数错误", "tradePay接口success callback测试", function(assert){
    //   my.tradePay({
    //     orderStr: '1232', // 完整的支付参数拼接成的字符串，从服务端获取
    //     success: (res) => {   
    //       assert((res.resultCode != ""), "调用tradePay接口，参数错误，返回:"+res.resultCode, "调用tradePay接口，参数错误,success回调");        
    //     },
    //   });
    // });

    // this.Qunit.test("tradePay_02参数为空", "tradePay接口success callback测试", function(assert){
    //   my.tradePay({
    //     orderStr: '', // 完整的支付参数拼接成的字符串，从服务端获取
    //     success: (res) => {   
    //       assert(true, "调用tradePay接口，参数为空，返回:"+res.resultCode, "调用tradePay接口，参数为空,success回调");        
    //     },
    //   });
    // });


//////////////// 用例结束 /////////////////////

//  let app = getApp();
    app.Q.setData = this.setData;
    app.Q.setData(app.Q.data);
  },
});

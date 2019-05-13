App({
  onLaunch(options) {
    console.log('App Launch', options);
    console.log('getSystemInfoSync', my.getSystemInfoSync());
    console.log('SDKVersion', my.SDKVersion);
    console.log('启动参数', JSON.stringify(options.query));
    console.log('是否可用云客服ext-info参数',JSON.stringify(my.canIUse('contact-button.ext-info')));
    console.log('是否可用云客服',JSON.stringify(my.canIUse('contact-button')));
    my.alert({
      title: '这个参数' ,
      content:JSON.stringify(options.query)
    });

    //getStartupParams获取启动参数及信息
    my.call('getStartupParams',
      function (res) {
        //my.alert({content: '获取启动参数：'+JSON.stringify(res.query), });
        console.log('启动参数：' + JSON.stringify(res.query));  
      });
    my.getRunScene({
      success(res) {
        console.log('当前版本类型:' + JSON.stringify(res))
      },
      fail(error) {
        console.log('获取版本类型出错：' + JSON.stringify(error));
      }
    });
    const updateManager = my.getUpdateManager()

    updateManager.onCheckForUpdate(function(res) {
      // 请求完新版本信息的回调
      console.log(1111,res.hasUpdate)
      my.alert({
        content: "检查更新成功" + res.hasUpdate
      })  
    })

    updateManager.onUpdateReady(function() {
      my.confirm({
        title: '更新提示',
        content: '新版本已经准备好，是否重启应用？',
        success: function(res) {
          if (res.confirm) {
            // 新的版本已经下载好，调用 applyUpdate 应用新版本并重启
            updateManager.applyUpdate()
            my.alert({
              content: "版本更新成功"  
            })
          } else {
            my.alert({
              content: "版本更新失败"
            })
          }
        }
      })

    })
    updateManager.onUpdateFailed(function() {
      my.alert({
        content: "小程序版本更新失败"
      })
      // 新的版本下载失败
    })
  },
  onShow(options) {
    console.log('App Show')
     console.error('error...........................')
    console.info('info类型的日志-------------')
    console.warn('warn类型日志++++++++++++++++')
    console.log('App Launch', options);
    console.log('是否可用云客服',JSON.stringify(my.canIUse('contact-button')));
  },
  onHide() {
    console.log('App Hide')
  },
  onError(msg) {
    console.log('App JSerror'+JSON.stringify(msg))
  },
  globalData: {
    hasLogin: false
  },
  Q:{
    data:{
      tests:[], 
      total:0,
      passed:0,
      failed:0,
    },
    funcs:{
      cblist:[]
    },
    update:function(current, last){
      // console.log(this.data);
      // console.log("current" + current);
      // console.log("last" + last);
      if(current){
        if(last == "untest"){
          this.data.passed += 1;
        }else if(last == "fail"){
          this.data.passed += 1;
          this.data.failed -= 1;
        }
      }else{
        if(last == "untest"){
          this.data.failed += 1;
        }else if(last == "pass"){
          this.data.passed -= 1;
          this.data.failed += 1;
        }
      }
    },
    resetDate:function(){
      this.data = {
      tests:[],
      total:0,
      passed:0,
      failed:0,
    };
      this.funcs = {
      cblist:[]
    };
    },
    idx:-1,
  },
})

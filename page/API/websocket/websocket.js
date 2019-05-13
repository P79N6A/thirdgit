Page({
  //创建WebSocket 连接
  connectSocket() {
    my.connectSocket({
      url: 'ws://mobilegwspanner.stable.alipay.net:8000/ws',
      data: {},
      header: { 'content-type': 'application/json' },
      method: "POST",
      protocols: ['0','1','2'],
      success: (res) => {
        my.alert({ content: '创建WebSocket连接成功！' });
      },
      fail: (error) => {
        my.alert({ content: '创建连接失败：' + JSON.stringify(error) });
      },
      complete: (res) => {
        my.showToast({ content: 'complete回调', });
      }
    });
  },

  connectSocket_null() {
    my.connectSocket({
      url: 'ws://mobilegwspanner.stable.alipay.net:8000/ws',
      data: {},
      header: { 'content-type': 'application/json' },
      method: "POST",
      protocols: null,
      success: (res) => {
        my.alert({ content: '创建WebSocket连接成功！' });
      },
      fail: (error) => {
        my.alert({ content: '创建连接失败：' + JSON.stringify(error) });
      },
    });
  },
  connectSocket_number() {
    my.connectSocket({
      url: 0,
      data: 0,
      header: 0,
      method:0,
      protocols: 0,
      success: (res) => {
        my.alert({ content: '创建WebSocket连接成功！' });
      },
      fail: (error) => {
        my.alert({ content: '创建连接失败：' + JSON.stringify(error) });
      },
    });
  },
  connectSocket_bool() {
    my.connectSocket({
      url: true,
      data: false,
      header:true,
      method: false,
      protocols: true,
      success: (res) => {
        my.alert({ content: '创建WebSocket连接成功！' });
      },
      fail: (error) => {
        my.alert({ content: '创建连接失败：' + JSON.stringify(error) });
      },
    });
},

noUrlConnectSocket(){
    my.connectSocket({
       url: '',
       data: {},
       header:{'content-type': 'application/json'},
       method:"POST",
      success:(res)=>{
         my.alert({content: '创建WebSocket连接成功！'}); 
      },
      fail:(error)=>{
         my.alert({content: '创建连接失败：'+JSON.stringify(error)}); 
      },
    });    
},
errorConnectSocket(){
    my.connectSocket({
       url: 'https://mobilegwspanner.stable.alipay.net',
       data: {},
       header:{'content-type': 'application/json'},
       method:"POST",
      success:(res)=>{
         my.alert({content: '创建WebSocket连接成功！'}); 
      },
      fail:(error)=>{
         my.alert({content: '创建连接失败：'+JSON.stringify(error)}); 
      },
    });    
},
  //监听WebSocket连接打开事件
onSocketOpen() {
    my.onSocketOpen((res) => {
      my.alert({content: '连接已打开！'});
    });
},
  //监听WebSocket错误
onSocketError() {
    my.onSocketError((res) => {
      my.alert({content: '连接出错！'+res});
    });
      
  },
  //发送数据
sendSocketMessage() {
      my.sendSocketMessage({
      data:'alipay',
        success:(res)=>{
         my.alert({content: '发送数据成功！'}); 
        },
        fail:(error)=>{
         my.alert({content: '发送失败！'+JSON.stringify(error),});
        },
        complete:(res)=>{
         my.showToast({content: 'complete回调',});
      }
      });
},
  //监听WebSocket接受到服务器的消息事件
  onSocketMessage() {
  my.onSocketMessage(function(res) {
  console.log('收到服务器内容：' + res.data);
  my.alert({content: '收到服务器消息：'+JSON.stringify(res)});  
});
},
  //关闭WebSocket连接
closeSocket() {
   my.closeSocket({
     code:1000,
     reason:"websocket正常关闭",
      success:()=>{
         my.alert({content: 'WebSocket断开连接！'}); 
      },
      fail:(error)=>{
          my.alert({content: '关闭失败！'+JSON.stringify(error),});
      },
      complete:(res)=>{
         my.showToast({content: 'complete回调',});
      }
   });   
},
  //监听WebSocket关闭
onSocketClose() {
//注意这里有时序问题，
//如果 my.connectSocket 还没回调 my.onSocketOpen，而先调用 my.closeSocket，那么就做不到关闭 WebSocket 的目的。
//必须在 WebSocket 打开期间调用 my.closeSocket 才能关闭。
    my.onSocketClose(function(res) {
     my.alert({content: 'WebSocket 已关闭！'});
    });
  },
})
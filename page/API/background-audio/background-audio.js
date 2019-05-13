Page({

playBackgroundAudio(){
   my.playBackgroundAudio({
   url: 'https://os.alipayobjects.com/rmsportal/zVuUSRlilyanErJOtOtp.mp3',
   name: '舒缓轻音乐',
   cover: 'https://zos.alipayobjects.com/rmsportal/VRrMXbgUSdsibQjwZpyT.png',
   success:(res)=>{
    my.alert({content: '播放成功'+JSON.stringify(res) });
   },
   fail:(error)=>{
     my.alert({content: '播放失败'+JSON.stringify(error), });
   },
   complete:()=>{
     my.alert({content: 'complete调用', });
   }
 });
 
},

pauseBackgroundAudio(){
   my.pauseBackgroundAudio();
},

stopBackgroundAudio(){
   my.stopBackgroundAudio();
},

seekBackgroundAudio(){
   my.seekBackgroundAudio({
   position: 60,  // 从1分钟开始播放
   success:(res)=>{
    my.alert({content: '操作成功'+JSON.stringify(res) });
   },
   fail:(error)=>{
     my.alert({content: '操作失败'+JSON.stringify(error), });
   },
   complete:()=>{
     my.alert({content: 'complete调用', });
   }
 });
},

getBackgroundAudioPlayerState(){
   my.getBackgroundAudioPlayerState({
     success: (res) => {
     my.alert({content:JSON.stringify(res.status)});
   },
    fail:(error)=>{
     my.alert({content: '操作失败'+JSON.stringify(error), });
   },
   complete:()=>{
     my.alert({content: 'complete调用', });
   }
 });
},

onBackgroundAudioPlay(){
   my.onBackgroundAudioPlay({
        success:(res)=>{
             my.alert({content: '开始播放',});  
        },
   });
},

onBackgroundAudioPause(){
   my.onBackgroundAudioPause({
       success:(res)=>{
             my.alert({content: '暂停播放',});  
        },
   });
},
onBackgroundAudioStop(){
   my.onBackgroundAudioStop({
        success:(res)=>{
             my.alert({content: '停止播放',});  
        },
   });
},
offBackgroundAudioPlay(){
   my.offBackgroundAudioPlay();
},
offBackgroundAudioPause(){
   my.offBackgroundAudioPause();
},
offBackgroundAudioStop(){
   my.offBackgroundAudioStop();
},
});
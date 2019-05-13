Page({
  data: {
    recordTimeArr: ['1', '10', '3', '0', '-1', '11'],
    recordTimeIndex: 0,
    recordTimeCount: '1',
    recordTime: 60000,

    sampleRateArr: ['8000', '11025', '12000', '16000', '22050', '24000', '32000', '44100', '48000'],
    sampleRateIndex: 0,
    sampleRateCount: '8000',


    encodeBitRateArr: ['12345', '19200', '24000', '48000', '64000', '96000', '192000', '320000', '332000'],
    encodeBitRateIndex: 0,
    encodeBitRateCount: '19200',

    numberOfChannelsArr: ['1', '2', '3'],
    numberOfChannelsIndex: 0,
    numberOfChannels: 1,

    audioSourcesArr: ['auto', 'mic', "camcorder", "voice_communication", "voice_recognition", "auto33333"],
    //audioSourcesArr: ['auto', 'buildInMic', "headsetMic", "dr789"],
    audioSourcesIndex: 1,
    audioSource: "auto"

  },
  onReady() {
 this.recorderManager = my.getRecorderManager()
    this.innerAudioContext = my.createInnerAudioContext();
    this.backgroundAudioManager = my.getBackgroundAudioManager();

    this.innerAudioContext1 = my.createInnerAudioContext()
    //this.innerAudioContext.autoplay = true
    this.innerAudioContext1.src = 'http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E061FF02C31F716658E5C81F5594D561F2E88B854E81CAAB7806D5E4F103E55D33C16F3FAC506D1AB172DE8600B37E43FAD&fromtag=46'
    this.innerAudioContext1.onPlay(() => {
      console.log('开始播放')
    })
    this.innerAudioContext1.onError((res) => {
      console.log(res.errMsg)
      console.log(res.errCode)
    })

    this.innerAudioContext.onPlay = function() {
      console.log('onPlay')
      my.alert({ content: "onPlay" });
    }

    this.innerAudioContext.onError = function(res) {
      console.log('onError')
      my.alert({ content: 'onError' + JSON.stringify(res) });
    }

    this.backgroundAudioManager.onPlay(() => {
      console.log("backgroundAudioManager back onPlay")
      console.log('backgroundAudioManager 开始播放')
      my.alert({
        content: 'backgroundAudioManager 开始播放'
      });
    })

    const options = {
      duration: 600000,
      sampleRate: 44100,
      numberOfChannels: 1,
      encodeBitRate: 192000,
      format: "aac",
      frameSize: 2048,
      audioSource: "auto"
    }

    this.recorderManager.onStop((res) => {
      console.log('recorder onStop', JSON.stringify(res));
      my.alert({ content: 'recorder onStop' + JSON.stringify(res) } + " " + res['tempFilePath']);

      my.saveFile({
        apFilePath: res['tempFilePath'],
        success: function(res) {
          my.alert({ content: 'recorder saveFile success' + JSON.stringify(res) });
        },
        fail: function(res) {
          my.alert({ content: 'recorder saveFile fail' + JSON.stringify(res) });
        },
        complete: function(res) {
          my.alert({ content: 'recorder saveFile complete' + JSON.stringify(res) });
        },
      })

      this.backgroundAudioManager.src = res['tempFilePath'];
      this.innerAudioContext.src = res['tempFilePath'];
    })

    this.recorderManager.onStart((res) => {
      //my.alert({ content: 'recorder onStart' + JSON.stringify(res) });
      console.log('recorder onStart' + JSON.stringify(res))
    })

    this.recorderManager.onError((res) => {
      console.log('onError' + JSON.stringify(res));
      my.alert({ content: 'recorder onError' + JSON.stringify(res) });
    })

    this.recorderManager.onFrameRecorded((res) => {
      my.alert({
        title: "onFrameRecorded",
        content: "onFrameRecorded isLastFrame" + res.isLastFrame + " frameBuffer " + res.frameBuffer.byteLength
      })
    })
  },


  chooseAudioSource(e) {
    const index = e.detail.value;
    const { audioSourcesArr } = this.data;
    options['audioSource'] = audioSourcesArr[index];
    this.setData({ audioSurce: audioSourcesArr[index] });
  },

  chooseRecordTime(e) {
    //my.alert({content: JSON.stringify(e)})
    const index = e.detail.value
    console.log("------" + index);
    const { recordTimeArr } = this.data;
    options['duration'] = parseInt(recordTimeArr[index]) * 60 * 1000
    my.alert({ content: options })
    this.setData({
      recordTimeCount: recordTimeArr[index]
    })
  },

  chooseSampleRate(e) {
    const index = e.detail.value
    const { sampleRateArr } = this.data;
    options['sampleRate'] = parseInt(sampleRateArr[index]);
    my.alert({ content: options })
    this.setData({
      sampleRateCount: sampleRateArr[index]
    })
  },

  chooseeEncodeBitRate(e) {
    const index = e.detail.value
    const { encodeBitRateArr } = this.data;
    options['encodeBitRate'] = parseInt(encodeBitRateArr[index]);
    my.alert({ content: options })
    this.setData({
      encodeBitRateCount: encodeBitRateArr[index]
    })
  },


  chooseeNumberOfChannels(e) {
    const index = e.detail.value
    const { numberOfChannelsArr } = this.data;
    options['numberOfChannels'] = parseInt(numberOfChannelsArr[index]);
    my.alert({ content: options })
    this.setData({
      numberOfChannels: numberOfChannelsArr[index]
    })
  },

  //事件处理函数
  startRecording() {
    //options['audioSource'] = null;
    my.alert({ content: options });
    this.recorderManager.start(options)
  },

  stopRecording() {
    this.recorderManager.stop();
  },

  pauseRecording() {
    console.log('recorder pauseRecording')
    my.alert({ content: 'recorder pauseRecording' });
    this.recorderManager.pause();
  },

  resumeRecording() {
    console.log('recorder resumeRecording')
    my.alert({ content: 'recorder resumeRecording' });
    this.recorderManager.resume();
  },

  playAudio() {
    my.alert({ content: innerAudioContext.src + "-----" });
    this.innerAudioContext.play();
  },

  stopAudio() {
    my.alert({ content: innerAudioContext.src + "-----" });
    this.innerAudioContext.stop();
  },


  playBackgroundAudio() {
    this.backgroundAudioManager.play();
  },

  stopBackgroundAudio() {
    this.backgroundAudioManager.stop();
  },

  playInerruptAudio() {
    this.innerAudioContext1.play();
  },

  stopInerruptAudio() {
    this.innerAudioContext1.stop();
  },
})
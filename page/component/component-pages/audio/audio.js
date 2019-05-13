Page({
  data: {
    song: {poster: 'http://p3.music.126.net/eCEBTDIQ5z8TI3SNeI3tFA==/19231557881482169.jpg?param=50y50&quality=100',
      name: 'The One',
      author: 'Various Artists',
      src: 'https://os.alipayobjects.com/rmsportal/zVuUSRlilyanErJOtOtp.mp3',
    },
  },
  onReady(e) {
    this.audioCtx = my.createAudioContext('myAudio');
  },
  audioPlay() {
    this.audioCtx.play();
  },
  audioPause() {
    this.audioCtx.pause();
  },
  audioSeek() {
    this.audioCtx.seek(90);
  },
  audioStart() {
    this.audioCtx.seek(0);
  },
  changeMusic() {
    this.setData({
      song: {
        ...this.data.song,
        name: 'Sugar',
        src: 'https://os.alipayobjects.com/rmsportal/vkmIryRRRlEJbejAxUNc.mp3',
      },
    });
    // this.audioCtx.setSrc('http://om5.alicdn.com/96/683379096/832004743/1774205606_16708201_l.mp3?auth_key=12430d4c81b83d74652a4078dee8018f-1490324400-0-null');
  },
})

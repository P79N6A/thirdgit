import example from './example.js';

Page({
  onLoad() {
    this.context = my.createCanvasContext('canvas')

    this.context.font = 'italic bold 50px cursive';
    const { width } = this.context.measureText('helloworld');
    my.alert({ content: JSON.stringify(this.context.measureText('helloworld')) });
    console.log(this.context.measureText('helloworld'));
    var methods = Object.keys(example)
    this.setData({
      methods: methods
    })

    var that = this
    methods.forEach(function (method) {
      that[method] = function () {
        example[method](that.context)
        that.context.draw();
      }
    })
  },
  toTempFilePath() {
    this.context.toTempFilePath({
      success(res) {
        my.previewImage({
          urls: [res.apFilePath],
        });
      },
      fail(res) {
        my.alert({
          title: 'toTempFilePath',
          content: `error: ${res.error}`,
        })
      }
    })
  }
})

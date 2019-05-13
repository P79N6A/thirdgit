Page({
   data: {
    x: 0,
    y: 0,
    z: 0
  },
  onLoad() {
    this.drawBigBall()
    this.position = {
      x: 151,
      y: 151,
      vx: 0,
      vy: 0,
      ax: 0,
      ay: 0
    }
    this.onAccelerometerChange = this.onAccelerometerChange.bind(this);
  },
  onAccelerometerChange(res) {
    this.setData({
      x: res.x.toFixed(2),
      y: res.y.toFixed(2),
      z: res.z.toFixed(2)
    })
    this.position.ax = Math.sin(res.x * Math.PI / 2)
    this.position.ay = -Math.sin(res.y * Math.PI / 2)
  },
  onShow() {
    this.interval = setInterval(() => {
      this.drawSmallBall()
    }, 17)
    my.onAccelerometerChange(this.onAccelerometerChange);
  },
  onHide() {
    clearInterval(this.interval);
    my.offAccelerometerChange();
  },
 
  drawBigBall() {
    var context = my.createCanvasContext('big-ball')
    context.beginPath(0)
    context.arc(151, 151, 140, 0, Math.PI * 2)
    context.setFillStyle('#ffffff')
    context.setStrokeStyle('#aaaaaa')
    context.fill()
    context.stroke()
    context.draw()
  },
  drawSmallBall() {
    var p = this.position
    var strokeStyle = 'rgba(1,1,1,0)'

    p.x = p.x + p.vx
    p.y = p.y + p.vy
    p.vx = p.vx + p.ax
    p.vy = p.vy + p.ay

    if (Math.sqrt(Math.pow(Math.abs(p.x) - 151, 2) + Math.pow(Math.abs(p.y) - 151, 2)) >= 115) {
      if (p.x > 151 && p.vx > 0) {
        p.vx = 0
      }
      if (p.x < 151 && p.vx < 0) {
        p.vx = 0
      }
      if (p.y > 151 && p.vy > 0) {
        p.vy = 0
      }
      if (p.y < 151 && p.vy < 0) {
        p.vy = 0
      }
      strokeStyle = '#ff0000'
    }

    var context = my.createCanvasContext('small-ball')
    context.beginPath(0)
    context.arc(p.x, p.y, 15, 0, Math.PI * 2)
    context.setFillStyle('#1aad19')
    context.setStrokeStyle(strokeStyle)
    context.fill()
    context.stroke()
    context.draw()
  },
   onUnload() {
    clearInterval(this.interval);
    my.offAccelerometerChange();
  },
})

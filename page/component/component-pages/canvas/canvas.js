Page({
  onReady() {
    this.point = {
      x: Math.random() * 295,
      y: Math.random() * 295,
      dx: Math.random() * 5,
      dy: Math.random() * 5,
      r: Math.round(Math.random() * 255 | 0),
      g: Math.round(Math.random() * 255 | 0),
      b: Math.round(Math.random() * 255 | 0),
    };

    this.interval = setInterval(this.draw.bind(this), 17);
    this.ctx = my.createCanvasContext('canvas');
  },

  draw() {
    const { ctx } = this;
    ctx.setFillStyle('#FFF');
    ctx.fillRect(0, 0, 305, 305);

    ctx.beginPath();
    ctx.arc(this.point.x, this.point.y, 10, 0, 2 * Math.PI);
    ctx.setFillStyle("rgb(" + this.point.r + ", " + this.point.g + ", " + this.point.b + ")");
    ctx.fill();
    ctx.draw();

    this.point.x += this.point.dx;
    this.point.y += this.point.dy;
    if (this.point.x <= 5 || this.point.x >= 295) {
      this.point.dx = -this.point.dx;
      this.point.r = Math.round(Math.random() * 255 | 0);
      this.point.g = Math.round(Math.random() * 255 | 0);
      this.point.b = Math.round(Math.random() * 255 | 0);
    }

    if (this.point.y <= 5 || this.point.y >= 295) {
      this.point.dy = -this.point.dy;
      this.point.r = Math.round(Math.random() * 255 | 0);
      this.point.g = Math.round(Math.random() * 255 | 0);
      this.point.b = Math.round(Math.random() * 255 | 0);
    }
  },
  drawBall() {

  },
  log(e) {
    if (e.touches && e.touches[0]) {
      console.log(e.type, e.touches[0].x, e.touches[0].y);
    } else {
      console.log(e.type);
    }
  },
  onUnload() {
    clearInterval(this.interval)
  }
})

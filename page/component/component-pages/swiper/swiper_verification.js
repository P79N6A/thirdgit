Page({
  data: {
    background: ['blue', 'red', 'yellow'],
    indicatorDots: true,
    autoplay: true,
    vertical: false,
    interval: 500,
    circular: true,
  },
  changeInterval() {
    this.setData({ interval: 5000 })
  },
})
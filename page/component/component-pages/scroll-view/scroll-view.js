import debounce from '/util/debounce';
const order = ['blue', 'red', 'green', 'yellow'];

Page({
  data: {
    toView: 'red',
    scrollTop: 100,
    scrollLeft:0,
    scrollY: true,
    ablescroll:false,
  },
  onLoad() {
    this.scroll = debounce(this.scroll.bind(this), 100);
  },
  upper(e) {
    console.log(e)
  },
  lower(e) {
    console.log(e)
  },
  scroll(e) {
   console.log(e.detail.scrollTop);
   my.showToast({content:JSON.stringify(e.detail.scrollTop)})
    this.setData({
      scrollTop: e.detail.scrollTop
    })
  },
  leftscroll(e){
    my.showToast({content:JSON.stringify(e.detail.scrollLeft)}) 
    // this.setData({
    //   scrollLeft: e.detail.scrollLeft
    // })
  },
  scrollToTop(e) {
    this.setData({
      scrollTop: 0,
      scrollLeft:0
    })
  },
  noScroll() {
    this.setData({
      scrollY: !this.data.scrollY
    })
  },
  tap(e) {
    for (var i = 0; i < order.length; ++i) {
      if (order[i] === this.data.toView) {
        const next = (i + 1) % order.length;
        this.setData({
          toView: order[next],
          scrollTop: next * 200
        });
        break
      }
    }
  },
  tapname() {
    this.setData({
      ablescroll: !this.data.ablescroll
    })
  },
  tapMove(e) {
    this.setData({
      scrollTop: this.data.scrollTop + 10
    })
  }
});

Page({
  data: {
    a: {
      b: [1,2,3,4,5,6,7]
    }
  },
  onLoad(){
    this.$spliceData({ 'a.b': [9, 8, 7, 6,5] })
  },
})
var pageData = {}
for (var i = 1; i < 4; ++i) {
  (function (index) {
    pageData['slider' + index + 'change'] = function(e) {
      console.log('slider' + index + '发生change事件，携带值为', e.detail.value)
      my.alert({ content: 'slider' + index + '发生change事件，携带值为：'+JSON.stringify(e), });
    }
  })(i)
}
Page(pageData)

const formats = {
  'day': 'YYYY-MM-DD',
  'month': 'YYYY-MM',
  'year': 'YYYY',
};

Page({
  data: {
    array: ['中国', '美国', '巴西', '日本'],
    objectArray: [
      {
        id: 0,
        name: '美国'
      },
      {
        id: 1,
        name: '中国'
      },
      {
        id: 2,
        name: '巴西'
      },
      {
        id: 3,
        name: '日本'
      }
    ],
    arrIndex: 0,
    index: -1,
    format: formats.day,
    fields: 'day',
    date: '2016-09-01',
    time: '12:01'
  },
  bindPickerChange(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    my.alert({
   content:'picker发送选择改变，携带值为'+JSON.stringify(e)
    });
    this.setData({
      index: e.detail.value
    })
  },
  bindObjPickerChange(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      arrIndex: e.detail.value
    })
  },
  bindDateChange(e) {
    this.setData({
      date: e.detail.value
    })
  },
  onFieldsChange(e) {
    const fields = e.detail.value;
    this.setData({
      fields,
      format: formats[fields],
    });
  },
  bindTimeChange(e) {
    this.setData({
      time: e.detail.value
    })
  }
})

Page({
  data: {
    focus: false,
    inputValue: '',
    width: '200px'
  },
 Confirm(e) {
    my.alert({ content: 'Confirm数据：' + JSON.stringify(e) })
  },
  bindButtonTap() {
    this.onFocus();
  },
  onFocus() {
    this.setData({
      focus: true,
    });
  },
  onBlur() {
    this.setData({
      focus: false,
    });
  },

  bindKeyInput(e) {
    this.setData({
      inputValue: e.detail.value,
    });
  },

  bindHideKeyboard(e) {
    if (e.detail.value === "123") {
      // 收起键盘
      my.hideKeyboard();
    }
  },

  handleSearch(e) {
    console.log('search', e.detail.value);
    this.setData({
      search: e.detail.value,
    });
  },
  doneSearch() {
    console.log('doneSearch', this.data.search);
    my.hideKeyboard();
  },
  onFocus2() {
    this.setData({
      width: '100px',
    });
  },
  onBlur2() {
    this.setData({
      width: '200px',
    });
  },
  clearSearch() {
    console.log('clear search', this.data.search);
    this.setData({
      search: '',
    });
  },
});

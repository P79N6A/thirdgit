Page({
  onOptionMenuClick() {
    my.alert({ content: 'click option menu', });
  },
  setoptionMenu() {
    my.setOptionMenu({
      icon: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3504573879,2003462147&fm=27&gp=0.jpg',
      success: (res) => {
        my.alert({ content: '操作成功' + JSON.stringify(res) });
      }
    });

  }
});

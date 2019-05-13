Page({
  data: {
  },
  resume() {
    this.resume = my.on('appResume', () => {
      my.alert({ content: '监听到容器appResume事件！' })
    });
  },
  titleClick() {
    this.titleClick = my.on('titleClick', () => {
      my.alert({ content: '监听到容器ontitleClick事件！' });
    });
  },
  offtitleClick() {
    this.titleClick.remove();
  },
  offresume() {
    this.resume.remove();
  }
});

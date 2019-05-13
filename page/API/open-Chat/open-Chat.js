Page({
  data: {},
  onLoad() {},
  openChatWindow() {
    my.openChatWindow({
      userId: '2088012612108379',
    });
  },

  openChatWindow_number() {
    my.openChatWindow({
      userId: 2088012612108379,
    });
  },

  openChatWindow_number() {
    my.openChatWindow({
      userId: null,
    });
  },


  openChatWindow_array() {
    my.openChatWindow({
      userId:['22','#$%'],
    });
  },
});

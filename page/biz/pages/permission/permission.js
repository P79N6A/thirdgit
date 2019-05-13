Page({
 getapp() {
    my.call('getAppType', {
      appId: '2017041206668232',
      success: (res) => {
        my.alert({content: JSON.stringify(res), });
      },
      fail: (res) => {
        my.alert({content: JSON.stringify(res),});
      },
    });
  },
});

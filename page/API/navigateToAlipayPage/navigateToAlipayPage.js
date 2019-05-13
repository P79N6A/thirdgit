Page({
  navigateToAlipayPage() {
    my.ap.navigateToAlipayPage({
      path: 'alipays://platformapi/startapp?appId=2017072607907880&ac_start_mode=online',
      success: (res) => {
        my.alert({ content: '系统信息：' + JSON.stringify(res), });
      },
      fail: (error) => {
        my.alert({ content: '获取失败' + JSON.stringify(error), });
      },
    })
  },

  navigateToAlipayPageone(){
    my.ap.navigateToAlipayPage({
      path: 'https://aone.alipay.com/project/584054/req?akProjectId=584054&akProjectId=584054&akProjectId=584054&akProjectId=584054&akProjectId=584054&akProjectId=584054&akProjectId=584054&akProjectId=584054&akProjectId=584054#akVersionIdPath=26694&pageSize=60&openTaskId=16278044',
      success: (res) => {
        my.alert({ content: '系统信息：' + JSON.stringify(res), });
      },
      fail: (error) => {
        my.alert({ content: '获取失败' + JSON.stringify(error), });
      },
    })
  },

  navigateToAlipayPagetwo(){
    my.ap.navigateToAlipayPage({
      path: 'https://render.alipay.com/p/f/fd-jjtcomvf/index.html',
      success: (res) => {
        my.alert({ content: '系统信息：' + JSON.stringify(res), });
      },
      fail: (error) => {
        my.alert({ content: '获取失败' + JSON.stringify(error), });
      },
    })
  },
});
Page({
  data: {},
  onLoad() {},
   hideAllDesktop() {
    my.hideAllAddToDesktopMenu({
      success:(res)=>{
        my.alert({ content: '操作成功' + JSON.stringify(res) });   
      },
      fail:(error)=>{
         my.alert({ content: '操作失败' + JSON.stringify(error) });   
      }
    })
  },
//影藏添加到桌面，单个页面
  hideDesktop() {
    my.hideAddToDesktopMenu({
      success:(res)=>{
        my.alert({ content: '操作成功' + JSON.stringify(res) });   
      },
    })
  },
  //隐藏收藏，全部页面
  hideAllFavorite() {
    my.hideAllFavoriteMenu({
      success:(res)=>{
        my.alert({ content: '操作成功' + JSON.stringify(res) });   
      },
      fail:(error)=>{
        my.alert({ content: '操作失败' + JSON.stringify(error) });   
      },
    })
  },
  //隐藏收藏，单个页面
  hideFavorite() {
    my.hideFavoriteMenu({
      success:(res)=>{
        my.alert({ content: '操作成功' + JSON.stringify(res) });   
      },
       fail:(error)=>{
        my.alert({ content: '操作失败' + JSON.stringify(error) });   
      },
    })
  },
  hideShareMenu() {
    my.hideShareMenu({
      success: (res) => {
        my.alert({ content: '操作成功' + JSON.stringify(res), });
      },
      fail: (error) => {
        my.alert({ title: 'fail', content: JSON.stringify(error), });
      },
    });
  },
});

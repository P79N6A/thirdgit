Page({
  showActionSheet() {
    my.showActionSheet({
     title: '支付宝-ActionSheet',
      items: ['菜单一', '展示数字', '展示红点','展示文字','文字很长很长很长很长很长很长chang很长123456789900','红点文字很长很长','无index','数字类型','无类型'],
      destructiveBtnIndex:8,
      badges:[
        {index:3,type:'text',text:'推荐'},
        {index:2,type:'point'},
        {index:-1,type:'text',text:'dsdf'},
        {index:0,type:'none'},
        {index:4,type:'text',text:'推荐'},
        {index:5,type:'text',text:'推荐内容很长很长很长很长很长很长很长哈哈666'},
        {type:'text',text:'无index'},
        {index:7,type:'num',text:'1'},
        {index:12,type:'text',text:'12是不存在的'},
        {index:null,type:null,text:null}],
      cancelButtonText: '取消好了',
      success: (res) => {
        const btn = res.index === -1 ? '取消' : '第' + res.index + '个';
        my.alert({ content: '你点了'+ btn +'按钮' });
      },
      fail: () => {
        my.alert({ content: '抱歉，出现异常！', });
      },
      complete: () => {
        my.alert({ content: 'complete回调！', });
      },
    });
  },
});

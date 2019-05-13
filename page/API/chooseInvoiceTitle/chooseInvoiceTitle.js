Page({
 chooseInvoiceTitle(){
   my.chooseInvoiceTitle({
      success: (res) => {
        my.alert({ content: '提交成功' + JSON.stringify(res) });
      },
      fail: (error) => {
        my.alert({ content: '提交失败' + JSON.stringify(error) });
      },
   })
 },
});

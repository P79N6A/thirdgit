Page({
  alert() {
    my.alert({
      title: '亲',
      content: '您本月的账单已出',
      buttonText: '我知道了', 
      success: () => {
        my.alert({ title: '用户点击了「我知道了」',});
      },
      fail:()=>{
        my.showToast({content: 'fail',  });
      },
      complete: () => {
         my.alert({ title: 'complete回调！', });
    },
    });
  },
  prompt() {
    my.prompt({
      title: '标题单行',
      message: '说明当前状态、提示用户解决方案，最好不要超过两行。',
      placeholder: '给朋友留言',
      okButtonText: '提交',
      cancelButtonText: '不发送',
      success: (result) => {
        my.alert({
          title: JSON.stringify(result),
        });
      },
    });
  },
  prompt_null() {
    my.prompt({
      title: null,
      message: null,
      placeholder: null,
      okButtonText: null,
      cancelButtonText: null,
      success: (result) => {
        my.alert({ content: JSON.stringify(result), });
      },
      fail: (error) => {
        my.alert({ content: JSON.stringify(error), });
      }
    });
  },
  prompt_number() {
    my.prompt({
      success: (result) => {
        my.alert({ content: JSON.stringify(result), });
      },
      fail: (error) => {
        my.alert({ content: JSON.stringify(error), });
      }
    });
  },
})

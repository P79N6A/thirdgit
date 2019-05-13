Page({
  choosePhoneContact() {
    my.choosePhoneContact({
      success: (res) => {
        my.alert({
          content: 'choosePhoneContact response: ' + JSON.stringify(res)
        });
      },
      fail: (res) => {
        my.alert({
          content: 'choosePhoneContact response: ' + JSON.stringify(res)
        });
      },
      complete: () => {
        my.alert({ content: 'complete回调！', });
      },
    });
  },
  chooseAlipayContact() {
    my.chooseAlipayContact({
      count: 2,
      success: (res) => {
        my.alert({
          content: 'chooseAlipayContact response: ' + JSON.stringify(res)
        });
      },
      fail: (res) => {
        my.alert({
          content: 'chooseAlipayContact response: ' + JSON.stringify(res)
        });
      },
      complete: () => {
        my.alert({ content: 'complete回调！', });
      },
    });
  },
  chooseContact() {
    my.chooseContact({
      chooseType: 'single',
      includeMe: false,
      includeMobileContactMode: 'none',
      success: (res) => {
        my.alert({ content: 'success: ' + JSON.stringify(res) });
      },
      fail: (error) => {
        my.alert({ content: 'fail: ' + JSON.stringify(error) });
      },
      complete: () => {
        my.alert({ content: 'complete回调！', });
      },
    })
  },
  chooseContact_multi() {
    my.chooseContact({
      chooseType: 'multi',
      includeMobileContactMode: 'known',
      multiChooseMax: 3,
      multiChooseMaxTips: '选择已达到上限',
      success: (res) => {
        my.alert({ content: 'success: ' + JSON.stringify(res) });
      },
      fail: (error) => {
        my.alert({ content: 'fail: ' + JSON.stringify(error) });
      }
    })
  },
  chooseContact_false() {
    my.chooseContact({
      chooseType: 'multi',
      includeMe: false,
      includeMobileContactMode: 'all',
      multiChooseMax: 3,
      multiChooseMaxTips: '选择已达到上限',
      success: (res) => {
        my.alert({ content: 'success: ' + JSON.stringify(res) });
      },
      fail: (error) => {
        my.alert({ content: 'fail: ' + JSON.stringify(error) });
      }
    })
  },
  chooseContact_null() {
    my.chooseContact({
      chooseType: null,
      includeMe: null,
      includeMobileContactMode: null,
      multiChooseMax: null,
      multiChooseMaxTips: null,
      success: (res) => {
        my.alert({ content: 'success: ' + JSON.stringify(res) });
      },
      fail: (error) => {
        my.alert({ content: 'fail: ' + JSON.stringify(error) });
      }
    })
  }
});

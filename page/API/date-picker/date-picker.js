Page({
  datePicker() {
    my.datePicker({
      currentDate: '2016-10-10',
      startDate: '2016-10-9',
      endDate: '2017-10-9',
      success: (res) => {
        my.alert({ title: 'datePicker response: ' + JSON.stringify(res) });
      },
      fail: (error) => {
        my.alert({ content: '操作失败' + JSON.stringify(error), });
      },
      complete: () => {
        my.showToast({ content: 'complete回调', });
      }
    });
  },
  datePickerHMS() {
    my.datePicker({
      format: 'HH:mm:ss',
      currentDate: '12:12:12',
      startDate: '11:11:11',
      endDate: '13:13:13',
      success: (res) => {
        my.alert({ title: 'datePicker response: ' + JSON.stringify(res) });
      },
      fail: (error) => {
        my.alert({ content: '操作失败' + JSON.stringify(error), });
      },
    });
  },
  datePickerYMDHMS() {
    my.datePicker({
      format: 'yyyy-MM-dd HH:mm:ss',
      currentDate: '2017-08-02 00:00:00',
      startDate: '2017-06-01 00:00:00',
      endDate: '2017-10-01 00:00:00',
      success: (res) => {
        my.alert({
          title: 'datePicker response: ' + JSON.stringify(res)
        });
      },
      fail: (error) => {
        my.alert({ content: '操作失败' + JSON.stringify(error), });
      },
    });
  },
  datePickerY() {
    my.datePicker({
      format: 'yyyy',
      currentDate: '2017',
      startDate: '2016',
      endDate: '2021',
      success: (res) => {
        my.alert({
          title: 'datePicker response: ' + JSON.stringify(res)
        });
      },
    });
  },
  datePickerYM() {
    my.datePicker({
      format: 'yyyy-MM',
      currentDate: '2017-08',
      startDate: '2017-05',
      endDate: '2021-12',
      success: (res) => {
        my.alert({
          title: 'datePicker response: ' + JSON.stringify(res)
        });
      },
    });
  },
});

Page({
  makePhoneCall() {
    my.makePhoneCall({
      number: '95888',
      success: () => {
        my.alert({ title: '�����ɹ�', });
      },
      fail: () => {
        my.alert({ title: '����ʧ��', });
      },
      complete: () => {
        my.alert({ title: 'complete�ص�', });
      },
    });
  },
});

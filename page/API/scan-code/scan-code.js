Page({
  scana() {
    my.scan({
      type: 'qr',
      hideAlbum: true,      //为true时无法调用相册，验证通过

      success: (res) => {
        my.alert({ title: JSON.stringify(res), });
        console.log({ content: '系统信息：' + JSON.stringify(res), });
      },
      fail: (error) => {
        console.log({ content: '调用失败：' + JSON.stringify(res), });
      },
      complete: () => {
        my.alert({ title: 'complete回调', });
        console.log({ title: 'complete回调', });
      },

    });
  },

  scanb() {
    my.scan({
      type: 'qr',
      actionType: '',   //优先级最高,当actiontype存在时needpath不生效
      hideAlbum: true,      //为true时无法调用相册，验证通过
      success: (res) => {
        my.alert({ title: JSON.stringify(res), });
        console.log({ content: '调用成功：' + JSON.stringify(res), });
      },

      fail: (error) => {
        console.log({ content: '调用失败：' + JSON.stringify(res), });
      },
      complete: () => {
        my.alert({ title: 'complete回调', });
        console.log({ title: 'complete回调', });
      },

    });
  },

  scanx() {
    my.scan({
      type: 'qr',
      actionType: 'null',   //优先级最高,当actiontype存在时needpath不生效
      hideAlbum: true,      //为true时无法调用相册，验证通过
      success: (res) => {
        my.alert({ title: JSON.stringify(res), });
        console.log({ content: '系统信息：' + JSON.stringify(res), });
      },
    });
  },

  scanD() {
    my.scan({
      type: 'qr',
      actionType: 'scanAndRpc123',   //优先级最高,当actiontype存在时needpath不生效
      hideAlbum: true,      //为true时无法调用相册，验证通过
      success: (res) => {
        my.alert({ title: JSON.stringify(res), });
        console.log({ content: '系统信息：' + JSON.stringify(res), });
      },
    });
  },

  scane() {
    my.scan({
      type: 'qr',
      actionType: 'scan',   //优先级最高,当actiontype存在时needpath不生效
      hideAlbum: true,      //为true时无法调用相册，验证通过
      success: (res) => {
        my.alert({ title: JSON.stringify(res), });
        console.log({ content: '系统信息：' + JSON.stringify(res), });
      },
    });
  },

  scanf() {
    my.scan({
      type: 'qr',
      actionType: 'scanAndRpc',   //优先级最高,当actiontype存在时needpath不生效
      hideAlbum: true,      //为true时无法调用相册，验证通过
      success: (res) => {
        my.alert({ title: JSON.stringify(res), });
        console.log({ content: '系统信息：' + JSON.stringify(res), });
      },
    });
  },
  scang() {
    my.scan({
      type: 'qr',
      needPath: false,     //优先级第二
      hideAlbum: true,      //为true时无法调用相册，验证通过
      success: (res) => {
        my.alert({ title: JSON.stringify(res), });
        console.log({ content: '系统信息：' + JSON.stringify(res), });
      },
    });
  },
  scanh() {
    my.scan({
      type: 'qr',
      needPath: true,     //优先级第二
      hideAlbum: true,      //为true时无法调用相册，验证通过
      success: (res) => {
        my.alert({ title: JSON.stringify(res), });
        console.log({ content: '系统信息：' + JSON.stringify(res), });
      },
    });
  },
  scani() {
    my.scan({
      type: 'qr',
      needPath: 'aida1`12',     //优先级第二
      hideAlbum: true,      //为true时无法调用相册，验证通过
      success: (res) => {
        my.alert({ title: JSON.stringify(res), });
        console.log({ content: '系统信息：' + JSON.stringify(res), });
      },
    });
  },

  scanj() {
    my.scan({
      type: 'qr',
      needPath: '',     //优先级第二
      hideAlbum: true,      //为true时无法调用相册，验证通过
      success: (res) => {
        my.alert({ title: JSON.stringify(res), });
        console.log({ content: '系统信息：' + JSON.stringify(res), });
      },
    });
  },

  scank() {
    my.scan({
      type: 'qr',
      needPath: 'null',     //优先级第二
      hideAlbum: true,      //为true时无法调用相册，验证通过
      success: (res) => {
        my.alert({ title: JSON.stringify(res), });
        console.log({ content: '系统信息：' + JSON.stringify(res), });
      },
    });
  },

  scanl() {
    my.scan({
      type: 'qr',
      actionType: 'scanAndRpc',
      needPath: false,
      hideAlbum: true,      //为true时无法调用相册，验证通过
      success: (res) => {
        my.alert({ title: JSON.stringify(res), });
        console.log({ content: '系统信息：' + JSON.stringify(res), });
      },
    });
  },

  scanm() {
    my.scan({
      type: 'qr',
      actionType: 'scanAndRpc',
      needPath: true,
      hideAlbum: true,      //为true时无法调用相册，验证通过
      success: (res) => {
        my.alert({ title: JSON.stringify(res), });
        console.log({ content: '系统信息：' + JSON.stringify(res), });
      },
    });
  },

  scann() {
    my.scan({
      type: 'qr',
      actionType: 'scan',
      needPath: true,
      hideAlbum: true,      //为true时无法调用相册，验证通过
      success: (res) => {
        my.alert({ title: JSON.stringify(res), });
        console.log({ content: '系统信息：' + JSON.stringify(res), });
      },
    });
  },

  scano() {
    my.scan({
      type: 'qr',
      actionType: 'scan',
      needPath: false,
      hideAlbum: true,      //为true时无法调用相册，验证通过
      success: (res) => {
        my.alert({ title: JSON.stringify(res), });
        console.log({ content: '系统信息：' + JSON.stringify(res), });
      },
    });
  },

  ARScan() {
    my.ARScan();
  },
})
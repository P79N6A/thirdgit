Page({
  data: {
    devid: 'D20D517B-9748-9131-31A4-AD18259701EC',
    serid: '',
    charid: '',
  },
  //处理iOS蓝牙接口测试
  //获取本机蓝牙开关状态
  openBluetoothAdapter() {
    my.openBluetoothAdapter({
      success: (res) => {
        if (!res.isSupportBLE) {
          my.alert({ content: '抱歉，您的手机蓝牙暂不可用' });
          return;
        }
        console.log('openBluetoothAdapter', '初始化成功！');
        my.alert({ content: '初始化成功！' });
      },
      fail: (error) => {
        my.alert({ content: JSON.stringify(error), });
      },
      complete: () => {
        my.showToast({ content: 'complete回调', });
      },
    });

  },

  closeBluetoothAdapter() {
    my.closeBluetoothAdapter({
      success: () => {
        my.alert({ content: '关闭蓝牙成功！' });
      },
      fail: (error) => {
        my.alert({ content: JSON.stringify(error), });
      },
      complete: () => {
        my.showToast({ content: 'complete回调', });
      },
    });
  },
  getBluetoothAdapterState() {
    my.getBluetoothAdapterState({
      success: (res) => {
        if (!res.available) {
          my.alert({ content: '抱歉，您的手机蓝牙暂不可用' });
          return;
        }
        my.alert({ content: JSON.stringify(res) });
      },
      fail: (error) => {
        my.alert({ content: JSON.stringify(error), });
      },
      complete: () => {
        my.showToast({ content: 'complete回调', });
      },
    });
  },
  //扫描蓝牙设备
  startBluetoothDevicesDiscovery() {
    my.startBluetoothDevicesDiscovery({
      allowDuplicatesKey: false,
      interval: '5000',
      success: () => {
        my.onBluetoothDeviceFound({
          success: (res) => {
            my.alert({ content: '监听新设备' + JSON.stringify(res) });
          },
          fail: (error) => {
            my.alert({ content: '监听新设备失败' + JSON.stringify(error), });
          },
        });
      },
      fail: (error) => {
        my.alert({ content: '启动扫描失败' + JSON.stringify(error), });
      },
      complete: () => {
        my.showToast({ content: 'complete回调', });
      },
    });
  },
  //扫描指定服务的设备
  specifiedBluetoothDevicesDiscovery() {
    my.startBluetoothDevicesDiscovery({
      services: ['FFF0'],
      allowDuplicatesKey: false,
      interval: '5000',
      success: () => {
        my.onBluetoothDeviceFound({
          success: (res) => {
            my.alert({ content: '监听新设备' + JSON.stringify(res) });
          },
          fail: (error) => {
            my.alert({ content: '监听新设备失败' + JSON.stringify(error), });
          },
        });
      },
      fail: (error) => {
        my.alert({ content: '启动扫描失败' + JSON.stringify(error), });
      },
    });
  },

  //停止扫描
  stopBluetoothDevicesDiscovery() {
    my.stopBluetoothDevicesDiscovery({
      success: (res) => {
        my.offBluetoothDeviceFound();
        my.alert({ content: '操作成功！' });
      },
      fail: (error) => {
        my.alert({ content: JSON.stringify(error), });
      },
      complete: () => {
        my.showToast({ content: 'complete回调', });
      },
    });

  },
  //获取正在连接中的设备
  getConnectedBluetoothDevices() {
    my.getConnectedBluetoothDevices({
      success: (res) => {
        if (res.devices.length === 0) {
          my.alert({ content: '没有在连接中的设备！' });
          return;
        }
        my.alert({ content: JSON.stringify(res) });
        devid = res.devices[0].deviceId;
      },
      fail: (error) => {
        my.alert({ content: JSON.stringify(error), });
      },
      complete: () => {
        my.showToast({ content: 'complete回调', });
      },
    });
  },

  //获取所有搜索到的设备
  getBluetoothDevices() {
    my.getBluetoothDevices({
      success: (res) => {
        my.alert({ content: JSON.stringify(res) });
      },
      fail: (error) => {
        my.alert({ content: JSON.stringify(error), });
      },
      complete: () => {
        my.showToast({ content: 'complete回调', });
      },
    });
  },

  bindKeyInput(e) {
    this.setData({
      devid: e.detail.value,
    });
  },

  //连接设备
  connectBLEDevice() {
    my.connectBLEDevice({
      deviceId: this.data.devid,
      success: (res) => {
        my.alert({ content: '连接成功' });
      },
      fail: (error) => {
        my.alert({ content: JSON.stringify(error), });
      },
      complete: () => {
        my.showToast({ content: 'complete回调', });
      },
    });
  },
  //连接设备-deviceId为空
  connectBLEDevice_IdNull() {
    my.connectBLEDevice({
      deviceId: '',
      success: (res) => {
        my.alert({ content: '连接成功' });
      },
      fail: (error) => {
        my.alert({ content: JSON.stringify(error), });
      },
    });
  },
  //连接设备-deviceId为错误值
  connectBLEDevice_IdError() {
    my.connectBLEDevice({
      deviceId: 'XX:XX:xx:xx:xx',
      success: (res) => {
        my.alert({ content: '连接成功' });
      },
      fail: (error) => {
        my.alert({ content: JSON.stringify(error), });
      },
    });
  },
  //断开连接
  disconnectBLEDevice() {
    my.disconnectBLEDevice({
      deviceId: this.data.devid,
      success: () => {
        my.alert({ content: '断开连接成功！' });
      },
      fail: (error) => {
        my.alert({ content: JSON.stringify(error), });
      },
      complete: () => {
        my.showToast({ content: 'complete回调', });
      },
    });
  },

  //断开连接_devid为空
  disconnectBLEDevice_IdNull() {
    my.disconnectBLEDevice({
      deviceId: '',
      success: () => {
        my.alert({ content: '断开连接成功！' });
      },
      fail: (error) => {
        my.alert({ content: JSON.stringify(error), });
      },
    });
  },

  //断开连接_devid错误
  disconnectBLEDevice_IdError() {
    my.disconnectBLEDevice({
      deviceId: this.data.devid,
      success: () => {
        my.alert({ content: '断开连接成功！' });
      },
      fail: (error) => {
        my.alert({ content: JSON.stringify(error), });
      },
    });
  },
  //获取连接设备的server
  getBLEDeviceServices() {
    my.getConnectedBluetoothDevices({
      success: (res) => {
        if (res.devices.length === 0) {
          my.alert({ content: '没有已连接的设备' });
          return;
        }
        my.getBLEDeviceServices({
          deviceId: this.data.devid,
          success: (res) => {
            my.alert({ content: JSON.stringify(res) });
            this.setData({
              serid: res.services[0].serviceId
            });
          },
          fail: (error) => {
            my.alert({ content: JSON.stringify(error), });
          },
          complete: () => {
            my.showToast({ content: 'complete回调', });
          },
        });
      },
    });
  },

  //获取连接设备的server_Id为空
  getBLEDeviceServices_Null() {
        my.getBLEDeviceServices({
          deviceId: '',
            success: (res) => {
            my.alert({ content: JSON.stringify(res) });
          },
          fail: (error) => {
            my.alert({ content: JSON.stringify(error), });
          },
        });
  },
   //获取连接设备的server_Id错误
  getBLEDeviceServices_Error() {
        my.getBLEDeviceServices({
          deviceId: 'xxxx',
          success: (res) => {
            my.alert({ content: JSON.stringify(res) });
          },
          fail: (error) => {
            my.alert({ content: JSON.stringify(error), });
          },
        });
  },
  //获取连接设备的charid
  getBLEDeviceCharacteristics() {
    my.getConnectedBluetoothDevices({
      success: (res) => {
        if (res.devices.length === 0) {
          my.alert({ content: '没有已连接的设备' });
          return;
        }
        this.setData({
          devid: res.devices[0].deviceId,
        });
        my.getBLEDeviceCharacteristics({
          deviceId: this.data.devid,
          serviceId: this.data.serid,
          success: (res) => {
            my.alert({ content: JSON.stringify(res) });
            this.setData({
              charid: res.characteristics[0].characteristicId
            });
          },
          fail: (error) => {
            my.alert({ content: JSON.stringify(error), });
          },
          complete: () => {
            my.showToast({ content: 'complete回调', });
          },
        });
      }
    });
  },
//获取设备的charid--参数错误
  getBLEDeviceCharacteristics_Error() {
        my.getBLEDeviceCharacteristics({
          deviceId: this.data.devid,
          serviceId:null,
          success: (res) => {
            my.alert({ content: JSON.stringify(res) });
          },
          fail: (error) => {
            my.alert({ content: JSON.stringify(error), });
          },
        });
  },

//获取设备的charid--参数为空
  getBLEDeviceCharacteristics_Null() {
        my.getBLEDeviceCharacteristics({
          deviceId: this.data.devid,
          serviceId:'',
          success: (res) => {
            my.alert({ content: JSON.stringify(res) });
          },
          fail: (error) => {
            my.alert({ content: JSON.stringify(error), });
          },
        });
  },

  //读取数据
  readBLECharacteristicValue() {
    my.getConnectedBluetoothDevices({
      success: (res) => {
        if (res.devices.length === 0) {
          my.alert({ content: '没有已连接的设备' });
          return;
        }
        this.setData({
          devid: res.devices[0].deviceId
        });
        my.readBLECharacteristicValue({
          deviceId: this.data.devid,
          //1、ios读取测试（需要开启read的权限才能读取到）
          serviceId: "FFF0",
          characteristicId: "36F8",
          success: (res) => {
            my.alert({ content: JSON.stringify(res) });
          },
          fail: (error) => {
            my.alert({ content: '读取失败' + JSON.stringify(error), });
          },
          complete: () => {
            my.showToast({ content: 'complete回调', });
          },
        });
      }
    });
  },

  //读取数据_参数为空
  readBLECharacteristicValue_Null() {
        my.readBLECharacteristicValue({
          deviceId: this.data.devid,
          //1、ios读取测试（需要开启read的权限才能读取到）
          serviceId: " ",
          characteristicId: "2A06",
          success: (res) => {
            my.alert({ content: JSON.stringify(res) });
          },
          fail: (error) => {
            my.alert({ content: '读取失败' + JSON.stringify(error), });
          },
        });
  },

//读取数据_参数错误
  readBLECharacteristicValue_Error() {
        my.readBLECharacteristicValue({
          deviceId: this.data.devid,
          //1、ios读取测试（需要开启read的权限才能读取到）
          serviceId: "1803",
          characteristicId: null,
          success: (res) => {
            my.alert({ content: JSON.stringify(res) });
          },
          fail: (error) => {
            my.alert({ content: '读取失败' + JSON.stringify(error), });
          },
        });
  },
//写入数据
  writeBLECharacteristicValue() {
    my.getConnectedBluetoothDevices({
      success: (res) => {
        if (res.devices.length === 0) {
          my.alert({ content: '没有已连接的设备' });
          return;
        }
        this.setData({
          devid: res.devices[0].deviceId
        });
        my.writeBLECharacteristicValue({
          deviceId: this.data.devid,
          //1、ios写入测试（需要开启write权限才能读取到）
          serviceId: "FFF0",
          characteristicId: "36F8",
          value: "ABCD",
          success: (res) => {
            my.alert({ content: "写入数据成功！" });
          },
          fail: (error) => {
            my.alert({ content: JSON.stringify(error), });
          },
          complete: () => {
            my.showToast({ content: 'complete回调', });
          },
        });
      }
    });
  },
  //写入数据Value错误
  writeBLECharacteristicValue_Error() {
        my.writeBLECharacteristicValue({
          deviceId: this.data.devid,
          //1、ios写入测试（需要开启write权限才能读取到）
          serviceId: "1803",
          characteristicId: "2A06",
          value: 哈哈哈,
          success: (res) => {
            my.alert({ content: "写入数据成功！" });
          },
          fail: (error) => {
            my.alert({ content: JSON.stringify(error), });
          },
        });
  },

  //写入数据Value错误
  writeBLECharacteristicValue_Null() {
        my.writeBLECharacteristicValue({
          deviceId: this.data.devid,
          //1、ios写入测试（需要开启write权限才能读取到）
          serviceId: "1803",
          characteristicId: "2A06",
          value: '',
          success: (res) => {
            my.alert({ content: "写入数据成功！" });
          },
          fail: (error) => {
            my.alert({ content: JSON.stringify(error), });
          },
        });
  },
//监听特征值变化
  notifyBLECharacteristicValueChange() {
    my.getConnectedBluetoothDevices({
      success: (res) => {
        if (res.devices.length === 0) {
          my.alert({ content: '没有已连接的设备' });
          return;
        }
        this.setData({
          devid: res.devices[0].deviceId
        });
        my.notifyBLECharacteristicValueChange({
          state: true,
          deviceId: this.data.devid,
          // 3、ios普通特征值监听
          serviceId: "FFF0",
          characteristicId: "36F8",

          // 4、ios测试indicate服务监听
          //   serviceId: "FFF0",
          //   characteristicId: "36F9",
          success: () => {
            //监听特征值变化的事件
            my.onBLECharacteristicValueChange({
              success: (res) => {
                my.alert({ content: '特征值变化：' + JSON.stringify(res) });
              }
            });
            my.alert({ content: '监听成功' });
          },
          fail: (error) => {
            my.alert({ content: '监听失败' + JSON.stringify(error), });
          },
          complete: () => {
            my.showToast({ content: 'complete回调', });
          },
        });
      }
    });
  },
//监听特征值变化
  notifyBLECharacteristicValueChange_Error() {
        my.notifyBLECharacteristicValueChange({
          state: true,
          deviceId: this.data.devid,
          // 3、ios普通特征值监听
          serviceId: xxxx,
          characteristicId: "2a19",
          success: () => {
            my.alert({ content: '监听成功' });
          },
          fail: (error) => {
            my.alert({ content: '监听失败' + JSON.stringify(error), });
          },
        });
  },
//监听特征值变化_参数为空
  notifyBLECharacteristicValueChange_Null() {
        my.notifyBLECharacteristicValueChange({
          state: true,
          deviceId: this.data.devid,
          // 3、ios普通特征值监听
          serviceId: '',
          characteristicId: "",
          success: () => {
            my.alert({ content: '监听成功' });
          },
          fail: (error) => {
            my.alert({ content: '监听失败' + JSON.stringify(error), });
          },
        });
  },

  offBLECharacteristicValueChange() {
    my.offBLECharacteristicValueChange();
  },
  //其他事件
  bluetoothAdapterStateChange() {
    my.onBluetoothAdapterStateChange({
      success: (res) => {
        my.alert({ content: '本机蓝牙状态变化：' + JSON.stringify(res) });
      },
      fail: (error) => {
        my.alert({ content: JSON.stringify(error), });
      },
      complete: () => {
        my.showToast({ content: 'complete回调', });
      },
    });
  },
  offBluetoothAdapterStateChange() {
    my.offBluetoothAdapterStateChange();
  },

  BLEConnectionStateChanged() {
    my.onBLEConnectionStateChanged({
      success: (res) => {
        my.alert({ content: '连接状态变化：' + JSON.stringify(res) });
      },
      fail: (error) => {
        my.alert({ content: JSON.stringify(error), });
      },
      complete: () => {
        my.showToast({ content: 'complete回调', });
      },
    });
  },
  offBLEConnectionStateChanged() {
    my.offBLEConnectionStateChanged();
  },
});

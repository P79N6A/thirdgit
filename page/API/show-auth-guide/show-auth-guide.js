Page({
    showAuthGuide() {
        my.showAuthGuide({
            bizType: 'AppletPG',
            authType: 'LBSSERVICE',
            success: (res) => {
                my.alert({ content: '调用成功：' + JSON.stringify(res), });
            },
            fail: (error) => {
                my.alert({ content: '调用失败：' + JSON.stringify(error), });
            },
            complete: (res) => {
                my.alert({ content: 'complete回调！', });
            }
        });
    },
    LBS() {//位置
        my.showAuthGuide({
            bizType: 'AppletPG',
            authType: 'LBS',
            success: (res) => {
                my.alert({ content: '调用成功：' + JSON.stringify(res), });
            },
            fail: (error) => {
                my.alert({ content: '调用失败：' + JSON.stringify(error), });
            },
        });
    },
    PHOTO() {//ios 图片
        my.showAuthGuide({
            bizType: 'AppletPG',
            authType: 'PHOTO',
            success: (res) => {
                my.alert({ content: '调用成功：' + JSON.stringify(res), });
            },
            fail: (error) => {
                my.alert({ content: '调用失败：' + JSON.stringify(error), });
            },
        });
    },
    ADDRESSBOOK() {//通讯录
        my.showAuthGuide({
            bizType: 'AppletPG',
            authType: 'ADDRESSBOOK',
            success: (res) => {
                my.alert({ content: '调用成功：' + JSON.stringify(res), });
            },
            fail: (error) => {
                my.alert({ content: '调用失败：' + JSON.stringify(error), });
            },
        });
    },
    CAMERA() {//相机
        my.showAuthGuide({
            bizType: 'AppletPG',
            authType: 'CAMERA',
            success: (res) => {
                my.alert({ content: '调用成功：' + JSON.stringify(res), });
            },
            fail: (error) => {
                my.alert({ content: '调用失败：' + JSON.stringify(error), });
            },
        });
    },
    NOTIFICATION() {//push通知栏权限
        my.showAuthGuide({
            bizType: 'AppletPG',
            authType: 'NOTIFICATION',
            success: (res) => {
                my.alert({ content: '调用成功：' + JSON.stringify(res), });
            },
            fail: (error) => {
                my.alert({ content: '调用失败：' + JSON.stringify(error), });
            },
        });
    },
    MICROPHONE() {//麦克风
        my.showAuthGuide({
            bizType: 'AppletPG',
            authType: 'MICROPHONE',
            success: (res) => {
                my.alert({ content: '调用成功：' + JSON.stringify(res), });
            },
            fail: (error) => {
                my.alert({ content: '调用失败：' + JSON.stringify(error), });
            },
        });
    },
    openSetting() {
        my.call('openSetting', {
            success: (res) => {
                my.alert({ content: '调用成功：' + JSON.stringify(res), });
            },
            fail: (error) => {
                my.alert({ content: '调用失败：' + JSON.stringify(error), });
            },
        });
    },
    getSetting() {
        my.call('getSetting', {
            success: (res) => {
                my.alert({ content: '调用成功：' + JSON.stringify(res), });
            },
            fail: (error) => {
                my.alert({ content: '调用失败：' + JSON.stringify(error), });
            },
        });
    }
})
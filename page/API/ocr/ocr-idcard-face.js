Page({
    data: {
        textArry: [],
        imgUrl: "/image/ocr/ocr_idcard.jpg"
    },
    onLoad() {
        this.callFn(this.data.imgUrl);
    },
    callFn(url){
        my.showLoading({
            content: '加载中...',
            delay: 100,
        });
        my.ocr({
            ocrType: 'ocr_idcard',
            side: 'face',
            path: url,
            success: (res) => {
                let data = JSON.parse(res.result.outputs[0].outputValue.dataValue);
                let {name, sex, nationality, birth, address, num}=data;
                this.setData({
                    imgUrl:url,
                    textArry: [
                        {title: '姓名', message: name},
                        {title: '性别', message: sex},
                        {title: '民族', message: nationality},
                        {title: '出生', message: birth},
                        {title: '地址', message: address},
                        {title: '身份号码', message: num}
                    ],
                });
                my.hideLoading();
            },
            fail: (res) => {
                my.hideLoading();
                my.alert({
                    title:'fail',
                    content:JSON.stringify(res),
                });
            },
        });
    },
    photoSubmit() {//点击上传
        my.chooseImage({
            count: 1,
            success: (res) => {
                this.callFn(res.apFilePaths[0]);
            },
        });
    },
});

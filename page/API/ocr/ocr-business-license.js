Page({
    data: {
        textArry: [],
        imgUrl: "/image/ocr/ocr_business_license.jpg"
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
            ocrType: 'ocr_business_license',
            path: url,
            success: (res) => {
                let data = JSON.parse(res.result.outputs[0].outputValue.dataValue);
                let {reg_num, person, name, address, valid_period}=data;
                this.setData({
                    imgUrl:url,
                    textArry: [
                        { title: '注册号', message: reg_num },
                        { title: '法人', message: person },
                        { title: '公司名称', message: name },
                        { title: '地址', message: address },
                        { title: '营业期限', message: valid_period },
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

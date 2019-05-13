Page({
    data: {
        textArry: [],
        imgUrl: "/image/ocr/ocr_vehicle.jpg"
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
            ocrType: 'ocr_vehicle',
            path: url,
            success: (res) => {
                let data = JSON.parse(res.result.outputs[0].outputValue.dataValue);
                let {plate_num, vehicle_type, owner, use_character, model, vin, engine_num, register_date, issue_date}=data;
                this.setData({
                    imgUrl:url,
                    textArry: [
                        { title: '车牌号码', message: plate_num },
                        { title: '车辆类型', message: vehicle_type },
                        { title: '所有人',   message: owner },
                        { title: '使用性质', message: use_character },
                        { title: '品牌型号', message: model },
                        { title: '识别代码', message: vin },
                        { title: '发动机号', message: engine_num },
                        { title: '注册日期', message: register_date },
                        { title: '发证日期', message: issue_date },
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

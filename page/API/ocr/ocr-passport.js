Page({
    data: {
        textArry: [],
        imgUrl: "/image/ocr/ocr_passport.jpg"
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
            ocrType: 'ocr_passport',
            path: url,
            success: (res) => {
                let data = JSON.parse(res.result.outputs[0].outputValue.dataValue);
                let {authority, birth_date,  birth_place, country, expiry_date,  issue_date, issue_place, name, name_cn, passport_no, person_id, sex, src_country
                }=data;
                this.setData({
                    imgUrl:url,
                    textArry: [
                        { title: '签发机关', message: authority },
                        { title: '生日', message: birth_date },
                        { title: '出生地', message: birth_place },
                        { title: '国籍', message: country },
                        { title: '到期日期', message: expiry_date },
                        { title: '发证日期', message: issue_date },
                        { title: '发证地址', message: issue_place },
                        { title: '姓名英文', message: name },
                        { title: '姓名中文', message: name_cn },
                        { title: '护照号码', message: passport_no },
                        { title: '身份ID', message: person_id },
                        { title: '性别', message: sex },
                        { title: '国家', message: src_country }
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

Page({
    data: {
        textArry: [],
        imgUrl: "/image/ocr/ocr_general.jpg"
    },
    onLoad() {
        this.callFn(this.data.imgUrl);
    },
    callFn(url){
        my.ocr({
            ocrType: 'ocr_general',
            path: url,
            success: (res) => {
                let data = res.result.text;
                this.setData({
                    imgUrl:url,
                    textArry: [
                        { title: '英文字符', message: data },
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

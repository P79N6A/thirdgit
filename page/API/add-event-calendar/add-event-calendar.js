Page({
  addEventCalendar() {
    my.call('addEventCalendar', {
      title:'卢大锤开学日历测试',
      // title:'',
      startDate:'2018-09-30 10:20:00',//开始时间
      //startDate:'阿达',//字符
      //startDate:'daaaa',//字母
      endDate:'2018-10-01   11:40:00',//结束时间
      location:'黄龙',               //日程地点
      notes:'我要去打球',             //备注
      alarmOffset: 20,               //多少分钟前提醒
      recurrenceTimes: 2,            //循环次数
      frequency: 'day',             // 循环评率，year、 month、week、day
      complete: (res) => {
       // console.log(JSON.stringify(res))
       my.alert({content: JSON.stringify(res)});
      },
    });
  }
})
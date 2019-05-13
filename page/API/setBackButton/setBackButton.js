Page({

  setback1() {
    my.call("setBackButton", { color: "#FF0000" }, function (res) {
      my.alert({ content: '设置颜色回调：' + JSON.stringify(res), });
    }, )
  },
  setback2() {
    my.call("setBackButton", { color: "#4876FF" }, function (res) {
      my.alert({ content: '设置颜色回调：' + JSON.stringify(res), });
    }, )
  },
  setback3() {
    my.call("setBackButton", { color: "" }, function (res) {
      my.alert({ content: '设置颜色回调：' + JSON.stringify(res), });
    }, )
  },
  setback4() {
    my.call("setBackButton", { color: null }, function (res) {
      my.alert({ content: '设置颜色回调：' + JSON.stringify(res), });
    }, )
  },
  setback5() {
    my.call("setBackButton", { color: false }, function (res) {
      my.alert({ content: '设置颜色回调：' + JSON.stringify(res), });
    }, )
  },
})

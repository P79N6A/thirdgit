const markers = [{
   iconPath: "/image/green_tri.png",
  id: 10,
  latitude: 30.279383,
  longitude: 120.131441,
  width: 50,
  height: 50,
  callout: {
    content: 'callout'
  }
}];

const includePoints = [{
  latitude: 30.279383,
  longitude: 120.141461,
}];

Page({
  data: {
    scale: 14,
    longitude: 120.131441,
    latitude: 30.279383,
    markers,
    includePoints,
    polyline: [{
      points: [{
        longitude: 120.131441,
        latitude: 30.279383
      }, {
        longitude: 120.128821,
        latitude: 30.278200
      }, {
        longitude: 120.131618,
        latitude: 30.277600
      }, {
        longitude: 120.132520,
        latitude: 30.279393
      }, {
        longitude: 120.137517,
        latitude: 30.279383
      }],
      color: "#FF0000DD",
      width: 5,
      dottedLine: false
    }],
    circles: [{
      latitude: 30.279383,
      longitude: 120.131441,
      color: "#000000AA",
      fillColor: "#000000AA",
      radius: 80,
      strokeWidth: 5,
    }],
    controls: [{
      id: 5,
      position: {
        left: 0,
        top: 300 - 50,
        width: 50,
        height: 50
      },
      clickable: true
    }],
    polygon: [{
      points: [{
        longitude: 120.131441,
        latitude: 30.279383
      }, {
        longitude: 120.128821,
        latitude: 30.278200
      }, {
        longitude: 120.131618,
        latitude: 30.277600
      }, {
        longitude: 120.132520,
        latitude: 30.279393
      }, {
        longitude: 120.137517,
        latitude: 30.279383
      }],
      fillColor: "#BB0000DD",
      width: 5,
    }]
  },
  onReady(e) {
    // 使用 my.createMapContext 获取 map 上下文
    this.mapCtx = my.createMapContext('map')
  },
  getCenterLocation() {
    this.mapCtx.getCenterLocation({
      success: function (res) {
        my.alert({
          content: 'longitude:' + res.longitude + 'latitude:' + res.latitude
        });
        console.log(res.longitude)
        console.log(res.latitude)
      },
      fail:()=>{
        my.showToast({
          content: 'fail', // 文字内容
        });
      },
      complete: () => {
         abridge.alert({
           title: 'complete回调！',
      });
    },
    })
  },
  moveToLocation() {
    this.mapCtx.moveToLocation()
  },
  regionchange(e) {
    console.log('regionchange', e);
  },
  markertap(e) {
    console.log('marker tap', e);
  },
  controltap(e) {
    console.log('control tap', e);
  },
  tap() {
    console.log('tap:');
  },
  callouttap(e) {
    console.log('callout tap', e);
  },
  changeScale() {
    this.setData({
      scale: 8,
    });
  },
  restoreMarkers() {
    this.setData({
      markers,
      includePoints,
    });
  },
  changeCenter() {
    this.setData({
      longitude: 113.324520,
      latitude: 23.199994,
    });
  },
  setHeight() {
    this.setData({
      heightStyle: 'height:50px',
    });
  },
  changeMarkers(e) {
   this.setData({
      markers: [{
        id: 10,
        latitude: 30.538285,
        longitude: 104.074074,
        iconPath: '/image/green_tri.png',
        width: 19,
        height: 31,
      }],
      includePoints: [{
        latitude: 30.538285,
        longitude: 104.074074,
      }],
    });
  },
  onCoverViewTap(){
    my.alert({content:'点击了cover-view'})
  }
})

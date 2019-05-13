Page({
  data: {
    imgUrls: [
    'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1526274344389&di=d35fd8daa569d4500c03b22ba13fecbb&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2F34fae6cd7b899e51fab3e9c048a7d933c8950d21.jpg', 
    'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1526274344389&di=4af4d52b5a70a16fb433ac6320dd1535&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimage%2Fc0%253Dshijue1%252C0%252C0%252C294%252C40%2Fsign%3D890c50c9db00baa1ae214ff82f79d367%2Fcc11728b4710b912decd6bdbc9fdfc0392452282.jpg', 
    'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1526274344388&di=9039b983abfed748ba13eb28152ac67a&imgtype=0&src=http%3A%2F%2Fpic1.win4000.com%2Fpic%2F3%2F8a%2F1efa1227108.jpg',
    'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1526274344386&di=ea3fc00cec28f7430397dd4c6efac896&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimage%2Fc0%253Dshijue1%252C0%252C0%252C294%252C40%2Fsign%3D936752218d94a4c21e2eef68669d71a0%2F7c1ed21b0ef41bd5e8815bda5bda81cb38db3dc9.jpg',
    'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1526274344379&di=a0a194efdac35d36c362879f54264efd&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimage%2Fc0%253Dshijue1%252C0%252C0%252C294%252C40%2Fsign%3D5bf0abfe9682d158af8f51f2e86373ad%2Fcdbf6c81800a19d836c7a91539fa828ba71e46dd.jpg',
    'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1526275357501&di=d4840df2164af647ce69df36758bf621&imgtype=0&src=http%3A%2F%2Fpic37.nipic.com%2F20140105%2F2572038_115028775000_2.jpg',
    'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1526274414284&di=516d9476bdff317908d804a94fa7c810&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimage%2Fc0%253Dshijue1%252C0%252C0%252C294%252C40%2Fsign%3D4ecae4251530e924dba9947224610473%2Fb999a9014c086e065457c66608087bf40ad1cb24.jpg',
    'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1526274484264&di=da00622a579dc71e9113e9645059081e&imgtype=0&src=http%3A%2F%2Fpic.nipic.com%2F2008-01-22%2F2008122103516853_2.jpg',
    'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1526275507610&di=a6ebb251deb946d1821b07aeba0ea4d6&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimage%2Fc0%253Dshijue1%252C0%252C0%252C294%252C40%2Fsign%3D15c8031eb0a1cd1111bb7a63d17ba289%2F738b4710b912c8fc2eda11e3f6039245d68821f7.jpg',
    'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1526275507603&di=47288b2865f94c91d5e3901b6d513745&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimage%2Fc0%253Dshijue1%252C0%252C0%252C294%252C40%2Fsign%3D2fd287745ffbb2fb2026505127234ad1%2F42166d224f4a20a4301fb3ee9a529822720ed092.jpg',
    'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1526275537911&di=27ae3beb1c1d9bee74501d1c997a84dc&imgtype=0&src=http%3A%2F%2Fpic.lvmama.com%2Fuploads%2Fpc%2Fplace2%2F2016-08-26%2F85730d55-0811-450d-8fb3-8c5c3af3192f.jpg',
    'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1526275601278&di=a90afb7aaeb8e6c5ed99e1e0aea1f380&imgtype=0&src=http%3A%2F%2Fimg4.duitang.com%2Fuploads%2Fitem%2F201409%2F22%2F20140922195450_GMS2i.jpeg',
    'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1526275601277&di=ade3363b455b0e547da7bf607f4cdd53&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimage%2Fc0%253Dpixel_huitu%252C0%252C0%252C294%252C40%2Fsign%3D70394c5b9322720e6fc3eaba12b36f2a%2F3b87e950352ac65c69f68f4af0f2b21193138a1c.jpg',
    'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1526275854178&di=c54a92ac32e518ced067682baa95affe&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01c70057615f050000012e7e9f9383.jpg%401280w_1l_2o_100sh.jpg',
    'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1526276033554&di=bc0a3d24760450735bb25a4f102bac6a&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimage%2Fc0%253Dpixel_huitu%252C0%252C0%252C294%252C40%2Fsign%3D12fb21189813b07ea9b0584865aff44f%2F9a504fc2d56285350cd474189bef76c6a7ef63d7.jpg',
    'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1526276086712&di=f2a9bd1efa588f7ba89fb62ba1e6f4fb&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimage%2Fc0%253Dshijue1%252C0%252C0%252C294%252C40%2Fsign%3D979a149194510fb36c147fd4b15aa2e0%2F0e2442a7d933c895a014c253db1373f0820200ab.jpg',
    'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1526276086707&di=03a8d04012dce2b47c561bb25788149b&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimage%2Fc0%253Dshijue1%252C0%252C0%252C294%252C40%2Fsign%3Dc923209d6f380cd7f213aaaec92dc741%2F902397dda144ad3420df58aadaa20cf431ad85bf.jpg',
    'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1526276144561&di=8477b3e33e2edfa50cdd957a2f2fa10e&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2F2fdda3cc7cd98d10849ad31c2a3fb80e7bec9055.jpg',
    'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1526276191378&di=5700c2b0cf5942c5c90d485713f37a3a&imgtype=0&src=http%3A%2F%2Fcyjctrip.qiniudn.com%2F1374679522%2FEA0ECAF6-5374-4B2B-8DBD-BBD5BA175B97.jpg'],
    background: ['blue', 'red', 'yellow'],
    indicatorDots: true,
    autoplay: false,
    vertical: false,
    interval: 1000,
    circular: false,
  },
  changeIndicatorDots(e) {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },
  changeVertical() {
    this.setData({
      vertical: !this.data.vertical,
    });
  },
  changeCircular(e) {
    this.setData({
      circular: !this.data.circular
    })
  },
  changeAutoplay(e) {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },
  intervalChange(e) {
    this.setData({
      interval: e.detail.value
    })
  },
  itemchange(e){
  console.log('切换了'+JSON.stringify(e));
  },
  interval_ver(){
    my.navigateTo({
      url:'../swiper/swiper_verification'
    });
  },
  swiper_todo() {
    my.navigateTo({
      url: '../swiper/nesting'
    });
  },
})

const app = getApp();

Page({
  data: {
    background:['red','green','lightgrey'],
    currentIndex:0,
    urls:[['https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1526274344389&di=d35fd8daa569d4500c03b22ba13fecbb&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2F34fae6cd7b899e51fab3e9c048a7d933c8950d21.jpg', 
    'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1526274344389&di=4af4d52b5a70a16fb433ac6320dd1535&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimage%2Fc0%253Dshijue1%252C0%252C0%252C294%252C40%2Fsign%3D890c50c9db00baa1ae214ff82f79d367%2Fcc11728b4710b912decd6bdbc9fdfc0392452282.jpg', 
    'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1526274344388&di=9039b983abfed748ba13eb28152ac67a&imgtype=0&src=http%3A%2F%2Fpic1.win4000.com%2Fpic%2F3%2F8a%2F1efa1227108.jpg'
    ],['https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1526274344386&di=ea3fc00cec28f7430397dd4c6efac896&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimage%2Fc0%253Dshijue1%252C0%252C0%252C294%252C40%2Fsign%3D936752218d94a4c21e2eef68669d71a0%2F7c1ed21b0ef41bd5e8815bda5bda81cb38db3dc9.jpg',
    'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1526274344379&di=a0a194efdac35d36c362879f54264efd&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimage%2Fc0%253Dshijue1%252C0%252C0%252C294%252C40%2Fsign%3D5bf0abfe9682d158af8f51f2e86373ad%2Fcdbf6c81800a19d836c7a91539fa828ba71e46dd.jpg',
    'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1526275357501&di=d4840df2164af647ce69df36758bf621&imgtype=0&src=http%3A%2F%2Fpic37.nipic.com%2F20140105%2F2572038_115028775000_2.jpg'
    ],['https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1526274414284&di=516d9476bdff317908d804a94fa7c810&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimage%2Fc0%253Dshijue1%252C0%252C0%252C294%252C40%2Fsign%3D4ecae4251530e924dba9947224610473%2Fb999a9014c086e065457c66608087bf40ad1cb24.jpg',
    'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1526274484264&di=da00622a579dc71e9113e9645059081e&imgtype=0&src=http%3A%2F%2Fpic.nipic.com%2F2008-01-22%2F2008122103516853_2.jpg',
    'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1526275507610&di=a6ebb251deb946d1821b07aeba0ea4d6&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimage%2Fc0%253Dshijue1%252C0%252C0%252C294%252C40%2Fsign%3D15c8031eb0a1cd1111bb7a63d17ba289%2F738b4710b912c8fc2eda11e3f6039245d68821f7.jpg'
    ]]
  },
  changeSwiper(e){
    this.setData({
      currentIndex:e.target.dataset.index - 1
    })
  }
});

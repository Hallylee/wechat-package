var app = getApp();
Page({
  data: {
    // tabs: ["第一页", "第二页", "第三页", "第四页", "第五页", "第六页", "第七页"],
    tabs: [
      {
        names: '第一页',
        id: 0
      },
      {
        names: '第二页',
        id: 1
      },
      {
        
        names: '第三页',
        id: 2
      },
      {
        names: '第四页',
        id: 3
      },
      {
        names: '第五页',
        id: 4
      },
    ],
    activeIndex: 3,
    slideOffset: 0, // 手写nav
    tabW: 0,
    count: 0,
    isLoading: false,
    contentHeight: 0
  },
  //事件处理函数
  onLoad: function () {
    const that = this;
    const query = wx.createSelectorQuery();
    query.select('.stitTop').boundingClientRect()
    const size = wx.getSystemInfoSync();
    const height = size.windowHeight;
    const contentHeight = height - 44;
    const tabW = size.windowWidth / 4;
    that.setData({
      tabW,
      contentHeight
    })
  },
  changeTab(data) {
    console.log(data)
    var idIndex = data.detail;
    // // var offsetW = e.currentTarget.offsetLeft; // 2种方法获取距离文档左边有多少距离
    this.setData({
      activeIndex: idIndex,
      // slideOffset: offsetW
    });
  },
  bindChange(e) {
    var current = e.detail.current;
    // var offsetW = current * mtabW; //2种方法获取距离文档左边有多少距离
    this.setData({
      activeIndex: current,
      // slideOffset: offsetW
    });
    console.log(this.data.activeIndex)
  },

  clickContent() {
    wx.navigateTo({
      url: '/pages/authorization/index',
    })
  },
  onRefresh() {
    setTimeout(() => {
      wx.showToast({
        title: '刷新成功',
      })
      this.setData({
        isLoading: false,
        count: this.count ++
      })
    }, 1000);
  },
})
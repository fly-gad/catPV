Page({

  /**
   * 页面的初始数据
   */
  data: {
    navList: [],
    recommendList: [],
    active: 0,
    show: true,
    show1: false,
    show2: false,
  },
  onChange(event) {
    let that = this
    console.log('%c 🥥 event: ', 'font-size:20px;background-color: #EA7E5C;color:#fff;', event);
    this.setData({
      active: event.detail
    });
    if (event.detail == 0) {
      this.setData({
        show: true
      });
      this.setData({
        show1: false
      });
      this.setData({
        show2: false
      });
      // this.show = true
      // this.show1 = false
      // this.show2 = false
      // wx.navigateTo({
      //   url: "/pages/index/index"
      // });
    }
    if (event.detail == 1) {
      // this.show = false
      // this.show1 = true
      // this.show2 = false
      this.setData({
        show: false
      });
      this.setData({
        show1: true
      });
      this.setData({
        show2: false
      });
      // wx.navigateTo({
      //   url: "/pages/logs/logs"
      // });
    }
    if (event.detail == 2) {
      this.setData({
        show: false
      });
      this.setData({
        show1: false
      });
      this.setData({
        show2: true
      });
      // this.show = false
      // this.show1 = false
      // this.show2 = true
      // wx.navigateTo({
      //   url: "/pages/itemize/itemize"
      // });
    }

  },
  /**
   * 小程序内置请求方法
   */
  getNavList() {
    let that = this;
    wx.request({
      url: 'http://mock-api.com/vKVNkXK8.mock/navList',
      data: {},
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      // header: {}, // 设置请求的 header
      success: function (res) {
        console.log(res.data.data.navList);
        if (res.data.code == 0) {
          that.setData({
            navList: res.data.data.navList

          })
        }
      },
      fail: function () {
        // fail
      },
      complete: function () {
        // complete
      }
    })
  },
  getRecommendList() {
    let that = this;
    wx.request({
      url: 'http://mock-api.com/vKVNkXK8.mock/recommendList',
      data: {},
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      // header: {}, // 设置请求的 header
      success: function (res) {
        console.log('%c 🥖 res: ', 'font-size:20px;background-color: #465975;color:#fff;', res);
        if (res.data.code == 0) {
          that.setData({
            recommendList: res.data.data.recommendList
          })
        }
      },
      fail: function () {
        // fail
      },
      complete: function () {
        // complete
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getNavList();
    this.getRecommendList();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})
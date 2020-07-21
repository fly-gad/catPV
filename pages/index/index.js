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
    isHide: false,
    longinId: false,
  },
  onChange(event) {
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
  //登录入口
  handleTap() {
    this.setData({
      isHide: true
    });
  },
  //确认授权
  affirm() {
    // this.setData({
    //   isHide: false
    // });
    wx.navigateTo({
      url: "/pages/index/index"
    });
  },
  //取消授权
  onCloseTw() {
    this.setData({
      longinId: true
    });
    this.setData({
      isHide: false
    });
  },
  showPopup() {
    this.setData({
      longinId: true
    });
  },
  onClose() {
    this.setData({
      longinId: false
    });
    wx.navigateTo({
      url: "../../pages/login/login"
    });
  },
  //提交按钮
  submit() {
    wx.navigateTo({
      url: "../../pages/index/index"
    });
  },
  //登录按钮
  login() {
    this.onClose()
    wx.navigateTo({
      url: "../../pages/login/login"
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getNavList();
    this.getRecommendList();
    // var that = this;
    //查看是否授权
    // wx.getSetting({
    //   success: function (res) {
    //     if (res.authSetting['scope.userInfo']) {
    //       wx.getUserInfo({
    //         success: function (res) {
    //           // 用户已经授权过,不需要显示授权页面,所以不需要改变 isHide 的值
    //           // 根据自己的需求有其他操作再补充
    //           // 我这里实现的是在用户授权成功后，调用微信的 wx.login 接口，从而获取code
    //           wx.login({
    //             success: res => {
    //               // 获取到用户的 code 之后：res.code
    //               console.log("用户的code:" + res.code);
    //               // 可以传给后台，再经过解析获取用户的 openid
    //               // 或者可以直接使用微信的提供的接口直接获取 openid ，方法如下：
    //               // wx.request({
    //               //     // 自行补上自己的 APPID 和 SECRET
    //               //     url: 'https://api.weixin.qq.com/sns/jscode2session?appid=自己的APPID&secret=自己的SECRET&js_code=' + res.code + '&grant_type=authorization_code',
    //               //     success: res => {
    //               //         // 获取到用户的 openid
    //               //         console.log("用户的openid:" + res.data.openid);
    //               //     }
    //               // });
    //             }
    //           });
    //         }
    //       });
    //     } else {
    //       // 用户没有授权
    //       // 改变 isHide 的值，显示授权页面
    //       // that.setData({
    //       //   isHide: true
    //       // });
    //     }
    //   }
    // });
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
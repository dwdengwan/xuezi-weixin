// pages/shoplist/shoplist.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[],
    pageIndex:0,
    pageSize:6,
    pageCount:1,
    hasMore:true,//是否有下一页
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.loadMore();
    var id=options.id;
    console.log(options);
    console.log(id);
  },
  loadMore:function(){
    if(this.data.hasMore===false){return;}//是否还有下一页
    wx.showLoading({//动态加载数据中
      title: '数据加载中',
    })
    var pno = this.data.pageIndex+1;
    var ps = this.data.pageSize;
    var url ="http://127.0.0.1:3000/getShopList";
    wx.request({
      url: url,
      data:{pno:pno,pageSize:ps},
      method:"GET",
      success:(res)=>{
        setTimeout(function(){//数据动态加载成功后消失
          wx.hideLoading();
        },1000)
        var pc=res.data.pageCount;
        var flag=pno<pc;//是否有下一页
        console.log(res.data);
        var rows=this.data.list.concat(res.data.data);
        this.setData({
          list: rows,
          pageIndex:pno,
          hasMore:flag,
        })
      }
    })
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
    console.log("用户下拉操作...刷新第一页内容");
    //1.清空原有页码
    // 2.清除原有数据列表
    // 3.清空原有判断条件
    this.setData({
      pageIndex:0,
      list:[],
      hasMore:true,
    })
    this.loadMore();
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    this.loadMore();//下一页
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})
// pages/message/message.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 1.创建变量保存消息列表
    list:[],
    // 3.页码
    pageIndex:0,
    // 4.页大小
    pageSize:2,
    hasMore:true,//是否有下一页
    pageCount:1,
  },
    // 2.添加方法loadMore加载下一页
    loadMore:function(){
    // 2.1发送请求获取下一页
      var pno=this.data.pageIndex+1;
      var ps=this.data.pageSize;
      var url ="http://127.0.0.1:3000/getMessage";
      wx.request({
        url: url,
        data:{pno,pageSize:ps},
        method:"GET",
        success:res=>{
          // 2.2将数据保存消息列表中
          // console.log(res.data.data);
          var row=res.data.data;
          var rows=this.data.list.concat(row);
          // 创建变量保存 是否有下一页条件
          var flag=this.data.pno<res.data.pageCount;
          console.log(row);
          this.setData({
            list:rows,
            pno:pno,
            hasMore:flag,
          })
        }
      })
    // 2.3如果用户触发向上滑动操作 下一页1
    },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.loadMore();
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
    // this.loadMore();
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})
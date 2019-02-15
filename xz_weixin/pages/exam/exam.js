// pages/exam/exam.js
Page({
  hanleTap1:function(){
    console.log("1.小程序 tap事件冒泡");
  },
  hanleTap0: function (e) {
    console.log("2.小程序 父元素tap事件冒泡");
    console.log(e);
    console.log("事件类型"+e.type);
    console.log("当前事件对象");
    console.log(e.currentTarget);
    console.log("触发事件元素");
    console.log(e.target);
  },
  hanleTap2: function (e) {
    console.log("3.小程序 tap事件禁止事件冒泡...");
    console.log(e.target.dataset.id);
  },
  handleTap3:function(e){
    console.log(e.target.dataset.idx);
    console.log(e.target.dataset.age);
  },
  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
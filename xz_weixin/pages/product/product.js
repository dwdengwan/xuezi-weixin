// pages/product/product.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    pn:"",
    pr:""
  },
  checkForm:function(e){
    var pname=e.detail.value.pname;
    var price=e.detail.value.price;
    console.log(pname);
    console.log(price);
    console.log(e.detail.value);
    var reg=/^\w{3,9}$/;
    // var reg1=/^\d{2,9}(\.[0-9]{1,2})$/;
    var reg1=/^\d{2,9}$/;
    if(!reg1.test(price)){
      console.log("价格不符合");
      wx.showToast({
        title: '商品价格格式不正确',
      });
      return;

      // var url2="http://127.0.0.1:3000/saveP";
      // wx.request({
      //   url: url2,
      //   data:{pname,price},
      //   success:res=>{
      //     if(res.data.code==1){
      //       wx.showToast({
      //         title: '添加成功',
      //       });
      //       setTimeout(function(){
      //         wx.hideToast();
      //       },1500)
      //     }
      //   }
      // })


    }else{
      var url ="http://127.0.0.1:3000/saveP";
    wx.request({
      url: url,
      data:{pname,price},
      method:"GET",
      success:(res)=>{
        if (res.data.code == 1) {
          wx.showToast({
            title: '添加成功',
          });
          setTimeout(function () {
            wx.hideToast();
          }, 1500);
          //清除用户原有输入内容
          this.setData({
            pn: "",
            pr: ""
          })
        }
      }
    })
    }
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
// pages/saveMessage/saveMessage.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  selectImg:function(){
    wx.chooseImage({
      count:1,
      sourceType:["camera","album"],
      success:(res)=>{
        // console.log(res.tempFilePaths);
        var pic=res.tempFilePaths[0];
        wx.uploadFile({
          url: 'http://127.0.0.1:3000/upload',
          filePath: pic,
          name: 'mypic',
          header:{
            "Content-type":"multipart/form-data"
          },
          formData:{id:20,message:"年终大促"},//上传图片可以携带参数
          success:(res)=>{
            console.log(res);
          }
        })
      }
    })
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
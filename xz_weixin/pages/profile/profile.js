// pages/profile/profile.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 1.创建播放与暂停条件
    isPlay:false,
  },
  onMusicTap:function(){
    // 2.如果当前判断条件false 音乐暂停
    if(!this.data.isPlay){
      wx.playBackgroundAudio({
        dataUrl:"http://127.0.0.1:3000/bg.mp3"
      });
      this.setData({isPlay:true});
    }else{
      wx.pauseBackgroundAudio();
      this.setData({isPlay:false,})
    }
    // 3.播放背景音乐
    // 4.如果当前判断条件true 音乐播放
    // 5.暂停背景音乐
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
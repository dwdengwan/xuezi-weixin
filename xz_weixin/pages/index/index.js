//index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[],//九宫格
    list1:[],//轮播图
    list2: [
      { id: 1, img: "../../assets/images/link-01.png" },
      { id: 2, img: "../../assets/images/link-02.png" },
    ],
  },
  handTap1:function(e){
    console.log(11111);
    // var id=e.target.dataset.id;
    var id = e.currentTarget.dataset.id;
    var page="/pages/shoplist/shoplist";
    if(id==1){
      wx.navigateTo({
        url: '/pages/shoplist/shoplist?id=' + id,
      })
      // page ="/pages/shoplist/shoplist";
    }
    wx.navigateTo({url: page+"?id="+id,});
    console.log(e);
    console.log(id);
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log(this.list);
    this.getImages();
    this.getNavImages();
  },
  getImages:function(){
    //获取轮播图片信息
    var url ="http://127.0.0.1:3000/getImages";
    wx.request({
      url: url,
      data:{},
      method:"GET",
      success:(res)=>{
        // console.log(res);
        var data=res.data;
        this.setData({
          list1:data,
        })
      }
    })
  },
  getNavImages:function(){
    //获取九宫格信息
    var url1 ="http://127.0.0.1:3000/getNavImage";
    wx.request({
      url: url1,
      method:"GET",
      data:{},
      success:(res)=>{
        // console.log(res);
        this.setData({
          list:res.data,
        })
      }
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    // console.log(this.list);
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    // console.log(this.list);
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

// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[],
    name: 'Aliwen小栈',
    age: 18,
    students:[
      {id:1,name:'aaa',age:12},
      {id:2,name:'bbb',age:14},
      {id:3,name:'ccc',age:16}
    ],
    counter: 0
  },
  handleBtnClick(){
    this.setData({
      counter: this.data.counter + 1
    })
  },
  handleBtnCut(){
    this.setData({
      counter: this.data.counter - 1
    })
  },
  handleGetUserInfo(event){
    console.log(event)
  },
  // 页面发送网络请求
  onLoad(){
    console.log('onLoad')
    wx.request({
      url: 'http://123.207.32.32:8000/recommend',
      success: (res)=>{
        console.log(res)
        const data = res.data.data.list;
        this.setData({
          list: data
        })
      }
    })
  }
})
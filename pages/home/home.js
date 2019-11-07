// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
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
  }
})
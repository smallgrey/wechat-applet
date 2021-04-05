// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
	tabbarIndex: 0, //默认显示  tab1
    list: [
	  {
		"text": "首页",
		"iconPath": "/images/tab/11.png",
		"selectedIconPath": "/images/tab/12.png",
		dot: true
	  },
	  {
		"text": "我的",
		"iconPath": "/images/tab/32.png",
		"selectedIconPath": "/images/tab/31.png",
		badge: 'New'
	  }
	]
  },
  tabChange(e) {
    let index = e.detail.index; // 获取到底部栏元素的下标
	this.setData({
		tabbarIndex: index
	})
  }
})

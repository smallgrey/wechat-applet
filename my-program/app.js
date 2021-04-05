// app.js
import userModel from './api/userModel';
const User = new userModel();
App({
  globalData: {
    userInfo: null,
    headerHeight : 0,
		statusBarHeight : 0,
  },
  onLaunch() {
    const { model, system, statusBarHeight } = wx.getSystemInfoSync();
		var headHeight;
		if (/iphone\s{0,}x/i.test(model)) {
		  headHeight = 88;
		} else if (system.indexOf('Android') !== -1) {
		  headHeight = 68;
		} else {
		  headHeight = 64;
		}
		this.globalData.headerHeight = headHeight;
		this.globalData.statusBarHeight = statusBarHeight;
    
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
    
    return
    // 登录
    wx.login({
      success: res => { // 发送 res.code 到后台换取 openId, sessionKey, unionId
        User.login({code: res.code}).then(ret => {
        })
      }
    })
  }
})

var app = getApp()
Component({
	properties: {
	},
	options: {
		addGlobalClass: true,
		styleIsolation: 'apply-shared' ,
	},
	data: {
		headerHeight: app.globalData.headerHeight,
		statusBarHeight: app.globalData.statusBarHeight,
	},
	// 组建方法列表
	methods: {
		init () {
		},
	},
	ready:function(){
		let that = this
		that.init()
	}
	
})
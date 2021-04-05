const MsgList = [
	{code: 200, msg: '成功'},
	{code: 1001, msg: '获取微信信息失败!'},
]

function UserMsg(code){
	let res = MsgList.find((item) => {
		return item.code == code
	})
	return res;
}

module.exports = {UserMsg}
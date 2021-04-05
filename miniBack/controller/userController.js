const { UserMsg } = require('../msgCode/userMsg');
const { getWxUserOpenId } = require('../wx/wxUser');
 
class UserControler {
	//登录
	static async login(ctx) {
		let response = {}
		const code = ctx.query.code;
		let ret = await getWxUserOpenId(code).then((res)=> {
			return JSON.parse(res)
		}, (error) => {
			return error
		})
		
		if(!ret.openid){
			return UserMsg(1005);
		}
		response = Object.assign({}, UserMsg(200), ret) 
		return response;
	}
}

module.exports = UserControler;
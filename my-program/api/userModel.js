import Request from '../utils/Request'
class userModel extends Request {
	
  login (params) {
    return this.request('user/login', params, {}, "GET")
  }
  
}

export default userModel
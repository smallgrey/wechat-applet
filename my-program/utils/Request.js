const nodeApi = 'http://localhost:3000/'; // 接口地址

class Request {
  request(url, params, header, method = 'POST', customUrl = false) {
    wx.showLoading({
      title: '正在加载',
      mask: true
    });
    if (!customUrl) {
      url = nodeApi + url;
    }
    if (method.toUpperCase() === 'POST') {
      header = {
        ...header,
        ...{
          'content-type': 'application/x-www-form-urlencoded'
        }
      }
    }
    return new Promise((resolve, reject) => {
      wx.request({
        url: url,
        data: params,
        header: header,
        method: method.toUpperCase(),
        success(res) {
		      wx.hideLoading();
          res = res.data;
          if (res.code == 200) {
            resolve(res);
          } else {
            reject();
          }
        },
        fail(error) {
          reject();
          wx.hideLoading();
        }
      });
    }).catch((e) => {
       wx.hideLoading();
    });
  }
}

export default Request;
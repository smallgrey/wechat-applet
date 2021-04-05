var express = require("express");
var http = require('http');
var app = express();

const UserController = require('./controller/userController');

// 静态资源托管
app.use(express.static("./static"))

app.get('/', function(req, res){
	res.send('Hello,my-program Server'); //服务器响应请求
});

// 系统登录
app.get('/user/login', async function(req, res){
	let result = await UserController.login(req);
	res.send(result);
});

var httpServer = http.createServer(app);
const PORT = 3000;
const hostname = '0.0.0.0';
httpServer.listen(PORT,hostname, function() {
    console.log('my-program Server is running on: https://'+hostname+':%s', PORT);
});
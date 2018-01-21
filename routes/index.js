var express = require('express');
var router = express.Router();
//把，model对象引进来
var UserModel = require("../model/User");
var GoodModel = require("../model/Good");
var md5 = require("md5");
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
//登录注册页面
router.get('/doudou', function(req, res, next) {
  res.render('doudou', { title: '' });
});
//登录的路由
router.post("/api/doudou4ajax", function(req, res, next){
	var inp1 = req.body.inp1;
	var psw = req.body.psw; 
	var result={
				code:1,
				message:"登录成功"
			};
	UserModel.find({inp1:inp1,psw:md5(psw)},function(err,docs){
			if(docs.length==0){
				result.code = -101,
				result.message = "请检查您的账号或密码"
			};
			res.json(result)
	})
});
//注册的路由
router.post('/api/doudou4ajax', function(req, res, next) {
		//取到账号密码
  	var inp1=req.body.inp1;
  	var psw=req.body.psw;
  	//成功信息
  	var result={
  			code:1,
  			message:"注册成功"
  		};
  		//查询用户名是否存在
  		UserModel.find({inp1:inp1},function(err,docs){
  			//如果用户名已经存在 >0
  			if(docs.length>0){
  				result.code= -109;
  				result.message="用户名已存在";
  				res.json(result);
  				return;
  			}
  			//model文件检查账号密码的格式 和传入数据库的时间
  			var um = new UserModel();
		  	um.inp1=inp1;
		  	//md5 加密
		  	um.psw=md5(psw);
		  	um.save(function(err){
		  		if(err){
		  			result.code = -100,
		  			result.message0="注册失败"
		  			res.send("用户名重复，请换一个")
		  		}
		  		res.json(result)
		  	});
		  })
});
//后台管理页面
router.get('/doudoufie', function(req, res, next) {
  res.render('doudoufie', { title: 'Express' });
});
//添加数据
router.post("/ajaxshop", function(req, res, next) {
			//取值
			var shoppnum = req.body.shoppnum;
			var shoppname = req.body.shoppname;
			var shoppnum2 = req.body.shoppnum2;
			var shoppxiao = req.body.shoppxiao;
			var shoppkucun = req.body.shoppkucun;
			var shoppprice = req.body.shoppprice;
			//保存
			var gm = new GoodModel();
			gm.shoppnum = shoppnum;
			gm.shoppname = shoppname;
			gm.shoppnum2 = shoppnum2;
			gm.shoppxiao = shoppxiao;
			gm.shoppkucun = shoppkucun;
			gm.shoppprice = shoppprice;
			gm.save(function(err){
				var result={
  			code:1,
  			message:"添加成功"
  		};
					if(err){
							result.code = -100;
		  				result.message="添加失败";
		  				res.send("添加失败");
		  				return
					}
					res.json(result);
			});
});
//拿取数据
			router.post('/doudou', function(req, res, next) {
  		var shoppnum = req.body.shoppnum;
  		GoodModel.find({},function(err,docs){
  			console.log(docs.length);
  			res.json(docs)
  		});
  	})
module.exports = router;

//引入模块
var mongoose = require("mongoose")
var Schema = mongoose.Schema;
	var Good = new Schema({
		shoppnum    : Number,
	    shoppname   : String,
	    shoppnum2   : Number,
	    shoppxiao   : Number,
	    shoppkucun  : Number,	
	    shoppprice  : Number,
	    create_date: { type: Date, default: Date.now }
	});
	// 创建model对象
	var GoodModel = mongoose.model('yang', Good);
	// 公开对象，暴露接口
	module.exports = GoodModel;
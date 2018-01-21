//引入模块
var mongoose = require("mongoose")
var Schema = mongoose.Schema;
	var User = new Schema({
	    inp1   : String,
	    psw        : String,
	    age        : Number,
	    create_date: { type: Date, default: Date.now }
	});
	// 创建model对象
	var UserModel = mongoose.model('user', User);
	// 公开对象，暴露接口
	module.exports = UserModel;
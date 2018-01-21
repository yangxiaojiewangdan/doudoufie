//
for(var i = 0 ; i < $(".nav3 dl dt").length ; i++){
		$(".nav3 dl dt").eq(i).click(function(){
			if($(this).find(".dt1").css("display") == "none"){
				$(this).find(".dt1").css("display","block");
				$(this).children("i").attr("class","iconfont icon-jianhao");
			}else{
				$(this).find(".dt1").css("display","none")
				$(this).children("i").attr("class","iconfont icon-jiahao");
		}
	})
}
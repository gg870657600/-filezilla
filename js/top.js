//鼠标移动到导航栏弹出列表
function show(id){
  //设置一个变量用于接收id=t1的元素
  	var submenu=id.getElementsByTagName("ul")[0];
	submenu.style.display="block";
}
function hide(id){
  //设置一个变量用于接收id=t1的元素
  	var submenu=id.getElementsByTagName("ul")[0];
	submenu.style.display="none";
}
//登录验证
/*function loginCheck(){
	var host=document.getElementById("host").value;
	var username=document.getElementById("username").value;
	var password=document.getElementById("password").value;
	var port=document.getElementById("port").value;
	if (host!="主机地址" &&username!="返回的用户名" &&password!="返回的密码" &&port!="80") {
		alert("连接失败")
	}
}*/

function test(id){
	id.getElementsByTagName("li").style.display = "block";
}

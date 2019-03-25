function loginSubmit(){
	var username=$('#username').val();
	var password=$('#password').val();
	if (username.length==0){
		alert('请输入用户名');
		return;
	}
	if (password.length==0){
	    alert('请输入密码');
	    return;
	}
	$.ajax({
		url:"api/v2/ftp/conect",
		type:"post",
		dataType:"json",
		data:$('#form1').serialize(),
		success:function(data){
			console.log(data);
			if(data.code==0){
				alert("success");
				$('.login-1').attr('disabled',true)
				$('.submit').attr('disabled',false)
			}
			else{
				alert("请输入正确的用户名或密码");
			}
		}
	})
}

function loginSubmit2(){
	$.ajax({
		url:"#",
		type:"post",
		dataType:"json",
		data:{
			'host':$('#host'),
			'username':$('#username'),
			'password':$('#password'),
			'port':$('#port')
		},
		success:function(result){
			console.log(result);
			if(result.code==0){
				alert("success");
			}
			else{
				alert("fail");
			}
			}
	})
}

function loginSubmit3(){
	var formdata=new new FormData(document.querySelector('form1'))
	$.ajax({
		url:"#",
		type:"post",
		dataType:"json",
		data:formdata,
		success:function(result){
			console.log(result);
			if(result.code==0){
				alert("success");
			}
			else{
				alert("fail");
			}
			}
	})
}

function fileSubmit(){
	if($('#upload').val()==""){
		alert('请选择文件');
 		return;
		}
	$('.submit').click(function(){

		var file=new FormData($('#file-push')[0]);
		$.ajax({
			type:"post",
			url:"upload",
			data:file,
			processData:false,
			contentType:false,
			success:function(result){
				if(result.code==0){
					alert("上传成功");
				}
				else if(result.code==-1){
					alert("上传失败");
				}
			}
		})
	})
}
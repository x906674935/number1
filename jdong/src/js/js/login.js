let nameBox = $('.login_name');
let passwordBox = $('.login_password');
let userName  = $('#zhanghao');
let uninfo= $('.u-n-info');
let mminfo = $('.m-m-info');
let mima = $('#mima');
let btn = $('.goNext');

btn.on('click',function(){
    let key = true;let key1 = true;
    if(!userName.val() ){
        nameBox.css('border-color','red');  
        uninfo.html("请输入账号后再登录");   
        key = false;
    };
    if( !mima.val()){
        passwordBox.css('border-color','red');
        mminfo.html("请输入密码后再登录"); 
        key1 = false;  
    };
    if(key && key1){
        $.get('../php/login.php',{uname:userName.val(),pwd:mima.val()},function(data){
            let dataObj = $.parseJSON(data);
            alert(dataObj.info);
            if(dataObj.state == 1){
                setCookie("uName",userName.val(),7);
                setCookie("uPwd",mima.val(),7);
                window.location.href = 'http://10.9.48.215/JD/index.html';
            }
        })  
    }
})
userName.on({
    'focus' : function(){
        nameBox.css('border-color','#ccc');
        uninfo.html("");  
    }
})
mima.on({
    'focus' : function(){
        passwordBox.css('border-color','#ccc');
        mminfo.html("");  
    }
})
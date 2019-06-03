
//添加一个cookie
function setCookie(cName,cVal,expires){
    var d = new Date;
    d.setDate(d.getDate() + expires);
    document.cookie = cName + '=' +　cVal + ';path=/;expires=' + d.toGMTString();
};                               //时间.toGMTString()转成格林威治时间或是北京时间小时-8也行；
  
//获取cookie
function getCookie(cName){
    //获取所有的cookie
    var cookieStr = document.cookie;
    //将所有的cookie转成数组
    var cookieArr = cookieStr.split('; ');
    //遍历数组
    for(var i = cookieArr.length - 1;i >= 0 ;i--){
        var smallArr = cookieArr[i].split('='); 
        if(smallArr[0] == cName){
            return smallArr[1];
        }
    }
};

//删除cookie
function removeCookie(cName){
    setCookie(cName,null,-1);   //把该名字的cookie设置成过期时间
}
//随机生成m到n的数
function getNum(m,n){
    var code = 0;
    code = parseInt(Math.random() * (n - m + 1) + m )
    return code;        
}
//计算任意2个数字之间的和
function sum(m,n){
    if(m > n){
        su = (m + n) * (m - n + 1) / 2;
        return su;
    }
    else{
        su = (m + n) * (n - m + 1) / 2;
        return su;
    }
}
//求整数num从右边开始第k位数字的值，不存在第k位则返回0;
function digit(num,k){
    var a = Math.pow(10,k-1);
    var b = parseInt(num / a);
    var c = b % 10;
    if(b < 1){
        return 0;
    }
    else{
        return c;
    }
}
//编写一个函数计算一个（整数）数字的长度
function long(num){
    for(var a = 10,b = 0,c = 1;a > 0;a *= 10){
        b++;
        c = num / a;
        if(c < 1){
            return b;
        }
        else{
        }
    }
}
//输入任意2个0~9的数字，查询所能组成的所有00~99之间的奇数;
function  odd(a,b){
    if(a > b){  
        for(var c = b, sum = 0;c <= a; c++){
            if(c % 2 != 0){
                for(var d = a ;d >= b;d--){
                    var pro = d * 10 + c;
                    sum++;
                    //console.log(pro);
                    //return pro;
                    //document.write(pro + "&nbsp;");
                }
            }
        }
        return sum;
    }
    if(a < b){  
        for(var c = a;c <= b; c++){
            if(c % 2 != 0){
                for(var d = b;d >= a;d--){
                    var pro = d * 10 + c;
                    //console.log(pro);
                    //return pro;
                    document.write(pro + "&nbsp;");
                }
            }
        };
    }
    if(a == b){
        if(a % 2 != 0){
            var c = a * 10 + b;
            return c;
        }
        else{
            return ("一个都没有");
        }
    } 
}
//公司采用公用电话传递数据，数据是四位的整数，在传递过程中是加密的，加密规则如下:每位数字都加上5,
//然后用除以10的余数代替该数字，再将第一位和第四位交换，第二位和第三位交换，请编写一个函数， 传入原文，输出密文
function encrypt(a,b,c,d){
    var e = a,
        f = b,
        g = c,
        h = d;
    e += 5; f += 5; g += 5; h += 5;
    e %= 10; f %= 10; g %= 10; h %= 10;
    var temp = e;
        e    = h;
        h    = temp;
        temp = f;
        f    = g;
        g    =temp;
    return [e,f,g,h];
    //document.write(e,f,g,h);
}
//返回最大值
    function getMax(){
        for(i = 0,k = -Infinity;i < arguments.length;i++){
            if(k < arguments[i]){
                k = arguments[i];
            }
        }
        return k;
    }
// 编写函数norepeat(arr) 将数组的重复元素去掉；（用选择排序思想）
    function norepeat (arr){
        for(var i = 0;i < arr.length - 1;i++){
            for (var k = i + 1;k < arr.length; k++){
                if(arr[i] == arr[k]){
                    arr.splice(k,1);
                    k--;
                }
            }
        }
        return arr;
     }
//封装功能“有一个从小到大排好序的数组。现输入一个数，要求按原来的规律将它插入数组中”（解决最大不能插入问题,用到开关门）
function jia(num,arr){
    for(var i = 0;i < arr.length;i++){
        if(num <= arr[0]){
            arr.unshift(num);
            break;
        }
        else if(num >= arr[i] && num <= arr[i + 1]){
            arr.splice(i + 1,0,num);
            break;
        }
        else if (i == arr.length - 1){
            arr.push(num);
            break;
        }
       
    }
    return arr;
}
//获取一个随机颜色（建立在获取随机数的基础上）:
function randomColor(){
    var yan = "";
    for(var i = 1;i <= 3;i++ ){
        var data = getNum(0,255);
        if(i < 3){
            yan += data + ",";
        }
        else{
            yan += data;
        }
        
    }
    return ( "rgb(" + yan + ")");
}
 //输入时间(参数越大,速度越块),使得页面返回顶部
 function goTop(k){
    var scrollTop = document.documentElement.scrollTop||document.body.scrollTop;
    var timer = setInterval(function(){
        scrollTop -= k;
        if(scrollTop <= 0){
            clearInterval(timer);
        }
        document.documentElement.scrollTop = document.body.scrollTop = scrollTop;
    },1)
}
//生成一个比较炫酷的表格:
function hasTable(hang,lie){
    var table  = document.createElement("table");
    document.body.appendChild(table);
    for(var i = 0;i < hang;i++){
        var tr = document.createElement("tr")
        table.appendChild(tr);
        for(var k = 0;k < lie; k++){
            var td = document.createElement("td")
            tr.appendChild(td);
            td.style.background = randomColor();
            td.innerHTML = getNum(10000,99999);
            td.style.color = randomColor();
        }
        var del = document.createElement("input");
        tr.appendChild(del);
        del.className = 'delClass';del.type = "button";del.value = "DELETE";
        del.onclick = function(){
            this.parentElement.remove();
        }
        del.style.background = randomColor();  
    } 
}
//获取非行间样式
function getStyle(ele,attr){
    return ele.currentStyle ? ele.currentStyle(attr) : getComputedStyle(ele,null)[attr];
}
//阻止浏览器默认行为
 function preventDefault(e){
    return e.preventDefault ? e.preventDefault() : e.returnValue = false;
 }
 
 //事件监听（添加DOM2级事件）
 function addEventListener(ele,eventType,fn){
    return ele.addEventListener ? ele.addEventListener(eventType,fn) : ele.attchEvent("on" + eventType,fn);
 }

 //阻止事件冒泡(点谁仅触发谁)
 function stoppropagation(e){
     return e.stopPropagation ? e.stopPropagation() : e.cancleBubble = true;
 }
 //添加class类名
 function addClass(ele,name){
    var oldName = ele.className;
    var reg = new RegExp("\\s","g")
    var newName = name.replace(reg,"");
    var reg1 = new RegExp('(\\s|^)' + newName + '(\\s|$)');
    var res = reg1.test(oldName);
    if (res){
        return ;
    }
    else{
        ele.className += " " +newName;
        return;
    }
}

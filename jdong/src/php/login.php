<?php
    //设置编码格式
    header("content-type:text/html;charset:utf8");
    include("public.php");

    //拿到用户输入的账号和密码
    $userName = $_REQUEST['uname'];
    $passWord = $_REQUEST['pwd'];


    $sql = "select * from jingdong where zhanghao = '$userName'";

    $res = mysqli_query($connect,$sql);


    $key = true;   
    foreach($res as $arr){
        $key = false;
        if($arr['mima'] == $passWord){
            echo json_encode(array(
                "state" => "1",
                "info" => "登录成功",
            ));
        }else{
            echo json_encode(array(
                "state" => "0",
                "info" => "密码错误，登录失败",
            ));
        }
    }
    if($key){
        echo json_encode(array(
            "state" => "0",
            "info" => "用户名不存在，登录失败"
        ));
    }
           
?>
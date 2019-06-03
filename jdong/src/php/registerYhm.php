<?php
    header("content-type:text/html;charset:utf8");
    include("public.php");

    $userName = $_REQUEST['zhanghao'];
    $sql = "select * from jingdong where zhanghao = '$userName'";

    $res = mysqli_query($connect,$sql);


    $key = true;          //使用开关门，防止$res为空的时候不进入循环，不能添加信息！
    $key1= true;
    foreach($res as $arr){        
        $key = false;
        if($arr['zhanghao']){  
            $key1 = false;        
            echo json_encode(array(
                "state" => "0",
                "info" => "用户名重复"
            ));
        };
    };
    if($key1){
        echo json_encode(array(
            "state" => "2",
            "info" => "用户名可以使用"
        ));
    };
?>
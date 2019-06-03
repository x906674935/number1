<?php
    header("content-type:text/html;charset:utf8");
    include("public.php");

    $userName = $_REQUEST['zhanghao'];
    $passWord = $_GET['mima'];
    $sql = "select * from jingdong where zhanghao = '$userName'";

    $res = mysqli_query($connect,$sql);

    $sql1 = "insert into jingdong (zhanghao,mima) values ('$userName','$passWord')";
    $res1 = mysqli_query($connect,$sql1);
    if($res1){
        echo json_encode(array(
            "state" => "1",
            "info" => "注册成功"
        ));
    };
?>
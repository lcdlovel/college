<?php
header('Content-Type: application/json;charset=UTF-8');
require_once("init.php");
@$kw=$_REQUEST["kw"];
$sql="SELECT sid FROM college_list WHERE sname='$kw'";
$result=mysqli_query($conn,$sql);
$row=mysqli_fetch_assoc($result);
if($row!=null){  
    echo json_encode(["code"=>1,"sid"=>$row["sid"]]);
    }else{
    echo json_encode(["code"=>-1,"msg"=>'您输入的学校不存在或者404']);
    }
?>
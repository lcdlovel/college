<?php
header('Content-Type:application/json;charset=UTF-8');
require("init.php");
@$uname=$_REQUEST["uname"];
@$phone=$_REQUEST["phone"];
@$upwd=$_REQUEST["upwd"];
$sql="INSERT INTO user VALUES(null,'$uname','$upwd',null,'$phone')";
mysqli_query($conn,$sql);

?>
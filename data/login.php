<?php
header('Content-Type:application/json;charset=UTF-8');
require("init.php");
@$phone=$_REQUEST["phone"];
@$email=$_REQUEST["email"];
@$upwd=$_REQUEST["upwd"];
if($phone==null){
$sql="SELECT * FROM user WHERE email='$email' upwd='$upwd'";
}else{
$sql="SELECT * FROM user WHERE phone='$phone' and upwd='$upwd'";
}
$result=mysqli_query($conn,$sql);

if($result!=false){
	$row=mysqli_fetch_assoc($result);
	echo json_encode(["istrue"=>true,"row"=>$row]);
}else{
	echo json_encode(["istrue"=>false,"row"=>$row]);
}
?>
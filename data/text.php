<?php
header('Content-Type:application/json;charset=UTF-8');
require("init.php");
@$uname=$_REQUEST["uname"];
$sql="SELECT uname FROM user WHERE uname='$uname'";
$result=mysqli_query($conn,$sql);
$row=mysqli_fetch_assoc($result);
if($row==null){
	echo json_encode(["istrue"=>false]);
}else{
	echo json_encode(["istrue"=>true]);
}
?>
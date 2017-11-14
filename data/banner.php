<?php
require("init.php");
@$sid=$_REQUEST["sid"];
$sql="SELECT banner1,banner2,banner3,banner4 FROM banner WHERE sid='$sid'";
$result=mysqli_query($conn,$sql);
$row=mysqli_fetch_assoc($result);
if($row!=null){
    echo json_encode($row);
}else{
    echo "查询失败".$sql;
}
?>
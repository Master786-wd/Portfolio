<?php


if(isset($_POST['go'])){
$name=$_POST['name'];
$email=$_POST['email'];
$phone=$_POST['phone'];
$subject=$_POST['subject']; 
$msg=$_POST['message'];
$to = "manmax730@gmail.com";
$txt = "Name :".$name."\n"."Phone :".$phone."\n"."Wrote the following :"."\n\n".$msg;
$headers = "From: .$email";

mail($to,$subject,$txt,$headers);

	echo '<script>alert("Mail Sent!")</script>';
}
else
{

	echo'<script>alert("Mail Not Sent...")</script>';
}
?>
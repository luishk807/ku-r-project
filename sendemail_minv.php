<?php
session_start();
$check=0;
$task=$_REQUEST["task"];
$name = ucwords(strtolower($_REQUEST["namex"]));
$name = trim($name);
$phone = trim($_REQUEST["phone"]);
$email = trim(strtolower($_REQUEST["email"]));
$comment = trim($_REQUEST["commentary"]);
$subject = "Email of Investor From drinkkur.com By ".$name;
$message = $name." requested to be contacted";
$message .="<br/><br/>".$name." contact information is as follows: <br/><br/>";
$message .="Name: ".$name."<br/>";
$message .="Phone: ".$phone."<br/>";
$message .="Email: ".$email."<br/>";
if(!empty($message))
{
	$message .="<br/><br/>";
	$message .="Comment or question left by ".$name.":<br/>";
	$message .=nl2br($comment);
}
$headers  = 'MIME-Version: 1.0'."\r\n";
$headers .='Content-type: text/html; charset=iso-8859-1' . "\r\n";
$headers .="From: drinkkur.com<no-reply@drinkkur.com>\r\n"."X-Mailer: PHP/".phpversion();
//$email_to="luishk807@hotmail.com";
if(!empty($name) && !empty($comment))
{
$email_to="dmajor@drinkkur.com";
if(@mail($email_to,$subject, $message,$headers))
	$check++;
$email_to="investorrelations@drinkkur.com";
if(@mail($email_to,$subject, $message,$headers))
	$check++;
}
if(empty($task))
{
	if($task=="invms")
	{
		if($check>0)
			echo "Email Sent";
		else
			echo "Thank You";
	}
	else
	{
		if($check>0)
			echo "answer=ok";
		else
			echo "answer=error";
	}
}
else
{
	if($check>0)
		$_SESSION["kurresult"]=="Email Sent, Thank You";
	else
		$_SESSION["kurresult"]=="Thank Your For Your Email";
	header("location:investor.php");
	exit;
}
?>
<?Php
session_start();
include "include/function.php";
if(detectAgent())
{
	$_SESSION["thankyou"]="yes";
	header("location:mobile/");
	exit;
}
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<link rel="stylesheet" type="text/css" href="css/stylen.css" />
<link rel="icon" type="image/png" href="images/favicon.ico">
<meta name="google-site-verification" content="Fixeg-qOO-HpapKk2vEje2V-KaRvStWaL3zZ2sFx2Rw" />
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Welcome to HangOverKUR.com || KÜR Your Hangover || Best Natural Hangover Support</title>
<script type="text/javascript" src="js/jscript.js"></script>
</head>
<body>
<div id="main_cont">
<?Php
include "include/header.php";
?>
    <div id="middle" style="height:500px">
   	  <div id="middle_left">
        	<div id="middle_left_in">
          	<br/><br/><span style="font-size:25pt; text-decoration:underline">Thank You For Your Purchase!</span>
        <span style="text-align:justify; font-family:'Lucida Sans Unicode'; font-size:14pt;"><br/><br/>
        We have received your order and payment.<bn/><br/>
        Please review your receipt.  If you have an email account; an email has been sent to your email account.<br/>
        <br/>
        If you have any questions please let us know as soon as possible.
		<br/><br/>
        On behalf of KÜR™ Team, we Thank You For Choosing Us!.
        </span>
        	</div>
        </div>
        <div id="middle_right"><img src="images/sp_ab2.jpg" border="0" align="top" /></div>
        <div id="divclear"></div>
    </div>
	<?Php
		include "include/footer.php";
	?>
</div>
</body>
</html>
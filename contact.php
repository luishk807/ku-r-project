<?Php
session_start();
include "include/function.php";
checkAgentDetect();
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<link rel="stylesheet" type="text/css" href="css/stylen.css" />
<link rel="icon" type="image/png" href="images/favicon.ico">
<meta name="google-site-verification" content="Fixeg-qOO-HpapKk2vEje2V-KaRvStWaL3zZ2sFx2Rw" />
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Welcome to DrinkKur.com || KÜR Your Hangover || Best Natural Hangover Support</title>
<script type="text/javascript" src="js/jscript.js"></script>
<script type="text/javascript">
function checkField()
{
	if(!errorcheck("normal","namex","Name Field can't be empty"))
		return false;
	if(!errorcheck("email","email","Enail Field can't be empty"))
		return false;
	if(!errorcheck("normal","commentary","Comment Field can't be empty"))
		return false;
	return true;
}
</script>
</head>
<body>
<div id="main_cont">
<?Php
include "include/header.php";
?>
    <div id="middle">
    	<div id="middle_left">
        	<div id="middle_left_in">
            <img src="images/sp_ct1.jpg" /><br/>
            <div id="middle_left_text" style="padding-left:18px; font-family:'Lucida Sans Unicode'">We love to hear from you; feedbacks are important to us.<br/>
For comments, feedback and other information: info@DrinkKur.com<br/><br/>
If you would like to carry KÜR™ in your establishment:  sales@DrinkKur.com.</div>
        	<span style="text-align:justify; font-size:12pt; font-family:'Lucida Sans Unicode'">
        		<form action="sendemail.php" method="post" onsubmit="return checkField(); ">
                <input type="hidden" id="task" name="task" value="s" />
                <table width="100%" border="0" cellspacing="0" cellpadding="0">
                  <tr>
                    <td height="41" colspan="2" align="center" valign="middle">
                    	<div id="message" name="message" class="white">
                          <?php
							if(isset($_SESSION["kurresult"]))
							{
								echo $_SESSION["kurresult"];
								unset($_SESSION["kurresult"]);
							}
						?>
                          </div>
                    </td>
                  </tr>
                  <tr>
                    <td width="42%" align="left" valign="middle"><img src="images/sp_ct_m1.jpg" alt="name" /></td>
                    <td width="58%" align="left" valign="middle"><input type="text" id="namex" name="namex" size="40" /></td>
                  </tr>
                  <tr>
                    <td align="left" valign="middle"><img src="images/sp_ct_m2.jpg" alt="email" /></td>
                    <td align="left" valign="middle"><input type="text" id="email" name="email" size="40" /></td>
                  </tr>
                  <tr>
                    <td align="left" valign="middle"><img src="images/sp_ct_m3.jpg" alt="phone" /></td>
                    <td align="left" valign="middle"><input type="text" id="phone" name="phone" size="40" /></td>
                  </tr>
                  <tr>
                    <td align="left" valign="top"><img src="images/sp_ct_m4.jpg" alt="message"/></td>
                    <td align="left" valign="middle"><textarea cols="30" rows="10" id="commentary" name="commentary"></textarea></td>
                  </tr>
                  <tr>
                    <td height="39" colspan="2" align="center" valign="middle"><div id="message2" name="message2" class="white"></div></td>
                  </tr>
                  <tr>
                    <td height="100" colspan="2" align="center">
                    <input type="image"  src="images/sp_ct_mb.jpg" onmouseover="javascript:this.src='images/sp_ct_mb.jpg';" onmouseout="javascript:this.src='images/sp_ct_mb.jpg';"></td>
                  </tr>
                </table>
                </form>
        	</span>
        	</div>
        </div>
        <div id="middle_right"><img src="images/sp_ct4.jpg" align="top" border="0" /></div>
        <div id="divclear"></div>
    </div>
	<?Php
		include "include/footer.php";
	?>
</div>
</body>
</html>
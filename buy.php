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
	var quan1 = document.getElementById("quan1").value;
	var quan2 = document.getElementById("quan2").value;
	if(quan1<1 && quan2<1)
	{
		document.getElementById("message2").innerHTML="Please write the quantity for a product";
		document.getElementById("quan1").style.background="#f6f583";
		document.getElementById("quan2").style.background="#f6f583";
		return false;
	}
	else
	{
		if(quan1>0 && quan2>0)
		{
			document.getElementById("item_name_1").value="Kur";
			document.getElementById("amount_1").value="4.99";
			document.getElementById("quantity_1").value=quan1;
			document.getElementById("item_name_2").value="Kur Pack of 12";
			document.getElementById("amount_2").value="39.99";
			document.getElementById("quantity_2").value=quan2;
		}
		else
		{
			if(quan1>0)
			{
				document.getElementById("item_name_1").value="Kur";
				document.getElementById("amount_1").value="4.99";
				document.getElementById("quantity_1").value=quan1;
				document.getElementById("item_name_2").value="";
				document.getElementById("amount_2").value="";
				document.getElementById("quantity_2").value="";
			}
			else if(quan2>0)
			{
				document.getElementById("item_name_1").value="Kur Pack of 12";
				document.getElementById("amount_1").value="39.99";
				document.getElementById("quantity_1").value=quan2;
				document.getElementById("item_name_2").value="";
				document.getElementById("amount_2").value="";
				document.getElementById("quantity_2").value="";
			}
		}
		document.getElementById("message2").innerHTML="";
		document.getElementById("quan1").style.background="";
		document.getElementById("quan2").style.background="";
	}
	return true;
}
</script>
</head>
<body>
<div id="main_cont">
<?Php
include "include/header.php";
?>
    <div id="middle" style="height:500px">
   	  <div id="middle_left">
        	<div id="middle_left_in">
            <img src="images/sp_buy1.jpg" /><br/>
        <span style="text-align:justify; font-family:'Lucida Sans Unicode'; font-size:14pt;">
        	<table width="100%" border="0" cellspacing="0" cellpadding="0">
             <form target="paypal"  name="payForm" action="https://www.paypal.com/cgi-bin/webscr" method="post" onsubmit="return checkField();">
             <input type="hidden" name="cmd" value="_cart">
            <input type="hidden" name="upload" value="1">
            <input type="hidden" name="business" value="dmajor@hangoverkur.com">
            <input type="hidden" name="currency_code" value="USD">
             <input type="hidden" name="shipping" value="10">
             <input type="hidden" name="tax_rate" value="8.875">
         	<input type="hidden" id="item_name_1" name="item_name_1" value="" />
            <input type="hidden" id="quantity_1" name="quantity_1" value="" />
            <input type="hidden" id="amount_1" name="amount_1" value="" />
            <input type="hidden" id="item_name_2" name="item_name_2" value="" />
            <input type="hidden" id="quantity_2" name="quantity_2" value="" />
            <input type="hidden" id="amount_2" name="amount_2" value="" />
              <tr>
                <td>&nbsp;</td>
                <td colspan="4" align="left" valign="middle"><div id="message" name="message" class="white"></div></td>
              </tr>
              <tr>
                <td height="53">&nbsp;</td>
                <td colspan="4" align="center" valign="middle">Pre-Order now Shipments are shipping Mid January.  We expect a large backlog of orders</td>
               </tr>
              <tr>
                <td width="3%">&nbsp;</td>
                <td width="31%" align="left" valign="middle"><img src="images/sp_buy3.jpg" alt="Products" /></td>
                <td width="19%" align="center" valign="middle"><img src="images/sp_buy7.jpg" alt="Quantity" /></td>
                <td width="23%" align="center" valign="middle"><img src="images/sp_buy4.jpg" alt="Quantity" /></td>
                <td width="24%" align="center" valign="middle"><img src="images/sp_buy5.jpg" alt="Subtotals" /></td>
              </tr>
              <tr>
                <td height="41">&nbsp;</td>
                <td align="left" valign="middle">KÜR™</td>
                <td width="19%" align="center" valign="middle">$4.99</td>
                <td width="23%" align="center" valign="middle"><input type="text" id="quan1" name="quan1" onkeyup="calc('quan1')" size="10"/></td>
                <td width="24%" align="center" valign="middle"><span id="sign1"></span><span id="sub1" name="sub1"></span></td>
                </tr>
              <tr>
                <td height="46">&nbsp;</td>
                <td align="left" valign="middle">KÜR™ Pack of 12</td>
                <td width="19%" align="center" valign="middle"><span style="font-family: 'Lucida Sans Unicode'; font-size: 14pt">$39.99</span></td>
                <td width="23%" align="center" valign="middle"><input type="text" id="quan2" name="quan2" onkeyup="calc('quan2')" size="10"/></td>
                <td width="24%" align="center" valign="middle"><span id="sign2"></span><span id="sub2" name="sub2"></span></td>
                </tr>
              <tr>
                <td>&nbsp;</td>
                <td colspan="4"><hr/></td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td align="left" valign="middle"><img src="images/sp_buy10.jpg" alt="Tax" /></td>
                <td colspan="2">&nbsp;</td>
                <td align="center" valign="middle">8.875%</td>
              </tr>
              <tr>
                <td height="48">&nbsp;</td>
                <td align="left" valign="middle"><img src="images/sp_buy6.jpg" alt="Total" /></td>
                <td colspan="2">&nbsp;</td>
                <td width="24%" align="center" valign="middle"><span id="sign0"></span><span id="total" name="total"></span></td>
                </tr>
              <tr>
                <td height="23">&nbsp;</td>
                <td colspan="4" align="left" valign="middle"><span style="font-size:11.5pt">* Shipping fees will be included in the checkout page</span></td>
               </tr>
              <tr>
                <td>&nbsp;</td>
                <td colspan="4" align="center" valign="middle"><div id="message2" name="message2" class="white"></div></td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td height="100" colspan="4" align="right" valign="middle"><input type="image" src="images/checkbtn.jpg" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!"></td>
              </tr>
            </form>
            </table>
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
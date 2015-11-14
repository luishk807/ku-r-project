var xmlHttpReq = null;
function getHttpPost() 
{
	try{			
		xmlHttpReq=new XMLHttpRequest();// Firefox, Opera 8.0+, Safari
	}catch (e)
	{		
		try{			
			xmlHttpReq=new ActiveXObject("Msxml2.XMLHTTP"); // Internet Explorer
		}catch (e)
		{		    
			try{				
				xmlHttpReq=new ActiveXObject("Microsoft.XMLHTTP");	
			}catch (e)
			{				
				alert("No AJAX!?");				
				return false;			
			}		
		}	
	}
}
function sendEmail(namex,email,phone,comment,cont)
{
	getHttpPost();
	clearCForm()
    xmlHttpReq.onreadystatechange = function() 
	{
   		if(xmlHttpReq.readyState == 4) 
		{
           document.getElementById(cont).innerHTML="Email Sent";
        }
    }
	commentx=convertlb(comment);
	var url = "../sendEmail_m.php?task=ms&namex="+namex+"&email="+email+"&commentary="+commentx+"&phone="+phone;
	xmlHttpReq.open('POST',url, true);
	//xmlHttp.setRequestHeader("If-Modified-Since", "Sat, 1 Jan 2000 00:00:00 GMT");
    xmlHttpReq.send(null);
}
function sendEmailinv(namex,email,phone,comment,cont)
{
	getHttpPost();
	clearCForm()
    xmlHttpReq.onreadystatechange = function() 
	{
   		if(xmlHttpReq.readyState == 4) 
		{
           document.getElementById(cont).innerHTML="Email Sent";
        }
    }
	commentx=convertlb(comment);
	var url = "../sendEmail_minv.php?task=invms&namex="+namex+"&email="+email+"&commentary="+commentx+"&phone="+phone;
	xmlHttpReq.open('POST',url, true);
	//xmlHttp.setRequestHeader("If-Modified-Since", "Sat, 1 Jan 2000 00:00:00 GMT");
    xmlHttpReq.send(null);
}
function convertlb(str)
{
	str = str.replace( /\n/, '<br>' );
	if(str.length>0 && str !="")
	{
		return str;
	}
}
function clearCForm()
{
	document.getElementById("namex").value="";
	document.getElementById("email").value="";
	document.getElementById("phone").value="";
	document.getElementById("commentary").value="";
	document.getElementById("namex").style.background="";
	document.getElementById("phone").style.background="";
	document.getElementById("email").style.background="";
	document.getElementById("commentary").style.background="";
	document.getElementById("message2c").innerHTML="";
}
function clearCForm_inv()
{
	document.getElementById("namexi").value="";
	document.getElementById("emaili").value="";
	document.getElementById("phonei").value="";
	document.getElementById("commentaryi").value="";
	document.getElementById("namexi").style.background="";
	document.getElementById("phonei").style.background="";
	document.getElementById("emaili").style.background="";
	document.getElementById("commentaryi").style.background="";
	document.getElementById("message2d").innerHTML="";
}
function errorcheckx(task,vars,message,cont)
{
	var color = "#f6f583";
	var variable = document.getElementById(vars).value;
	if(task=="text")
	{
		if(variable.length==0 || isNaN(variable)==false)
		{
			document.getElementById(vars).style.background=color;
			document.getElementById(cont).innerHTML=message;
			return false;
		}
		else
		{
			document.getElementById(vars).style.background="";
			document.getElementById(cont).innerHTML="";
		}
	}
	if(task=="select")
	{
		if(variable=="0")
		{
			document.getElementById(cont).innerHTML=message;
			return false;
		}
		else
		{
			document.getElementById(cont).innerHTML="";
		}
	}
	else if(task=="number")
	{
		if(variable.length==0 || isNaN(variable)==true)
		{
			document.getElementById(vars).style.background=color;
			document.getElementById(cont).innerHTML=message;
			return false;
		}
		else
		{
			document.getElementById(vars).style.background="";
			document.getElementById(cont).innerHTML="";
		}	
	}
	else if(task=="normal")
	{
		if(variable.length==0)
		{
			document.getElementById(vars).style.background=color;
			document.getElementById(cont).innerHTML=message;
			return false;
		}
		else
		{
			document.getElementById(vars).style.background="";
			document.getElementById(cont).innerHTML="";
		}
	}
	else if(task=="email")
	{
		var email = document.getElementById(vars).value;
		if(email.length !=0)
		{
			if(variable.length==0 || ((variable.indexOf(".")<2) && (variable.indexOf("@")<=0)))
			{
				document.getElementById(vars).style.background=color;
				document.getElementById(cont).innerHTML=message;
				return false;
			}
			else
			{
				document.getElementById(vars).style.background="";
				document.getElementById(cont).innerHTML="";
			}
		}
		else
		{
			document.getElementById(vars).style.background="";
			document.getElementById(cont).innerHTML="";
		}
	}
	else if(task=="emailf")
	{
		var email = document.getElementById(vars).value;
		if(variable.length==0 || ((variable.indexOf(".")<2) && (variable.indexOf("@")<=0)))
		{
			document.getElementById(vars).style.background=color;
			document.getElementById(cont).innerHTML=message;
			return false;
		}
		else
		{
			document.getElementById(vars).style.background="";
			document.getElementById(cont).innerHTML="";
		}
	}
	else if(task=="selects")
	{
		if(document.getElementById(vars).selectedIndex==0)
		{
			document.getElementById(cont).innerHTML=message;
			return false;
		}
		else
		{
			document.getElementById(cont).innerHTML="";
		}
	}
	else if(task=="checksa")
	{
		if(document.getElementById(vars).checked==false)
		{
			document.getElementById(cont).innerHTML=message;
			return false;
		}
		else
		{
			document.getElementById(cont).innerHTML="";
		}
	}
	return true;
}
function errorcheck(task,vars,message)
{
	var color = "#f6f583";
	var variable = document.getElementById(vars).value;
	if(task=="text")
	{
		if(variable.length==0 || isNaN(variable)==false)
		{
			document.getElementById(vars).style.background=color;
			document.getElementById("message2").innerHTML=message;
			return false;
		}
		else
		{
			document.getElementById(vars).style.background="";
			document.getElementById("message2").innerHTML="";
		}
	}
	if(task=="select")
	{
		if(variable=="0")
		{
			document.getElementById("message2").innerHTML=message;
			return false;
		}
		else
		{
			document.getElementById("message2").innerHTML="";
		}
	}
	else if(task=="number")
	{
		if(variable.length==0 || isNaN(variable)==true)
		{
			document.getElementById(vars).style.background=color;
			document.getElementById("message2").innerHTML=message;
			return false;
		}
		else
		{
			document.getElementById(vars).style.background="";
			document.getElementById("message2").innerHTML="";
		}	
	}
	else if(task=="normal")
	{
		if(variable.length==0)
		{
			document.getElementById(vars).style.background=color;
			document.getElementById("message2").innerHTML=message;
			return false;
		}
		else
		{
			document.getElementById(vars).style.background="";
			document.getElementById("message2").innerHTML="";
		}
	}
	else if(task=="email")
	{
		var email = document.getElementById(vars).value;
		if(email.length !=0)
		{
			if(variable.length==0 || ((variable.indexOf(".")<2) && (variable.indexOf("@")<=0)))
			{
				document.getElementById(vars).style.background=color;
				document.getElementById("message2").innerHTML=message;
				return false;
			}
			else
			{
				document.getElementById(vars).style.background="";
				document.getElementById("message2").innerHTML="";
			}
		}
		else
		{
			document.getElementById(vars).style.background="";
			document.getElementById("message2").innerHTML="";
		}
	}
	else if(task=="emailf")
	{
		var email = document.getElementById(vars).value;
		if(variable.length==0 || ((variable.indexOf(".")<2) && (variable.indexOf("@")<=0)))
		{
			document.getElementById(vars).style.background=color;
			document.getElementById("message2").innerHTML=message;
			return false;
		}
		else
		{
			document.getElementById(vars).style.background="";
			document.getElementById("message2").innerHTML="";
		}
	}
	else if(task=="selects")
	{
		if(document.getElementById(vars).selectedIndex==0)
		{
			document.getElementById("message2").innerHTML=message;
			return false;
		}
		else
		{
			document.getElementById("message2").innerHTML="";
		}
	}
	else if(task=="checksa")
	{
		if(document.getElementById(vars).checked==false)
		{
			document.getElementById("message2").innerHTML=message;
			return false;
		}
		else
		{
			document.getElementById("message2").innerHTML="";
		}
	}
	return true;
}
function formatCurrency(num) {
	num = num.toString().replace(/\$|\,/g,'');
	if(isNaN(num))
	num = "0";
	sign = (num == (num = Math.abs(num)));
	num = Math.floor(num*100+0.50000000001);
	cents = num%100;
	num = Math.floor(num/100).toString();
	if(cents<10)
	cents = "0" + cents;
	for (var i = 0; i < Math.floor((num.length-(1+i))/3); i++)
	num = num.substring(0,num.length-(4*i+3))+','+
	num.substring(num.length-(4*i+3));
	return (((sign)?'':'-') + '$' + num + '.' + cents);
}
function roundNumber(num, dec) {
	var result = Math.round(num*Math.pow(10,dec))/Math.pow(10,dec);
	return result;
}
function getTotal(value1,value2)
{
	var total =0;
	var gtotal = 0;
	//var tax = 1.08875;
	var tax = 0.08875;
	var ship=10.00;
	total = Number(value1)+Number(value2);
	gtotal = roundNumber((total * tax)+total,2);
	document.getElementById("sign0").innerHTML="$";
	document.getElementById("total").innerHTML=gtotal;
}
function getSub(value1,value2)
{
	var total =0;
	total = parseInt(value1) * parseFloat(value2);
	return Number(total.toFixed(2));
}
function calc(quan)
{
	var quan1=document.getElementById("quan1").value;
	var quan2=document.getElementById("quan2").value;
	if(quan=="quan1")
	{
		if(!isNaN(quan1) && quan1.length>0)
		{
			var subtotal = getSub(quan1,3.75);
			document.getElementById("sign1").innerHTML="$";
			document.getElementById("sub1").innerHTML=subtotal;
			if(!isNaN(quan2) && quan2.length>0)
			{
				var sub2 =getSub(quan2, 39.99);
				getTotal(subtotal, Number(sub2));
			}
			else
				getTotal(subtotal,0);
		}
		else
		{
			if(!isNaN(quan2) && quan2.length>0)
			{
				var sub2 =getSub(quan2, 39.99);
				getTotal(0, Number(sub2));
			}
			else
			{
				document.getElementById("total").innerHTML="";
				document.getElementById("sign0").innerHTML="";
			}
			//document.getElementById("quan1").value="0";
			document.getElementById("sub1").innerHTML="0";
		}
	}
	else if(quan=="quan2")
	{
		if(!isNaN(quan2) && quan2.length>0)
		{
			var subtotal2 = getSub(quan2, 39.99);
			document.getElementById("sign2").innerHTML="$";
			document.getElementById("sub2").innerHTML=subtotal2;
			if(!isNaN(quan1) && quan1.length>0)
			{
				var sub1 =getSub(quan1, 3.75);
				getTotal(subtotal2, Number(sub1));
			}
			else
				getTotal(subtotal2,0);
		}
		else
		{
			if(!isNaN(quan1) && quan1.length>0)
			{
				var sub1 =getSub(quan1, 3.75);
				getTotal(0, Number(sub1));
			}
			else
			{
				document.getElementById("total").innerHTML="";
				document.getElementById("sign0").innerHTML="";
			}
			//document.getElementById("quan2").value="0";
			document.getElementById("sub2").innerHTML="0";
		}		
	}
}
function checkFieldx()
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
function checkFieldc()
{
	//from contact form
	var phone=document.getElementById("phone").value;
	var email=document.getElementById("email").value;
	document.getElementById("message2c").innerHTML="";
	document.getElementById("email").style.background="";
	document.getElementById("phone").style.background="";
	var check=true;
	if(!errorcheckx("normal","namex","Name Field can't be empty",'message2c'))
		check=false;
	else if(!errorcheckx("email","email","Enail Field can't be empty",'message2c'))
		check=false;
	else if(!errorcheckx("normal","commentary","Comment Field can't be empty",'message2c'))
		check=false;
	else if(phone.length<1 && email.length<1)
	{
		document.getElementById("message2c").innerHTML="Please provide a mean to contact you";
		document.getElementById("email").style.background="#f6f583";
		document.getElementById("phone").style.background="#f6f583";
		check=false;
	}
	if(check)
	{
		var namex=document.getElementById("namex").value;
		var commentary=document.getElementById("commentary").value;
		//alert("name:"+namex+" email: "+email+" commentary:"+commentary+" phone:"+phone);
		sendEmail(namex,email,phone,commentary,'message2c');
	}
}
function checkFieldd()
{
	//from investor form
	var phone=document.getElementById("phonei").value;
	var email=document.getElementById("emaili").value;
	document.getElementById("message2d").innerHTML="";
	document.getElementById("emaili").style.background="";
	document.getElementById("phonei").style.background="";
	var check=true;
	if(!errorcheckx("normal","namexi","Name Field can't be empty",'message2d'))
		check=false;
	else if(!errorcheckx("email","emaili","Enail Field can't be empty",'message2d'))
		check=false;
	else if(!errorcheckx("normal","commentaryi","Comment Field can't be empty",'message2d'))
		check=false;
	else if(phone.length<1 && email.length<1)
	{
		document.getElementById("message2d").innerHTML="Please provide a mean to contact you";
		document.getElementById("emaili").style.background="#f6f583";
		document.getElementById("phonei").style.background="#f6f583";
		check=false;
	}
	if(check)
	{
		var namex=document.getElementById("namexi").value;
		var commentary=document.getElementById("commentaryi").value;
		//alert("name:"+namex+" email: "+email+" commentary:"+commentary+" phone:"+phone);
		sendEmailinv(namex,email,phone,commentary,'message2d');
	}
}
/*script for slider*/
function closeallinner()
{
	current="";
	$('.buykur').css('left',-900);
	$('.eventkur').css('left',-900);
	$('.contactkur').css('left',-900);
}
function closeinner()
{
	var $lefty = $('.'+current);
	$lefty.animate({
		 left: parseInt($lefty.css('left'),10) == 200 ? -$lefty.outerWidth()-500:200
	});
	current="";
}
/*end of script of slider*/
/*modal script*/
function loadModal(id)
{
	   document.getElementById("boxes").style.display="block";
		//Get the screen height and width
		var maskHeight = $(document).height();
		var maskWidth = $(document).width();
	
		//Set heigth and width to mask to fill up the whole screen
		$('#mask').css({'width':maskWidth,'height':maskHeight});
		
		//transition effect		
		$('#mask').fadeIn(1000);	
		$('#mask').fadeTo("slow",0.8);	
	
		//Get the window height and width
		var winH = $(document).height();
		var winW = $(document).width();
              
		//Set the popup window to center
		$(id).css('top',  winH/2-$(id).height()/2);
		$(id).css('left', winW/2-$(id).width()/2);
	
		//transition effect
		$(id).fadeIn(1000);
}

/*end of modal script*/
/****script for slider**/
$(document).ready(function() {
	/*****8scritp for modal****************/
	  //if close button is clicked
	 window.addEventListener('DOMContentLoaded', function() {
    $("body").queryLoader2();
	});
	document.getElementById("mainimage").style.display="block";
	document.getElementById("slideb_main_cont").style.display="block";
	$('.window .close').click(function (e) {
		//Cancel the link behavior
		e.preventDefault();
		
		$('#mask').hide();
		$('.window').hide();
	});	
	//if mask is clicked
	$('#mask').click(function () {
		$(this).hide();
		$('.window').hide();
	});			
	
	//resize mask
	$(window).resize(function () {
 
        //Get the screen height and width
       var maskHeight = $(document).height();
        var maskWidth = $(document).width();
      
        //Set height and width to mask to fill up the whole screen
        $('#mask').css({'width':maskWidth,'height':maskHeight});
               
        //Get the window height and width
        var winH = $(document).height();
        var winW = $(document).width();
                
        //Set the popup window to center
        $(id).css('top',  winH/2-$(id).height()/2);
        $(id).css('left', winW/2-$(id).width()/2);
 
	});
	/*****end scritp for modal****************/
	   closeallinner();
	  //first button is clicked
	  $('#imgonebtn').click(function() {
		closeinner();
      });
	  //first button is clicked
	  $('#imgtwobtn').click(function() {
		if(current !='buykur')
		{
			if(current !="")
			 	closeinner();
			//closeallinner();
       		var $lefty = $('.buykur');
			current='buykur';
			$lefty.animate({
				left: parseInt($lefty.css('left'),10) == 0 ? -$lefty.outerWidth()-500:200
			});
		}
      });
	  $('#imgthreebtn').click(function() {
		 closeinner();
      });
	  $('#imgfourbtn').click(function() {
		 closeinner();
      });
	  $('#imgfivebtn').click(function() {
		if(current !='eventkur')
		{
			 if(current !="")
			 	closeinner();
			 //closeallinner();
			 var $lefty = $('.eventkur');
			 current='eventkur';
			 $lefty.animate({
			 left: parseInt($lefty.css('left'),10) == 0 ? -$lefty.outerWidth()-500:200
			});
		}
      });
	  $('#imgsixbtn').click(function() {
		  if(current !='contactkur')
		  {
			   if(current !="")
			 		closeinner();
			 //closeallinner();
			  var $lefty = $('.contactkur');
			  current='contactkur';
			$lefty.animate({
			  left: parseInt($lefty.css('left'),10) == 0 ? -$lefty.outerWidth()-500:200
			});
		  }
      });
    });
/****end of script for slider**/
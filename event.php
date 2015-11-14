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
</head>
<body>
<div id="fb-root"></div>
<script>
  window.fbAsyncInit = function() {
    FB.init({
      appId      : '198561106886604', // App ID
      channelURL : '//WWW.DrinkKur.com/channel.php', // Channel File
      status     : true, // check login status
      cookie     : true, // enable cookies to allow the server to access the session
      oauth      : true, // enable OAuth 2.0
      xfbml      : true  // parse XFBML
    });

    // Additional initialization code here
  };

  // Load the SDK Asynchronously
  (function(d){
     var js, id = 'facebook-jssdk'; if (d.getElementById(id)) {return;}
     js = d.createElement('script'); js.id = id; js.async = true;
     js.src = "//connect.facebook.net/en_US/all.js";
     d.getElementsByTagName('head')[0].appendChild(js);
   }(document));
</script>
<div id="fb-root"></div>
<script>(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) {return;}
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/en_US/all.js#xfbml=1&appId=198561106886604";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));</script>
<div id="main_cont">
<?Php
include "include/header.php";
?>
    <div id="middle" style="height:500px">
    	<div id="middle_left">
        	<div id="middle_left_in">
            <img src="images/sp_ev1.jpg" /><br/>
        <span><h1 style="font-family:'Lucida Grande'">Coming Soon</h1><h2 style="color:#b20303; font-family: 'Lucida Grande'">Look for the launch party and distribution in January 2012</h2>
        <div style="color:#FFF; text-align:center">
        	<div class="fb-like" data-href="http://www.facebook.com/pages/K%C3%BCR-K%C3%BCR-your-hangover/198561106886604" data-send="true" data-width="450" data-show-faces="false" data-font="lucida grande"></div>
            </div>
        </span>
        	</div>
        </div>
        <div id="middle_right"><img src="images/sp_ev2.jpg" border="0" align="top" /></div>
        <div id="divclear"></div>
    </div>
	<?Php
		include "include/footer.php";
	?>
</div>
</body>
</html>
function ValidateLogin() 
{
	document.getElementById('user').value = HtmlSanitizer.SanitizeHtml(document.getElementById('user').value);
	document.getElementById('password').value = HtmlSanitizer.SanitizeHtml(document.getElementById('password').value);
	
	var username = document.getElementById('user').value;
	var password = document.getElementById('password').value;
	var CombinationSelected = username + password;
	
	if(xUsers.includes(CombinationSelected) && CombinationSelected != "") {
		alert('User logged: ' + username);
	}

}
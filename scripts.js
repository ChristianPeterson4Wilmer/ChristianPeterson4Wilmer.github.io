//<span class="credit">Christian Peterson<br />i>Technical Marketing Specialist</i><br /><b>Wilmer</b></span>

function load(dir) {
	attachNavBar(dir);
	attachCredit();
}

function attachCredit() {
	document.body.innerHTML += '<span class="credit">Christian Peterson<br /><i>Technical Marketing Specialist</i><br /><b>Wilmer</b></span>';
}

function attachNavBar(dir) {
	document.body.innerHTML = '<a href="'+ dir +'"><div id="home"><h1>Home</h1></div></a>' + document.body.innerHTML;
}

function redirect(type) {
	window.open(generateEmailString(type), '_blank');
	
}

function generateEmailString(type) {
	var username = document.getElementById('user-name').value;
	
	if (!username || username.length === 0) {
		alert("You must input your name before sending images");
		return "";
	}
	
	var ret = "mailto:Christian.Peterson@4wilmer.com?subject=" + "[siteupdate] " + type + " : " + username + " Additional documents" + "&body=Attach documents to this email and provide description.";
	
	return ret;
}

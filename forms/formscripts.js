function redirect(path) {
    window.location.href = path;
}

function loadCss(browser, prePath) {
    var link = document.createElement('link');
    link.rel = "stylesheet";
    link.type = "text/css";
    link.href = prePath;
    //alert(browser);
    if (browser === "Netscape") {
        link.href += "netscape_css_v1.css";
    }
    else {
        link.href += "other_css_v1.css";
    }

    document.getElementsByTagName('HEAD')[0].appendChild(link);
}

function load() {
    var browser = window.navigator.appName; // check name of browser, to determine whether to use netscape css or not
    loadCss(browser, "../css/");
}

function generateEmail(type) {
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
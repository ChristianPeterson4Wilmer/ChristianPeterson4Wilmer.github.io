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

function generateEmail(type, formId) {
    if (confirm("Would you like to also submit this form?\nSubmission indicated you have completed all the required text fields. If you do not wish to submit your form, you may do so later by clicking the 'Submit' button")) {
        document.getElementById(formId).submit();
    }

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

window.onbeforeunload = function() {
    inputs = document.getElementsByTagName('input');
    var isUnsaved = false;

    for (var i = 0; i < inputs.length; i++) {
        if (inputs[i].value.length > 0) {
            isUnsaved = true;
            break;
        }
    }

    if (isUnsaved) {
        return "Are you sure you want to leave?";
    }
}
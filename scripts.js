//<span class="credit">Christian Peterson<br /><i>Technical Marketing Specialist</i><br /><b>Wilmer</b></span>

function load() {
	attachNavBar();
	attachCredit();
}

function attachCredit() {
	document.body.innerHTML += '<span class="credit">Christian Peterson<br /><i>Technical Marketing Specialist</i><br /><b>Wilmer</b></span>';
}

function attachNavBar() {
	document.body.innerHTML = '<a href="index.html"><div id="home"><h1>Home</h1></div></a>' + document.body.innerHTML;
}
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

function displayToolTip(key) {
	document.getElementById('help-tooltip').style.visibility = 'visible';
	
	var headerText = "";
	var paragraphText = "";
	
	switch(key) {
		default:
			headerText = "Some issue occured";
			paragraphText = "This tooltip was never defined. Key="+key;
			break;
		case 0:
			headerText = "Your First and Last Name";
			paragraphText = "Required. Let me know who is sending the request.";
			break;
		case 1:
			headerText = "Your email";
			paragraphText = "Required. I need your email to get into contact with you if there are any issues or to let you know when update is complete.";
			break;
		case 2:
			headerText = "Product's Name";
			paragraphText = "Required. Name of Product displayed on website.";
			break;
		case 3:
			headerText = "Product's Group";
			paragraphText = "Required. Categroy Product belongs to. For example: \'Deposit Tickets\' belong to the \'Financial Accessories\' Catergory.";
			paragraphText += "<br /> I'd also recommend including if this product belongs to \'Financial Products\', \'Healthcare Products\', or \'All Markets\'";
			break;
		case 4:
			headerText = "Product's Image";
			paragraphText = "Your product most likely will require multiple images, so you will need to click \'Email Images\'.";
			paragraphText += " An Outlook email should automatically open where you can attach your additional resources, please replace the body with a small description.";
			paragraphText += "<br /><br /><b>Requires First & Last Name field be filled out</b>";
			break;
		case 5:
			headerText = "New Product Description";
			paragraphText = "Individual products that are announced have a section on the \'New Products\' page of 4wilmer briefly describing what they are.";
			break;
		case 6:
			headerText = "Product's Short Description";
			paragraphText = "Required. Brief description of product that displays on a product group's landing page.";
			break;
		case 7:
			headerText = "Product's Long Description";
			paragraphText = "Required. Description of product that appears under \'Additional Details\' on a product page.";
			break;
		case 8:
			headerText = "More Resources";
			paragraphText = "Product's generally have a \'More Resources\' Section which contains any additional links. Usually used for flyers, additional information, or promotional material.";
			paragraphText += " This section usually matches what's on the \'Resource Library\' page for the product or product group.";
			break;
		case 9:
			headerText = "Comments";
			paragraphText = "Any additional information you'd like to add.";
			break;
		case 11:
			headerText = "Link to issue";
			paragraphText = "Required. Link to the webpage where you encountered this issue. If you found the issue in several places provide as many links as possible";
			paragraphText += " and please mention this in the <i>description</i> section below.<br /><br />";
			paragraphText += " If a resource needs to be changed please provide the link to the existing resource and email the new resource using 'Email Related Documents'";
			paragraphText += " If there are multiple changes that are non-relevant to eachother, please submit multiple forms.";
			break;
		case 12:
			headerText = "Change Description";
			paragraphText = "Required. Please describe exactly what your issue is.";
			break;
		case 13:
			headerText = "Additional Resources";
			paragraphText = "If you want to send additional resources (e.g. You want a pdf updated on 4wilmer) You will need to click \'Email Related Documents\'.";
			paragraphText += " An Outlook email should automatically open where you can attach your additional resources, please replace the body with a small description.";
			paragraphText += "<br /><br /><b>Requires First & Last Name field be filled out</b>";
			break;
		case 14:
			headerText = "Customer Name";
			paragraphText ="Primarily for records, but if I ever need to contact the customer this is always helpful.";
			paragraphText += " If you do not know the customer name then the buisness name is fine.";
			break;
		case 15:
			headerText ="Customer Email";
			paragraphText = "Primarily for records, but if I ever need to contact the customer this is always helpful.";
			break;
		case 16:
			headerText = "Customer Account Number";
			paragraphText = "<b>Required only if the issue is related to printplayer or yourwilmer.</b>";
			paragraphText += "<br/>I usally need the customer account number before I can even begin looking into an issue.";
			break;
		case 17:
			headerText = "Website";
			paragraphText = "Website which corresponds with the issue. If issue has nothing to do with 4wilmer, yourwilmer, or printplayer";
			paragraphText += " just select \'NA/Other/Don't Know\'";
			break;
		case 18:
			headerText = "Issue Description";
			paragraphText = "Required. Please describe the issue as detailed as you possibly can.";
			break;
		case 21:
			headerText="Post Date";
			paragraphText = "Required. The date you want your social media post, posted.";
			break;
		case 22:
			headerText="Social Media Post";
			paragraphText="Required. The contents of your social media post (aka the text). You will be able to add images after you submit.";
			break;
	}
	
	document.getElementById('help-header').innerHTML = headerText;
	document.getElementById('help-text').innerHTML = paragraphText;
}

function hideToolTip() {
	document.getElementById('help-tooltip').style.visibility = 'hidden';
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
function socialMediaRedirect() {
	var url = generateSocialMediaEmailString();
	if (!url || url.length === 0) {
		return;
	}

	window.open(url);
}
function generateSocialMediaEmailString() {
	var username = document.getElementById('user-name').value;
	var email = document.getElementById('email').value;
	var postdate = document.getElementById('post-date').value;
	var post = document.getElementById('post-text').value;

	var arr = [username, email, postdate, post];

	for (var i = 0; i < arr.length; i++) {
		if (!arr[i] || arr[i].length === 0) {
			alert("All fields are required!");
			return "";
		}
	}

	var ret = "mailto:Christian.Peterson@4wilmer.com?subject=[SocialMedia] " + postdate + "&body=[PostText] " + post;

	return ret;
}
function newMenu() {
	if (document.getElementById("new-menu").innerHTML === "") {
		document.getElementById("new-menu").innerHTML =
		'<a href="index.html">Home</a><br /><a href="about.html">About</a><br /><a href="portfolio.html">Portfolio</a><br /><a href="resume.html">Resume</a><br /><a href="contact.html">Contact</a>'
	} else {
		document.getElementById("new-menu").innerHTML = ""
	}
}

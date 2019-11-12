// Information for the menu without any of the formatting
var menuText = ['Home', 'About', 'Portfolio', 'Resume', 'Contact'];
var menuLinks = ['index', 'about', 'portfolio', 'resume', 'contact'];
var menuItems = [];
for(var i=0; i < 5; i++) {
	menuItems.push(document.createElement('a'));
	menuItems[i].href = menuLinks[i];
	menuItems[i].innerText = menuText[i];
}

// Make the desktop menu by default without adding any extra newlines
// Only do this if the screen is wide enough
function createMenu() {
	var menu = document.getElementById('top-nav');
	if(!window.matchMedia("(max-width: 600px)").matches) {
		for(var i=0; i<5; i++) {
			menu.appendChild(menuItems[i]);
		}
	}
}

// Make a new vertical menu (adding newlines) when the mobile menu expand icon
// is clicked
function newMenu() {
	var dropMenu = document.getElementById("new-menu");
	if (dropMenu.innerHTML === "") {
		document.getElementById('top-nav').classList.toggle('morphed');
		for(var i=0; i<5; i++) {
			dropMenu.appendChild(menuItems[i]);
			dropMenu.appendChild(document.createElement('br'));
		}
	} else {
		document.getElementById('top-nav').classList.toggle('morphed');
		dropMenu.innerHTML = ""
	}
}

window.onload = createMenu();

var menuText = ['Home', 'About', 'Portfolio', 'Resume', 'Contact'];
var menuLinks = ['index.html', 'about.html', 'portfolio.html', 'resume.html', 'contact.html'];
var menuItems = [];
for(var i=0; i < 5; i++) {
	menuItems.push(document.createElement('a'));
	menuItems[i].href = menuLinks[i];
	menuItems[i].innerText = menuText[i];
}

function createMenu() {
	var menu = document.getElementById('top-nav');
	if(!window.matchMedia("(max-width: 600px)").matches) {
		for(var i=0; i<5; i++) {
			menu.appendChild(menuItems[i]);
		}
	}
}

function newMenu() {
	var dropMenu = document.getElementById("new-menu");
	if (dropMenu.innerHTML === "") {
		for(var i=0; i<5; i++) {
			dropMenu.appendChild(menuItems[i]);
			dropMenu.appendChild(document.createElement('br'));
		}
	} else {
		dropMenu.innerHTML = ""
	}
}

window.onload = createMenu();

var menuText = ['Home', 'About', 'Portfolio', 'Resume', 'Contact'];
var menuLinks = ['index', 'about', 'portfolio', 'resume', 'contact'];
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
		//document.getElementById('hamburger').className = 'icon-clear';
		document.getElementById('top-nav').classList.toggle('morphed');
		for(var i=0; i<5; i++) {
			dropMenu.appendChild(menuItems[i]);
			dropMenu.appendChild(document.createElement('br'));
		}
	} else {
		document.getElementById('top-nav').classList.toggle('morphed');
		//document.getElementById('hamburger').className = 'icon-menu';
		dropMenu.innerHTML = ""
	}
}

window.onload = createMenu();

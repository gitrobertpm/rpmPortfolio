// INDEX JS

// GET WINDOW HEIGHT AND WIDTH
var width = window.innerWidth;
var height = window.innerHeight;

// OPEN NAV
document.getElementById("navIcon").onclick = function() {
	document.getElementById("navIcon").style.display = "none";
	document.getElementById("closeNav").style.display = "block";
	document.getElementsByTagName("nav")[0].style.display = "block";
};

// CLOSE NAV
document.getElementById("closeNav").onclick = function() {
	document.getElementById("navIcon").style.display = "block";
	document.getElementById("closeNav").style.display = "none";
	document.getElementsByTagName("nav")[0].style.display = "none";
};

// NAV IN HOUSE LINKS THAT NEED THAT NEED THE NAV TOP CLOSE
document.getElementById("navProjectsLink").onclick = function() {
	document.getElementById("navIcon").style.display = "block";
	document.getElementById("closeNav").style.display = "none";
	document.getElementsByTagName("nav")[0].style.display = "none";
};



// SHORTCUT FUNCIOTN FOR GRABBING ID AND SETTING BACKGROUND AND DISPLAY VALUES
function set(idee, background, display, bs, br, bp) {
	var setIdee = document.getElementById(idee);
	setIdee.style.background = background;
	setIdee.style.display = display;
	setIdee.style.backgroundSize = bs;
	setIdee.style.backgroundRepeat = br;
	setIdee.style.backgroundPosition = bp;
};

// SET PROJECTS IMAGES
set("projectImg2", "url('img/projectImgs/gallery.png')", "block", "100% 100%", "no-repeat");
set("projectImg3", "url('img/projectImgs/odom.png')", "block", "100% 100%", "no-repeat");
set("projectImg4", "url('img/projectImgs/tabe.png')", "block", "100% 100%", "no-repeat");
set("projectImg5", "url('img/projectImgs/twu.png')", "block", "100% 100%", "no-repeat");
set("projectImg6", "url('img/projectImgs/decider.png')", "block", "100% 100%", "no-repeat");

// SET NAV ICON IMAGE
set("navIcon", "url('img/nav.png')", "block", "100% 100%", "no-repeat");

// SET NAV LINK ICONS
set("navGithubLink", "url('img/github.png')", "block", "50px 50px", "no-repeat", "center");
set("navLinkedinLink", "url('img/linkedin.png')", "block", "50px 50px", "no-repeat", "center");

// SET FOOTER LINK ICONS
set("footerGithubLink", "url('img/github.png')", "block", "50px 50px", "no-repeat", "center");
set("footerLinkedinLink", "url('img/linkedin.png')", "block", "50px 50px", "no-repeat", "center");


// SHORTCUT FUNCTION FOR TURNING PROJECT IMAGE DIVS INTO LINKS
function linker(idee, local) {
	var setIdee = document.getElementById(idee);
	setIdee.onclick = function() {
	window.open(local);
	};
};

// CHANGE PROJECT IMAGE DIVS TO LINKS
linker("projectImg2", "http://gitrobertpm.github.io/gianni");
linker("projectImg3", "http://gitrobertpm.github.io/galacticodom");
linker("projectImg4", "http://thefreshesthigh.com");
linker("projectImg5", "http://thewayunraveled.com");
linker("projectImg6", "http://gitrobertpm.github.io/the-decid-o-matic-5000/");



// CHANGE PROJECT IMAGE CURSOR TO POINTER
var projectImageDiv = document.getElementsByClassName("projectImg");
for(var i = 0; i < projectImageDiv.length; i++) {
	projectImageDiv[i].style.cursor = "pointer";
}



// SHORTCUT FUNCTION FOR CHANGE THE LINK COLOR ON PROJECT IMAGE HOVER
function hoverColor(idee, idee2, color, color2) {
	var setIdee = document.getElementById(idee);
	var setIdee2 = document.getElementById(idee2);
	
	setIdee.addEventListener("mouseover", colorChange);
	function colorChange() {
		setIdee2.style.color = color;
	};
	
	setIdee.addEventListener("mouseout", colorChangeBack);
	function colorChangeBack() {
		setIdee2.style.color = color2;
	};
};

// CHANGE LINK COLOR ON PROJECT IMAGE HOVER
hoverColor("projectImg2", "projectLink2", "rgb(200,0,0)", "rgb(125,0,0)");
hoverColor("projectImg3", "projectLink3", "rgb(200,0,0)", "rgb(125,0,0)");
hoverColor("projectImg4", "projectLink4", "rgb(200,0,0)", "rgb(125,0,0)");
hoverColor("projectImg5", "projectLink5", "rgb(200,0,0)", "rgb(125,0,0)");
hoverColor("projectImg6", "projectLink6", "rgb(200,0,0)", "rgb(125,0,0)");






// INDEX JS

// GET WINDOW HEIGHT AND WIDTH
var width = window.innerWidth;
var height = window.innerHeight;

// var head = document.head, link = document.createElement('link');
	// link.type = 'text/css';
	// link.rel = 'stylesheet';
	// link.href = 'css/flower.css';

// SLIDE IN HEADIMAGES AND TITLE
window.onload = function() {
	setTimeout(function(){ document.getElementById("devHand").style.msTransform = "translate(0px, 0px)"; }, 0);
	setTimeout(function(){ document.getElementById("devHand").style.webkitTransform = "translate(0px, 0px)"; }, 0);
	setTimeout(function(){ document.getElementById("devHand").style.transform = "translate(0px, 0px)"; }, 0);
	setTimeout(function(){ document.getElementById("desHand").style.msTransform = "translate(0px, 0px)"; }, 0);
	setTimeout(function(){ document.getElementById("desHand").style.webkitTransform = "translate(0px, 0px)"; }, 0);
	setTimeout(function(){ document.getElementById("desHand").style.transform = "translate(0px, 0px)"; }, 0);
	// setTimeout(function(){ document.getElementById("dev").style.msTransform = "translate(0px, 0px)"; }, 500);
	// setTimeout(function(){ document.getElementById("dev").style.webkitTransform = "translate(0px, 0px)"; }, 500);
	// setTimeout(function(){ document.getElementById("dev").style.transform = "translate(0px, 0px)"; }, 500);
	// setTimeout(function(){ document.getElementById("des").style.msTransform = "translate(0px, 0px)"; }, 500);
	// setTimeout(function(){ document.getElementById("des").style.webkitTransform = "translate(0px, 0px)"; }, 500);
	// setTimeout(function(){ document.getElementById("des").style.transform = "translate(0px, 0px)"; }, 500);
};

if (width > 999) {
	document.getElementById("flowerBox").style.webkitAnimation = "petalGlow 5s ease .5s forwards";
	document.getElementById("flowerBox").style.animation = "petalGlow 5s ease .5s forwards";
	document.getElementById("petal_2").style.webkitAnimation = "petal_2 .5s ease .5s forwards";
	document.getElementById("petal_2").style.animation = "petal_2 .5s ease .5s forwards";
	document.getElementById("petal_3").style.webkitAnimation = "petal_3 1s ease .5s forwards";
	document.getElementById("petal_3").style.animation = "petal_3 1s ease .5s forwards";
	document.getElementById("petal_4").style.webkitAnimation = "petal_4 1.5s ease .5s forwards";
	document.getElementById("petal_4").style.animation = "petal_4 1.5s ease .5s forwards";
	document.getElementById("petal_5").style.webkitAnimation = "petal_5 2s ease .5s forwards";
	document.getElementById("petal_5").style.animation = "petal_5 2s ease .5s forwards";
	document.getElementById("petal_6").style.webkitAnimation = "petal_6 2.5s ease .5s forwards";
	document.getElementById("petal_6").style.animation = "petal_6 2.5s ease .5s forwards";
	document.getElementById("petal_7").style.webkitAnimation = "petal_7 3s ease .5s forwards";
	document.getElementById("petal_7").style.animation = "petal_7 3s ease .5s forwards";
	document.getElementById("petal_8").style.webkitAnimation = "petal_8 3.5s ease .5s forwards";
	document.getElementById("petal_8").style.animation = "petal_8 3.5s ease .5s forwards";
	
	// ADD FLOWER STYLESHEET for LARGER SCREENS
	// head.appendChild(link);
}



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

// NAV IN HOUSE LINKS THAT NEED THE NAV TO CLOSE
document.getElementById("navProjectsLink").onclick = function() {
	document.getElementById("navIcon").style.display = "block";
	document.getElementById("closeNav").style.display = "none";
	document.getElementsByTagName("nav")[0].style.display = "none";
};

document.getElementById("navMeLink").onclick = function() {
	document.getElementById("navIcon").style.display = "block";
	document.getElementById("closeNav").style.display = "none";
	document.getElementsByTagName("nav")[0].style.display = "none";
};

document.getElementById("backToTop").onclick = function() {
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


// SET MONITOR IMAGE
// if (width > 499 && width < 1000) {
	// set("monitor", "url('img/backgrounds/monitor.png')", "block", "100% 100%", "no-repeat");
// } else if (width > 999) {
	// set("monitor", "url('img/backgrounds/monitorLg.png')", "block", "100% 100%", "no-repeat");
// }

// SET PAINT STROKE IMAGE
// if (width > 499) {
	// set("color", "url('img/backgrounds/colorPaper2.png')", "block", "100% 100%", "no-repeat");
// }

// SET NAV ICON IMAGE
set("navIcon", "url('img/rpm.png')", "block", "100% 100%", "no-repeat");

// SET NAV LINK ICONS
set("navGithubLink", "url('img/github.png')", "block", "50px 50px", "no-repeat", "center");
set("navLinkedinLink", "url('img/linkedin.png')", "block", "50px 50px", "no-repeat", "center");

// SET FOOTER LINK ICONS
set("footerGithubLink", "url('img/github.png')", "block", "50px 50px", "no-repeat", "center");
set("footerLinkedinLink", "url('img/linkedin.png')", "block", "50px 50px", "no-repeat", "center");

// SET BIO PIC
set("myPicDiv", "url('img/me5.jpg')", "block", "100px 125px", "no-repeat", "center");

// SET CONTACT LINK ICONS
set("contactGithubLink", "url('img/github.png')", "inline-block", "50px 50px", "no-repeat", "center");
set("contactLinkedinLink", "url('img/linkedin.png')", "inline-block", "50px 50px", "no-repeat", "center");

// SET PROJECTS IMAGES
set("projectsTitle", "url('img/backgrounds/leoSm.jpg')", "block", "250px 50%", "repeat");
set("leoLedge", "url('img/backgrounds/leoLedge.jpg')", "block", "250px 100%", "repeat");
set("projectImg2", "url('img/projectImgs/gallery.png')", "block", "100% 100%", "no-repeat");
set("projectImg3", "url('img/projectImgs/odom.png')", "block", "100% 100%", "no-repeat");
set("projectImg4", "url('img/projectImgs/tabe.png')", "block", "100% 100%", "no-repeat");
set("projectImg5", "url('img/projectImgs/twu.png')", "block", "100% 100%", "no-repeat");
set("projectImg6", "url('img/projectImgs/decider.png')", "block", "100% 100%", "no-repeat");


// SET SKILL IMAGES
set("skillSection", "url('img/backgrounds/rpmBackground.jpg')", "block", "100% auto", "repeat");
set("skillTitle", "url('img/backgrounds/rpmBackground.jpg')", "block", "contain", "repeat");
set("skillLogo0", "url('img/misc_icons/html.jpg')", "inline-block", "100% 100%", "no-repeat", "center");
set("skillLogo1", "url('img/misc_icons/css.jpg')", "inline-block", "100% 100%", "no-repeat", "center");
set("skillLogo2", "url('img/misc_icons/js.jpg')", "inline-block", "100% 100%", "no-repeat", "center");
set("skillLogo3", "url('img/misc_icons/ai.jpg')", "inline-block", "100% 100%", "no-repeat", "center");
set("skillLogo4", "url('img/misc_icons/ps.jpg')", "inline-block", "100% 100%", "no-repeat", "center");
set("skillLogo5", "url('img/misc_icons/github.jpg')", "inline-block", "100% 100%", "no-repeat", "center");
set("skillLogo6", "url('img/misc_icons/jq.jpg')", "inline-block", "100% 100%", "no-repeat", "center");
set("skillLogo7", "url('img/misc_icons/ajax.jpg')", "inline-block", "100% 100%", "no-repeat", "center");
set("skillLogo8", "url('img/misc_icons/node.jpg')", "inline-block", "100% 100%", "no-repeat", "center");
set("skillLogo9", "url('img/misc_icons/angular.jpg')", "inline-block", "100% 100%", "no-repeat", "center");
set("skillLogo10", "url('img/misc_icons/php.jpg')", "inline-block", "100% 100%", "no-repeat", "center");
set("skillLogo11", "url('img/misc_icons/mysql.jpg')", "inline-block", "100% 100%", "no-repeat", "center");



// SHORTCUT FUNCTION FOR TURNING PROJECT IMAGE DIVS INTO LINKS
function linker(idee, locale) {
	var setIdee = document.getElementById(idee);
	setIdee.onclick = function() {
		window.open(locale);
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



// GOOD LIFE CODE TRANSOFRMS
document.getElementById("codeSection").addEventListener("DOMMouseScroll", codeSlide);
document.getElementById("codeSection").addEventListener("mousewheel", codeSlide);
document.getElementById("codeSection").addEventListener("wheel", codeSlide);
document.getElementById("codeSection").addEventListener("touchstart", codeSlide);

var codeTag = document.getElementsByTagName("code");

function codeSlide() {
	setTimeout(function(){ codeTag[0].style.msTransform = "translate(0px, 0px)"; }, 0);
	setTimeout(function(){ codeTag[0].style.webkitTransform = "translate(0px, 0px)"; }, 0);
	setTimeout(function(){ codeTag[0].style.transform = "translate(0px, 0px)"; }, 0);
	
	setTimeout(function(){ codeTag[1].style.msTransform = "translate(0px, 0px)"; }, 100);
	setTimeout(function(){ codeTag[1].style.webkitTransform = "translate(0px, 0px)"; }, 100);
	setTimeout(function(){ codeTag[1].style.transform = "translate(0px, 0px)"; }, 100);
	
	setTimeout(function(){ codeTag[2].style.msTransform = "translate(0px, 0px)"; }, 200);
	setTimeout(function(){ codeTag[2].style.webkitTransform = "translate(0px, 0px)"; }, 200);
	setTimeout(function(){ codeTag[2].style.transform = "translate(0px, 0px)"; }, 200);
	
	setTimeout(function(){ codeTag[3].style.msTransform = "translate(0px, 0px)"; }, 300);
	setTimeout(function(){ codeTag[3].style.webkitTransform = "translate(0px, 0px)"; }, 300);
	setTimeout(function(){ codeTag[3].style.transform = "translate(0px, 0px)"; }, 300);
	
	setTimeout(function(){ codeTag[4].style.msTransform = "translate(0px, 0px)"; }, 400);
	setTimeout(function(){ codeTag[4].style.webkitTransform = "translate(0px, 0px)"; }, 400);
	setTimeout(function(){ codeTag[4].style.transform = "translate(0px, 0px)"; }, 400);
	
	setTimeout(function(){ codeTag[5].style.msTransform = "translate(0px, 0px)"; }, 500);
	setTimeout(function(){ codeTag[5].style.webkitTransform = "translate(0px, 0px)"; }, 500);
	setTimeout(function(){ codeTag[5].style.transform = "translate(0px, 0px)"; }, 500);
	
	setTimeout(function(){ codeTag[6].style.msTransform = "translate(0px, 0px)"; }, 600);
	setTimeout(function(){ codeTag[6].style.webkitTransform = "translate(0px, 0px)"; }, 600);
	setTimeout(function(){ codeTag[6].style.transform = "translate(0px, 0px)"; }, 600);
	
	setTimeout(function(){ codeTag[7].style.msTransform = "translate(0px, 0px)"; }, 700);
	setTimeout(function(){ codeTag[7].style.webkitTransform = "translate(0px, 0px)"; }, 700);
	setTimeout(function(){ codeTag[7].style.transform = "translate(0px, 0px)"; }, 700);
	
	setTimeout(function(){ codeTag[8].style.msTransform = "translate(0px, 0px)"; }, 800);
	setTimeout(function(){ codeTag[8].style.webkitTransform = "translate(0px, 0px)"; }, 800);
	setTimeout(function(){ codeTag[8].style.transform = "translate(0px, 0px)"; }, 800);
	
	setTimeout(function(){ codeTag[9].style.msTransform = "translate(0px, 0px)"; }, 900);
	setTimeout(function(){ codeTag[9].style.webkitTransform = "translate(0px, 0px)"; }, 900);
	setTimeout(function(){ codeTag[9].style.transform = "translate(0px, 0px)"; }, 900);
	
	setTimeout(function(){ codeTag[10].style.msTransform = "translate(0px, 0px)"; }, 1000);
	setTimeout(function(){ codeTag[10].style.webkitTransform = "translate(0px, 0px)"; }, 1000);
	setTimeout(function(){ codeTag[10].style.transform = "translate(0px, 0px)"; }, 1000);
	
	setTimeout(function(){ codeTag[11].style.msTransform = "translate(0px, 0px)"; }, 1100);
	setTimeout(function(){ codeTag[11].style.webkitTransform = "translate(0px, 0px)"; }, 1100);
	setTimeout(function(){ codeTag[11].style.transform = "translate(0px, 0px)"; }, 1100);
	
	setTimeout(function(){ codeTag[12].style.msTransform = "translate(0px, 0px)"; }, 1200);
	setTimeout(function(){ codeTag[12].style.webkitTransform = "translate(0px, 0px)"; }, 1200);
	setTimeout(function(){ codeTag[12].style.transform = "translate(0px, 0px)"; }, 1200);
	
	setTimeout(function(){ codeTag[13].style.msTransform = "translate(0px, 0px)"; }, 1300);
	setTimeout(function(){ codeTag[13].style.webkitTransform = "translate(0px, 0px)"; }, 1300);
	setTimeout(function(){ codeTag[13].style.transform = "translate(0px, 0px)"; }, 1300);
	
	setTimeout(function(){ codeTag[14].style.msTransform = "translate(0px, 0px)"; }, 1400);
	setTimeout(function(){ codeTag[14].style.webkitTransform = "translate(0px, 0px)"; }, 1400);
	setTimeout(function(){ codeTag[14].style.transform = "translate(0px, 0px)"; }, 1400);
	
	setTimeout(function(){ document.getElementById("quoteDiv").style.msTransform = "translate(0px, 0px)"; }, 1500);
	setTimeout(function(){ document.getElementById("quoteDiv").style.webkitTransform = "translate(0px, 0px)"; }, 1500);
	setTimeout(function(){ document.getElementById("quoteDiv").style.transform = "translate(0px, 0px)"; }, 1500);
};

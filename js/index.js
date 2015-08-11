// INDEX JS

// GET WINDOW HEIGHT AND WIDTH
var width = window.innerWidth;
var height = window.innerHeight;

// SLIDE IN HEADIMAGES AND TITLE
window.onload = function() {
	setTimeout(function(){ document.getElementById("devHand").style.msTransform = "translate(0px, 0px)"; }, 0);
	setTimeout(function(){ document.getElementById("devHand").style.webkitTransform = "translate(0px, 0px)"; }, 0);
	setTimeout(function(){ document.getElementById("devHand").style.transform = "translate(0px, 0px)"; }, 0);
	setTimeout(function(){ document.getElementById("desHand").style.msTransform = "translate(0px, 0px)"; }, 0);
	setTimeout(function(){ document.getElementById("desHand").style.webkitTransform = "translate(0px, 0px)"; }, 0);
	setTimeout(function(){ document.getElementById("desHand").style.transform = "translate(0px, 0px)"; }, 0);
	setTimeout(function(){ document.getElementById("dev").style.msTransform = "translate(0px, 0px)"; }, 250);
	setTimeout(function(){ document.getElementById("dev").style.webkitTransform = "translate(0px, 0px)"; }, 250);
	setTimeout(function(){ document.getElementById("dev").style.transform = "translate(0px, 0px)"; }, 250);
	setTimeout(function(){ document.getElementById("des").style.msTransform = "translate(0px, 0px)"; }, 500);
	setTimeout(function(){ document.getElementById("des").style.webkitTransform = "translate(0px, 0px)"; }, 500);
	setTimeout(function(){ document.getElementById("des").style.transform = "translate(0px, 0px)"; }, 500);
};

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

document.getElementById("navMyDealLink").onclick = function() {
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

// SET BIO PIC
set("myPicDiv", "url('img/me5.jpg')", "block", "100px 125px", "no-repeat", "center");



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


// SHORTCUT FUNCTION FOR OPENING AND CLOSING INDIVIDUAL SECTIONS OF THE ME SECTION
function openOrClose(idee, idee2, idee3, display2, background, width, height, height2, z, klass, display, idee4, display3) {
	var setIdee = document.getElementById(idee);
	var setIdee2 = document.getElementById(idee2);
	var setIdee3 = document.getElementById(idee3);
	var setIdee4 = document.getElementById(idee4);
	var klass = document.getElementsByClassName(klass);
	setIdee.onclick = function() {
		setIdee.style.display = display2;
		setIdee3.style.height = height2;
		setIdee2.style.background = background;
		setIdee2.style.width = width;
		setIdee2.style.height = height;
		setIdee2.style.zIndex = z;
		setIdee4.style.display = display3;
		for(var i=0; i<klass.length; i++) {
			klass[i].style.display = display;
		}
	};
};

openOrClose("bioTitle", "meWrap1", "meSection", "inline-block", "rgba(0,0,0,0.9)", "100%", "auto", "1000px", "999", "hiddenBioText", "inline-block", "bioButton", "none");

openOrClose("bioButton", "meWrap1", "meSection", "none", "rgba(0,0,0,0.9)", "100%", "auto", "1000px", "999", "hiddenBioText", "inline-block", "bioButton", "none");

openOrClose("bioButtonClose", "meWrap1", "meSection", "none", "none", "49%", "420px", "750px", "0", "hiddenBioText", "none", "bioButton", "inline-block");





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

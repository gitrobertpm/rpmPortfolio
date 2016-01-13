// INDEX JS

// GET WINDOW HEIGHT AND WIDTH
var width = window.innerWidth;
var height = window.innerHeight;

var navIcon = document.getElementById("navIcon");
var closeNav = document.getElementById("closeNav");
var nav = document.getElementsByTagName("nav")[0];

// OPEN NAV
navIcon.onclick = function() {
	navIcon.style.display = "none";
	closeNav.style.display = "block";
	nav.style.display = "block";
};

// CLOSE NAV
closeNav.onclick = function() {
	navIcon.style.display = "block";
	closeNav.style.display = "none";
	nav.style.display = "none";
};


// NAV IN HOUSE LINKS THAT NEED THE NAV TO CLOSE
document.getElementById("navProjectsLink").onclick = function() {
	navIcon.style.display = "block";
	closeNav.style.display = "none";
	nav.style.display = "none";
};

document.getElementById("navMeLink").onclick = function() {
	navIcon.style.display = "block";
	closeNav.style.display = "none";
	nav.style.display = "none";
};

document.getElementById("backToTop").onclick = function() {
	navIcon.style.display = "block";
	closeNav.style.display = "none";
	nav.style.display = "none";
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

// SET NAV ICON IMAGE
set("navIcon", "url('img/rpm.png')", "block", "100% 100%", "no-repeat");

// SET NAV LINK ICONS
set("navGithubLink", "rgba(0,0,0,0.5) url('img/github.png')", "block", "50px 50px", "no-repeat", "center");
set("navLinkedinLink", "rgba(0,0,0,0.5) url('img/linkedin.png')", "block", "50px 50px", "no-repeat", "center");

// SET FOOTER LINK ICONS
set("footerGithubLink", "url('img/github.png')", "block", "50px 50px", "no-repeat", "center");
set("footerLinkedinLink", "url('img/linkedin.png')", "block", "50px 50px", "no-repeat", "center");

// SET BIO PIC
set("myPicDiv", "url('img/me5.jpg')", "block", "100px 125px", "no-repeat", "center");

// SET CONTACT LINK ICONS
set("contactGithubLink", "url('img/github.png')", "inline-block", "50px 50px", "no-repeat", "center");
set("contactLinkedinLink", "url('img/linkedin.png')", "inline-block", "50px 50px", "no-repeat", "center");

// SET PROJECTS IMAGES
//set("projectsTitle", "url('img/backgrounds/leoSm.jpg')", "block", "350px 100%", "repeat");
//set("leoLedge", "url('img/backgrounds/leoLedge.jpg')", "block", "250px 100%", "repeat");
set("projectImg1", "url('img/projectImgs/eching.png')", "block", "100% 100%", "no-repeat");
set("projectImg2", "url('img/projectImgs/gallery.png')", "block", "100% 100%", "no-repeat");
set("projectImg3", "url('img/projectImgs/odom.png')", "block", "100% 100%", "no-repeat");
set("projectImg4", "url('img/projectImgs/tabe.png')", "block", "100% 100%", "no-repeat");
set("projectImg5", "url('img/projectImgs/twu.png')", "block", "100% 100%", "no-repeat");
set("projectImg6", "url('img/projectImgs/decider.png')", "block", "100% 100%", "no-repeat");


// TEXT SLIDER
var methodologies = ["~ Mobile First ~", "~ Cross-Browser ~", "~ Responsive ~"];
var counter = 0;
var methodology = document.getElementById("methodology");
methodology.innerHTML = methodologies[counter];

var textSlider = setInterval(function() {textSlide();}, 3000);
function textSlide() {
	if (counter < methodologies.length - 1) {
		counter += 1;
	} else {
		counter = 0;
	}
	methodology.innerHTML = methodologies[counter];
};

// FUNCTION FOR ADDING VENDOR PREFIXES TO ANIMATION PROPERTY
var styleAnimation = function(element, value) {
	element.style.webkitAnimation = value;
	element.style.animation = value;
};
styleAnimation(methodology, "methodologySlide 3s linear infinite");


// PROJECT SLIDERS STUFF
var projectWrap = document.getElementsByClassName("projectWrap");
var projectMenu = document.getElementById("projectMenu");
var pmP

// DYNAMICALLY CREATE PROJECT MENU
for (var i = 0; i < projectWrap.length; i++) {
	// GET PROJECT TITLE AND ADD IT TO PROJECT MENU
	projectWrap[i].style.display = "none";
	var p = document.createElement("p");
	var projectTitle = projectWrap[i].querySelector("a").textContent;
	var node = document.createTextNode(projectTitle);
	p.appendChild(node);
	projectMenu.appendChild(p);
	
	// GET PROJECT IMAGE AND ADD IT TO MENU
	pmP = projectMenu.querySelectorAll("p");
	pmP[i].style.background = projectWrap[i].querySelector("div").style.backgroundImage;
}

// SET INITIAL STATE FOR PROJECTS SECTION
projectWrap[0].style.display = "block";
pmP[0].style.opacity = "1";

// PROJECT SLIDER MENU LINKS
for (var i = 0; i < pmP.length; i++) {
	pmP[i].onclick = function(event) {
		for (var i = 0; i < pmP.length; i++) {
			projectWrap[i].style.display = "none";
			pmP[i].style.opacity = ".7";
			if (event.target == pmP[i]) {
				projectWrap[i].style.display = "block";
				pmP[i].style.opacity = "1";
				if (width < 500) {
					window.location.href = "index.html#projectMenu";
				} else {
					window.location.href = "index.html#projectsTitle";
				}
			}
		}
	};
}

// CLICK TIP ON PROJECT HOVER
var clickTip = document.getElementById("clickTip");

// var getClass = clickTip[0].getAttribute("class");
// alert(getClass);

// if (width > 999) {
	// for (var zzTop = 0; zzTop < projectWrap.length; zzTop++) {
		// projectWrap[zzTop].onmouseover = function() {
			// clickTip.style.display = "block";
			// if (projectWrap[zzTop] % )  {
				// clickTip.style.marginLeft = "-400px";
			// } else if (projectWrap[zzTop] === 1){
				// clickTip.style.marginLeft = "-100px";
			// }
		// };
		
		// projectWrap[zzTop].onmouseout = function() {
			// clickTip.style.display = "none";
		// };
	// }
// }

// PROJECTS NEXT ARROW
document.getElementById("projectArrow2").onclick = function() {
	for (var i = 0; i < projectWrap.length; i++) {
		if (projectWrap[i].style.display == "block") {
			projectWrap[i].style.display = "none";
			pmP[i].style.opacity = ".7";
			if (projectWrap[i] == projectWrap[projectWrap.length - 1]) {
				projectWrap[0].style.display = "block";
				pmP[0].style.opacity = "1";
				break;
			} else {
				projectWrap[i + 1].style.display = "block";
				pmP[i + 1].style.opacity = "1";
				break;
			}
		}
	}
};

// PROJECTS PREVIOUS ARROW
document.getElementById("projectArrow1").onclick = function() {
	for (var i = 0; i < projectWrap.length; i++) {
		if (projectWrap[i].style.display == "block") {
			projectWrap[i].style.display = "none";
			pmP[i].style.opacity = ".7";
			if (projectWrap[i] == projectWrap[0]) {
				projectWrap[projectWrap.length - 1].style.display = "block";
				pmP[pmP.length - 1].style.opacity = "1";
				break;
			} else {
				projectWrap[i - 1].style.display = "block";
				pmP[i - 1].style.opacity = "1";
				break;
			}
		}
	}
};



// GITHUB IMAGES FOR PROJECT SOURCE CODE LINKS
var projGitImg = document.getElementsByClassName("projGitImg");
for (var i = 0; i < projGitImg.length; i++) {
	projGitImg[i].style.background = "url('img/misc_icons/github.png')";
	projGitImg[i].style.backgroundSize = "100% 100%";
}

// SHORTCUT FUNCTION FOR TURNING PROJECT IMAGE DIVS INTO LINKS
function linker(idee, locale) {
	var setIdee = document.getElementById(idee);
	setIdee.onclick = function() {
		window.open(locale);
	};
};

// CHANGE PROJECT IMAGE DIVS TO LINKS
linker("projectImg1", "http://gitrobertpm.github.io/eching");
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

// SHORTCUT FUNCTION FOR CHANGING THE LINK COLOR ON PROJECT IMAGE HOVER
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
hoverColor("projectImg1", "projectLink1", "rgb(225,15,15)", "rgb(25,25,25)");
hoverColor("projectImg2", "projectLink2", "rgb(225,15,15)", "rgb(25,25,25)");
hoverColor("projectImg3", "projectLink3", "rgb(225,15,15)", "rgb(25,25,25)");
hoverColor("projectImg4", "projectLink4", "rgb(225,15,15)", "rgb(25,25,25)");
hoverColor("projectImg5", "projectLink5", "rgb(225,15,15)", "rgb(25,25,25)");
hoverColor("projectImg6", "projectLink6", "rgb(225,15,15)", "rgb(25,25,25)");


// FUNCTION FOR ADDING VENDOR PREFIXES TO TRANSFORM PROPERTY
var styleTransform = function(element, value) {
	element.style.msTransform = value;
	element.style.webkitTransform = value;
	element.style.transform = value;
};


// SLIDE IN SUBHEADER IMAGES
var subHeaderWrap = document.getElementById("subHeaderWrap");
subHeaderWrap.addEventListener("DOMMouseScroll", subHeader);
subHeaderWrap.addEventListener("mousewheel", subHeader);
subHeaderWrap.addEventListener("wheel", subHeader);
subHeaderWrap.addEventListener("touchstart", subHeader);

var devHand = document.getElementById("devHand");
var desHand = document.getElementById("desHand");

function subHeader() {
	setTimeout(function(){ styleTransform(devHand, "translate(0px, 0px)"); }, 0);
	setTimeout(function(){ devHand.style.opacity = "1"; }, 500);
	setTimeout(function(){ styleTransform(desHand, "translate(0px, 0px)"); }, 0);
	setTimeout(function(){ desHand.style.opacity = "1"; }, 500);
	
	// ADD ANIMATIONS TO HEADER FLOWER FOR LARGER SCREENS
	if (width > 999) {
		styleAnimation(document.getElementById("flowerBox"), "petalGlow 5s ease .5s forwards");
		styleAnimation(document.getElementById("petal_2"), "petal_2 .5s ease .5s forwards");
		styleAnimation(document.getElementById("petal_3"), "petal_3 1s ease .5s forwards");
		styleAnimation(document.getElementById("petal_4"), "petal_4 1.5s ease .5s forwards");
		styleAnimation(document.getElementById("petal_5"), "petal_5 2s ease .5s forwards");
		styleAnimation(document.getElementById("petal_6"), "petal_6 2.5s ease .5s forwards");
		styleAnimation(document.getElementById("petal_7"), "petal_7 3s ease .5s forwards");
		styleAnimation(document.getElementById("petal_8"), "petal_8 3.5s ease .5s forwards");
	}
};


var meSection = document.getElementById("meSection");
meSection.addEventListener("DOMMouseScroll", greeting);
meSection.addEventListener("mousewheel", greeting);
meSection.addEventListener("wheel", greeting);
meSection.addEventListener("touchstart", greeting);

var meText = document.getElementsByClassName("meText");

function greeting() {
	setTimeout(function(){ styleTransform(meText[0], "translate(0px, 0px)"); }, 0);
	setTimeout(function(){ meText[0].style.opacity = "1"; }, 250);
	setTimeout(function(){ styleTransform(meText[1], "translate(0px, 0px)"); }, 500);
	setTimeout(function(){ meText[1].style.opacity = "1"; }, 750);
};


// SET SKILL IMAGES
set("skillSection", "url('img/backgrounds/rpmBackground.jpg')", "block", "100% auto", "repeat");
set("skillLogo0", "url('img/misc_icons/html.jpg')", "inline-block", "100% 100%", "no-repeat", "center");
set("skillLogo1", "url('img/misc_icons/css.jpg')", "inline-block", "100% 100%", "no-repeat", "center");
set("skillLogo2", "url('img/misc_icons/js.jpg')", "inline-block", "100% 100%", "no-repeat", "center");
set("skillLogo3", "url('img/misc_icons/ai.jpg')", "inline-block", "100% 100%", "no-repeat", "center");
set("skillLogo4", "url('img/misc_icons/ps.jpg')", "inline-block", "100% 100%", "no-repeat", "center");
set("skillLogo5", "url('img/misc_icons/github.jpg')", "inline-block", "100% 100%", "no-repeat", "center");
set("skillLogo6", "url('img/misc_icons/jq.jpg')", "inline-block", "100% 100%", "no-repeat", "center");
set("skillLogo7", "url('img/misc_icons/mean.jpg')", "inline-block", "100% 100%", "no-repeat", "center");
set("skillLogo8", "url('img/misc_icons/responsive.jpg')", "inline-block", "100% 100%", "no-repeat", "center");
set("skillLogo9", "url('img/misc_icons/bootstrap.jpg')", "inline-block", "100% 100%", "no-repeat", "center");
set("skillLogo10", "url('img/misc_icons/php.jpg')", "inline-block", "100% 100%", "no-repeat", "center");
set("skillLogo11", "url('img/misc_icons/mysql.jpg')", "inline-block", "100% 100%", "no-repeat", "center");



// GOOD LIFE CODE TRANSOFRMS
var codeSection = document.getElementById("codeSection");
codeSection.addEventListener("DOMMouseScroll", codeSlide);
codeSection.addEventListener("mousewheel", codeSlide);
codeSection.addEventListener("wheel", codeSlide);
codeSection.addEventListener("touchstart", codeSlide);

var codeTag = document.getElementsByTagName("code");
var quoteDiv = document.getElementById("quoteDiv");

function codeSlide() {
	if (width > 999) {
		setTimeout(function(){ styleTransform(codeTag[0], "translate(0px, 0px)"); }, 0);
		setTimeout(function(){ styleTransform(codeTag[1], "translate(0px, 0px)"); }, 100);
		setTimeout(function(){ styleTransform(codeTag[2], "translate(0px, 0px)"); }, 200);
		setTimeout(function(){ styleTransform(codeTag[3], "translate(0px, 0px)"); }, 300);
		setTimeout(function(){ styleTransform(codeTag[4], "translate(0px, 0px)"); }, 400);
		setTimeout(function(){ styleTransform(codeTag[5], "translate(0px, 0px)"); }, 500);
		setTimeout(function(){ styleTransform(codeTag[6], "translate(0px, 0px)"); }, 600);
		setTimeout(function(){ styleTransform(codeTag[7], "translate(0px, 0px)"); }, 700);
		setTimeout(function(){ styleTransform(codeTag[8], "translate(0px, 0px)"); }, 800);
		setTimeout(function(){ styleTransform(codeTag[9], "translate(0px, 0px)"); }, 900);
		setTimeout(function(){ styleTransform(codeTag[10], "translate(0px, 0px)"); }, 1000);
		setTimeout(function(){ styleTransform(codeTag[11], "translate(0px, 0px)"); }, 1100);
		setTimeout(function(){ styleTransform(codeTag[12], "translate(0px, 0px)"); }, 1200);
		setTimeout(function(){ styleTransform(codeTag[13], "translate(0px, 0px)"); }, 1300);
		setTimeout(function(){ styleTransform(codeTag[14], "translate(0px, 0px)"); }, 1400);
		setTimeout(function(){ styleTransform(quoteDiv, "translate(0px, 0px)"); }, 1500);
	}
};

export let updateNavbar;

(()=>{

updateNavbar = function(){
	document.getElementById("desktop-navbar-nojs").style.display = "none";
	document.getElementById("mobile-navbar-nojs").style.display = "none";
	document.getElementById("desktop-navbar").style.display = "";
	document.getElementById("mobile-navbar").style.display = "";
}

})();
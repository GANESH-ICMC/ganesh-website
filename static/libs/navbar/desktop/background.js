export default function init(){	//start
	const BACKGROUND_COLOR = "18, 18, 18"; //rgb
	const ANIMATION_TIME = 50; //frames

	let navbar = document.getElementById("desktop-navbar");

	let isShowing = false;
	function show(){
		if(isShowing) return;
		isShowing = true;
		new InterpolationLinear(0, 1, ANIMATION_TIME, (val)=>{
			val = Math.round(val * 100) / 100;
			navbar.style.backgroundColor = `rgba(${BACKGROUND_COLOR}, ${val.toString()})`;
		});
		navbar.classList.add("shadow-md");
	}
	function hide(){
		if(!isShowing) return;
		isShowing = false;
		new InterpolationLinear(1, 0, ANIMATION_TIME, (val)=>{
			val = Math.round(val * 100) / 100;
			navbar.style.backgroundColor = `rgba(${BACKGROUND_COLOR}, ${val.toString()})`;
		});
		navbar.classList.remove("shadow-md");
	}

	let isMouseIn = false;
	navbar.addEventListener("mouseenter", ()=>{
		isMouseIn = true;
		if(shouldShow()) show();
		else hide();
	});
	navbar.addEventListener("mouseleave", ()=>{
		isMouseIn = false;
		if(shouldShow()) show();
		else hide();
	});

	function shouldShow(){
		let {top} = navbar.getBoundingClientRect();
		if(isMouseIn) return true;
		if(top <= 0){
			if(window.scrollY == 0) return false;
			else return true;
		}
		else return false;
	}

	window.addEventListener("scroll", ()=>{
		if(shouldShow()) show();
		else hide();
	});

	function setShow(){
		navbar.style.backgroundColor = `rgba(${BACKGROUND_COLOR}, 1)`;
		isShowing = true;
	}
	function setHide(){
		navbar.style.backgroundColor = `rgba(${BACKGROUND_COLOR}, 0)`;
		isShowing = false;
	}

	if(shouldShow()) setShow();
	else setHide();
}
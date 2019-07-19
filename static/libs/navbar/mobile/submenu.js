export default function init(){
	let submenus = document.querySelectorAll("#mobile-navbar .submenu");

	let currentInterpolation = null;

	function makeShowFunc(element){
		return async function(){
			element.style.height = "";
			let height = element.clientHeight;
			element.style.height = "0";
			if(currentInterpolation) currentInterpolation.delete();
			await (currentInterpolation = new InterpolationSine(0, height, 50, 3, (val)=>{
				element.style.height = Math.round(val) + "px";
			}));
			currentInterpolation = null;
		}
	}
	/**@param {HTMLElement} element*/
	function makeHideFunc(element){
		return async function(){
			let height = element.clientHeight;
			if(currentInterpolation) currentInterpolation.delete();
			await (currentInterpolation = new InterpolationSine(height, 0, 50, 3, (val)=>{
				element.style.height = Math.round(val) + "px";
			}));
			currentInterpolation = null;
		}
	}

	for(let menu of submenus){
		menu.height = menu.clientHeight;
		menu.style.height = 0;
		menu.parentElement.addEventListener("mouseenter", makeShowFunc(menu));
		menu.parentElement.addEventListener("mouseleave", makeHideFunc(menu));
	}
}
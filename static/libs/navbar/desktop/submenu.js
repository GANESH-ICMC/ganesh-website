export default function init(){	//start
	let submenus = document.querySelectorAll("#desktop-navbar .submenu");

	function makeShowFunc(element){
		return function(){
			element.style.display = "";
			let parentMiddle = element.parentElement.clientWidth/2;
			element.style.left = `${parentMiddle - element.clientWidth/2}px`;
			new InterpolationLinear(+element.style.opacity, 1, 50, (val)=>{
				element.style.opacity = val;
			});
		}
	}
	/**@param {HTMLElement} element*/
	function makeHideFunc(element){
		return async function(){
			await new InterpolationLinear(+element.style.opacity, 0, 50, (val)=>{
				element.style.opacity = val;
			});
			element.style.display = "none";
		}
	}
	for(let menu of submenus){
		menu.style.display = "none";
		menu.parentElement.addEventListener("mouseenter", makeShowFunc(menu));
		menu.parentElement.addEventListener("mouseleave", makeHideFunc(menu));
	}
}
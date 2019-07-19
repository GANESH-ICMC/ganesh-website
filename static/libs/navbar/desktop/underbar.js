export default function init(){

	/**@type {HTMLButtonElement}*/
	let currentElement = document.querySelector("#desktop-navbar .navbar-selected");
	if(!currentElement) throw("No element selected in the navbar");
	/**@type {NodeListOf<HTMLButtonElement>}*/
	let listElements = document.querySelectorAll("#desktop-navbar > ul > li");
	/**@type {NodeListOf<HTMLDivElement>}*/
	let underbar = document.getElementById("underbar");

	/**@type {number}*/ let currentPos;
	/**@type {number}*/ let currentWidth;

	/**@param {HTMLElement} element*/
	function getPadding(element){
		let style = window.getComputedStyle(element, null);
		let leftStr = style.getPropertyValue("padding-left");
		let rightStr = style.getPropertyValue("padding-right");
		return {
			left: Number.parseFloat(leftStr),
			right: Number.parseFloat(rightStr)
		}
	}

	/**@param {HTMLElement} element*/
	async function moveTo(element){
		let {left, width} = element.getBoundingClientRect();
		let {left : paddingLeft, right : paddingRight} = getPadding(element);
		left = Math.round(left + paddingLeft); width = Math.round(width - paddingLeft - paddingRight);

		new InterpolationSine(currentPos, left, 50, 3, (val)=>{
			currentPos = Math.round(val);
			underbar.style.transform = `translate(${currentPos}px, 0px)`;
		});

		new InterpolationSine(currentWidth, width, 50, 3, (val)=>{
			currentWidth = Math.round(val);
			underbar.style.width = currentWidth + "px";
		});
	}

	/**@param {HTMLElement} element*/
	function setPositionTo(element){
		let nav = document.getElementById("desktop-navbar");
		let oldDisplay = nav.style.display;
		nav.style.display = "";

		let {left, width} = element.getBoundingClientRect();
		let {left : paddingLeft, right : paddingRight} = getPadding(element);
		nav.style.display = oldDisplay;

		currentPos = Math.round(left + paddingLeft);
		currentWidth = Math.round(width - paddingLeft - paddingRight);
		underbar.style.transform = `translate(${currentPos}px, 0px)`;
		underbar.style.width = currentWidth + "px";
		underbar.style.display = "block";
	}

	for(let li of listElements){
		li.addEventListener("mouseenter", ()=>moveTo(li.firstChild));
		li.addEventListener("mouseleave", ()=>moveTo(currentElement.firstChild));
	}

	window.addEventListener("resize", ()=>setPositionTo(currentElement.firstChild));
	setPositionTo(currentElement.firstChild);
}
export default function init(){
	let hamburguer = document.querySelector("#mobile-navbar > div");
	let bar1 = document.querySelector("#mobile-navbar #bar1");
	let bar2 = document.querySelector("#mobile-navbar #bar2");
	let bar3 = document.querySelector("#mobile-navbar #bar3");
	let list = document.querySelector("#mobile-navbar > ul");
	let header = document.querySelector("header");

	let isOpen = false;
	let isAnimating = false;
	let scrollPosition = [0, 0];
	function noScroll(){
		window.scrollTo(...scrollPosition);
	}

	async function close(){
		document.body.style.overflow = "";
		document.body.parentNode.style.overflow = "";
		await Promise.all([
			new InterpolationLinear(1, 0, 40, (val)=>{ //slide menu
				bar1.style.transform = `rotate(${val * 45}deg)`;
				bar1.style.top = `${(val * hamburguer.clientHeight/4 + 1)}px`;
				bar3.style.transform = `rotate(${-val * 45}deg)`;
				bar3.style.top = `${-(val * hamburguer.clientHeight/4 + 1)}px`;
			}),
			new InterpolationSine(0, -100, 40, 3, (val)=>{ //slide menu
				list.style.left = val + "%";
			}),
			new InterpolationSine(0.7, 0, 40, 3, (val)=>{ //slide menu
				header.style.backgroundColor = `rgba(0, 0, 0, ${val})`;
			})
		]);
		return new InterpolationSine(0, 1, 40, 0.8, val =>{
			bar2.style.opacity = val.toString();
		});
	}
	async function open(){
		document.body.style.overflow = "hidden";
		document.body.parentNode.style.overflow = "hidden";
		let center = [
			hamburguer.left + hamburguer.clientWidth/2,
			hamburguer.top + hamburguer.clientHeight/2
		];
		await new InterpolationSine(1, 0, 40, 0.8, val =>{
			bar2.style.opacity = val.toString();
		});
		await Promise.all([
			new InterpolationLinear(0, 1, 40, (val)=>{ //slide menu
				bar1.style.transform = `rotate(${val * 45}deg)`;
				bar1.style.top = `${(val * hamburguer.clientHeight/4 + 1)}px`;
				bar3.style.transform = `rotate(${-val * 45}deg)`;
				bar3.style.top = `${-(val * hamburguer.clientHeight/4 + 1)}px`;
			}),
			new InterpolationSine(-100, 0, 40, 3, (val)=>{ //slide menu
				list.style.left = val + "%";
			}),
			new InterpolationSine(0, 0.7, 40, 3, (val)=>{ //slide menu
				header.style.backgroundColor = `rgba(0, 0, 0, ${val})`;
			})
		]);
	}
	hamburguer.addEventListener("click", async (event)=>{
		if(isAnimating) return;
		isAnimating = true;
		if(!(isOpen = !isOpen)) await close();
		else await open();
		isAnimating = false;
	});
	header.addEventListener("click", async (event)=>{
		if(event.target !== header) return;
		if(isAnimating) return;
		if(isOpen){
			isAnimating = true;
			await close();
			isOpen = false;
			isAnimating = false;
		}
	});
}
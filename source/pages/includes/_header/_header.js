import './_header.scss';

export default function() {
	var hamburger = document.querySelector('.hamburger'),
			menu = document.querySelector('.menu-open'),
			menuList = document.querySelector('.menu-open__list'),
			leftSide = document.querySelector('.menu-open__left'),
			rightSide = document.querySelector('.menu-open__right');


	console.log(hamburger);
	function action() {
		hamburger.classList.toggle('is-active');
		console.log("Работает")
		// menu.classList.toggle('visuallyHidden');
		if (hamburger.classList.contains('is-active')) {
			leftSide.style.left = 0;
			rightSide.style.right = 0;
			menu.style.opacity = 1;
			document.body.style.overflow = 'hidden';
			menu.style.zIndex = 2;
			menuList.style.top = 20 + "%";
		} else {
			leftSide.style.left = -900+"px";
			rightSide.style.right = -900+"px";
			document.body.style.overflow = 'visible';
			menu.style.zIndex = 0;
			menu.style.opacity = 0;
			menuList.style.top = 120 + "%";
		}

	}

	hamburger.addEventListener('click', action);
}
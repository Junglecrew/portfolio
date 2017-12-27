import './_header.scss';

export default function() {
	var hamburger = document.querySelector('.hamburger'),
			menu = document.querySelector('.menu-open'),
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
			document.body.style.overflow = 'hidden';
			menu.style.zIndex = 2;
		} else {
			leftSide.style.left = -900+"px";
			rightSide.style.right = -900+"px";
			document.body.style.overflow = 'visible';
			menu.style.zIndex = 0;
		}

	}

	hamburger.addEventListener('click', action);
}
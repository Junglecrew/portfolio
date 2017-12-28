import hamburger from '../pages/includes/_header/_header.js';
hamburger();

console.log('in main.js');

var arrowDown = document.querySelector('.arrow-down');


//Функция скролла вниз при клике на стрелку
function scrollDown(e) {
	e.preventDefault();
	var height = window.innerHeight;
	for(var i = 0; i < height; i++) {
	    (function(index) {
	        setTimeout(function() { 
	        	window.scrollTo(0,index); 
	        }, 0.5*i);
	    })(i);
	}
}
arrowDown.addEventListener('click', scrollDown)


import 'normalize.css';
import './blog.scss';
import '../../style/fonts.scss';


var sideMenu = document.querySelector('.blog-side__left'),
		articles = document.querySelector('.main-container__blog'),
		sideMenuTablets = document.querySelector('.menu-tablets'),
		sideMenuButton = document.querySelector('.open-menu');

window.onscroll = function() {

  var menuCoords = sideMenu.getBoundingClientRect(),
  		articlesCoords = articles.getBoundingClientRect();

  if (articlesCoords.top >= 0) {
    sideMenu.style.marginTop = 20+'px';
  } else { 
    sideMenu.style.marginTop = -(articlesCoords.top)+ 20 + 'px';
  }
}

function showSideMenu() {
	sideMenuTablets.classList.toggle('menu-tablets__hidden')
}

sideMenuButton.addEventListener('click', showSideMenu);

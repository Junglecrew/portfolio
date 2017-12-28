import 'normalize.css';
import './blog.scss';
import '../../style/fonts.scss';


var sideMenu = document.querySelector('.articles'),
		articles = document.querySelector('.main-container__blog');

window.onscroll = function() {
  var menuCoords = sideMenu.getBoundingClientRect(),
  		articlesCoords = articles.getBoundingClientRect();
  		console.log(articlesCoords.top)

  if (articlesCoords.top >= 0) {
		sideMenu.style.position = 'static';
		sideMenu.style.top = 'auto';
  } else { 
  	sideMenu.style.position = 'fixed';
  	sideMenu.style.top = 20 + 'px';
  	sideMenu.style.left = 40 + 'px';
  }
}

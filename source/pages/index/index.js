import 'normalize.css';
import './index.scss';
import '../../style/fonts.scss';
import '../../img/water.jpg';
import '../../img/water-maps.jpg';
// import './sprite_template.scss';
// import 'sprite.scss';
// import '../../img/sprite.svg';

console.log('in index.js');

var authBtnTrigger = document.querySelector('.auth-button');
var flip = document.querySelector('.auth');
var form = document.querySelector('.container');

function rotate(event) {
  flip.classList.add('rotated');
  authBtnTrigger.style.opacity ='0';
  authBtnTrigger.style.cursor ='default';
}

window.onclick = function(event) {
  var target = event.target; // где был клик?
  if (target == form ) {
    flip.classList.remove('rotated');
    authBtnTrigger.style.opacity ='1';
    authBtnTrigger.style.cursor ='pointer';
  }
};

authBtnTrigger.addEventListener('click', rotate);

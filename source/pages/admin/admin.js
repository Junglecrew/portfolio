import 'normalize.css';
import './admin.scss';
import '../../style/fonts.scss';




var tabs = document.querySelector('.tabs'),
		tab = tabs.querySelectorAll('.tabs__item'),
		blogForm = document.querySelector('.form-container');

var changeTab = function() {
	if (tab[0].classList.contains('active')) {
		blogForm.classList.add('visuallyHidden')
		tab[1].classList.add('active');
		tab[0].classList.remove('active');
	} else {
		blogForm.classList.remove('visuallyHidden')
		tab[0].classList.add('active');
		tab[1].classList.remove('active');
	}

}

tabs.addEventListener('click', changeTab);




console.log(tabs)
console.log(tab[1])

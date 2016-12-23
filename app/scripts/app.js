import svg4everybody from 'svg4everybody';
import $ from 'jquery';

$(() => {
	svg4everybody();
});

$(() => {
	const cursor = document.querySelector('.slider__arrow');
	const skillsContainer = document.querySelector('.slider__items');
	const skillItems = document.querySelectorAll('.slider__item');
	const skillItemInputs = document.querySelectorAll('.slider__item input');
	const cursorLeftPos = [-5, 150, 385, 762];

	const moveCursor = function () {
		for (let i = 0; i < skillItemInputs.length; i++) {
			if (skillItemInputs[i].checked) {
				cursor.style.left = cursorLeftPos[i] + 'px';
			}
		}
	};

	moveCursor();

	const setEventChecked = function (evt) {
		if (typeof evt !== 'undefined') {
			Array.prototype.forEach.call(skillItems, function (skill, i) {
				if (evt.target === skill) {
					skillItemInputs[i].checked = true;
				}
			});
		}
		moveCursor();
	};

	skillsContainer.addEventListener('click', setEventChecked);
});

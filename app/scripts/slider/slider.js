'use strict';

module.exports = function sliderAnimate() {
	const cursor = document.querySelector('.slider__arrow');
	const skillsContainer = document.querySelector('.slider__items');
	const skillItems = document.querySelectorAll('.slider__item');
	const cursorLeftPos = [-5, 150, 385, 762];

	const moveCursor = function (evt) {
		Array.prototype.forEach.call(skillItems, function (skill, i) {
			if (evt.target === skill) {
				cursor.style.left = cursorLeftPos[i];
			}
		});
	};

	skillsContainer.addEventListener('click', moveCursor);
};

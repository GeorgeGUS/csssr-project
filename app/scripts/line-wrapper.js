import $ from 'jquery';

$(() => {
	const text = $('.underlined-text');
	const textWords = text[0].innerText.split(' ');
	for (let i = 0; i < textWords.length; i++) {

	}
	if (text[0].scrollWidth > text.innerWidth()) {
		// Text has over-flowed
		console.log('Text has over-flowed');
		console.log(text[0].scrollWidth);
		console.log(text.innerWidth());
		console.dir(textWords);
	}
});

const slides = document.querySelectorAll('.slide');

const removeActive = (elements) => {
	elements.forEach((elem) => {
		elem.classList.remove('active');
	});
};

slides.forEach((slide) => {
	slide.addEventListener('click', (e) => {
		removeActive(slides);
		e.target.classList.add('active');
	});
});
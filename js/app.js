'use strict';
//GALLERY FILTER
const filterBnt = document.querySelector('#filter-btn').children;
const allItems = document.querySelector('.container').children;
const topUp = document.querySelector('.top-up');

for (let i = 0; i < filterBnt.length; i++) {
	filterBnt[i].addEventListener('click', function () {
		for (let j = 0; j < filterBnt.length; j++) {
			filterBnt[j].classList.remove('active');
		}
		this.classList.add('active');
		const target = this.getAttribute('data-target');

		for (let i = 0; i < allItems.length; i++) {
			allItems[i].style.display = 'none';
			if (target == allItems[i].getAttribute('data-id')) {
				allItems[i].style.display = 'block';
			}
			if (target == 'all') {
				allItems[i].style.display = 'block';
			}
		}
	});
}

//SCROLL UP
window.addEventListener('scroll', () => {
	if (window.pageYOffset > 150) {
		topUp.classList.add('active');
	} else {
		topUp.classList.remove('active');
	}
});

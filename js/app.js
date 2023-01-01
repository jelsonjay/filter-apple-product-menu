//GALLERY FILTER
const filterBnt = document.querySelector('#filter-btn').children;
const allItems = document.querySelector('.work-gallery').children;

for (let i = 0; i < filterBnt.length; i++) {
	filterBnt[i].addEventListener('click', function () {
		for (let a = 0; a < filterBnt.length; a++) {
			filterBnt[a].classList.remove('active');
		}
		this.classList.add('active');
		const target = this.getAttribute('data-target');

		for (let y = 0; y < allItems.length; y++) {
			allItems[y].style.display = 'none';
			if (target == allItems[y].getAttribute('data-id')) {
				allItems[y].style.display = 'block';
			}
			if (target == 'all') {
				allItems[y].style.display = 'block';
			}
		}
	});
}

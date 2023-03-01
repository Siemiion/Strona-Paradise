const nav = document.querySelector('.nav')
const navBtn = document.querySelector('.burger-btn')
const AllNavItems = document.querySelectorAll('.nav__item')

const handleNav = () => {
	nav.classList.toggle('nav--active')

	AllNavItems.forEach(item => {
		item.addEventListener('click', () => {
			nav.classList.remove('nav--active')
		})
	})
}

navBtn.addEventListener('click', handleNav)

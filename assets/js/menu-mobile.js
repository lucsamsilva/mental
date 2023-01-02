const icnMenu = document.querySelector('.menu-icon');
const navShow = document.querySelector('.nav-mobile');
icnMenu.addEventListener('click', () => {
	icnMenu.classList.toggle('active');
	navShow.classList.toggle('show');
});
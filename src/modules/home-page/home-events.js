import { removeCurrentPage, loadMenuPage, loadInfoPage } from '/src/index';

const addHomePageEventListeners = function() {
	const allHomePageLinks = document.querySelectorAll('.home-menu__ul__li');
	const homePageMenuLink = document.querySelector('.home-menu-link');
	const homePageAboutLink = document.querySelector('.home-about-link');
	const homePageHoursLink = document.querySelector('.home-hours-link');
	const homePageContactLink = document.querySelector('.home-contact-link');

	allHomePageLinks.forEach(link => {
		link.addEventListener('click', removeCurrentPage);
	});
	homePageMenuLink.addEventListener('click', loadMenuPage);
	homePageAboutLink.addEventListener('click', loadInfoPage);
	homePageHoursLink.addEventListener('click', loadInfoPage);
	homePageContactLink.addEventListener('click', loadInfoPage);
};

export default addHomePageEventListeners;

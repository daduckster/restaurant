import { removeCurrentPage, loadHomePage, loadMenuPage } from '/src/index';

const addInfoPageEventListeners = function() {
	const allInfoPageMobileLinks = document.querySelectorAll('.menu-navbar-mobile__ul__li');
	const infoPageMobileHomeLink = document.querySelector('.info-mobile-home-link');
	const infoPageMobileMenuLink = document.querySelector('.info-mobile-menu-link');

	const allInfoPageDesktopLinks = document.querySelectorAll('.menu-navbar-desktop__ul__li');
	const infoPageDesktopHomeLink = document.querySelector('.info-desktop-home-link');
	const infoPageDesktopMenuLink = document.querySelector('.info-desktop-menu-link');

	allInfoPageMobileLinks.forEach(link => {
		link.addEventListener('click', removeCurrentPage);
	});
	infoPageMobileHomeLink.addEventListener('click', loadHomePage);
	infoPageMobileMenuLink.addEventListener('click', loadMenuPage);

	allInfoPageDesktopLinks.forEach(link => {
		link.addEventListener('click', removeCurrentPage);
	});
	infoPageDesktopHomeLink.addEventListener('click', loadHomePage);
	infoPageDesktopMenuLink.addEventListener('click', loadMenuPage);
};

export default addInfoPageEventListeners;

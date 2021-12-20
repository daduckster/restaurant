import { removeCurrentPage, loadHomePage, loadInfoPage } from '/src/index';

const addMenuPageEventListeners = function() {
	const allMenuPageMobileLinks = document.querySelectorAll('.menu-navbar-mobile__ul__li');
	const menuPageMobileHomeLink = document.querySelector('.menu-mobile-home-link');
	const menuPageMobileAboutLink = document.querySelector('.menu-mobile-about-link');
	const menuPageMobileHoursLink = document.querySelector('.menu-mobile-hours-link');
	const menuPageMobileContactLink = document.querySelector('.menu-mobile-contact-link');

	const allMenuPageDesktopLinks = document.querySelectorAll('.menu-navbar-desktop__ul__li');
	const menuPageDesktopHomeLink = document.querySelector('.menu-desktop-home-link');
	const menuPageDesktopAboutLink = document.querySelector('.menu-desktop-about-link');
	const menuPageDesktopHoursLink = document.querySelector('.menu-desktop-hours-link');
	const menuPageDesktopContactLink = document.querySelector('.menu-desktop-contact-link');

	allMenuPageMobileLinks.forEach(link => {
		link.addEventListener('click', removeCurrentPage);
	});
	menuPageMobileHomeLink.addEventListener('click', loadHomePage);
	menuPageMobileAboutLink.addEventListener('click', loadInfoPage);
	menuPageMobileHoursLink.addEventListener('click', loadInfoPage);
	menuPageMobileContactLink.addEventListener('click', loadInfoPage);

	allMenuPageDesktopLinks.forEach(link => {
		link.addEventListener('click', removeCurrentPage);
	});
	menuPageDesktopHomeLink.addEventListener('click', loadHomePage);
	menuPageDesktopAboutLink.addEventListener('click', loadInfoPage);
	menuPageDesktopHoursLink.addEventListener('click', loadInfoPage);
	menuPageDesktopContactLink.addEventListener('click', loadInfoPage);
};

export default addMenuPageEventListeners;

import { appetizersSection, mainSection, dessertsSection, drinksSection } from './menu-positions';

const createMenuDom = function() {
	const pageContainer = document.querySelector('.page-container');

	//CREATING ELEMENTS
	const menuContainer = document.createElement('div');
	const welcomeImg = document.createElement('img');
	const footer = document.createElement('div');
	const footerPFirst = document.createElement('p');
	const footerPSecond = document.createElement('p');
	const buffer = document.createElement('div');

	const menuNavbarMobile = document.createElement('div');
	const menuNavbarMobileDarken = document.createElement('div');
	const menuNavbarMobileContainer = document.createElement('div');
	const menuNavbarMobileUl = document.createElement('ul');
	const menuNavbarMobileLiImgHome = document.createElement('img');
	const menuNavbarMobileLiImgAbout = document.createElement('img');
	const menuNavbarMobileLiImgHours = document.createElement('img');
	const menuNavbarMobileLiImgContact = document.createElement('img');
	const menuNavbarMobileLiHome = document.createElement('li');
	const menuNavbarMobileLiAbout = document.createElement('li');
	const menuNavbarMobileLiHours = document.createElement('li');
	const menuNavbarMobileLiContact = document.createElement('li');

	const menuHamburger = document.createElement('div');
	const menuHamburgerImg = document.createElement('img');

	const menuNavbarDesktop = document.createElement('div');
	const menuNavbarDesktopUl = document.createElement('ul');
	const menuNavbarDesktopLiHome = document.createElement('li');
	const menuNavbarDesktopLiAbout = document.createElement('li');
	const menuNavbarDesktopLiHours = document.createElement('li');
	const menuNavbarDesktopLiContact = document.createElement('li');

	const menuImage = document.createElement('div');
	const menuImagePhoto = document.createElement('img');
	const menuImageGreenRectangle = document.createElement('div');
	const menuImageOrangeRectangle = document.createElement('div');

	const menuHeader = document.createElement('div');
	const menuHeaderText = document.createElement('h2');

	//ADDING CLASSES
	menuContainer.classList.add('menu-container');
	welcomeImg.classList.add('menu-container__welcome');
	footer.classList.add('menu-container__footer');
	footerPFirst.classList.add('menu-container__footer__p');
	footerPSecond.classList.add('menu-container__footer__p');
	buffer.classList.add('menu-container__buffer');

	menuNavbarMobile.classList.add('menu-navbar-mobile');
	menuNavbarMobile.classList.add('hidden');
	menuNavbarMobileDarken.classList.add('menu-navbar-mobile__darken');
	menuNavbarMobileContainer.classList.add('menu-navbar-mobile__container');
	menuNavbarMobileUl.classList.add('menu-navbar-mobile__ul');
	menuNavbarMobileLiImgHome.classList.add('menu-navbar-mobile__ul__img');
	menuNavbarMobileLiImgAbout.classList.add('menu-navbar-mobile__ul__img');
	menuNavbarMobileLiImgHours.classList.add('menu-navbar-mobile__ul__img');
	menuNavbarMobileLiImgContact.classList.add('menu-navbar-mobile__ul__img');
	menuNavbarMobileLiHome.classList.add('menu-navbar-mobile__ul__li');
	menuNavbarMobileLiHome.classList.add('menu-mobile-home-link');
	menuNavbarMobileLiAbout.classList.add('menu-navbar-mobile__ul__li');
	menuNavbarMobileLiAbout.classList.add('menu-mobile-about-link');
	menuNavbarMobileLiHours.classList.add('menu-navbar-mobile__ul__li');
	menuNavbarMobileLiHours.classList.add('menu-mobile-hours-link');
	menuNavbarMobileLiContact.classList.add('menu-navbar-mobile__ul__li');
	menuNavbarMobileLiContact.classList.add('menu-mobile-contact-link');

	menuHamburger.classList.add('menu-hamburger');
	menuHamburgerImg.classList.add('menu-hamburger__img');

	menuNavbarDesktop.classList.add('menu-navbar-desktop');
	menuNavbarDesktopUl.classList.add('menu-navbar-desktop__ul');
	menuNavbarDesktopLiHome.classList.add('menu-navbar-desktop__ul__li');
	menuNavbarDesktopLiHome.classList.add('menu-desktop-home-link');
	menuNavbarDesktopLiAbout.classList.add('menu-navbar-desktop__ul__li');
	menuNavbarDesktopLiAbout.classList.add('menu-desktop-about-link');
	menuNavbarDesktopLiHours.classList.add('menu-navbar-desktop__ul__li');
	menuNavbarDesktopLiHours.classList.add('menu-desktop-hours-link');
	menuNavbarDesktopLiContact.classList.add('menu-navbar-desktop__ul__li');
	menuNavbarDesktopLiContact.classList.add('menu-desktop-contact-link');

	menuImage.classList.add('menu-image');
	menuImagePhoto.classList.add('menu-image__photo');
	menuImageGreenRectangle.classList.add('menu-image__green-rectangle');
	menuImageOrangeRectangle.classList.add('menu-image__orange-rectangle');

	menuHeader.classList.add('menu-header');
	menuHeaderText.classList.add('menu-header__header-text');

	//ADDING CONTENT
	welcomeImg.src = '/styles/images/welcome.svg';
	welcomeImg.alt = 'word-welcome-on-the-background';

	footerPFirst.textContent = '© 2021 by Olya Vlasak (Front-End, UI/UX Design)';
	footerPSecond.textContent = 'vlasakolga@gmail.com';

	menuNavbarMobileLiImgHome.src = '/styles/images/menu-arrow-orange.svg';
	menuNavbarMobileLiImgAbout.src = '/styles/images/menu-arrow-orange.svg';
	menuNavbarMobileLiImgHours.src = '/styles/images/menu-arrow-orange.svg';
	menuNavbarMobileLiImgContact.src = '/styles/images/menu-arrow-orange.svg';
	menuNavbarMobileLiImgHome.alt = 'icon-arrow-right';
	menuNavbarMobileLiImgAbout.alt = 'icon-arrow-right';
	menuNavbarMobileLiImgHours.alt = 'icon-arrow-right';
	menuNavbarMobileLiImgContact.alt = 'icon-arrow-right';
	menuNavbarMobileLiHome.textContent = 'Home';
	menuNavbarMobileLiAbout.textContent = 'About Us';
	menuNavbarMobileLiHours.textContent = 'Working Hours';
	menuNavbarMobileLiContact.textContent = 'Contact';

	menuHamburgerImg.src = '/styles/images/menu-hamburger-mobile.svg';
	menuHamburgerImg.alt = 'hamburger-menu-icon';

	menuNavbarDesktopLiHome.textContent = 'Home';
	menuNavbarDesktopLiAbout.textContent = 'About Us';
	menuNavbarDesktopLiHours.textContent = 'Working Hours';
	menuNavbarDesktopLiContact.textContent = 'Contact';

	menuImagePhoto.src = '/styles/images/menu-photo-desktop.png';
	menuImagePhoto.alt = 'photo-of-dishes-with-food';

	menuHeaderText.textContent = 'MENU';

	//APPENDING SECONDARY CHILDREN
	footer.appendChild(footerPFirst);
	footer.appendChild(footerPSecond);

	menuNavbarMobileLiHome.appendChild(menuNavbarMobileLiImgHome);
	menuNavbarMobileLiAbout.appendChild(menuNavbarMobileLiImgAbout);
	menuNavbarMobileLiHours.appendChild(menuNavbarMobileLiImgHours);
	menuNavbarMobileLiContact.appendChild(menuNavbarMobileLiImgContact);
	menuNavbarMobileUl.appendChild(menuNavbarMobileLiHome);
	menuNavbarMobileUl.appendChild(menuNavbarMobileLiAbout);
	menuNavbarMobileUl.appendChild(menuNavbarMobileLiHours);
	menuNavbarMobileUl.appendChild(menuNavbarMobileLiContact);
	menuNavbarMobileContainer.appendChild(menuNavbarMobileUl);
	menuNavbarMobile.appendChild(menuNavbarMobileDarken);
	menuNavbarMobile.appendChild(menuNavbarMobileContainer);

	menuHamburger.appendChild(menuHamburgerImg);

	menuNavbarDesktopUl.appendChild(menuNavbarDesktopLiHome);
	menuNavbarDesktopUl.appendChild(menuNavbarDesktopLiAbout);
	menuNavbarDesktopUl.appendChild(menuNavbarDesktopLiHours);
	menuNavbarDesktopUl.appendChild(menuNavbarDesktopLiContact);
	menuNavbarDesktop.appendChild(menuNavbarDesktopUl);

	menuImage.appendChild(menuImagePhoto);
	menuImage.appendChild(menuImageGreenRectangle);
	menuImage.appendChild(menuImageOrangeRectangle);

	menuHeader.appendChild(menuHeaderText);

	//BUILDING MENU SECTION

	//CREATING MENU ELEMENTS
	const menuPlates = document.createElement('div');

	const menuPlatesLeftColumn = document.createElement('div');
	const menuPlatesAppetizers = document.createElement('div');
	const menuPlatesAppetizersHeader = document.createElement('h3');
	const menuPlatesMain = document.createElement('div');
	const menuPlatesMainHeader = document.createElement('h3');

	const menuPlatesRightColumn = document.createElement('div');
	const menuPlatesDesserts = document.createElement('div');
	const menuPlatesDessertsHeader = document.createElement('h3');
	const menuPlatesLogo = document.createElement('div');
	const menuPlatesLogoImg = document.createElement('img');
	const menuPlatesDrinks = document.createElement('div');
	const menuPlatesDrinksHeader = document.createElement('h3');

	//ADDING MENU CLASSES
	menuPlates.classList.add('menu-plates');

	menuPlatesLeftColumn.classList.add('menu-plates__left-column');
	menuPlatesAppetizers.classList.add('menu-plates__appetizers');
	menuPlatesAppetizers.classList.add('menu-plates__all-plates');
	menuPlatesAppetizersHeader.classList.add('menu-plates__header');
	menuPlatesMain.classList.add('menu-plates__main');
	menuPlatesMain.classList.add('menu-plates__all-plates');
	menuPlatesMainHeader.classList.add('menu-plates__header');

	menuPlatesRightColumn.classList.add('menu-plates__right-column');
	menuPlatesDesserts.classList.add('menu-plates__desserts');
	menuPlatesDesserts.classList.add('menu-plates__all-plates');
	menuPlatesDessertsHeader.classList.add('menu-plates__header');
	menuPlatesLogo.classList.add('menu-plates__logo');
	menuPlatesLogoImg.classList.add('menu-plates__logo__img');
	menuPlatesDrinks.classList.add('menu-plates__drinks');
	menuPlatesDrinks.classList.add('menu-plates__all-plates');
	menuPlatesDrinksHeader.classList.add('menu-plates__header');

	//ADDING MENU CONTENT
	menuPlatesAppetizersHeader.textContent = 'APPETIZERS';
	menuPlatesMainHeader.textContent = 'MAIN';
	menuPlatesDessertsHeader.textContent = 'DESSERTS';
	menuPlatesDrinksHeader.textContent = 'DRINKS';
	menuPlatesLogoImg.src = '/styles/images/logo.svg';
	menuPlatesLogoImg.alt = 'logo-with-letters-f-and-l';

	//APPENDING MENU HEADERS
	menuPlatesAppetizers.appendChild(menuPlatesAppetizersHeader);
	menuPlatesMain.appendChild(menuPlatesMainHeader);
	menuPlatesDesserts.appendChild(menuPlatesDessertsHeader);
	menuPlatesDrinks.appendChild(menuPlatesDrinksHeader);

	//BUILDING PLATES SECTION
	appetizersSection.forEach(position => {
		const appetizerPosition = document.createElement('div');
		const appetizerName = document.createElement('p');
		const appetizerPrice = document.createElement('p');

		appetizerPosition.classList.add('menu-plates__position');
		appetizerName.classList.add('menu-plates__position__name');
		appetizerPrice.classList.add('menu-plates__position__price');

		appetizerName.textContent = position.name;
		appetizerPrice.textContent = position.price;

		appetizerPosition.appendChild(appetizerName);
		appetizerPosition.appendChild(appetizerPrice);
		menuPlatesAppetizers.appendChild(appetizerPosition);
	});

	mainSection.forEach(position => {
		const mainPosition = document.createElement('div');
		const mainName = document.createElement('p');
		const mainPrice = document.createElement('p');

		mainPosition.classList.add('menu-plates__position');
		mainName.classList.add('menu-plates__position__name');
		mainPrice.classList.add('menu-plates__position__price');

		mainName.textContent = position.name;
		mainPrice.textContent = position.price;

		mainPosition.appendChild(mainName);
		mainPosition.appendChild(mainPrice);
		menuPlatesMain.appendChild(mainPosition);
	});

	dessertsSection.forEach(position => {
		const dessertsPosition = document.createElement('div');
		const dessertsName = document.createElement('p');
		const dessertsPrice = document.createElement('p');

		dessertsPosition.classList.add('menu-plates__position');
		dessertsName.classList.add('menu-plates__position__name');
		dessertsPrice.classList.add('menu-plates__position__price');

		dessertsName.textContent = position.name;
		dessertsPrice.textContent = position.price;

		dessertsPosition.appendChild(dessertsName);
		dessertsPosition.appendChild(dessertsPrice);
		menuPlatesDesserts.appendChild(dessertsPosition);
	});

	drinksSection.forEach(position => {
		const drinksPosition = document.createElement('div');
		const drinksName = document.createElement('p');
		const drinksPrice = document.createElement('p');

		drinksPosition.classList.add('menu-plates__position');
		drinksName.classList.add('menu-plates__position__name');
		drinksPrice.classList.add('menu-plates__position__price');

		drinksName.textContent = position.name;
		drinksPrice.textContent = position.price;

		drinksPosition.appendChild(drinksName);
		drinksPosition.appendChild(drinksPrice);
		menuPlatesDrinks.appendChild(drinksPosition);
	});

	//ADDING ALL CHILDREN
	menuPlatesLeftColumn.appendChild(menuPlatesAppetizers);
	menuPlatesLeftColumn.appendChild(menuPlatesMain);

	menuPlatesLogo.appendChild(menuPlatesLogoImg);
	menuPlatesRightColumn.appendChild(menuPlatesDesserts);
	menuPlatesRightColumn.appendChild(menuPlatesLogo);
	menuPlatesRightColumn.appendChild(menuPlatesDrinks);

	menuPlates.appendChild(menuPlatesLeftColumn);
	menuPlates.appendChild(menuPlatesRightColumn);

	menuContainer.appendChild(welcomeImg);
	menuContainer.appendChild(footer);
	menuContainer.appendChild(buffer);
	menuContainer.appendChild(menuNavbarMobile);
	menuContainer.appendChild(menuHamburger);
	menuContainer.appendChild(menuNavbarDesktop);
	menuContainer.appendChild(menuImage);
	menuContainer.appendChild(menuHeader);
	menuContainer.appendChild(menuPlates);

	pageContainer.appendChild(menuContainer);
};

export default createMenuDom;

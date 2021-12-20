const createInfoDom = function() {
	const pageContainer = document.querySelector('.page-container');

	//CREATING ELEMENTS
	const infoContainer = document.createElement('div');
	const welcomeImg = document.createElement('img');
	const footer = document.createElement('div');
	const footerPFirst = document.createElement('p');
	const footerPSecond = document.createElement('p');
	const imageContainer = document.createElement('div');
	const imageContainerImg = document.createElement('img');

	const menuNavbarMobile = document.createElement('div');
	const menuNavbarMobileDarken = document.createElement('div');
	const menuNavbarMobileContainer = document.createElement('div');
	const menuNavbarMobileUl = document.createElement('ul');
	const menuNavbarMobileLiImgHome = document.createElement('img');
	const menuNavbarMobileLiImgMenu = document.createElement('img');
	const menuNavbarMobileLiHome = document.createElement('li');
	const menuNavbarMobileLiMenu = document.createElement('li');

	const menuHamburger = document.createElement('div');
	const menuHamburgerImg = document.createElement('img');

	const menuNavbarDesktop = document.createElement('div');
	const menuNavbarDesktopUl = document.createElement('ul');
	const menuNavbarDesktopLiHome = document.createElement('li');
	const menuNavbarDesktopLiMenu = document.createElement('li');

	const infoData = document.createElement('div');
	const infoDataHours = document.createElement('div');
	const infoDataPFirst = document.createElement('p');
	const infoDataPSecond = document.createElement('p');
	const infoDataPSecondSpan = document.createElement('span');
	const infoDataContacts = document.createElement('div');
	const infoDataContactsTitle = document.createElement('p');
	const infoDataContactsPFirst = document.createElement('p');
	const infoDataContactPSecond = document.createElement('p');
	const infoDataContactPThird = document.createElement('p');
	const infoDataLogo = document.createElement('div');
	const infoDataLogoImg = document.createElement('img');

	const infoAbout = document.createElement('div');
	const infoAboutTitle = document.createElement('p');
	const infoAboutPFirst = document.createElement('p');
	const infoAboutPSecond = document.createElement('p');

	const infoLogoMobile = document.createElement('div');
	const infoLogoMobileImg = document.createElement('img');

	//ADDING CLASSES
	infoContainer.classList.add('info-container');
	welcomeImg.classList.add('menu-container__welcome');
	footer.classList.add('menu-container__footer');
	footerPFirst.classList.add('menu-container__footer__p');
	footerPSecond.classList.add('menu-container__footer__p');
	imageContainer.classList.add('info-container__image-container');
	imageContainerImg.classList.add('info-container__image-container__img');

	menuNavbarMobile.classList.add('menu-navbar-mobile');
	menuNavbarMobile.classList.add('hidden');
	menuNavbarMobileDarken.classList.add('menu-navbar-mobile__darken');
	menuNavbarMobileContainer.classList.add('menu-navbar-mobile__container');
	menuNavbarMobileUl.classList.add('menu-navbar-mobile__ul');
	menuNavbarMobileLiImgHome.classList.add('menu-navbar-mobile__ul__img');
	menuNavbarMobileLiImgMenu.classList.add('menu-navbar-mobile__ul__img');
	menuNavbarMobileLiHome.classList.add('menu-navbar-mobile__ul__li');
	menuNavbarMobileLiHome.classList.add('info-mobile-home-link');
	menuNavbarMobileLiMenu.classList.add('menu-navbar-mobile__ul__li');
	menuNavbarMobileLiMenu.classList.add('info-mobile-menu-link');

	menuHamburger.classList.add('menu-hamburger');
	menuHamburgerImg.classList.add('menu-hamburger__img');

	menuNavbarDesktop.classList.add('menu-navbar-desktop');
	menuNavbarDesktopUl.classList.add('menu-navbar-desktop__ul');
	menuNavbarDesktopLiHome.classList.add('menu-navbar-desktop__ul__li');
	menuNavbarDesktopLiHome.classList.add('info-desktop-home-link');
	menuNavbarDesktopLiMenu.classList.add('menu-navbar-desktop__ul__li');
	menuNavbarDesktopLiMenu.classList.add('info-desktop-menu-link');

	infoData.classList.add('info-data');
	infoDataHours.classList.add('info-data__hours');
	infoDataPFirst.classList.add('info-data__hours__p');
	infoDataPSecond.classList.add('info-data__hours__p');
	infoDataPSecondSpan.classList.add('info-data__hours__p__span');
	infoDataContacts.classList.add('info-data__contacts');
	infoDataContactsTitle.classList.add('info-data__contacts__title');
	infoDataContactsPFirst.classList.add('info-data__contacts__contact-data');
	infoDataContactPSecond.classList.add('info-data__contacts__contact-data');
	infoDataContactPThird.classList.add('info-data__contacts__contact-data');
	infoDataLogo.classList.add('info-data__logo');
	infoDataLogoImg.classList.add('info-data__logo__img');

	infoAbout.classList.add('info-about');
	infoAboutTitle.classList.add('info-about__title');
	infoAboutPFirst.classList.add('info-about__text');
	infoAboutPSecond.classList.add('info-about__text');

	infoLogoMobile.classList.add('info-logo-mobile');
	infoLogoMobileImg.classList.add('info-logo-mobile__img');

	//ADDING CONTENT
	welcomeImg.src = '/styles/images/welcome.svg';
	welcomeImg.alt = 'word-welcome-on-the-background';

	footerPFirst.textContent = '© 2021 by Olya Vlasak (Front-End, UI/UX Design)';
	footerPSecond.textContent = 'vlasakolga@gmail.com';

	menuNavbarMobileLiImgHome.src = '/styles/images/menu-arrow-orange.svg';
	menuNavbarMobileLiImgMenu.src = '/styles/images/menu-arrow-orange.svg';
	menuNavbarMobileLiImgHome.alt = 'icon-arrow-right';
	menuNavbarMobileLiImgMenu.alt = 'icon-arrow-right';
	menuNavbarMobileLiHome.textContent = 'Home';
	menuNavbarMobileLiMenu.textContent = 'Menu';

	menuHamburgerImg.src = '/styles/images/menu-hamburger-mobile.svg';
	menuHamburgerImg.alt = 'hamburger-menu-icon';

	menuNavbarDesktopLiHome.textContent = 'Home';
	menuNavbarDesktopLiMenu.textContent = 'Menu';

	imageContainerImg.src = '/styles/images/info-photo-desktop.png';
	imageContainerImg.alt = 'photo-of-the-restaurant';

	infoDataPFirst.textContent = 'WORKING HOURS';
	infoDataPSecond.textContent = 'Mo - So:';
	infoDataPSecondSpan.textContent = '11:00 - 23:30';
	infoDataContactsTitle.textContent = 'CONTACTS';
	infoDataContactsPFirst.textContent = '+41000000000';
	infoDataContactPSecond.textContent = 'freshandlight@email.com';
	infoDataContactPThird.textContent = '8008, Zürich, Strassestrasse 27';
	infoDataLogoImg.src = '/styles/images/logo.svg';
	infoDataLogoImg.alt = 'logo-with-letters-f-and-l';

	infoAboutTitle.textContent = 'ABOUT US';
	infoAboutPFirst.textContent = `‘Fresh & Light’ Restaurants are well known with a substantial gathering of people
  including families, kids, seniors, and business experts. Our benevolent condition is perfect for praising unique
  events, facilitating a business lunch, or assembling for a flavorful dinner with loved ones.`;
	infoAboutPSecond.textContent = `Open day by day for lunch and dinner, ’Fresh & Light’ offers a choice of naturally
  arranged things utilizing just the best fixings accessible.`;

	infoLogoMobileImg.src = '/styles/images/logo.svg';
	infoLogoMobileImg.alt = 'logo-with-letters-f-and-l';

	//APPENDING CHILDREN
	footer.appendChild(footerPFirst);
	footer.appendChild(footerPSecond);
	imageContainer.appendChild(imageContainerImg);

	menuNavbarMobileLiHome.appendChild(menuNavbarMobileLiImgHome);
	menuNavbarMobileLiMenu.appendChild(menuNavbarMobileLiImgMenu);
	menuNavbarMobileUl.appendChild(menuNavbarMobileLiHome);
	menuNavbarMobileUl.appendChild(menuNavbarMobileLiMenu);
	menuNavbarMobileContainer.appendChild(menuNavbarMobileUl);
	menuNavbarMobile.appendChild(menuNavbarMobileDarken);
	menuNavbarMobile.appendChild(menuNavbarMobileContainer);

	menuHamburger.appendChild(menuHamburgerImg);

	menuNavbarDesktopUl.appendChild(menuNavbarDesktopLiHome);
	menuNavbarDesktopUl.appendChild(menuNavbarDesktopLiMenu);
	menuNavbarDesktop.appendChild(menuNavbarDesktopUl);

	infoDataPSecond.appendChild(infoDataPSecondSpan);
	infoDataHours.appendChild(infoDataPFirst);
	infoDataHours.appendChild(infoDataPSecond);
	infoDataContacts.appendChild(infoDataContactsTitle);
	infoDataContacts.appendChild(infoDataContactsPFirst);
	infoDataContacts.appendChild(infoDataContactPSecond);
	infoDataContacts.appendChild(infoDataContactPThird);
	infoDataLogo.appendChild(infoDataLogoImg);
	infoData.appendChild(infoDataHours);
	infoData.appendChild(infoDataContacts);
	infoData.appendChild(infoDataLogo);

	infoAbout.appendChild(infoAboutTitle);
	infoAbout.appendChild(infoAboutPFirst);
	infoAbout.appendChild(infoAboutPSecond);

	infoLogoMobile.appendChild(infoLogoMobileImg);

	infoContainer.appendChild(welcomeImg);
	infoContainer.appendChild(footer);
	infoContainer.appendChild(imageContainer);
	infoContainer.appendChild(menuNavbarMobile);
	infoContainer.appendChild(menuHamburger);
	infoContainer.appendChild(menuNavbarDesktop);
	infoContainer.appendChild(infoData);
	infoContainer.appendChild(infoAbout);
	infoContainer.appendChild(infoLogoMobile);

	pageContainer.appendChild(infoContainer);
};

export default createInfoDom;

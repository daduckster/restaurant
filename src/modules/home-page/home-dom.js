const createHomeDom = function() {
	// const pageContainer = document.querySelector('.page-container');

	//CREATING ELEMENTS
	const homeContainer = document.createElement('div');

	const welcomeImg = document.createElement('img');

	const footer = document.createElement('div');
	const footerPFirst = document.createElement('p');
	const footerPSecond = document.createElement('p');

	const homeLogo = document.createElement('div');
	const homeLogoImg = document.createElement('img');

	const homeMenu = document.createElement('div');
	const homeMenuUl = document.createElement('ul');
	const homeMenuLiImg = document.createElement('img');
	const homeMenuLiMenu = document.createElement('li');
	const homeMenuLiAbout = document.createElement('li');
	const homeMenuLiHours = document.createElement('li');
	const homeMenuLiContact = document.createElement('li');

	const homeImage = document.createElement('div');
	const homeImagePhoto = document.createElement('img');
	const homeImageGreenRectangle = document.createElement('div');
	const homeImageOrangeRectangle = document.createElement('div');

	const homeName = document.createElement('div');
	const homeNameH1 = document.createElement('h1');

	//ADDING CLASSES
	homeContainer.classList.add('home-container');

	welcomeImg.classList.add('home-container__welcome');

	footer.classList.add('home-container__footer');
	footerPFirst.classList.add('home-container__footer__p');
	footerPSecond.classList.add('home-container__footer__p');

	homeLogo.classList.add('home-logo');
	homeLogoImg.classList.add('home-logo__img');

	homeMenu.classList.add('home-menu');
	homeMenuUl.classList.add('home-menu__ul');
	homeMenuLiImg.classList.add('home-menu__ul__img');
	homeMenuLiMenu.classList.add('home-menu__ul__li');
	homeMenuLiAbout.classList.add('home-menu__ul__li');
	homeMenuLiHours.classList.add('home-menu__ul__li');
	homeMenuLiContact.classList.add('home-menu__ul__li');

	homeImage.classList.add('home-image');
	homeImagePhoto.classList.add('home-image__photo');
	homeImageGreenRectangle.classList.add('home-image__green-rectangle');
	homeImageOrangeRectangle.classList.add('home-image__orange-rectangle');

	homeName.classList.add('home-name');
	homeNameH1.classList.add('home-name__h1');

	//ADDING CONTENT
	welcomeImg.src = '/styles/images/welcome.svg';
	welcomeImg.alt = 'word-welcome-on-the-background';

	footerPFirst.textContent = '© 2021 by Olya Vlasak (Front-End, UI/UX Design)';
	footerPSecond.textContent = 'vlasakolga@gmail.com';

	homeLogoImg.src = '/styles/images/logo.svg';
	homeLogoImg.alt = 'logo-with-letters-f-and-l';

	homeMenuLiImg.src = '/styles/images/menu-arrow.svg';
	homeMenuLiImg.alt = 'icon-arrow-right';
	homeMenuLiMenu.textContent = 'Menu';
	homeMenuLiAbout.textContent = 'About Us';
	homeMenuLiHours.textContent = 'Working Hours';
	homeMenuLiContact.textContent = 'Contact';

	homeImagePhoto.src = '/styles/images/home-photo-desktop.png';
	homeImagePhoto.alt = 'photo-of-restaurant';

	homeNameH1.textContent = 'FRESH & LIGHT';

	//APPENDING CHILDREN
	footer.appendChild(footerPFirst);
	footer.appendChild(footerPSecond);

	homeLogo.appendChild(homeLogoImg);

	homeMenuLiMenu.appendChild(homeMenuLiImg);
	homeMenuLiAbout.appendChild(homeMenuLiImg);
	homeMenuLiHours.appendChild(homeMenuLiImg);
	homeMenuLiContact.appendChild(homeMenuLiImg);
	homeMenuUl.appendChild(homeMenuLiMenu);
	homeMenuUl.appendChild(homeMenuLiAbout);
	homeMenuUl.appendChild(homeMenuLiHours);
	homeMenuUl.appendChild(homeMenuLiContact);
	homeMenu.appendChild(homeMenuUl);

	homeImage.appendChild(homeImagePhoto);
	homeImage.appendChild(homeImageGreenRectangle);
	homeImage.appendChild(homeImageOrangeRectangle);

	homeName.appendChild(homeNameH1);

	homeContainer.appendChild(welcomeImg);
	homeContainer.appendChild(footer);
	homeContainer.appendChild(homeLogo);
	homeContainer.appendChild(homeMenu);
	homeContainer.appendChild(homeImage);
	homeContainer.appendChild(homeName);

	// pageContainer.appendChild(homeContainer);
};

export { createHomeDom };

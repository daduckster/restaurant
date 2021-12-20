import '../styles/global.scss';
import '../styles/home.scss';
import '../styles/menu.scss';
import '../styles/info.scss';
import homeComponent from './modules/home-page/home-dom';
import homeEvents from './modules/home-page/home-events';
import menuComponent from './modules/menu-page/menu-dom';
import menuEvents from './modules/menu-page/menu-events';
import infoModule from './modules/info-page/info-dom';
import infoEvents from './modules/info-page/info-events';

const pageContainer = document.querySelector('.page-container');

const loadPage = (function() {
	homeComponent();
	homeEvents();
})();

function removeCurrentPage() {
	pageContainer.removeChild(pageContainer.lastChild);
}

function loadHomePage() {
	homeComponent();
	homeEvents();
}

function loadMenuPage() {
	menuComponent();
	menuEvents();
}

function loadInfoPage() {
	infoModule();
	infoEvents();
}

export { removeCurrentPage, loadHomePage, loadMenuPage, loadInfoPage };

/* create here selectors, class */

export const settings = {
  db: {
    url: '//' + window.location.hostname + (window.location.hostname == 'localhost' ? ':3131' : ''),
    products: 'products',
  },
};

export const select = {
  templateOf: {
    homePage: '#template-home',
    menuProduct: '#template-products',
  },
  containerOf: {
    home: '.home-wrapper',
    pages: '#pages',
    products: '#product-list',
    contact: '#contact',
  },
  all: {
    menuProducts: '#product-list < .product',
  }
};

export const classNames = {
  nav: {
    active: 'active',
  },
  pages: {
    active: 'active',
  }
};

export const templates = {
  menuProduct: Handlebars.compile(document.querySelector(select.templateOf.menuProduct).innerHTML),
};
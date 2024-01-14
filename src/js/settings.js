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
    contactPage: '#template-contact',
  },
  containerOf: {
    pages: '#pages',
    home: '.home-wrapper',
    products: '#product-list',
    contact: '.contact-wrapper',
  },
  all: {
    menuProducts: '#product-list < .product',
  },
  home: {
    about: '.about',
  },
  nav: {
    links: '.main-nav a',
  },
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
  homePage: Handlebars.compile(document.querySelector(select.templateOf.homePage).innerHTML),
  menuProduct: Handlebars.compile(document.querySelector(select.templateOf.menuProduct).innerHTML),
  contactPage: Handlebars.compile(document.querySelector(select.templateOf.contactPage).innerHTML),
};
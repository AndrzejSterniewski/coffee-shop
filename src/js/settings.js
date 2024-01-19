/* create here selectors, class */
export const settings = {
  db: {
    url: '//' + window.location.hostname + (window.location.hostname == 'localhost' ? ':3131' : ''),
    products: 'products',
  },
};

export const select = {
  templateOf: {
    menuProduct: '#template-product',
  },
  containerOf: {
    pages: '#pages',
    products: '.product-list',
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
  menuProduct: Handlebars.compile(document.querySelector(select.templateOf.menuProduct).innerHTML),
};
import { select, classNames, settings } from './settings.js';
import Home from './components/Home.js';
import Products from './components/Products.js';
import Contact from './components/Contact.js';
import Product from './components/Product.js';

const app = {

  initPages: function () {
    const thisApp = this;

    thisApp.pages = document.querySelector(select.containerOf.pages).children;
    thisApp.navLinks = document.querySelectorAll(select.nav.links);

    const idFromHash = window.location.hash.replace('#/', '');

    let pageMatchingHash = thisApp.pages[0].id;

    for (let page of thisApp.pages) {
      if (page.id == idFromHash) {
        pageMatchingHash = page.id;
        break;
      }
    }

    thisApp.activatePage(pageMatchingHash);

    for (let link of thisApp.navLinks) {
      link.addEventListener('click', function (event) {
        const clickedElement = this;
        event.preventDefault();

        const id = clickedElement.getAttribute('href').replace('#', '');

        thisApp.activatePage(id);

        window.location.hash = '#/' + id;
      });
    }
  },

  activatePage: function (pageId) {
    const thisApp = this;

    for (let page of thisApp.pages) {
      page.classList.toggle(
        classNames.pages.active,
        page.id == pageId);
    }

    for (let link of thisApp.navLinks) {
      link.classList.toggle(
        classNames.nav.active,
        link.getAttribute('href') == '#' + pageId
      );
    }
  },

  initMenu: function () {
    const thisApp = this;

    for (let productData in thisApp.data.products) {
      new Product(thisApp.data.products[productData].id, thisApp.data.products[productData]);
    }
  },

  initData: function () {
    const url = settings.db.url + '/' + settings.db.products;
    this.data = {};
    fetch(url)
      .then((rawResponse) => {
        return rawResponse.json();
      })
      .then((parsedResponse) => {
        this.data.products = parsedResponse;
      });
  },

  initHome: function () {
    const thisApp = this;

    thisApp.homeContainer = document.querySelector(select.containerOf.home);
    thisApp.home = new Home(thisApp.homeContainer);
  },

  initProducts: function () {
    const thisApp = this;

    thisApp.productsContainer = document.querySelector(select.containerOf.products);
    thisApp.products = new Products(thisApp.productsContainer);
  },

  initContact: function () {
    const thisApp = this;

    thisApp.contactContainer = document.querySelector(select.containerOf.contact);
    thisApp.contact = new Contact(thisApp.contactContainer);
  },

  init: function () {
    const thisApp = this;

    thisApp.initHome();
    thisApp.initPages();
    thisApp.initProducts();
    thisApp.initContact();
    thisApp.initData();
    thisApp.initMenu();
    thisApp.ActivatePage();
  },
};

app.init();

// console.log(this.data);
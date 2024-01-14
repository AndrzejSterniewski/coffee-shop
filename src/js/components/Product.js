import { select, templates } from '../settings.js';
import utils from '../utils.js';

class Product {
  constructor(id, data) {
    const thisProduct = this;
    thisProduct.id = id;
    thisProduct.data = data;
    thisProduct.renderInMenu();
  }
  renderInMenu() {
    const thisProduct = this;
    /* generate HMTL based on template */
    const generatedHTML = templates.menuProduct(thisProduct.data);
    /* create element using utils.createElementFromHTML */
    thisProduct.element = utils.createDOMFromHTML(generatedHTML);
    /* find containers */
    const home = document.querySelector(select.containerOf.home);
    const products = document.querySelector(select.containerOf.products);
    /* add element to main page and products page */
    home.appendChild(thisProduct.element);
    products.appendChild(thisProduct.element);
  }
}
export default Product;
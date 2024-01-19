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
    /* find container */
    const productsContainers = document.querySelectorAll(select.containerOf.products);
    for (const productContainer of productsContainers) {
      /* add element to its containers where it should be */
      const element = utils.createDOMFromHTML(generatedHTML);
      productContainer.appendChild(element);
    }
  }
}
export default Product;
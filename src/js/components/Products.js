import { templates } from '../settings';

class Products {
  constructor(productsContainer) {
    const thisProducts = this;

    thisProducts.contactContainer = productsContainer;

    thisProducts.render(productsContainer);
  }

  render(wrapper) {
    const thisProducts = this;

    const generatedHTML = templates.productsPage();

    thisProducts.dom.wrapper = wrapper;

    thisProducts.dom.wrapper.innerHTML = generatedHTML;
  }
}

export default Products;
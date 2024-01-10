import { templates } from '../settings.js';

class Home {
  constructor(homeElem) {
    const thisHome = this;

    thisHome.render(homeElem);
  }

  render(wrapper) {
    const thisHome = this;

    const generatedHTML = templates.homePage();

    thisHome.dom = {};

    thisHome.dom.wrapper = wrapper;

    thisHome.dom.wrapper.innerHTML = generatedHTML;
  }
}

export default Home;
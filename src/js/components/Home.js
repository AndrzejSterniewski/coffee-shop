import { select, templates } from '../settings.js';

class Home {
  constructor(homeContainer) {
    const thisHome = this;

    thisHome.render(homeContainer);
  }

  render(wrapper) {
    const thisHome = this;

    const generatedHTML = templates.homePage();

    thisHome.dom = {};

    thisHome.dom.wrapper = wrapper;

    thisHome.dom.wrapper.innerHTML = generatedHTML;

    thisHome.dom.about = thisHome.dom.wrapper.querySelector(select.home.about);
  }
}

export default Home;
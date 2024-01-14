import { templates } from '../settings';

class Contact {
  constructor(contactContainer) {
    const thisContact = this;

    thisContact.contactContainer = contactContainer;

    thisContact.render(contactContainer);
  }

  render(wrapper) {
    const thisContact = this;

    const generatedHTML = templates.contactPage();

    thisContact.dom.wrapper = wrapper;

    thisContact.dom.wrapper.innerHTML = generatedHTML;
  }
}

export default Contact;
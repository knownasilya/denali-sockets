import ApplicationNamespace from '../application';

export default class Index<%= singular.className %> extends ApplicationNamespace {

  async respond() {
    this.render(200, 'test');
  }

}
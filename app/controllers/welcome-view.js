import Ember from 'ember';

export default Ember.Controller.extend({
  userChoise: {
    state: true,
    login: false,
    register: false
  },
  actions: {
    register() {
      this.set('userChoise.register', true);
      this.set('userChoise.login', false);
      this.set('userChoise.state', false);
    },
    login() {
      this.set('userChoise.login', true);
      this.set('userChoise.register', false);
      this.set('userChoise.state', false);
    }
  }
});

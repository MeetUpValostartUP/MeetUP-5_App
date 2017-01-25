import Ember from 'ember';

export default Ember.Component.extend({
  newUser: {
    name: null,
    password: null,
    avatar: null
  },
  store: Ember.inject.service(), //this we must do only for access DS from component
  actions: {
    createNewUser() {
      var newUser = this.get('newUser'), // Get user object
          _store = this.get('store'),
          saveUser = _store.createRecord('user', newUser); // Create new record
      saveUser.save(); // Save created record
    }
  }
});

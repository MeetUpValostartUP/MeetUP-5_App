import Ember from 'ember';

export default Ember.Component.extend({
  user: {
    name: null,
    password: null
  },
  user_error_login: {
      status: false,
      message: 'Sorry password or login is incorrect('
  },
  findedUser: null,
  query_ID: null,
  store: Ember.inject.service(), //this we must do only for access DS from component
  actions: {
    login() {
      var user = this.get('user'), // Get user object
        _store = this.get('store'),
        findedUser = this.get('users').filter(
                    (item) => item.get('name') === user.name && item.get('password') === user.password);
        if(typeof findedUser[0] !== "undefined") {
            this.set('findedUser', findedUser[0]);
            this.set('query_ID', findedUser[0].id)
        }else {
            this.set('user_error_login.status', true);
        }
    },
    logout() {
        this.set('findedUser', null);
    },
    cancel() {
        this.set('userChoise.state', true);
        this.set('userChoise.login', false);
        this.set('userChoise.register', false);
    }
  }
});

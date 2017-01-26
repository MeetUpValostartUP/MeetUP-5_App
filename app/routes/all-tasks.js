import Ember from 'ember';

export default Ember.Route.extend({
    model() {
      return Ember.RSVP.hash({
          tasks: this.store.findAll('task'),
          users: this.store.findAll('user')
      });
    }
});

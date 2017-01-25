import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    var query_id = params.query_id,
        _this = this;
    return Ember.RSVP.hash({
        user: _this.store.findRecord('user', query_id),
        id: query_id
    });
  }
});

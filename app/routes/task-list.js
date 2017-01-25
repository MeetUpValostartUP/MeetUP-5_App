import Ember from 'ember';

export default Ember.Route.extend({
  // beforeModel: function(params){
  // //    this.set('query_id', transition.queryParams.query_id);
  //    console.log(params.query_id);
  // },
  model(params) {
    var query_id = params.query_id,
        _this = this;
    return Ember.RSVP.hash({
        user: _this.store.findRecord('user', query_id),
        id: query_id
    });
  }
});

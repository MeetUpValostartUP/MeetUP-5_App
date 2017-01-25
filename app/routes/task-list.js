import Ember from 'ember';

export default Ember.Route.extend({
    // beforeModel: function(params){
    // //    this.set('query_id', transition.queryParams.query_id);
    //    console.log(params.query_id);
    // },
    model(params) {
        var query_id = params.query_id;
      return Ember.RSVP.hash({
          users: this.store.findAll('user'),
          tasks: this.store.findAll('task')
      });
    }
});

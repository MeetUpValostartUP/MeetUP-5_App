import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
    location: config.locationType,
    rootURL: config.rootURL
});

Router.map(function() {
  this.route('welcome-view', {path: '/'});
  this.route('about', {path: '/about'});
  this.route('task-list', {path: '/tasks/:query_id'});
});

export default Router;

import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});
Router.map(function() {
    this.route('index', { path: '/' }, function() {
        this.route('login', { path: '/' });
        this.route('dashboard', { path: '/' });
        this.route('register');
    });
    this.route('protected');
});

Router.reopen({
  //location: 'hash'
});

export default Router;

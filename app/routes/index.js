import Ember from 'ember';

export default Ember.Route.extend({
    session: Ember.inject.service('session'),
    beforeModel: function(transition) {
        if (this.session.isAuthenticated) {
            return this.transitionToRoute('index.dashboard');
        }
      }
});

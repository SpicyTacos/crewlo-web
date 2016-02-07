import Ember from 'ember';

export default Ember.Controller.extend({
    session: Ember.inject.service('session'),
    actions: {
        fadeOutToRegister: function() {
            var self = this;
            console.log('this');
            Ember.$('.login-form-main').addClass('fadeOut');
            setTimeout(function() {
                self.transitionToRoute('index.register');
            }, 600);
        }
    }
});

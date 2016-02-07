import Ember from 'ember';

export default Ember.Component.extend({
    session: Ember.inject.service('session'),

    actions: {
        authenticateUser: function() {
            var credentials = this.getProperties('username', 'password');
            this.get('session').authenticate('authenticator:custom', credentials).then(function() {
                // authentication was successful
                console.log('authentication was successful');
            }, function(err) {
                //authentication failed
                console.log('FAIL ' + JSON.stringify(err));
            });
        },
        fadeOutToRegister() {
            this.sendAction('fadeOutToRegister');
        }
    }
});

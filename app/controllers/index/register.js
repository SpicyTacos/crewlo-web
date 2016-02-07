import Ember from 'ember';

export default Ember.Controller.extend({
    registerEndpoint: window.EmberENV.baseURL + '/register',

      actions: {
        registerUser: function() {
            var credentials = this.getProperties('email', 'username', 'password');

            return new Ember.RSVP.Promise((resolve, reject) => {
                Ember.$.ajax({
                    url: this.registerEndpoint,
                    type: 'POST',
                    data: JSON.stringify(credentials),
                    contentType: 'application/json;charset=utf-8',
                    dataType: 'json'
                }).then(function(response) {
                    Ember.run(function() {
                        resolve(response);
                    });
                }, function(xhr, status, error) {
                    var response = xhr.responseText;
                    Ember.run(function() {
                        reject(response);
                    });
                });
            });
        },
        fadeOutToLogin: function() {
            var self = this;
            console.log('this');
            Ember.$('.register-form-main').addClass('fadeOut');
            setTimeout(function() {
                self.transitionToRoute('index.login');
            }, 600);
        }
    }
});

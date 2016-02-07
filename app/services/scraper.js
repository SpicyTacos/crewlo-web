import Ember from 'ember';

export default Ember.Service.extend({
    scraperEndpoint: window.EmberENV.baseURL + '/scraper',
    //userPostUrl: '',
    scrapeUrl: function(userPostUrl) {
        return new Ember.RSVP.Promise((resolve, reject) => {
            Ember.$.ajax({
                url: this.scraperEndpoint,
                type: 'POST',
                data: JSON.stringify({
                    url: userPostUrl,
                }),
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
    }
});

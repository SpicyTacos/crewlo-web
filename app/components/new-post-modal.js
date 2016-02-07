import Ember from 'ember';

export default Ember.Component.extend({
    scraper: Ember.inject.service(),
    message: 'test',
    userPostUrl: '',
    urlCollection: [],
    actions: {
        pressMe: function() {
            var _this = this;
            this.get('scraper').scrapeUrl(this.get('userPostUrl')).then(function(result) {
                var wasHeight = Ember.$('.new-post-modal').outerHeight();
                var difference = Math.floor((400 - wasHeight) / 2);
                Ember.$('.new-post-modal').css('height', '400px');
                Ember.$('.new-post-modal').css({"-webkit-transform":"translate(0px,-" + difference + "px)"});
                _this.set('urlCollection', result.scraped);
                console.log(_this.get('urlCollection'));
            });
            //this.set('message',testText);
        }
    }
});

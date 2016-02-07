import Ember from 'ember';
import RespondsToScroll from 'ember-responds-to/mixins/responds-to-scroll';
import RespondsToEscKeydown from 'ember-responds-to/mixins/responds-to-esc-keydown';

export default Ember.Component.extend(RespondsToScroll,RespondsToEscKeydown,{
    session: Ember.inject.service('session'),
    didScroll: false,
    didInsertElement: function() {
      this._super();
      this.lastScrollTop = 0;
      this.delta = 5;
      this.navbarHeight = Ember.$('.main-nav').outerHeight();
    },
    logScroll: function () {
        var _this = this;
        this.didScroll = true;
        setInterval(function() {
            if (_this.didScroll) {
                _this.hasScrolled();
                _this.didScroll = false;
            }
        }, 250);
    }.on('scroll'),
    hasScrolled: function() {
        var st = Ember.$(document).scrollTop(); // get current position of user's screen

        if(Math.abs(this.lastScrollTop - st) >= this.delta) { // make sure they scrolled further than delta
            // check if they scrolled past the header and if they scrolled up or down
            if (st > this.lastScrollTop && st > this.navbarHeight) {
                // scroll down
                Ember.$('.main-nav').removeClass('nav-down').addClass('nav-up');
            } else {
                // scroll up
                // if did not scroll past the document (possible on mac)...
                if (st + Ember.$(window).height() < Ember.$(document).height()) {
                    Ember.$('.main-nav').removeClass('nav-up').addClass('nav-down');
                }
            }
            this.lastScrollTop = st;
        }
    },
    actions: {
        invalidateSession() {
            this.get('session').invalidate();
        },
        newPost() {
            this.sendAction('showModalDialog', 'New Post');
        }
    }
});

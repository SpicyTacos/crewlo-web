import Ember from 'ember';

export default Ember.Controller.extend({
    session: Ember.inject.service('session'),
    init() {
        console.log(this.session.isAuthenticated);
    },
    isShowingModal: false,
    actions: {
        invalidateSession() {
            this.get('session').invalidate();
        }
    },
});

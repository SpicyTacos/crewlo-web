import Ember from 'ember';
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';

export default Ember.Route.extend(ApplicationRouteMixin, {
    actions: {
        closeModalDialog() {
            this.controllerFor('application').set('isShowingModal', false);
        },
        showModalDialog(message) {
            console.log('osd');
            //this.controllerFor('application').set('modalMessage', message);
            this.controllerFor('application').set('isShowingModal', true);
        }
    }
});

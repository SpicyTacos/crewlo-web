
import ModalDialog from 'ember-modal-dialog/components/modal-dialog';
//import template from '../templates/components/newpost-modal';

export default ModalDialog.extend({
    containerClassNames: "new-post-modal",
    translucentOverlay: true,
    clickOutsideToClose: true,
});

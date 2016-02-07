import BaseAuthorizer from 'ember-simple-auth/authorizers/base';
export default BaseAuthorizer.extend({
    authorize: function(sessionData, block) {
        console.log(sessionData);
        var auth= "Bearer " + sessionData.token;
        console.log('Add authorization header ' + auth);
        console.log(block);

        block('Authorization', 'Bearer ' + sessionData.token);

        //requestOptions.setRequestHeader("Authorization", auth);
    }
});

 //require controller
const primaryServicectrl = require('../../presentation/controllers/UserPrimaryService');
const validationschema = require('../../validation/requestValidation').verifyrequest();

module.exports = function (router, opts, done) {  
  router.post('/user', { schema:validationschema }, primaryServicectrl.createUserDetails);
  router.put('/user', { schema:validationschema }, primaryServicectrl.updateUserDetails);
  router.get('/user', {}, primaryServicectrl.UserDetailsList);
  done()
}
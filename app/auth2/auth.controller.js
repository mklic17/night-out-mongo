(function() {
  'use strict';

  angular.module('authModule')
    .controller('AuthController', AuthController);

    AuthController.$inject = ['authFactory'];
    function AuthController(authFactory) {
      var vm = this;
      vm.newUser = new authFactory.User();
      vm.register = authFactory.register;
      vm.login = authFactory.login;

    }

})();

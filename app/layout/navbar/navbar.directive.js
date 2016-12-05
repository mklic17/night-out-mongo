(function() {
  'use strict';

  angular
    .module('layoutModule')
    .directive('xtNavbar', xtNavbar);

  xtNavbar.$inject = [];
  function xtNavbar() {
    return {
      templateUrl: 'layout/navbar/navbar.directive.html',
      restrict: 'E',
      controller: NavbarController,
      controllerAs: 'vm'
    };
  }

NavbarController.$inject = ['authFactory'];
function NavbarController(authFactory) {
  var vm = this;
  vm.isLoggedIn = authFactory.isLoggedIn;
  vm.logout = authFactory.logout;
  vm.user = currentUser();




  function currentUser(){
    var x = localStorage.getItem('users');
    if (x === "") {
      return ""
    }
    else {
      return x;

    }
  }


}

})();

(function() {
  'use strict';

  angular.module('authModule')
    .factory('authFactory', authFactory);

    authFactory.$inject = ['$http', 'API_URL', '$state'];
    function authFactory($http, API_URL, $state) {

      var factory = {
        User: User,
        register: register,
        login: login,
        logout: logout,
        isLoggedIn: isLoggedIn,
      }

      return factory;

      /////////////////////////

      function User() {
        this.name = '';
        this.username = '';
        this.password = '';
        this.passwordConfirmation = '';
      }

      function register(user) {
        var authPromise = $http.post(`${API_URL}users/`, {
          user,
        });

        authPromise.then(
          function(res) {
            console.log(res);
          },
          function(err) {
            console.log(err);
          });
          login(user);
      }

      function login(user) {
        localStorage.setItem('login', true);
        localStorage.setItem('users', user.username);
        $state.go('activity');
      }

      function logout(){
        localStorage.removeItem('login');
        localStorage.clear()
        localStorage.setItem('users', '');
        $state.go('home');

      }

      function isLoggedIn(){
        if (localStorage.getItem('login')) {
          return true
        }
        else {
          return false;
        }
      }


    }

  })();

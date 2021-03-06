(function() {
  'use strict';

  angular.module('authModule')
      .service('AuthToken', ['$window', $window => {

        class AuthToken {
          constructor() {
            this.token = $window.localStorage.getItem('authToken');
          }
          set(token) {
            this.token = token;
            $window.localStorage.setItem('authToken', this.token);
          }
          get() {
            return this.token;
          }
          clear() {
            this.token = undefined;
            $window.localStorage.removeItem('authToken');
          }
        }
        return new AuthToken();

      }]);
})();

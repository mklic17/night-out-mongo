(function() {
  'use strict';

angular
  .module('activityModule')
  .controller('ActivityController', ActivityController);

  ActivityController.$inject = ['activityFactory', '$http', '$state', 'API_URL'];
  function ActivityController(activityFactory, $http, $state, API_URL){
    var vm = this;
    // vm.tasks = activityFactory.getTask();
    // vm.tasks = activityFactory.getTask();
    vm.addSubmission = addSubmission;
    vm.newTask = new activityFactory.Task();
    getTask();

    /////////////////////////////////////////////////////////////////////
    function getTask() {
      var activitiesPromise = $http.get(API_URL + 'tasks');
      activitiesPromise.then(function(res) {
        vm.tasks = res.data;
      });
    }

    function addSubmission() {
      var activitiesPromise = $http.post(API_URL + 'tasks/', {
        task: vm.newTask
      })
      activitiesPromise.then(function(res) {
        console.log(res);
        $state.go('activity')
      })
    }

    // function delete(task) {
    //   var activitiesPromise = $http.delete('https://night-out-server-2.herokuapp.com/' + task_id)
    //   activitiesPromise.then(function(res) {
    //     vm.
    //   })
    // }

  }
})();

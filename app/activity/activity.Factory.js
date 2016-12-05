(function() {
  'use strict';

  angular
    .module('activityModule')
    .factory('activityFactory', activityFactory);

    activityFactory.$inject = ['$http'];
    function activityFactory($http) {
      var vm = this;

      // vm.tasks = [];

      var factory = {
        // restart: restart,
        Task: Task,
        // getActivities: getActivities,
        calculation: calculation,
        // getTask: getTask,
        // update: update,
        // remove: remove,

      };

      return factory;

      /////////////////////////////////////////////

      // function getTask() {
      //   var activitiesPromise = $http.get('https://night-out-server-2.herokuapp.com/');
      //   activitiesPromise.then(function(res) {
      //     vm.tasks = res.data;
      //     console.log(vm.tasks);
      //   });
      //   return activitiesPromise;
      // }
      //
      // function update(task, calc) {
      //   var activitiesPromise = $http.put('https://night-out-server-2.herokuapp.com/' + task._id, {
      //     // task: task.likes += calc
      //     task: task
      //   });
      //   activitiesPromise.then(function(res){
      //     remove(res.data.task._id);
      //     vm.tasks.unshift(res.data.task);
      //   });
      //   return activitiesPromise;
      // }


      function Task() {
        this.location = ''
        this.age = 'No';
        this.category = '';
        this.price = '';
        this.summary = '';
        this.fullDesc = ''
        this.time = Math.floor(Date.now() / 1000);
        this.likes = Math.floor(0);
      }

      function calculation(task, calc) {
        return task.likes += calc;
      }

      // function remove(id){
      //   for (var i = 0; vm.tasks.length; i+=1) {
      //     if(vm.tasks[i]._id === id) {
      //       return vm.tasks.splice(i, 1);
      //     }
      //   }
      // }

    }

})();

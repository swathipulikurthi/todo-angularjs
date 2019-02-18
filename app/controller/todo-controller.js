angular.module('todoApp').controller('TasksController', ['$scope', 
function ($scope) {
  
  $scope.vm = {};
 
  
  
  $scope.vm.tasks = [];
  $scope.checked=false;
 

  $scope.vm.addTask = function addTask() {
    //console.log($scope.input);
    if($scope.input) {
      $scope.vm.tasks.push({Name:$scope.input, checked:$scope.checked});
     //console.log($scope.vm.tasks);
      $scope.input= null;
    }
  };


  

  
  $scope.vm.removeTask=function removeTask(taskName){
    
    if(taskName) {
     // console.log($scope.vm.tasks.indexOf(taskName));
      $scope.vm.tasks.splice($scope.vm.tasks.indexOf(taskName), 1);
     // console.log(taskName);
    }
  }

  // $scope.vm.strikeTask=function strikeTask(taskName){
  
  //   if(taskName) {
  //     var p= $scope.vm.tasks.indexOf(taskName);
  //     console.log(p);
  //     $scope.vm.tasks[p].checked=!$scope.vm.tasks[p].checked  ;
  //     console.log(taskName);
  //   }
  // }
}]);
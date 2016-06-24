var myTodo = angular.module('myTodo', []);

function mainController($scope, $http) {
  $scope.formData = {};

  // on page load, get all todos and display
  $http.get('./api/todos')
  .success(function(data) {
    $scope.todos = data;
    console.log(data);
  })
  .error(function (data) {
    console.log('Error: ' + data);
  });

  // on todo creation via the form



};

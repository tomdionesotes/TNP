var myTodo = angular.module('myTodo', []);

function mainController($scope, $http) {
  $scope.formData = {};

  // get on page load
  $http.get('/api/todos')
  .success(function(data) {
    $scope.todos = data;
    console.log(data);
  })
  .error(function (data) {
    console.log('Error: ' + data);
  });

  // create
  $scope.createTodo = function {
    $http.post('/api/todos', $scope.formData)
    .success(function(data) {
      $scope.formData = {};
      $scope.todos = data;
      console.log(data);
    })
    .error(function(data) {
      console.log('Error: ' + data);
    });
  };

  // delete
  $scope.deleteTodo = function(id) {
    $http.delete('/api/todos' + id)
    .success(function(data) {
      $scope.todos = data;
      console.log(data);
    })
    .error(function(data) {
      console.log('Error: ' + data);
    });
  };


};

app.controller("loginCtrl", function($scope, $http, $location) {

  $scope.listUser = []
  $http.get('http://localhost:3000/users').then(function(response){
    $scope.listUser = response.data;
  });
  $scope.submitLogin = function(){
    for(var i=0; i<$scope.listUser.length; i++){
      if($scope.username === $scope.listUser[i].username && $scope.password === $scope.listUser[i].password){
        alert('Đăng nhập thành công!');
        $location.path('/home');
      }
    }
  }
});
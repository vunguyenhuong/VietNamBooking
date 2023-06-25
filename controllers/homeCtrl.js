app.controller('homeCtrl', function($scope, $http){
    const api = 'http://localhost:3000/festival'
    $scope.listFestival = [];
    $http.get(api).then(function(response){
        $scope.listFestival = response.data;
    })
})
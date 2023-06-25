app.controller('hotelCtrl', function($scope, $http){
    const api = 'http://localhost:3000/hotel/'
    $scope.id = -1;
    $scope.listHotel = [];
    $scope.hotel = {};

    $scope.begin = 0;
    $scope.currentPage = 1;
    $scope.index = -1;
    $http.get(api).then(function(response){
        $scope.listHotel = response.data;
        $scope.pageCount = Math.ceil($scope.listHotel.length / 4);
    })

    $scope.prev = function(){
        if($scope.begin > 0){
            $scope.begin -= 4;
            $scope.currentPage -= 1;
        }
    }

    $scope.next = function(){
        console.log($scope.pageCount)
        if($scope.begin < ($scope.pageCount-1)*4){
            $scope.begin += 4;
            $scope.currentPage += 1;
        }
    }
    
    $scope.delete = function(index){
        const ht = $scope.listHotel[index]
        const api = 'http://localhost:3000/hotel/' + ht.id;
        $http.delete(api).then(function(response){
            $scope.listHotel.splice(index, 1)
        })
    }

    $scope.capnhat = function(index){
        $scope.index = index
        $scope.hotel = $scope.listHotel[index]
    }
})
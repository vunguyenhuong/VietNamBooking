app.controller('orderCtrl', function($scope, $http, $routeParams, $location){
    $http.get('http://localhost:3000/hotel/' + $routeParams.id).then(function(response){
        $scope.hotel = response.data;
    })    

    $scope.resetForm = function(){
        $scope.name = null
        $scope.email = null
        $scope.phone = null
        $scope.songuoi = null
        $scope.ngaydatphong = null
        $scope.ngaytraphong = null
        $scope.chuthich = null
    }

    $scope.submitOrder = function(){
        $scope.item = {
            name: $scope.name,
            email: $scope.email,
            phone: $scope.phone,
            songuoi: $scope.songuoi,
            ngaydatphong: $scope.ngaydatphong,
            ngaytraphong: $scope.ngaytraphong,
            chuthich: $scope.chuthich,
            idHotel: $routeParams.id
        }

        $http.post('http://localhost:3000/order/', $scope.item).then(function(response){
            alert('Cảm ơn bạn đã gửi yêu cầu! Nhân viên của VietNamBooking sẽ liên hệ lại với bạn trong khoảng thời gian sớm nhất!');
            $location.path('hotel')
        })
    }

})
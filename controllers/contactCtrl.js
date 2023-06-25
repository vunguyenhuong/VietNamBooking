app.controller('contactCtrl', function($scope, $http, $location){
    $scope.guiThongTin = function(){
        const api = 'http://localhost:3000/feedback'
        $scope.data = {
            department: $scope.department,
            name: $scope.name,
            phone: $scope.phone,
            email: $scope.email,
            message: $scope.message
        }
        $http.post(api, $scope.data).then(function(response){
            if(response.status == 201){
                alert('Cảm ơn bạn đã liên hệ. Chúng tôi sẽ cố gắng liên hệ lại với bạn trong thời gian sớm nhất!')
                $location.path('contact')
            }
        })
    }
})
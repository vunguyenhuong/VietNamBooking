app.controller('dashboardCtrl', function($scope, $http, $location){    
    $scope.index = -1;
    const apiFeedback = 'http://localhost:3000/feedback/';
    $scope.listFeedback = [];
    $scope.feedback = {};
    $http.get(apiFeedback).then(function(response){
        $scope.listFeedback = response.data;
    })
    $scope.deleteFeedback = function(index){
        const feedback = $scope.listFeedback[index]
        if(window.confirm('Dữ liệu của bạn có thể sẽ không được khôi phục. Xác nhận xóa ?')){
            $http.delete(apiFeedback + feedback.id).then(function(response){

            })
            alert('Xóa thành công!')
        }
    }

    $scope.listOrder = [];
    $scope.oder = {};
    const apiOrder = 'http://localhost:3000/order/'
    $http.get(apiOrder).then(function(response){
        $scope.listOrder = response.data
    })

    $scope.deleteOrder = function(id){
        $http.delete(`${apiOrder}/${id}`).then(function(response){
            alert('Xóa thành công!');
            $location.path('/admin/dashboard')
        })
    }
})
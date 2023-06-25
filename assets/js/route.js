var app = angular.module('myApp',['ngRoute']);

app.config(function($routeProvider){
    $routeProvider
    .when('/home', {
        title: 'Trang chủ',
        templateUrl: '/pages/home.html?' + Math.random(),
        controller: 'homeCtrl'
    })
    .when('/about', {
        title: 'Giới thiệu',
        templateUrl: '/pages/about.html?' + Math.random()
    })
    .when('/contact', {
        title: 'Liên hệ',
        templateUrl: '/pages/contact.html?' + Math.random(),
        controller: 'contactCtrl'
    })
    .when('/hotel', {
        title: 'Khách sạn',
        templateUrl: '/pages/hotel.html?' + Math.random(),
        controller: 'hotelCtrl'
    })
    .when('/hotel/:id', {
        title: 'Đặt phòng khách sạn',
        templateUrl: '/pages/order.html?' + Math.random(),
        controller: 'orderCtrl'
    })
    .when('/login', {
      title: 'Login',
      templateUrl: '/pages/login.html?' + Math.random(),
      controller: 'loginCtrl'
    })
    .when('/admin/dashboard', {
      title: 'Dashboard',
      templateUrl: '/pages/admin/dashboard.html?' + Math.random(),
      controller: 'dashboardCtrl'
    })

    .otherwise({
        redirectTo: '/home'
    })
})

app.run(['$location', '$rootScope', function($location, $rootScope) {
    $rootScope.$on('$routeChangeSuccess', function (event, current, previous) {
      $rootScope.title = 'Vũ Nguyên Hướng | ' + current.$$route.title;
    });
}]);

app.directive('clock', function($interval) {
  return {
    restrict: 'E',
    link: function(scope, element) {
      function updateTime() {
        var currentTime = new Date();
        var hours = currentTime.getHours();
        var minutes = currentTime.getMinutes();
        var seconds = currentTime.getSeconds();
        var meridiem = "AM";
 
        if (hours > 12) {
          hours = hours - 12;
          meridiem = "PM";
        }
        
        if (hours === 0) {
          hours = 12;
        }
        
        if (minutes < 10) {
          minutes = "0" + minutes;
        }
        
        if (seconds < 10) {
          seconds = "0" + seconds;
        }
        
        var timeString = hours + ":" + minutes + ":" + seconds + " " + meridiem;
        
        element.html(timeString);
      }
      updateTime();
      $interval(updateTime, 1000);
    }
  };
});
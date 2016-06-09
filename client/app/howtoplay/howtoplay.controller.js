'use strict';

angular.module('whoSaidApp')

    .controller('HtpController', function ($scope, $http, Auth) {
    $scope.header = 'htplayy header';
    $scope.isAdmin = Auth.isAdmin;

    $scope.myInterval = 5000;
    $scope.noWrapSlides = false;
    $scope.active = 0;
    var slides = $scope.slides = [
        {id: 0, image: 'assets/images/download.jpg', text: 'slide doron'},
        {id: 1, image: 'assets/images/download (1).jpg', text: 'slide 2'},
        {id: 2, image: 'assets/images/download (2).jpg', text: 'slide 3'}
    ];
    
});
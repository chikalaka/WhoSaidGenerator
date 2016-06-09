'use strict';

angular.module('whoSaidApp')

    .controller('GameController', function ($scope, $http, Auth) {
    $scope.header = 'Game header';
    $scope.isAdmin = Auth.isAdmin;
    $scope.currentUser = Auth.getCurrentUser;
    
    
/*
    $http.get('/api/groups')
        .success(function(data) {
        $scope.groups = data;
    })
        .error(function(err) {
        alert('Error! Something went wrong');
    });

    $scope.sendFeedback = function() {

        $http.post('/api/feedbacks', $scope.newFeedback)
            .success(function(){
            $scope.newFeedback = {};
            $scope.feedbackForm.$setPristine();
        })
            .error(function(err){
            alert('Error! Something went wrong');
        });
    };*/
    
});
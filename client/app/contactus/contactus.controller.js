'use strict';

angular.module('whoSaidApp')

    .controller('ContactusController', function ($scope, $http, Auth, User) {
    $scope.header = 'Contact Us header';
    $scope.isAdmin = Auth.isAdmin;
    $scope.currentUser = Auth.getCurrentUser;
    
    $scope.users = User.query(); // NO need, delete when done, restric only to admin

    $http.get('/api/feedbacks')
        .success(function(data) {
        $scope.feedbacks = data;
    })
        .error(function(err) {
        alert('Error! Something went wrong');
    });

    $scope.newFeedback = {};
    
    $scope.newFeedback.author = Auth.getCurrentUser()._id;
    
    $scope.delete = function(index){
      $http.delete('/api/feedbacks/' + $scope.feedbacks[index]._id)
      .success(function(){
        $scope.feedbacks.splice(index, 1);
      })
      .error(function(err){
        alert('Error! Something went wrong');
      });
    };
    
    $scope.sendFeedback = function() {

        $http.post('/api/feedbacks', $scope.newFeedback)
            .success(function(){
            $scope.feedbacks.push($scope.newFeedback);
            $scope.newFeedback = {};
            $scope.feedbackForm.$setPristine();
        })
            .error(function(err){
            alert('Error! Something went wrong');
        });
    };
    
});


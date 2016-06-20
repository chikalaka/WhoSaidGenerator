'use strict';

angular.module('whoSaidApp')

    .controller('GameController', function ($scope, $http, Auth) {
    $scope.header = 'Who Said ?';
    $scope.isAdmin = Auth.isAdmin;
    $scope.currentUser = Auth.getCurrentUser;
    $scope.isCollapsed = 'false';
    $scope.currentGroups = Auth.getCurrentUser().groups;
    /*$scope.groupSelected;
    $scope.selectedWhoPost;
    $scope.selectedWhomPost;*/

    $http.get('/api/users/12345')
        .success(function(data) {
        $scope.users = data;
    })
        .error(function(err) {
        alert('Error! Something went wrong - get');
    })
    
    var len = $scope.currentGroups.length;

    function Create2DArray(rows) {
        var arr = [];

        for (var i=0;i<rows;i++) {
            arr[i] = [];
        }

        return arr;
    }

    $scope.selectedWho = Create2DArray(len);
    $scope.selectedWhom = Create2DArray(len);
    
    //change to sentece
    /*
    $scope.postSentence = function(){
        $scope.newPhrase= {};
        $scope.newPhrase.group= $scope.groupSelected.name;
        
        
        
        $scope.groupSelected.name, $scope.selectedWhoPost,$scope.selectedWhomPost}
        //var parameter = JSON.stringify($scope.newGroup);

        $http.post('/api/groups', $scope.newGroup)
            .success(function(createdGroup){

            // add group to current user
            $http.get('/api/users/12345/' + Auth.getCurrentUser()._id)
                .success(function(data) {

                var groups = data;
                groups.groups.push(createdGroup._id);

                $http.put('/api/users/12345/' + Auth.getCurrentUser()._id, groups)
                    .success(function(){
                })
                    .error(function(err){
                    alert('Error! Something went wrong - put');
                });
            })
                .error(function(err) {
                alert('Error! Something went wrong - get users groups');
            })

            // add group to all users selected
            var len = $scope.newGroup.users.length;

            function myFunction(i){
                $http.get('/api/users/12345/' + $scope.newGroup.users[i])
                    .success(function(data) {

                    var groups = data;
                    groups.groups.push(createdGroup._id);

                    $http.put('/api/users/12345/' + $scope.newGroup.users[i], groups)
                        .success(function(){
                    })
                        .error(function(err){
                        alert('Error! Something went wrong - put');
                    });
                })
                    .error(function(err) {
                    alert('Error! Something went wrong - get users groups');
                })
            }

            for(var i=0;i<len;i++){

                myFunction(i);
            }

        })
            .error(function(err){
            alert('Error! Something went wrong - post');
        });
    }
    */

    $scope.selectedUsersNames = [];

    $scope.newGroup = new Object({
        name: '',
        users: []
    });
    
    
}
    $scope.guess = function(parentIndex, index) {
        
        $scope.selectedWho[parentIndex][index] = "";
        $scope.selectedWhom[parentIndex][index] = "";
        
        //parentIndex - integer indicate which group the user chose in the array: $scope.currentGroups
        //index - integer indicate which group the user chose in the array: $scope.currentGroups[parentIndex] (inside this array there are phrases)
        
        //Doron - here you need to add the code for:
        //popup
        //check if user guessed right
        //update his score if needed
        //and so on
    };

});
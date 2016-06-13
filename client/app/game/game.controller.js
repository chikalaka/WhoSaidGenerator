'use strict';

angular.module('whoSaidApp')

    .controller('GameController', function ($scope, $http, Auth) {
    $scope.header = 'Who Said ?';
    $scope.isAdmin = Auth.isAdmin;
    $scope.currentUser = Auth.getCurrentUser;
    $scope.isCollapsed = 'false';

    $http.get('/api/users/12345')
        .success(function(data) {
        $scope.users = data;
    })
        .error(function(err) {
        alert('Error! Something went wrong - get');
    })
    
    var len = Auth.getCurrentUser().groups.length;

    function Create2DArray(rows) {
        var arr = [];

        for (var i=0;i<rows;i++) {
            arr[i] = [];
        }

        return arr;
    }

    $scope.selectedWho = Create2DArray(len);
    $scope.selectedWhom = Create2DArray(len);

    $scope.guess = function(parentIndex, index) {
        $scope.selectedWho[parentIndex][index] = "";
        $scope.selectedWhom[parentIndex][index] = "";
        
        //parentIndex - integer indicate which group the user chose in the array: Auth.getCurrentUser().groups
        //index - integer indicate which group the user chose in the array: Auth.getCurrentUser().groups[parentIndex] (inside this array there are phrases)
        
        //Doron - here you need to add the code for:
        //popup
        //check if user guessed right
        //update his score if needed
        //and so on
    };

});
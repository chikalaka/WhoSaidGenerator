'use strict';

angular.module('whoSaidApp')

    .controller('CreateGroupController', function ($scope, $http, Auth/*, User*/) {
    $scope.header = 'create group header';
    $scope.isAdmin = Auth.isAdmin;


    //test
    /*
    for (var j=0;j<3;j++){
        (function() {


            alert();

            return;
        })();
    }*/




    // end of test

    //$scope.users = User.query(); // NO need, delete when done

    $http.get('/api/users/12345')
        .success(function(data) {
        $scope.users = data;
    })
        .error(function(err) {
        alert('Error! Something went wrong - get');
    })

    $scope.selected = "";

    $scope.getfocus = function() {
        document.getElementById("searchUser").focus();
    }

    $scope.postNewGroup = function(){

        //var parameter = JSON.stringify($scope.newGroup);

        $http.post('/api/groups', $scope.newGroup)
            .success(function(createdGroup){

            var len = $scope.newGroup.users.length;
            //var i =0;

            function myFunction(i){
                $http.get('/api/users/12345/' + $scope.newGroup.users[i])
                    .success(function(data) {

                    //alert($scope.newGroup.users[i]._id);

                    var groups = data;
                    groups.groups.push(createdGroup._id);
                    alert(groups)
                    $http.put('/api/users/12345/' + $scope.newGroup.users[i], groups)
                        .success(function(){
                        alert('weheeee');

                        alert(i);
                        //alert(len);
                        //i++;
                        //if(i < len-1){
                        //    return;
                        //} 
                    })
                        .error(function(err){
                        alert('Error! Something went wrong - put');
                        alert(err);
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

    $scope.selectedUsersNames = [];
    //$scope.newGroup.users = [];
    //$scope.newGroup.name = 'hello';
    $scope.newGroup = new Object({
        name: '',
        users: []
    });

    $scope.onSelectPart = function($item, $model, $label, $event){
        $event: {
            /*
            alert('model: ' + $model);
            alert('model._id: ' + $model._id);
            alert('label: ' + $label);
            alert('label._id: ' + $label._id);
            alert('item: ' + $item);
            alert('item._id: ' + $item._id);
            */
            $scope.selectedUsersNames.push($label);
            $scope.newGroup.users.push($item._id);

            $scope.selected = "";
        }
    }

});
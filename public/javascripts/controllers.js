var controllers = angular.module('controllers',[]);
controllers.controller('queryUserController',function($scope,$http){
    $scope.queryUser = function(){
        $http({
            method:'POST',
            url:'/userarea',
            data:{
                userid:$scope.userid
            }
        }).success(function(result){
            console.log(result)
        }).error(function(error){
            console.log(error);
        })
    }
    console.info("app is running");
})

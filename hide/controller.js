angular.module("MyFirstApp", [])
    .controller("FirstController", function($scope,$http){
        $scope.posts = [];
        $scope.loading = true;
        $http.get("http://jsonplaceholder.typicode.com/posts").then(
            function(response){
                console.log(response.data);
                $scope.posts = response.data;
                $scope.loading = false;
            },
            function(err){
                $scope.loading = false;
                console.log(err);
            }
        );
        
    });
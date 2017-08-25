angular.module("FinalApp")
    .controller("MainController", function($scope, $resource){ 
        Post = $resource("http://jsonplaceholder.typicode.com/posts/:id", {id: "@id"});
        User = $resource("http://jsonplaceholder.typicode.com/users/:id", {id: "@id"});
        $scope.posts = Post.query(); // query() -> GET /posts > Un array de posts
        $scope.users = User.query();
    })
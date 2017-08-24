angular.module("MyFirstApp", [])

    .run(function($rootScope){
        $rootScope.nombre = "Luis";
    })

    .controller("FirstController", function($scope){
        $scope.nombre = "Progydi";
        setTimeout(function(){
            $scope.$apply(function(){
                $scope.nombre =":3"
            });
        }, 1000);
        
    })
    .controller("ChildController", function($scope){
    })
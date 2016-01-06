/**
 * Created by Sandeep on 01/06/14.
 */
angular.module('movieApp.controllers',[]).controller('MovieListController',function($scope,$http,$state,popupService,$window,Movie){

    $scope.movies=Movie.query();
    
     $http.get("http://localhost:9200/library/books/_search")
     .success(function(response){$scope.details = response;console.log(response)});
    
    

    $scope.deleteMovie=function(movie){
        if(popupService.showPopup('Really delete this?')){
            movie.$delete(function(){
                $window.location.href='';
            });
        }
    }

}).controller('MovieViewController',function($scope,$http,$stateParams,Movie){

   // $scope.movie=Movie.get({id:$stateParams.id});
    console.log('route param : '+$stateParams.id);
    $http.get("http://localhost:9200/library/books/"+$stateParams.id)
     .success(function(response){$scope.movie = response;console.log(response)});
    

}).controller('MovieCreateController',function($scope,$state,$stateParams,Movie){

    $scope.movie=new Movie();

    
    
     
    
    $scope.addMovie=function(){
        
               
        $scope.movie.$save(function(){
            $state.go('movies');
            console.log('movie saved');
        });
        console.log('movie added..');
              
    }
    
    
    

}).controller('MovieEditController',function($scope,$state,$stateParams,Movie){

    $scope.updateMovie=function(){
        $scope.movie.$update(function(){
            $state.go('movies');
        });
    };

    $scope.loadMovie=function(){
        //$scope.movie=Movie.get({id:$stateParams.id});
        $http.get("http://localhost:9200/library/books"+$stateParams.id)
     .success(function(response){$scope.movie = response;console.log(response)});
    };

    $scope.loadMovie();
});
/**
 * Created by Sandeep on 01/06/14.
 */
angular.module('movieApp.controllers',[]).controller('MovieListController',function($scope,$http,$state,popupService,$window,Movie){

    $scope.movies=Movie.query();
    
     $http.get("http://localhost:9200/library/books/_search")
     .success(function(response){$scope.details = response;console.log(response)});
    
    

    $scope.deleteMovie=function(movie){
        if(popupService.showPopup('Really delete this?')){
            $http({
            method: 'DELETE',
            url: 'http://localhost:9200/library/books/'+movie._id,
            headers: {'Content-Type': 'application/json'}
        });
            
            
             $http.get("http://localhost:9200/library/books/_search")
     .success(function(response){$scope.details = response;console.log(response); });
            
      
        }
         
        
    }

}).controller('MovieViewController',function($scope,$http,$stateParams,Movie){

   // $scope.movie=Movie.get({id:$stateParams.id});
    console.log('route param : '+$stateParams.id);
    $http.get("http://localhost:9200/library/books/"+$stateParams.id)
     .success(function(response){$scope.movie = response;console.log(response)});
    

}).controller('MovieCreateController',function($scope,$http,$state,$stateParams,Movie){

    $scope.movie=new Movie();

    
    
     
    
    $scope.addMovie=function(){
        
               
        $scope.movie.$save(function(){
            $state.go('movies');
             $http.get("http://localhost:9200/library/books/_search")
     .success(function(response){$scope.details = response;console.log(response)});
            console.log('movie saved');
        });
        console.log('movie added..');
        
              
    }
    
    
    

}).controller('MovieEditController',function($scope,$http,$state,$stateParams,Movie){

    $scope.updateMovie=function(){
        
       /* $scope.movie.$update(function(){
            $state.go('movies');
        });*/
        console.log('Update Records:');
        console.log($scope.movie);
        
        $http({
            method: 'POST',
            url: 'http://localhost:9200/library/books/'+$scope.movie._id+'/_update',
            data: { 'name' : $scope.movie.name,'author':$scope.movie.author },
            headers: {'Content-Type': 'application/json'}
        });
        
       /*  $http.post('http://localhost:9200/library/books/'+$scope.movie._id+'/_update', $scope.movie);*/
        
    $state.go('movies');
        
    };

    $scope.loadMovie=function(){
        //$scope.movie=Movie.get({id:$stateParams.id});
        $http.get("http://localhost:9200/library/books/"+$stateParams.id)
     .success(function(response){$scope.movie = response;console.log('edit view: ');console.log(response)});
    };

    $scope.loadMovie();
});
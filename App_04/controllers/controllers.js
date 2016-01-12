var app =angular.module('myControllers',[])

app.controller('ListController',function(messages){
    
    var self = this;

    self.messages = messages.list;
    
    
});



app.controller('HomeController',function($scope,messages){
    
    var self = this;

    $scope.init = function(){
        
        console.log('This is HomeController');
    };
    
    $scope.init();
    
    
});



app.controller('UserController',function(messages,$scope,$http){
    
    var self = this;

    self.users = [];
    
    console.log('This is UserController');
    
   
    
    
});



app.controller('SignInController',function(messages,$scope,$http){
    
    var self = this;

    self.users = [];
    
    console.log('This is SignIn');
    
    $scope.login = function(user){
        
        console.log('User Registered...');
        console.log($scope.user);
        var currentUser = user;
        if(user.email=='admin@codegen.net' && user.password=='pass'){
            
            console.log('You have successfully logged in');
        }
        $scope.user = {};
        
    };
    
    
});


app.controller('SignUpController',function(messages,$scope,$http){
    
    var self = this;

    self.users = [];
    
    console.log('This is SignUp Controller');
    
    $scope.register = function(){
        
        console.log('User Registered...');
        console.log($scope.user);
        $scope.user = {};
        
    };
    
    
});



app.controller('PostController',function(messages){
    
    var self = this;

  self.newMessage = 'Hello World!';

  self.addMessage = function(message){
    messages.add(message);
    self.newMessage = '';
      alert('message added '+message,'message');
  };
});
    

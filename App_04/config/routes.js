var app =angular.module('myRoutes',['ui.router']);

app.config(function config($stateProvider){
    $stateProvider.state("index",{
        
        url:"",
        controller:"HomeController",
        templateUrl:"templates/about/about.html"
        
    })
    
     $stateProvider.state("signin",{
        
        url:"/signin",
        controller:"SignInController",
        templateUrl:"templates/signin/signin.html"
        
    })
     
     $stateProvider.state("signup",{
        
        url:"/signup",
        controller:"SignUpController",
        templateUrl:"templates/signup/signup.html"
        
    }) 
    
    
})
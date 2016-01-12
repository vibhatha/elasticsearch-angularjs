var app =angular.module('myDirectives',[])



app.directive('signup',function(){
    
    
    return{
                
        restrict :'E',
        templateUrl:'templates/signup/signup.html',
        controller:'SignUpController'
        
        
    };
    
    
})

app.directive('signin',function(){
    
    
    return{
                
        restrict :'E',
        templateUrl:'templates/signin/signin.html',
        controller:'SignInController'
        
        
    };
    
    
});




/*
templates/user-form.html*/
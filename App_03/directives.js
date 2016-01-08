var app = angular.module('app', []);


app.directive('userdirective',function(){
    
    
    return{
                
        restrict :'E',
        templateUrl:'<h1>Hello World</h1>',
        
        
    };
    
    
});
/*
templates/user-form.html*/
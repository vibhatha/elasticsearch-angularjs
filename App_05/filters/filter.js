var app = angular.module('myFilters',[])


app.filter('reverse',function(){
    
    return function(input){
        
        var result = "";
        input = input || "";
        for (var i=0; i<input.length; i++) {
        result = input.charAt(i) + result;
        }
        return result;
        
        
    };
    
})
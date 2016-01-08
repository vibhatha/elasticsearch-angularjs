var app = angular.module('app', []);

/*angular.module('app').factory('messages', function(){

});*/


app.controller('ListController',function(messages){
    
    var self = this;

    self.messages = messages.list;
    
    
});


app.controller('UserController',function(messages,$scope,$http){
    
    var self = this;

    self.users = [];
    
    console.log('This is UserController');
    
    
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
    



app.factory('messages',function(){
    
  var messages = {};

  messages.list = [];

  messages.add = function(message){
    messages.list.push({id: messages.list.length, text: message});
  };

  return messages;
});


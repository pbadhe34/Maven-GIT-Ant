

var datamodule = angular.module('controllerTest', []);

datamodule.controller('TestController1', Controller1);//controller function 

 

function Controller1( ) {
  this.name = "Kishor Noha";
  //$scope.data = 1234;
 //$rootScope.userData ="MyUser Details"
  this.contacts = [
    {type: 'phone', value: '408 555 1212'},
    {type: 'email', value: 'kishor.mortal@chamunda.org'} ];
}
//add shared functions

Controller1.prototype.greet = function($scope,$rootScope) {
  alert(this.name);   
};

Controller1.prototype.addContact = function() {
  this.contacts.push({type: 'email', value: 'testName@server.net'});
};

Controller1.prototype.removeContact = function(contactToRemove) {
 var index = this.contacts.indexOf(contactToRemove);
  this.contacts.splice(index, 1);
};

Controller1.prototype.clearContact = function(contact) {
  contact.type = 'phone';
  contact.value = '';
};


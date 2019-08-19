var editModule = angular.module('textEditor', []);

//var doc = window.document.querySelector("#stateData");

editModule.controller('EditionCtrl', ['$scope', function(currentScope) {
	currentScope.state = {dataUser: "Admin", documentSaved: true};
 
	currentScope.loaded = false;
	currentScope.document = {text: 'Initial Text'};
 
   
    //document.querySelector("#stateData").style.color="orange";

//observer the change in the document text property

currentScope.$watch('document.text', function(value) {
    currentScope.state.documentSaved = false;
    console.log("The Document is modified with new "+value);
    
    if(currentScope.loaded==false)
    	{
    	currentScope.loaded = true;

    /*
    	window.document.querySelector("#stateData").style.color="magenta";
    */    	 
    	}
   
    else 
   {
   /*   	 
    	window.document.querySelector("#stateData").style.color="red";  
   */}      
    	 
  }, true);

	currentScope.saveDocument = function() {
	currentScope.sendToServer(currentScope.document.text);
	currentScope.state.documentSaved = true;
/*window.document.querySelector("#stateData").style.color="green";
  */	
console.log("The Document is saved ");
         
  };

  currentScope.sendToServer = function(content) {
    // Use $http here
console.log("The Document state is sent to server ");

  };
}]);
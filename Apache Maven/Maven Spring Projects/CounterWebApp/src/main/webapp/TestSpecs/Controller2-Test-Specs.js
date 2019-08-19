//'use strict'
 
console.log("Running the test");
 
 describe('Test the Edit Controller ', function() {

  var currentScope={};
  var ctrl=null;
  currentScope.state={ };
  currentScope.state.documentSaved=false;
  
  currentScope.document={};
  currentScope.document.text="";
  
  //load the module before veach test function
   
  beforeEach(function() { 
	  angular.mock.module('textEditor');
	  });
  //Inject the Scope into the controller and initialize

  beforeEach(angular.mock.inject(function($rootScope, $controller) {	   
	  currentScope = $rootScope.$new();
	  currentScope.state={ };
	  currentScope.state.documentSaved=false;

   //initilaize the controller with scope

	  ctrl = $controller('EditionCtrl', {$scope: currentScope});  
	  })); 
   
   //verify the document initial state
  it('should have an initial document state', function(){
	    var res = currentScope.state.documentSaved;

       //Assert that the document saved state is true
	   expect(currentScope.state.documentSaved).toEqual(true);	    
	 
	  });  
  
  //Test Document Saved Property
  describe('DocumentSaved property Test', function() {
    beforeEach(function() {       
      /* To detect the change in document state the call to $apply() must be performed, otherwise the   scope's watchers won't be run through and initiate the text change in dom element
*/
      
    	currentScope.$apply(function () {
    		currentScope.document.text += ' And some more Data in Text';
      });
    });

    it('The framework should watch for document.text changes', function() {
      expect(currentScope.state.documentSaved).toEqual(false);
    });

    describe('when calling the saveDocument function', function() {
      beforeEach(function() {
    	  currentScope.saveDocument();
      });

      it('The document state should be set to true again', function() {
        expect(currentScope.state.documentSaved).toEqual(true);
      });


     //To work with server
      afterEach(function() {
     
        /*expect(currentScope.sendToServer.callCount).toEqual(1);
        expect(currentScope.sendToServer.args[0][0]).toEqual(currentScope.document.text); */

      });
    });
  }); 
});

 
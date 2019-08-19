 var a;

describe("A suite is just a function", function() {
  

  it("Test1", function() {
    a = true;

    expect(a).toBe(true);
  });
});

describe('ControllerTestModule App', function() 
{
	 
	//beforeEach(module('controllerTest'));	 
	
    beforeEach(function() { module('controllerTest'); });
    
    it('should check controller as', function() {
	 var container = angular.element(document.querySelector( '#ctrl-div' ) );    
	 
	 var inputElement = document.querySelector( "input[ng-model='ctrl.name']" );
	 
	 var data = inputElement.value;
	 
	if(angular.equals('Kishor Noha', data)===false)
		console.error("Test1 Failed");  
	 
    
    var links = document.getElementsByTagName("li");

    var inputElements = document.querySelectorAll( "input[ng-model='contact.value']" );  
  
    var val1 = inputElements[0].value;
    var val2 = inputElements[1].value;
    
    console.log("Val1 is  "+val1);
    console.log("Val2 is  "+val2);
    
    if(angular.equals('408 555 1212', val1)===false)
    	console.error("Test2 Failed");
	 
    
    if(angular.equals('kishorDADA.mortal@chamunda.org', val2)===false)
    	console.error("Test3 Failed");    
     
});
} );


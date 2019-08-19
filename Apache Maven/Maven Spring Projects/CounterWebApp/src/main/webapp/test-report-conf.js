module.exports = function(config){
  config.set({

    basePath : '.',

    files : [
      'lib/angular/angular.js',
      'lib/angular/angular-mocks.js',  
      'app/app1.js',  
      'app/app2.js',   
      'TestSpecs/Controller1Test-Specs.js',             
      'TestSpecs/Controller2-Test-Specs.js'     
    ],


    autoWatch : true,

    frameworks: ['jasmine'],     

    browsers : ['Chrome','Firefox'],
    browsers : ['Chrome'],

    plugins : [
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-jasmine',
            'karma-junit-reporter' , 
            'karma-htmlfile-reporter',
             'karma-spec-reporter'           
            ],
    
 reporters: ['progress','dots','spec','junit', 'html'], 

  


    specReporter: {
       maxLogLines: 15,
       suppressPassed: false,
       suppressFailed: false,
       suppressSkipped: false
    },

    htmlReporter: {
      outputFile: 'test_out/unitTestResults.html',            
      
      pageTitle: 'Unit Tests',
      subPageTitle: 'Karma Unit test runner'
    },

    junitReporter : {
      outputFile: 'JUnitTestReport/unit.xml'
       
    }

  });
};

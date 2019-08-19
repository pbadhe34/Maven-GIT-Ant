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

   // browsers : ['Chrome','Firefox'],
    browsers : ['Chrome'],

    plugins : [
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-jasmine'             
            ],
    
 

  });
};

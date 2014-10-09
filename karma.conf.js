module.exports = function(config){
  config.set({

    basePath : './',

    files : [
      'app/bower_components/angular/angular.js',
      'app/bower_components/angular-route/angular-route.js',
      'app/bower_components/angular-touch/angular-touch.js',
      'app/bower_components/angular-mocks/angular-mocks.js',
      'app/bower_components/jquery/dist/jquery.min.js',
      'app/bower_components/bootstrap/dist/js/bootstrap.min.js',
      'app/app.module.js',
      'app/app.route.js',
      'app/app.route.spec.js',
      'app/components/**/*.js',
      'app/core/core.module.js',
      'app/topnav/topnav.module.js',
      'app/topnav/topnav.constants.js',
      'app/topnav/topnav.controller.js',
      'app/topnav/topnav.controller.spec.js',
      'app/wallet/wallet.module.js',
      'app/wallet/wallet.constants.js',
      'app/wallet/wallet.route.js',
      'app/wallet/wallet.route.spec.js',
      'app/wallet/wallet.controller.js',
      'app/wallet/wallet.controller.spec.js'
    ],

    autoWatch : true,

    frameworks: ['jasmine'],

    browsers : ['Chrome'],

    plugins : [
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-jasmine',
            'karma-junit-reporter'
            ],

    junitReporter : {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    }

  });
};

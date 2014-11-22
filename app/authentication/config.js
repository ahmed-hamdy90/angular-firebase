'use strict';
/**
 * Configure the Routes for myApp.auth module
 * @ngInject $routeProvider
 * @param {$routeProvider} $routeProvider 
 */
function config ($routeProvider) {
    $routeProvider
        .when('/signIn', {            
            templateUrl: "authentication/signIn.html",
            controller:  "SignInCtrl",
            controllerAs: "signIn"
        });
};

config.$inject = ['$routeProvider'];

angular
  .module('myApp.auth')    
  .config(config);
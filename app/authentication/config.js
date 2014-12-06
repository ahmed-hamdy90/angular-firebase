'use strict';
/**
 * Configure the Routes for myApp.auth module
 * @ngInject $routeProvider
 * @param {$routeProvider} $routeProvider 
 * @param {$locationProvider} $locationProvider $location service provider
 */
function config ($routeProvider, $locationProvider) {

	$locationProvider
		.html5Mode(true);

    $routeProvider
        .when('/signIn', {            
            templateUrl: "authentication/signIn.html",
            controller:  "SignInCtrl",
            controllerAs: "signIn"
        });    
};

// inject $routeProvider to config method
config.$inject = ['$routeProvider', '$locationProvider'];

angular
  .module('myApp.auth')    
  .config(config);
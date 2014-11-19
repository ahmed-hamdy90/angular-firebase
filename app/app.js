'use strict';
/**
 * myApp Module
 * @author ahmed hamdy <ahmedhamdy90@gmail.com>
 */
angular.module('myApp', [
	  'ngRoute',
	  'myApp.home'
	])
	/**
	 * Configure the Routes for myApp
	 * @param  {$routeProvider} $routeProvider Inject $routeProvider Object
	 */
    .config(['$routeProvider', function($routeProvider) {

        $routeProvider
           .otherwise({

        	    redirectTo: '/home'
           });
    }]);

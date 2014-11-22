'use strict';

/**
 * Configure the Routes for myApp
 * @ngInject $routeProvider
 * @param {$routeProvider} $routeProvider
 */
function config ($routeProvider) {
    $routeProvider
       .otherwise({
    	    redirectTo: '/signIn'
    });
};

config.$inject = ['$routeProvider'];

angular
  .module('myApp')
  .config(config);
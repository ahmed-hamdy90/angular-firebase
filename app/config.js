'use strict';

/**
 * Configure the Routes for myApp
 * @ngInject $routeProvider
 * @param {Object} $routeProvider    $route service provider
 * @param {Object} $locationProvider $location service provider
 */
function config ($routeProvider, $locationProvider) {

    $locationProvider
        .html5Mode(true);

    $routeProvider
        .otherwise({
    	    redirectTo: '/signIn'
        });
};

config.$inject = ['$routeProvider', '$locationProvider'];

angular
  .module('myApp')
  .config(config);

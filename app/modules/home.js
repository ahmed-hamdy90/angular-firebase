'use strict';
/**
 * myApp.home Module
 * @author ahmed hamdy <ahmedhamdy90@gmail.com>
 */
angular.module('myApp.home', ['ngRoute'])
	/**
	 * Configure the Routes for myApp
	 * @param  {$routeProvider} $routeProvider Inject $routeProvider Object
	 */
    .config(['$routeProvider',function($routeProvider) {

    	$routeProvider
    	   .when('/home', {
               
                templateUrl: "views/home.html",
                controller: "HomeCtrl"
    	   });
    }])
    /**
     * Home Controller
     * @return {$rootScopeProvider} $scope Inject $scope Object
     */
    .controller('HomeCtrl', ['$scope', function($scope){
    	
    }]);
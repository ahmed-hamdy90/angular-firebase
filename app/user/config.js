'use strict';
/**
 * Configure the Routes for myApp.User module
 * @ngInject $routeProvider
 * @param {$routeProvider} $routeProvider
 * @param {$locationProvider} $locationProvider $location service provider
 */
function config ($routeProvider, $locationProvider) {

    $locationProvider
        .html5Mode(true);

    $routeProvider
        .when('/app/signIn', {
            templateUrl: "app/user/signIn.html",
            controller:  "SignInCtrl",
            controllerAs: "signIn"
        });

};

// inject $routeProvider to config method
config.$inject = ['$routeProvider', '$locationProvider'];

angular
  .module('myApp.User')
  .config(config);

'use strict';
/**
 * Configure the Routes for myApp.User module
 * @ngInject $routeProvider
 * @param {Object} $routeProvider    $route service provider
 * @param {Object} $locationProvider $location service provider
 */
function config ($routeProvider, $locationProvider) {

    $locationProvider
        .html5Mode(true);

    $routeProvider
        .when('/signIn', {
            templateUrl: "app/user/signIn.html",
            controller:  "SignInCtrl",
            controllerAs: "user"
        })
        .when('/signUp', {
            templateUrl: "app/user/signUp.html",
            controller:  "SignUpCtrl",
            controllerAs: "user"
        });

};

// inject $routeProvider to config method
config.$inject = ['$routeProvider', '$locationProvider'];

angular
  .module('myApp.User')
  .config(config);

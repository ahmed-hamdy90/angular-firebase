'use strict';

/**
 * SignUp Controller
 */
function SignUpCtrl ($location, $firebase) {
	
    // refer to $scope
	var user = this;

   /**
    * register function
    * @param {Object} event Event Object for all events into DOM [repersent in angularjs as $event]
    */
	user.register = function (event) {
		
		event.preventDefault();

		
	} 

	/**
	 * login function 
	 * @param {Object} event Event Object for all events into DOM [repersent in angularjs as $event]
	 */
	user.login = function (event) {

 		event.preventDefault();

	    $location.path('/signIn');
	} 
	
};

SignUpCtrl.inject = ['$location','$firebase'];

angular
  .module('myApp.User')
  .controller('SignUpCtrl', SignUpCtrl);
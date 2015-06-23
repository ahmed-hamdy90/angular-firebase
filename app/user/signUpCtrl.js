'use strict';

/**
 * SignUp Controller
 * <br/> Responsible for User Registration functionality
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
	* change view click handler
	* @param {String} newPath new path string which we need to switch url to it
	*/
	user.changeView = function (newPath) {

		$location.path(newPath);
	}

};

// Inject dependencies for SignUpCtrl
SignUpCtrl.inject = ['$location','$firebase'];

angular
  .module('myApp.User')
  .controller('SignUpCtrl', SignUpCtrl);

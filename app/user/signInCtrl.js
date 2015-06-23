'use strict';

/**
 * SignIn Controller
 * <br/> Responsible for User Login functionality
 */
function SignInCtrl ($location, $firebase) {

  // refer to $scope
	var user = this;

	/**
	 * User login function
	 * @param {Object} event Event Object for all events into DOM [repersent in angularjs as $event]
	 */
	user.login = function (event) {

 		event.preventDefault();

	    var userName = user.email;
	    var password = user.password;
	    var firebaseObj = new Firebase("https://my-angular-firebase.firebaseio.com/");

	    console.log("user name is: "+userName+" and password is :"+password);

	    firebaseObj.authWithPassword({
	    	email : userName,
	    	password : password
	    }, function (error, authData) {

	    	if (error === null ) {
	    	    // user authenticated with Firebase
    			console.log("User ID: " + authData.uid + ", Provider: " + authData.provider);
    			alert("Authentication Successful");
	    	} else {

    			console.log("Error authenticating user:", error);
    			alert("Authentication Failure");
	    	}

	    });
	}

  /**
   * change view click handler
   * @param {String} newPath new path string which we need to switch url to it
   */
	user.changeView = function (newPath) {

		$location.path(newPath);
	}

};

// Inject dependencies for SignInCtrl
SignInCtrl.inject = ['$location','$firebase'];

angular
  .module('myApp.User')
  .controller('SignInCtrl', SignInCtrl);

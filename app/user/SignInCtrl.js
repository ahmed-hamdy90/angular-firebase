'use strict';

/**
 * SignIn Controller
 */
function SignInCtrl ($location, $firebase) {
	
    // refer to $scope
	var user = this; 

	/**
	 * login function 
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
    * register function
    * @param {Object} event Event Object for all events into DOM [repersent in angularjs as $event]
    */
	user.register = function (event) {
		
		event.preventDefault();

		$location.path('/signUp');
	} 
	
};

SignInCtrl.inject = ['$location','$firebase'];

angular
  .module('myApp.User')
  .controller('SignInCtrl', SignInCtrl);
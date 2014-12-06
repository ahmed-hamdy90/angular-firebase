'use strict';

/**
 * SignIn Controller
 */
function SignInCtrl ($firebase) {
    // refer to $scope
	var signIn = this; 

	/**
	 * login function
	 * @param  {[type]} event [description]
	 */
	signIn.login = function (event) {

 		event.preventDefault();

	    var userName = signIn.email;
	    var password = signIn.password;
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
	
};

SignInCtrl.inject = ['$firebase'];

angular
  .module('myApp.auth')
  .controller('SignInCtrl', SignInCtrl);
var myApp = angular.module('myApp', []);

myApp.controller('FormController', function($scope){

	$scope.formData = {

		name:'test',
		email:'test@test.com'
	}

	$scope.register = function() {
		alert("register" + $scope.formData.name);
	}
})

var app = angular.module('enterprise', ['ngMaterial', 'material.svgAssetsCache', 'ngMessages', 'ngRoute']);

app.service('addNewItem', function () {

	var variable = [{
		book: 'data',
		author: 'tom',
	}, {
		book: 'history',
		author: 'anna',
	}];
	this.getVar = function () {
		return variable;
	};

});

app.controller('AppCtrl', function ($scope, $location, addNewItem) {
	$scope.info = [];
	$scope.info = addNewItem.getVar();
	$scope.save = function () {
		$scope.info.push({
			book: $scope.Name,
			author: $scope.Author
		});
		$location.path("/");
	};
	
});

app.controller('EditCtrl', function ($scope, $location, addNewItem, $routeParams, $mdDialog) {
	$scope.info = [];
	$scope.info = addNewItem.getVar();
	$scope.asd = $scope.info[$routeParams.id];
	$scope.update = function () {
		$location.path("/");
	};
	$scope.removeAlert = function (id, ev) {
		var confirm = $mdDialog.confirm()
			.title('Would you like to delete this data?')
			.ok('Yes')
			.cancel('No');
		$mdDialog.show(confirm).then(function (ev) {
			$scope.info.splice(id, 1);
		});
		$location.path("/");
	};
});

app.config(function ($routeProvider) {


	$routeProvider
		.when("/", {
			templateUrl: "home.html",
			controller: "AppCtrl"
		})
		.when("/add", {
			templateUrl: "add.html",
			controller: "AppCtrl"
		})
		.when("/edit/:id", {
			templateUrl: "edit.htm",
			controller: "EditCtrl"
		})
		.otherwise({
			redirecTo: '/'
		});
})
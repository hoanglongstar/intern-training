var app = angular.module('myBookmanage', ['ngMaterial', 'material.svgAssetsCache', 'ngMessages', 'ngRoute']);
app.service('addNewItem', function () {

	var variable = [{
		book: 'data',
		author: 'tom',
		id: '1'
	}, {
		book: 'history',
		author: 'anna',
		id: '2'
	}];
	this.getVar = function () {
		return variable;
	};

});

app.service('truefalse', function () {
	var variable = false;
	this.getData = function () {
		return variable;
	};
})

app.controller('myCtrl', function ($scope, $mdDialog, addNewItem, truefalse) {

	$scope.info = [];
	$scope.info = addNewItem.getVar();
	$scope.addItem = function () {
		$scope.info.push({
			book: $scope.Name,
			author: $scope.Author,
			id: $scope.info.length + 1
		});
	};

	$scope.modifyItem = {};
	for (var i = 0, length = $scope.info.length; i < length; i++) {
		$scope.modifyItem[$scope.info[i].id] = false;
	}
	$scope.changeItem = function (data) {
		console.log(data.id);
		$scope.modifyItem[data.id] = true;
		alert(data.id);
		console.log($scope.modifyItem[data.id]);
		alert($scope.modifyItem[data.id]);
	};
	$scope.updateItem = function (data) {
		$scope.modifyItem[data.id] = false;
	};

	$scope.removeAlert = function (id, ev) {
		var confirm = $mdDialog.confirm()
			.title('Would you like to delete this data?')
			.ok('Yes')
			.cancel('No');
		$mdDialog.show(confirm).then(function (ev) {
			$scope.info.splice(id, 1);
		});
	};

});
app.config(function ($routeProvider) {

	$routeProvider
		.when("/", {
			templateUrl: "home.html",

			controller: "myCtrl"
		})
		.when("/edit", {
			templateUrl: "edit.htm",
			controller: "myCtrl"
		})
		.when("/add", {
			templateUrl: "add.html",
			controller: "myCtrl"
		})
		.otherwise({
			redirectTo: '/'
		});

});
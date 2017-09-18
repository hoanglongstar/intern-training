var app = angular.module('myBookmanage', ['ngMaterial', 'material.svgAssetsCache', 'ngMessages', 'ngRoute']);
app.controller('myCtrl', function ($scope, $mdDialog) {
	$scope.info = [{
		book: 'data',
		author: 'tom',
		id: '0'
	}, {
		book: 'history',
		author: 'anna',
		id: '1'
	}];
	$scope.addItem = function () {
		$scope.info.push({
			book: $scope.addBook,
			author: $scope.addAuthor,
			id: $scope.info.length + 1
		});
	}
	$scope.modifyItem = {};
	for (var i = 0, length = $scope.info.length; i < length; i++) {
		$scope.modifyItem[$scope.info[i].id] = false;
	}
	$scope.changeItem = function (data) {
		$scope.modifyItem[data.id] = true;
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
		.when("/",{
			templateUrl:"home.html",
		})
		.when("/edit", {
			templateUrl: "edit.htm",

		})
		.otherwise({redirectTo:'/'});

});
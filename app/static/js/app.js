// Your JavaScript Code here
var app = angular.module('thumbnail',[]);

app.controller( 'myController', function($scope, $http){
	$http.get('/api/thumbnails').then(function(response){
	$scope.images = response.data["thumbnails"];
	});
});
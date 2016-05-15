var app = angular.module('redditFun', ['ui.router']);

app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){

	$stateProvider
	.state('home',{
		url: '/home',
		/*must pass a controller to the new route or it won't load properly*/
		controller: 'MainCtrl',
		templateUrl: '/templates/home.html' 
	})
	.state('post', {
		url: '/posts/:index',
		controller: 'PostsCtrl',
		templateUrl: 'templates/post.html'
	})
}])
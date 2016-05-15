/*
different controller to have separation of concerns. this will only take care of individual posts
any time we want to share data between two controllers (postsCtrl and mainCtrl for e.g), we use a factory/service
(see posts.js file in services folder)
*/
/*
stateParams is a way to access the parameters of the URL 
*/
app.controller('PostsCtrl', ['$scope', 'posts', '$stateParams',function($scope, posts, $stateParams) {

	//we use stateParams.index because in the post routing in app.js we pass a `:index` parameter
		//which matches the array position 
		//the 'comment' button sends the user to the url /#posts/post.id 
		//<- this id guarantees that the post clicked matches its position in the array
		//remember that visually they are sorted by 'orderBy', which is only visual and doesn't affect the position of the posts in the array
	$scope.post = posts.posts[$stateParams.index];
	console.log("$scope post is ", $scope.post);
	$scope.addComment = function(){
		$scope.post.comments.push({user: $scope.user, text: $scope.text})
	}
}]);
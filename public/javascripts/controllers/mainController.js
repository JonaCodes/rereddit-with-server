//'posts' as injection comes from the name of the service (Factory) in posts.js file
//posts as parameter doesn't matter (the name), but gives us access
//now this mainCtrl has access to the data through our service 
app.controller('MainCtrl',  ['$scope', 'posts', function($scope, posts){
  $scope.posts = posts;

  $scope.addPost = function(){
  	$scope.posts.push({id: $scope.posts.length, title: $scope.title, upvotes:0, link: $scope.link, comments:[]});
  }

  $scope.incrementUpvotes = function(post){
  	for(var i = 0; i < $scope.posts.length; i++){
  		if ($scope.posts[i].id == post.id){
  			$scope.posts[i].upvotes += 1;
  		}
  	}
  }
}]);
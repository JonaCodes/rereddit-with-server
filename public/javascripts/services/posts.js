//creating this service so that both mainCtrl and postsCtrl have access to the data
//inject $http to get posts from server (which brings it from db)
app.factory('posts', ['$http', function($http){

  var postService = {
	posts: [],
 		
	getAll: function(){
		//'/posts' is the get address from index.js
		return $http.get('/posts').then(function(data){
			angular.copy(data.data, postService.posts);
		})
	}
  }

  return postService;
}]);
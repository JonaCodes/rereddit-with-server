var express = require('express');
var router = express.Router();
var Post = require('../models/Post');
var Comment = require('../models/Comment');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Brandon' });
});

router.post('/posts', function(req, res, next) {
  
  var post = new Post(req.body);

  post.save(function(err, post){
    if(err){ return next(err); }

    res.json(post);
  });
}); 

//**router.param is SPECIAL
//this is middleware that gets invoked any time a route with the 'post' param gets requested
//the first argument here matches any parameter in any of the route's url that have the same name
//using this to find our post by id so we can add it to the request object 
router.param('post', function(req, res, next, id) {
	var query = Post.findById(id); //need to execute the query

	query.exec(function(err, post){
		if(err){return next(err);}
		if(!post){return next(new Error("can't find post"));}

		//if no error above, attach the found post to req
		req.post = post;
		return next();
	})
});

//this post will invoke the 'post' router.param since we have a ':post' parameter
router.post('/posts/:post/comments', function(req, res, next) {
	var comment = new Comment(req.body);
	comment.post = req.post

	comment.save(function(err, comment){
		if(err){return next(err);}

		req.post.comments.push(comment);
		req.post.save(function(err, post){
			if(err){return next(err);}

			res.json(comment);
		})
	});
});

router.get('/posts', function(req, res, next) {
 	
  Post.find({}, function(err, posts){
  	res.json(posts);
  });
}); 

router.get('/posts/:id', function(req,res,next){
	var postQuery = Post.findById(req.params.id);
	
	postQuery.populate({
		path: 'comments',
		select: '-_id'
	});

	postQuery.exec(function(err, post){
		res.json(post);
	})

})

module.exports = router;

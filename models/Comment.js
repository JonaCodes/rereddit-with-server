var mongoose = require('mongoose');

var CommentSchema = new mongoose.Schema({
	text: String,
	author: String,
	upvotes: {type: Number, default: 0},
	post: {type: mongoose.Schema.Types.ObjectId, ref: "Post"}
});

var Comment = mongoose.model('Comment',CommentSchema);

module.exports = Comment;
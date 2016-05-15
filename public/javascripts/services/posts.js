//creating this service so that both mainCtrl and postsCtrl have access to the data
app.factory('posts', [function(){
  
  var posts = [
  {id:0,title:"the post",upvotes: 1, 
  	comments: [{user:"Stacey",text:"lol"}, {user:"Jona",text:"i don't understand"}]}, 
  {id:1,title: "the link", upvotes: 2, 
  	comments: [{user:"Erez",text:"goddamn troll"}, {user:"Sasha",text:"rick rolled!!"}], link: "www.google.com"}
  ];

  return posts;
}]);
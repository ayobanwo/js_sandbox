const http = new easyHTTP;

//Get Posts
http.get('http://jsonplaceholder.typicode.com/posts', 
	function(posts){
		console.log(posts);
	});

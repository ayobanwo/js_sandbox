const posts = [
	{title: 'Post One' ,  body: 'this is post one'},
	{title: 'Post Two' ,  body: 'this is post two'}
];

// function createPost(post){
// 	setTimeout(function(){ 
// 		posts.push(post);
// 	}, 2000)
// }

// function getPosts(){
// 	setTimeout(function(){
// 		let output = '';
// 		posts.forEach(function(post){
// 			output += `<li>${post.title}</li>`;
// 		});
// 		document.body.innerHTML = output;
// 	}, 2000)
// }

// createPost({title: 'Post Three' ,  body; 'this is post Three'});
// getPosts();

function createPost(post){
	return new Promise (function(resolve, reject){
		setTimeout(function(){ 
			posts.push(post);
			const error = false;
			if(!error){
				resolve();
			}
			else{
				reject('Error: Something went wrong');
			}
		}, 2000);
	})
}

function getPosts(){
	setTimeout(function(){
		let output = '';
		posts.forEach(function(post){
			output += `<li>${post.title}</li>`;
		});
		document.body.innerHTML = output;
	}, 1000)
}

createPost({title: 'Post Three' ,  body: 'this is post Three'})
.then(getPosts)
.catch(function(err){
	console.log(err);
});
document.getElementById('button1').addEventListener('click', getText);

document.getElementById('button2').addEventListener('click', getJson);

//Get Local Text File Data
function getText(){
	fetch('test.txt')
		.then(function(res){
			return res.text();
		})
		.then(function(data){
			console.log(data);
			document.getElementById('output').innerHTML = data ;
		})
		.catch(function(err){
			console.log(err);
		});
}  

//Get Local Json data
function getJson(){
	fetch('fetch.json')
		.then(function(res){
			return res.json();
		})
		.then(function(data){
			console.log(data);
			let output = '';
			data.forEach(function(post) {
				output += `<li>${post.body}</li>`;
			});
			document.getElementById('output').innerHTML = output ;
		})
		.catch(function(err){
			console.log(err);
		});
}  
document.getElementById('button1').addEventListener('click', getText);

function getText(){
	fetch('test.txt')
		.then(function(res){
			return res.text();
		})
<<<<<<< HEAD
		.then(function(data){
			console.log(data);
			document.getElementById('output').innerHTML = data ;
		})
		.catch(function(err){
			console.log(err);
		});
}  
=======
			.then(function(data){
				console.log(data);
			});
}
>>>>>>> origin/master

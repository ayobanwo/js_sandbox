const http = new EasyHTTP;

//Get Users
http.get('https://jsonplaceholder.typicode.com/users')
.then( data => console.log(data))
.then(err => console.log(err));

const data = {
	name: 'Ali Adams',
	username: 'alidams',
	email: 'alidams@gmail.com'
}

// //Post User
// http.post('https://jsonplaceholder.typicode.com/users', data)
// .then( data => console.log(data))
// .then(err => console.log(err));

// //Put User
// http.put('https://jsonplaceholder.typicode.com/users/2', data)
// .then( data => console.log(data))
// .then(err => console.log(err));
 
//Delete User
// http.delete('https://jsonplaceholder.typicode.com/users/2')
// .then( data => console.log(data))
// .then(err => console.log(err));
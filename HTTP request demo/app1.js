document.getElementById('button').addEventListener('click', loadData);

function loadData(){
	//Create an XHR Object
	const xhr = new XMLHttpRequest();

	//OPEN
	xhr.open('GET', 'data.txt', true);

	//Optional - used for spinners/loaders
	// xhr.onprogress = function(){
	// 	console.log('readyState', xhr.readyState);
	// }

	xhr.onload = function(){
		console.log('readyState', xhr.readyState);
		if(this.status === 200){
			// console.log(this.responseText);
			document.getElementById('output').innerHTML = 
			`<h1> ${this.responseText}</h1> `
		}
	}

	//This method runs when there is an error
	xhr.onerror = function(){
		console.log('Request error...' )
	}

	//returns the value of xhr
	xhr.send();  


}

//HTTP STATUSES
/* 
200: OK
 403: Forbidden
 404: Not Found 
 */

//Ready state Values 
/*
0; request not intialised
1: Server connection established
2: request recieved
3: processing request
4: Request finished and response is ready
*/
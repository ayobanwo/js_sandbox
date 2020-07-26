function easyHTTP(){
	this.http = new XMLHttpRequest()
}

//Make an HTTP GET Rquest
easyHTTP.prototype.get = function(url){
	this.http.open('GET', url, true);

	let self = this;
	this.http.onload = function(){
		if(self.http.status === 200){
			console.log(self.http.responseText)
		}
	};

	this.http.send();
}
//Make an HTTP POST Rquest
//Make an HTTP PUT Rquest
//Make an HTTP DELETE Rquest

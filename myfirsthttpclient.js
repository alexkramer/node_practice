var http = require('http');

var resultsMap = {};
var numComplete = 0;

var urlsInOrder = [process.argv[2],process.argv[3],process.argv[4]];

function logResults() {
	urlsInOrder.forEach(function(url){
		console.log(resultsMap[url]);
	});
}

function getResults(url) {
	var dataString = '';
	http.get(url,function (response) {
		response.setEncoding('utf8');
		response.on("data",function(data){
			dataString+=data;
		});
		response.on("end",function() {
			numComplete+=1;
			resultsMap[url]=dataString;
			if (numComplete==3) logResults();
		});
	});

}

urlsInOrder.forEach(function(url){
	getResults(url);
});


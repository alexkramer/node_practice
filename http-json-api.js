var http = require('http');
var url = require('url');

function handleISOParse(dateString) {
	var d = new Date(dateString);
	return JSON.stringify({"hour":d.getHours(),"minute":d.getMinutes(),"second":d.getSeconds()});
}

function handleUnixTime(dateString) {
	return JSON.stringify({'unixtime':new Date(dateString).getTime()})
}

var server = http.createServer(function (request,response){
	var urlObject = url.parse(request.url,true);
	var stringToReturn = "What did you send me?";
	if (urlObject.path.indexOf('parsetime')>-1) {
		stringToReturn = handleISOParse(urlObject.query.iso);
	} else if (urlObject.path.indexOf('unixtime')>-1) {
		stringToReturn = handleUnixTime(urlObject.query.iso);
	} 

	response.writeHead(200, { 'Content-Type': 'application/json' });
	response.end(stringToReturn);
});

server.listen(process.argv[2]);
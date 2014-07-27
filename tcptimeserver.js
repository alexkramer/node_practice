var net = require('net');

function zeroFill(numValue) {
	return (numValue<10) ? '0'+numValue : numValue
}

var server = net.createServer(function(socket){
	var dateNow = new Date();
	var dateString = dateNow.getFullYear()+'-'+
		zeroFill(dateNow.getMonth()+1)+'-'+
		zeroFill(dateNow.getDate())+' '+
		zeroFill(dateNow.getHours())+':'+
		zeroFill(dateNow.getMinutes())+'\n';
	socket.end(dateString);
});

server.listen(process.argv[2]);

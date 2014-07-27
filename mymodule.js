module.exports = function(pathToFiles,fileExt,callback) {
	var fs = require('fs');
	var path = require('path');
	var data = new Array();
	var numLines = fs.readdir(pathToFiles,function(err,fileNames){
		if (err) return callback(err);

			for (var i=0; i<fileNames.length;i++) {
				var fileName = fileNames[i];
				if (path.extname(fileName)==='.'+fileExt) data.push(fileName);
			}

			callback(null,data);
	});
}
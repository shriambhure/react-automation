const path = require('path');

module.exports = {

	getTestFileData(filename) {

		var strFileName = path.basename(filename);
		var strfilePath = '../Data/' + filename.slice(filename.search('Applications'),filename.length);
		    strfilePath = strfilePath.replace(strFileName,'').replace(/\\/g,'/');
			strFileName = strFileName.replace('C','').replace('Test.js','.json');
		    strfilePath += strFileName.replace(/([A-Z]+)([A-Z][a-z])/g,'$1_$2').replace(/([a-z\d])([A-Z])/g,'$1_$2').toLowerCase();		    
		    return require(strfilePath);
	}
}

const path = require('path');

class CAbstractTest {
	getTestDataFile(filename) {
		var strFileName = path.basename(filename);
		var strfilePath = '../../Data/' + filename.slice(filename.search('Applications'),filename.length);
		strfilePath = strfilePath.replace(strFileName,'').replace(/\\/g,'/');
		strFileName = strFileName.replace('C','').replace('Test.js','.json');
		strfilePath += strFileName.replace(/([A-Z]+)([A-Z][a-z])/g,'$1_$2').replace(/([a-z\d])([A-Z])/g,'$1_$2').toLowerCase();
		// var userAuth = require(strfilePath);
		// for(var i=0;i<Object.keys(userAuth).length;i++) {
		// 	return JSON.parse(userAuth["test"+(i+1)]);
		// }
		return require(strfilePath);
	}
}

module.exports = new CAbstractTest();

// module.exports = {
//
// 	getTestDataFile(filename) {
// 		var strFileName = path.basename(filename);
// 		var strfilePath = '../../Data/' + filename.slice(filename.search('Applications'),filename.length);
// 		    strfilePath = strfilePath.replace(strFileName,'').replace(/\\/g,'/');
// 			strFileName = strFileName.replace('C','').replace('Test.js','.json');
// 		    strfilePath += strFileName.replace(/([A-Z]+)([A-Z][a-z])/g,'$1_$2').replace(/([a-z\d])([A-Z])/g,'$1_$2').toLowerCase();
// 			// var userAuth = require(strfilePath);
// 			// for(var i=0;i<Object.keys(userAuth).length;i++) {
// 			// 	return JSON.parse(userAuth["test"+(i+1)]);
// 			// }
// 		return require(strfilePath);
// 	}
// }
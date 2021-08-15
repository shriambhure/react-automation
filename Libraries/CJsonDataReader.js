const path = require('path');

class CJsonDataReader {

	getTestFileData(filename) {
		console.log("this is data reader function");
		var str_file_name = path.basename(filename);
		var str_file_path = '../Data/Applications' + filename.slice(filename.search('Acceptance'),filename.length);
		str_file_path = str_file_path.replace(str_file_name,'').replace(/\\/g,'/');
		str_file_name = str_file_name.replace('C','').replace('Test.js','.json');
		str_file_path += str_file_name.replace(/[A-Z]+)([A-Z][a-z])/g '$1_$2').replace(/([a-z\d])([A-Z])/g,'$1_$2').toLowerCase();
		return require(str_file_path);
	}

	callFuntion() {
		console.log("Hi I'm Call Function");
	}
}

module.exports = new CJsonDataReader();\


// module.exports = {
//     go() {
//     	console.log("Hi fdslfjlksdjfklsd");	
//     }
	
// }
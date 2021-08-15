const path = require('path');
var objPath = require('../Libraries/path.defines.js');

module.exports = {	
	I: './steps_file.js',
	jsonReader: path.join(objPath.LIBRARIES_DIR,'/CJsonDataReader.js'),
	commonFunctions: path.join(objPath.LIBRARIES_DIR,'/CCommonFunctions.js'),
	demoAuthentication: path.join(objPath.PAGES_DIR,'/DemoProduct/Authentication/CDemoAuthentication.js')
}
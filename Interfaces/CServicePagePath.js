var path = require('path');
var objPath = require('../Libraries/Path.defines.js');

module.exports = {
    I: './Libraries/steps_file.js',
    abstractTest: path.join(objPath.TEST_DIR, '/CAbstractTest.js'),
    customMethod: path.join(objPath.LIBRARIES_DIR, '/CCustomMethod.js'),
    commonFunction: path.join(objPath.LIBRARIES_DIR, '/CommonFunction.js'),
    angularHeader: path.join(objPath.PAGE_DIR,'/Angular/CAngularHeader.js')
}
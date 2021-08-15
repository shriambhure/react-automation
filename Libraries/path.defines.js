const path = require('path');
const ROOT_DIR = path.resolve(__dirname).split(path.sep + 'Libraries')[0];

module.exports = {
	TEST_DIR: path.join(ROOT_DIR, '/Applications'),
	DATA_DIR: path.join(ROOT_DIR,'/Data/Applications/'),
	LIBRARIES_DIR: path.resolve(path.resolve(__dirname)),
	INTERFACES_DIR: path.join(ROOT_DIR,'/Interfaces'),
	PAGES_DIR: path.join(ROOT_DIR,'/Interfaces/Pages'),
	FRAGMENTS_DIR: path.join(ROOT_DIR, '/Interfaces/Fragments'),
	CREDENTIALS_DIR: path.join(ROOT_DIR,'/Data/Applications/CREDENTIALS')
};
const path = require('path');
const ROOT_DIR = path.resolve(__dirname).split(path.sep + 'Libraries')[0];

module.exports = {
	TEST_DIR: path.join(ROOT_DIR, 'Applications/Acceptance'),
	DATA_DIR: path.join(ROOT_DIR, 'Data/Applications/Acceptance'),
	LIBRARIES_DIR: path.join(path.resolve(__dirname)),
	INTERFACES_DIR: path.resolve(ROOT_DIR, 'Interfaces'),
	PAGE_DIR:path.resolve(ROOT_DIR, 'Interfaces/Pages'),
	FRAGMENTS_DIR:path.resolve(ROOT_DIR, 'Interfaces/Fragments'),
	CREDENTIALS_DIR:path.resolve(ROOT_DIR, 'Data/Applications/CREDENTIALS'),
};
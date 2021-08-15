//const {setHeadlessWhen, setWindowSize} = require("@codeceptjs/configure");
const chromePaths = require('chrome-paths');
require('dotenv').config({path:'.env'});
//setHeadlessWhen(process.env.HEADLESS);
//setWindowSize(1920,1080);

exports.config = {
	tests: "Applications/**/*.js",
	output: process.env.REPORT_DIR,
	helper: {
		Puppeteer: {
			restart: true,
			waitForAction: 2000,
			pageload_timeout: 30000,
			connection_timeout: 30000,
			request_timeout: 30000,
			chrome: {
				executablePath: chromePaths.chrome
			}
		},
		StepFile: {
			require: './Libraries/steps_file.js',
		}
	},
	include: require('./Interfaces/CServicePagePath.js'),
	bootstrap: require('./Libraries/bootstrap.js'),
	name: "AngularTest",
	plugins: {
		allure: {
			enabled: true
		},
		screenshotOnFail: {
			enabled: true
		}
	}

}
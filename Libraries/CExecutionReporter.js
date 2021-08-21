module.exports = {
	"reporterOptions": {
		"codeceptjs-cli-reporter": {
			"stdout": "-",
			"options": {
				"steps": true
			}
		},
		"mochawesome": {
			"stdout": "../EntrataAutomationLog/console.log",
			"options": {
				reportDir: "../EntrataAutomationLog",
				reportFilename: "report"
			},
		},
		"mocha-junit-reporter": {
			"stdout": "../EntrataAutomationLog/console.log",
			"options": {
				"mochaFile": "../EntrataAutomationLog/result.xml"
			},
			"attachments": true
		}
	}
}
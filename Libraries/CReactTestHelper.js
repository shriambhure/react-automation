const Helper = require('@codeceptjs/helper');

class CReactTestHelper extends Helper {

    // before/after hooks
    _before() {
        // remove if not used
    }

    _after() {
        // remove if not used
    }

    _finishTest() {
        // const { execSync } = require('child_process');
        // const output = execSync('allure serve ../EntrataAutomationLog', { encoding: 'utf-8' });
        // process.exit(1);

    }

    // add custom methods here
    // If you need to access other helpers
    // use: this.helpers['helperName']

}

module.exports = CReactTestHelper;
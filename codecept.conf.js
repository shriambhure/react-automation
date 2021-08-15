const { setHeadlessWhen } = require('@codeceptjs/configure');

// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

exports.config = {
  tests: 'Applications/**/*.js',
  output: '../CodeceptjsLog',
  helpers: {
    Puppeteer: {
      url: 'https://codecept.io/puppeteer/',
      show: true,
      windowSize: '1200x900'
    }
  },
  include: require('./Interfaces/CServicePagePath.js'),
  bootstrap: null,
  mocha: {},
  name: 'react-automation',
  plugins: {
    pauseOnFail: {},
    retryFailedStep: {
      enabled: true
    },
    tryTo: {
      enabled: true
    },
    screenshotOnFail: {
      enabled: true
    }
  }
}
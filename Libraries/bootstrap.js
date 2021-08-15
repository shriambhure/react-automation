const {setHeadlessWhen, setWindowSize} = require("@codeceptjs/configure");
setHeadlessWhen(process.env.HEADLESS);
setWindowSize(1920,1080);
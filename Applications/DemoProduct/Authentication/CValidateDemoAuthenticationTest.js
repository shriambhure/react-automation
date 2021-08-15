const { jsonReader, commonFunctions, demoAuthentication} = inject();

Feature('Validate demo product authentication test');

Scenario('Demo product authentication', (test_data) => {
	demoAuthentication.clickOnGetStartedButton();
}).injectDependencies({ test_data : jsonReader.getTestFileData(__filename) }).tag("@smoke");

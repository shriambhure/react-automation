const { jsonReader, commonFunctions, demoAuthentication,I} = inject();

Feature('Validate demo product authentication test');

Scenario('Demo product authentication', (test_data) => {
	I.amOnPage("/");
}).injectDependencies({ test_data : jsonReader.getTestFileData(__filename) }).tag("@smoke");

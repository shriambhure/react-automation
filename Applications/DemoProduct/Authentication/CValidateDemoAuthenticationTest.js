const { jsonReader, demoAuthentication} = inject();

Feature('Validate demo product authentication test');

Scenario('Demo product authentication', (test_data) => {
	demoAuthentication.userLogin(test_data["user_authentication"]);
}).injectDependencies({ test_data : jsonReader.getTestFileData(__filename) }).tag("@smoke");

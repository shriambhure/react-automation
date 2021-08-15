const { jsonReader, demoAuthentication} = inject();
let login = import('authtication.js');

Feature('Validate demo product authentication test');

Scenario('Demo product authentication',{retries:1}, () => {
	demoAuthentication.userLogin(arr_test_data["user_authentication"]);
}).injectDependencies( { testData : jsonReader.getTestFileData(__filename) } ).tag("@smoke");

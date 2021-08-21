
const { I, abstractTest, angularHeader } = inject();

Feature('Sample Test for Angular Application');

Scenario('sample test', (Data) => {
	angularHeader.visitAnguar();
  	angularHeader.validateAngularHeader(Data['validateAngularApplication']['angular_header'].split(","));  	
  	angularHeader.fillSearchTextbox(Data['validateAngularApplication']['search_text']);
  	angularHeader.clickOnAngularHeaderMenu("Features");  	
}).injectDependencies({ Data : abstractTest.getTestDataFile(__filename) });

const { I } = inject();

module.exports = {
	
	  fields:{
    	header_menu:"//ul[@role='navigation']//a/span[normalize-space()='header_menu']",
      search_testbox:"input[type='search']"
  	},

    visitAnguar() {
      I.amOnPage('https://angular.io/'); 
    },

  	validateAngularHeader(arrstrHeaders) {
  		for(var i=0;i<arrstrHeaders.length;i++) {
  			I.seeElement(this.fields.header_menu.replace("header_menu",arrstrHeaders[i]));	
  		}
  	},

  	clickOnAngularHeaderMenu(menu_text) {
  		I.click(this.fields.header_menu.replace("header_menu",menu_text));
  	},

    fillSearchTextbox(search_text) {
      I.fillField(this.fields.search_testbox,search_text);
    }
}

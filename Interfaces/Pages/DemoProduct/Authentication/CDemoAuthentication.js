const {I} = inject();

module.exports = {

	fields: {
    		email: '#user_basic_email',
    		password: '#user_basic_password'
    },

	// userLogin(arr_user_details) {
	// 	this.fillUsernameTextbox(arr_user_details["username"]);
	// 	this.fillPasswordTextbox(demoAuthentication["password"]);
	// 	this.clickOnGetStartedButton();
	// },

	// fillUsernameTextbox(username) {
	// 	I.fillField(this.fields.username_textbox,username);
	// },

	// fillPasswordTextbox(password) {
	// 	I.fillField(this.fields.password_textbox,password);
	// },

	clickOnGetStartedButton() {
		I.click(this.fields.get_started_button);
	}
}
const {I} = inject();

module.exports = {

	fields: {
		username_textbox:"",
		password_textbox:"",
		get_started_button:""
	},

	userLogin(arr_user_details) {
		this.fillUsernameTextbox(arr_user_details["username"]);
		this.fillPasswordTextbox(demoAuthentication["password"]);
		this.clickOnGetStartedButton();
	},

	fillUsernameTextbox(username) {
		I.fillField(username_textbox,username);
	},

	fillPasswordTextbox(password) {
		I.fillField(password_textbox,password);
	},

	clickOnGetStartedButton() {
		I.click(get_started_button);
	},
}
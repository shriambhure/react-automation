const {I} = inject();

module.exports = {
	
	async isElementPresent(element_locator, wait = 5) {
		try {
			I.wait(wait);
			let intElementCount = await I.grabNumberOfVisibleElements(element_locator);
			if(intElementCount > 0 ) {
				I.say(element_locator + " " + intElementCount + "Element Found!");
				return true;
			} else {
				I.say(element_locator + " " + intElementCount + "Element Not Found!");
				return false;
			}
		} catch(e) {
			I.say(e);
		}
	}
}
const {I} = inject();

module.exports = {

    async isElementPresent(element_locator, wait = 5) {
        try {
            I.wait(wait);
            let intElementCount = await I.grabNumberOfVisibleElements(element_locator);
            if (intElementCount > 0) {
                I.say(element_locator + " " + intElementCount + ' Element found!');
                return true;
            } else {
                I.say(element_locator + " " + intElementCount +  ' element not found!');
                return false;
            }
        } catch (e) {
            I.say(e);
        }
    },

    async grabTextForm(element_locator) {
        try {
            let intElementCount = await I.grabTextFrom(element_locator);
            I.say(intElementCount);
            if (intElementCount > 0) {
                I.say(element_locator + " " + intElementCount + ' Element found!');
                return true;
            } else {
                I.say(element_locator + " " + intElementCount +  ' element not found!');
                return false;
            }
        } catch (e) {
            I.say(e);
        }
    }
}

